import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AppliedAIProfessional() {
  const prerequisites = [
    { title: "AI Navigator", url: "/programs/ai-navigator", desc: "Foundational AI capabilities & ethics" },
    { title: "AI Content Architect", url: "/programs/ai-content-architect", desc: "Content strategy & creation" },
    { title: "AI Career Catalyst", url: "/programs/ai-career-catalyst", desc: "Personal branding & job search" },
    { title: "AI Automation Engineer", url: "/programs/ai-automation-engineer", desc: "Workflow automation" },
    { title: "AI App Builder", url: "/programs/ai-app-builder", desc: "Building functional AI apps" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-lsai-black text-white py-20 relative overflow-hidden">
             {/* Background decorative elements */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-lsai-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                   <div className="inline-block px-3 py-1 bg-lsai-red/20 text-lsai-red border border-lsai-red/30 rounded-full text-xs font-bold tracking-wider uppercase mb-4">Flagship Program</div>
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">Applied AI Professional Diploma</h1>
                   <p className="text-xl text-gray-300 mb-8">
                     Our most comprehensive credential. Master all 5 key disciplines for a complete career transformation and industry recognition.
                   </p>
                   <div className="flex gap-4">
                     <a href="https://community.lsai.ai/s/store" target="_blank" rel="noopener noreferrer">
                       <Button size="lg">Enroll in Diploma</Button>
                     </a>
                   </div>
                </div>
                <div>
                   <img src="/images/diploma-certificate.png" alt="Diploma" className="rounded-lg bg-gray-800 border-gray-700 w-full h-auto object-cover shadow-2xl skew-y-1" />
                </div>
            </div>
        </div>

        {/* Prerequisites Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">The 5-Step Path to Mastery</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      To earn the Applied AI Professional Diploma, you must complete these 5 specialized courses. 
                      They can be taken individually or as part of the complete bundle.
                    </p>
                 </div>

                 <div className="grid md:grid-cols-1 gap-6">
                    {prerequisites.map((course, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-lsai-red text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6">
                              {idx + 1}
                            </div>
                            <div className="flex-1 text-center md:text-left">
                               <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                               <p className="text-gray-500">{course.desc}</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                               <Link href={course.url}>
                                 <Button variant="ghost" className="text-lsai-red hover:bg-red-50">View Course <ArrowRight className="ml-2 w-4 h-4" /></Button>
                               </Link>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-lsai-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                 <h2 className="text-2xl font-bold mb-8">Diploma Learning Outcomes</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                    {['Holistic understanding of the AI landscape', 'Ability to strategize and implement AI solutions', 'Portfolio of real-world AI projects', 'mastery of 20+ industry-standard AI tools'].map((item, i) => (
                        <div key={i} className="flex items-center p-4 bg-white border border-gray-100 rounded-md shadow-sm">
                            <Check className="w-5 h-5 text-lsai-red mr-3" />
                            <span className="font-medium text-gray-700">{item}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
