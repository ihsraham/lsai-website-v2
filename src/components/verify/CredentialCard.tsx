import { CheckCircle, ExternalLink, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface Credential {
  type: 'course' | 'diploma';
  name: string;
  issuedDate: string;
  uuid: string;
  certifierVerified?: boolean;
  certifierUrl?: string;
}

interface CredentialCardProps {
  credential: Credential;
  onView: (cred: Credential) => void;
}

export function CredentialCard({ credential, onView }: CredentialCardProps) {
  const isVerified = credential.certifierVerified;

  return (
    <div className={`p-4 rounded-lg border ${isVerified ? 'bg-white border-green-100' : 'bg-gray-50 border-gray-200'} flex items-center justify-between transition-colors hover:border-lsai-red/20`}>
      <div className="flex items-center space-x-3">
        {isVerified ? (
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
        )}
        
        <div>
           <div className="font-bold text-gray-900">{credential.name}</div>
           <div className="text-xs text-gray-500">Issued: {credential.issuedDate}</div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => onView(credential)}
        className="text-xs text-gray-600 hover:text-lsai-red"
      >
        View
      </Button>
    </div>
  );
}
