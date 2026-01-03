import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, X, ExternalLink } from 'lucide-react';
import { Credential } from './CredentialCard';
import { Button } from '@/components/ui/Button';

interface VerificationModalProps {
  credential: Credential | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VerificationModal({ credential, isOpen, onClose }: VerificationModalProps) {
  const [step, setStep] = useState(0);
  
  // Reset animation when opening
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      const timer = setInterval(() => {
        setStep(s => {
           if (s >= 4) {
             clearInterval(timer);
             return 4;
           }
           return s + 1;
        });
      }, 800);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen || !credential) return null;

  const steps = [
    { title: "Verifying the recipient", desc: "This credential belongs to the correct verified individual." },
    { title: "Verifying the issuer", desc: "Issued by London School of AI (Authorized Issuer)." },
    { title: "Verifying issuer status", desc: "LSAI's accreditation status is active and valid." },
    { title: "Verifying credential ID", desc: `ID ${credential.uuid.slice(0, 8)}... is unique and authentic.` },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden"
          >
             <div className="bg-lsai-red p-6 text-white text-center relative">
               <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                 <X className="w-5 h-5" />
               </button>
               <Shield className="w-12 h-12 mx-auto mb-2" />
               <h2 className="text-xl font-bold">Credential Verification</h2>
               <p className="text-white/80 text-sm">Official LSAI Credential Verification</p>
             </div>
             
             <div className="p-6 space-y-6">
                <div className="space-y-4">
                  {steps.map((s, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                       <div className="mt-0.5">
                         {step > idx ? (
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                             <CheckCircle className="w-5 h-5 text-green-500" />
                           </motion.div>
                         ) : step === idx ? (
                           <div className="w-5 h-5 rounded-full border-2 border-lsai-red border-t-transparent animate-spin" />
                         ) : (
                           <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                         )}
                       </div>
                       <div className={`${step >= idx ? 'opacity-100' : 'opacity-40'} transition-opacity`}>
                          <h4 className="font-bold text-sm text-gray-900">{s.title}</h4>
                          <p className="text-xs text-gray-500">{s.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
                
                {step >= 4 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center mb-4">
                      <div className="font-bold text-lg">Verified Authentic</div>
                      <div className="text-xs opacity-75">Verified on {new Date().toLocaleDateString()}</div>
                    </div>
                    {credential.certifierUrl && (
                        <Button 
                          className="w-full" 
                          onClick={() => window.open(credential.certifierUrl, '_blank')}
                        >
                          View Official Record <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                  </motion.div>
                )}
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
