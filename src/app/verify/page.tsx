"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Verify() {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual Certifier API integration
    // For now, mock responses
    if (certId === 'LSAI-TEST-123') {
        setResult('valid');
    } else {
        setResult('invalid');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-lsai-gray-50 flex items-center justify-center py-20 px-4">
         <div className="bg-white max-w-xl w-full p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-2 text-center">Verify Certificate</h1>
            <p className="text-gray-500 text-center mb-8">Enter the unique credential ID to verify authenticity.</p>

            <form onSubmit={handleVerify} className="space-y-4 mb-8">
                <input 
                    type="text" 
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="Credential ID (e.g. LSAI-123456)" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lsai-red focus:outline-none"
                />
                <Button className="w-full" size="lg">Verify Authenticity</Button>
            </form>

            {result === 'valid' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
                    <CheckCircle className="text-green-600 w-6 h-6 mr-3 mt-0.5" />
                    <div>
                        <h3 className="font-bold text-green-800">Certificate Verified</h3>
                        <p className="text-green-700 text-sm">This credential is valid and was issued by LSAI.</p>
                        <div className="mt-2 text-sm text-green-800">
                             <p><strong>Recipient:</strong> John Doe</p>
                             <p><strong>Course:</strong> Applied AI Professional</p>
                             <p><strong>Issued:</strong> Dec 2025</p>
                        </div>
                    </div>
                </div>
            )}

            {result === 'invalid' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
                    <XCircle className="text-red-600 w-6 h-6 mr-3 mt-0.5" />
                    <div>
                        <h3 className="font-bold text-red-800">Certificate Not Found</h3>
                        <p className="text-red-700 text-sm">We could not find a credential with that ID. Please check and try again.</p>
                    </div>
                </div>
            )}
            
            <div className="mt-6 text-center text-xs text-gray-400">
               Test ID: LSAI-TEST-123
            </div>
         </div>
      </main>
      <Footer />
    </div>
  );
}
