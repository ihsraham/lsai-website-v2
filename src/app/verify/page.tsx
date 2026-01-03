"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { VerifyForm } from '@/components/verify/VerifyForm';
import { VerificationSteps } from '@/components/verify/VerificationSteps';
import { CredentialCard, Credential } from '@/components/verify/CredentialCard';
import { VerificationModal } from '@/components/verify/VerificationModal';
import { Button } from '@/components/ui/Button';
import { AlertCircle, CheckCircle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Verify() {
  const [status, setStatus] = useState<'idle' | 'searching' | 'verifying' | 'complete' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<{
    learner: { name: string; email: string };
    credentials: Credential[];
    diplomaPending: boolean;
  } | null>(null);
  
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (type: 'email' | 'uuid', value: string) => {
    setStatus('searching');
    setErrorMsg('');
    setResult(null);

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, value }),
      });

      const data = await response.json();

      if (!data.success) {
        setStatus('error');
        setErrorMsg(data.error || 'No credentials found.');
        return;
      }

      setStatus('verifying');
      
      // Artificial delay for theatrical effect (matching PRD animation spec)
      setTimeout(() => {
         setResult(data);
         setStatus('complete');
      }, 2000);

    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('An unexpected error occurred. Please try again.');
    }
  };

  const openModal = (cred: Credential) => {
    setSelectedCredential(cred);
    setIsModalOpen(true);
  };

  const reset = () => {
    setStatus('idle');
    setResult(null);
    setErrorMsg('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-lsai-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-20 relative">
         
         <div className="w-full max-w-3xl mx-auto">
            
            {/* IDLE STATE: Form */}
            {status === 'idle' && (
              <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
                <VerifyForm onSearch={handleSearch} isLoading={false} />
              </motion.div>
            )}

            {/* LOADING STATE: Steps */}
            {(status === 'searching' || status === 'verifying') && (
              <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto text-center">
                 <VerificationSteps status={status} />
              </div>
            )}

            {/* ERROR STATE */}
            {status === 'error' && (
               <motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} className="bg-white p-8 rounded-xl shadow-lg border border-red-100 max-w-md mx-auto text-center">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <AlertCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Verification Failed</h2>
                  <p className="text-gray-600 mb-6">{errorMsg}</p>
                  <Button onClick={reset} variant="secondary" className="w-full">
                     Try Again
                  </Button>
               </motion.div>
            )}

            {/* SUCCESS STATE */}
            {status === 'complete' && result && (
               <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="space-y-6">
                  
                  {/* Header Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-lsai-red flex flex-col md:flex-row items-center justify-between gap-4">
                     <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Learner Profile</div>
                        <h1 className="text-2xl font-bold text-gray-900">{result.learner.name}</h1>
                        <p className="text-gray-600">{result.learner.email}</p>
                     </div>
                     <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verified {new Date().toLocaleDateString()}</span>
                     </div>
                  </div>

                  {/* Diploma Card (if exists) */}
                  {result.credentials.find(c => c.type === 'diploma') && (
                     <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-1 rounded-xl shadow-xl">
                        <div className="bg-white p-6 rounded-lg">
                           <div className="flex items-start justify-between mb-4">
                              <div>
                                 <span className="bg-lsai-red text-white text-xs font-bold px-2 py-1 rounded">DIPLOMA</span>
                                 <h2 className="text-xl font-bold mt-2">Applied AI Professional Diploma</h2>
                                 <p className="text-gray-500 text-sm">Mastery of AI Strategy, implementation, and content creation.</p>
                              </div>
                              <img src="/images/lsai-logo-square.png" alt="LSAI" className="h-10 opacity-20" /> 
                           </div>
                           
                           {/* Use Credential Card for logic, but maybe wrapper div tailored above */}
                           <CredentialCard 
                             credential={result.credentials.find(c => c.type === 'diploma')!} 
                             onView={openModal} 
                           />
                        </div>
                     </div>
                  )}

                  {/* Diploma Pending Notice */}
                  {result.diplomaPending && (
                     <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">🎉 Diploma Pending!</h3>
                        <p className="text-blue-800 mb-4">
                           Congratulations! You have completed all 5 required courses. Your diploma is being processed and will be issued within 12 hours.
                        </p>
                     </div>
                  )}

                  {/* Courses Grid */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                     <h3 className="text-lg font-bold mb-4 flex items-center">
                        <span className="bg-gray-100 p-1 rounded mr-2">📚</span> Course Certificates
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        {result.credentials.filter(c => c.type === 'course').map((cred) => (
                           <CredentialCard key={cred.uuid} credential={cred} onView={openModal} />
                        ))}
                        {result.credentials.filter(c => c.type === 'course').length === 0 && (
                           <p className="text-gray-500 italic col-span-2">No individual course certificates found.</p>
                        )}
                     </div>
                  </div>

                  <div className="text-center pt-8">
                     <Button onClick={reset} variant="ghost" className="text-gray-500 hover:text-gray-900">
                        <RotateCcw className="w-4 h-4 mr-2" /> Verify Another Credential
                     </Button>
                  </div>

               </motion.div>
            )}

         </div>
      </main>
      <Footer />
      
      <VerificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        credential={selectedCredential} 
      />
    </div>
  );
}
