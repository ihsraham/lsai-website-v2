import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

interface VerificationStepsProps {
  status: 'idle' | 'searching' | 'verifying' | 'complete' | 'error';
}

export function VerificationSteps({ status }: VerificationStepsProps) {
  const steps = [
    { id: 'searching', label: 'Searching LSAI database...' },
    { id: 'identifying', label: 'Identifying credentials...' },
    { id: 'verifying', label: 'Verifying with Certifier...' },
    { id: 'generating', label: 'Generating report...' },
  ];

  // Simple mapping of progress based on status
  // In a real app, we might pass more granular progress
  const getCurrentStepIndex = () => {
     if (status === 'error') return 0;
     if (status === 'idle') return -1;
     if (status === 'searching') return 0;
     if (status === 'verifying') return 2;
     if (status === 'complete') return 4;
     return 0;
  };

  const currentIdx = getCurrentStepIndex();

  if (status === 'idle') return null;

  return (
    <div className="space-y-4 py-8 max-w-sm mx-auto">
       <h3 className="text-center font-bold text-lg mb-6">
         {status === 'complete' ? 'Verification Complete!' : 'Verifying Credentials...'}
       </h3>
       
       <div className="space-y-3">
         {steps.map((step, idx) => {
            const isCompleted = currentIdx > idx;
            const isCurrent = currentIdx === idx;
            
            return (
              <div key={idx} className="flex items-center space-x-3">
                 <div className="w-6 h-6 flex items-center justify-center">
                    {isCompleted ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check className="w-5 h-5 text-green-500" />
                      </motion.div>
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-lsai-red animate-spin" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                    )}
                 </div>
                 <span className={`text-sm ${isCurrent ? 'font-bold text-gray-900' : isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                   {step.label}
                 </span>
              </div>
            );
         })}
       </div>
    </div>
  );
}
