import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

interface VerifyFormProps {
  onSearch: (type: 'email' | 'uuid', value: string) => void;
  isLoading: boolean;
}

export function VerifyForm({ onSearch, isLoading }: VerifyFormProps) {
  const [type, setType] = useState<'email' | 'uuid'>('email');
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(type, value.trim());
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-xl w-full mx-auto">
       <h1 className="text-3xl font-bold mb-2 text-center">Verify Credentials</h1>
       <p className="text-gray-500 text-center mb-8">
         Verify the authenticity of LSAI certificates and diplomas.
       </p>

       <div className="flex justify-center mb-6">
         <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => { setType('email'); setValue(''); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${type === 'email' ? 'bg-white shadow text-lsai-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              By Email
            </button>
            <button
              onClick={() => { setType('uuid'); setValue(''); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${type === 'uuid' ? 'bg-white shadow text-lsai-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              By Credential ID
            </button>
         </div>
       </div>

       <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
               {type === 'email' ? 'Learner Email Address' : 'Credential ID (UUID)'}
            </label>
            <input 
               type={type === 'email' ? 'email' : 'text'}
               value={value}
               onChange={(e) => setValue(e.target.value)}
               placeholder={type === 'email' ? 'learner@example.com' : 'e.g. 593a8d...'}
               className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lsai-red focus:border-lsai-red focus:outline-none transition-all"
               required
            />
          </div>
          <Button className="w-full h-12 text-lg" disabled={isLoading}>
             {isLoading ? 'Searching...' : (
                <span className="flex items-center justify-center">
                   <Search className="w-5 h-5 mr-2" /> Verify Now
                </span>
             )}
          </Button>
       </form>

       <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            For support or bulk verification inquiries, contact <a href="/contact" className="text-lsai-red hover:underline">support@lsai.ai</a>
          </p>
       </div>
    </div>
  );
}
