import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

interface SheetRow {
  name: string;
  email: string;
  navigatorDate: string;
  contentDate: string;
  careerDate: string;
  automationDate: string;
  appBuilderDate: string;
  diplomaDate: string;
  diplomaUuid: string;
  navigatorUuid: string;
  contentUuid: string;
  careerUuid: string;
  automationUuid: string;
  appBuilderUuid: string;
}

interface Credential {
  type: 'course' | 'diploma';
  name: string;
  issuedDate: string;
  uuid: string;
  certifierVerified?: boolean;
  certifierUrl?: string;
}

// Column indices (0-based)
const COL = {
  name: 0, email: 1,
  navigator: 2, content: 3, career: 4, automation: 5, appBuilder: 6,
  // 7 = All Complete? (skip)
  diplomaDate: 8, diplomaUuid: 9,
  // 10 = Notes (skip)
  navigatorUuid: 11, contentUuid: 12, careerUuid: 13, automationUuid: 14, appBuilderUuid: 15,
};

export async function POST(req: NextRequest) {
  try {
    const { type, value } = await req.json();
    
    const sheetData = await searchSheet(type, value);
    if (!sheetData) {
      return NextResponse.json({ success: false, error: 'No credentials found' });
    }

    const credentials = buildCredentials(sheetData);
    const diplomaPending = checkDiplomaPending(sheetData);

    return NextResponse.json({
      success: true,
      learner: { name: sheetData.name, email: sheetData.email },
      credentials,
      diplomaPending,
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

async function searchSheet(type: 'email' | 'uuid', value: string): Promise<SheetRow | null> {
  if (!process.env.GOOGLE_SHEETS_CREDENTIALS || !process.env.GOOGLE_SHEET_ID) {
    console.error('Missing Google Sheets configuration');
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Diploma Tracker!A2:P', // Fixed: correct sheet name
  });

  const rows = response.data.values;
  if (!rows?.length) return null;

  const searchValue = value.toLowerCase().trim();

  const row = rows.find(r => {
    if (type === 'email') {
      return r[COL.email]?.toLowerCase().trim() === searchValue;
    }
    // UUID search across all UUID columns
    const uuids = [
      r[COL.diplomaUuid], r[COL.navigatorUuid], r[COL.contentUuid],
      r[COL.careerUuid], r[COL.automationUuid], r[COL.appBuilderUuid]
    ].map(u => u?.toLowerCase().trim());
    return uuids.includes(searchValue);
  });

  if (!row) return null;

  return {
    name: row[COL.name] || '',
    email: row[COL.email] || '',
    navigatorDate: row[COL.navigator] || '',
    contentDate: row[COL.content] || '',
    careerDate: row[COL.career] || '',
    automationDate: row[COL.automation] || '',
    appBuilderDate: row[COL.appBuilder] || '',
    diplomaDate: row[COL.diplomaDate] || '',
    diplomaUuid: row[COL.diplomaUuid] || '',
    navigatorUuid: row[COL.navigatorUuid] || '',
    contentUuid: row[COL.contentUuid] || '',
    careerUuid: row[COL.careerUuid] || '',
    automationUuid: row[COL.automationUuid] || '',
    appBuilderUuid: row[COL.appBuilderUuid] || '',
  };
}

function buildCredentials(row: SheetRow): Credential[] {
  const creds: Credential[] = [];

  const courses = [
    { name: 'AI Navigator', date: row.navigatorDate, uuid: row.navigatorUuid },
    { name: 'AI Content Architect', date: row.contentDate, uuid: row.contentUuid },
    { name: 'AI Career Catalyst', date: row.careerDate, uuid: row.careerUuid },
    { name: 'AI Automation Engineer', date: row.automationDate, uuid: row.automationUuid },
    { name: 'AI App Builder', date: row.appBuilderDate, uuid: row.appBuilderUuid },
  ];

  courses.forEach(c => {
    if (c.date && c.uuid) {
      creds.push({
        type: 'course',
        name: c.name,
        issuedDate: c.date,
        uuid: c.uuid,
        certifierVerified: true, // In our sheet = verified
        certifierUrl: `https://credsverse.com/credentials/${c.uuid}`,
      });
    }
  });

  if (row.diplomaDate && row.diplomaUuid) {
    creds.push({
      type: 'diploma',
      name: 'Applied AI Professional Diploma',
      issuedDate: row.diplomaDate,
      uuid: row.diplomaUuid,
      certifierVerified: true,
      certifierUrl: `https://credsverse.com/credentials/${row.diplomaUuid}`,
    });
  }

  return creds;
}

function checkDiplomaPending(data: SheetRow): boolean {
  const allCoursesComplete = !!(
    data.navigatorDate && data.contentDate && data.careerDate &&
    data.automationDate && data.appBuilderDate
  );
  return allCoursesComplete && !data.diplomaDate;
}
