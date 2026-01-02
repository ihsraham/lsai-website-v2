import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { CheckCircle, Globe, Award, TrendingUp, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white to-lsai-gray-50 border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-lsai-black text-balance">
                  Master the <span className="text-lsai-red">AI Revolution</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                  Industry-recognized credentials. Real-world skills. Career transformation. The future belongs to those who understand AI.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg">Explore Programs</Button>
                  <Button size="lg" variant="secondary">Verify Certificate</Button>
                </div>
                
                <div className="pt-8 flex items-center space-x-6 text-sm text-gray-500 font-medium">
                  {/* <div className="flex items-center"><Award className="w-4 h-4 mr-1 text-lsai-red" /> CPD Certified</div> */}
                  <div className="flex items-center"><Globe className="w-4 h-4 mr-1 text-lsai-red" /> London-Based</div>
                </div>
              </div>
              <div className="relative w-full h-auto">
                <div className="md:hidden">
                    <img src="/images/hero-mobile.png" alt="Hero Mobile" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
                <div className="hidden md:block">
                     <img src="/images/hero-desktop.png" alt="Hero Desktop" className="w-full h-auto rounded-2xl shadow-2xl skew-y-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-white py-8 border-b border-gray-100">
           <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
              <span className="text-gray-600 font-medium">Join 2,500+ professionals advancing their AI careers</span>
              <div className="flex space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Trust Badges - Could be placeholders or text for now */}
                 <span className="font-bold text-gray-400">Google Project IDX</span>
                 <span className="font-bold text-gray-400">Microsoft</span>
                 <span className="font-bold text-gray-400">IBM</span>
              </div>
           </div>
        </section>

        {/* Mission/Vision Grid */}
        <section className="py-20 bg-lsai-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Users className="w-10 h-10 text-lsai-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                <p className="text-gray-600">Join a global network of AI practitioners and leaders shaping the future.</p>
              </Card>
              <Card className="p-8">
                 <CheckCircle className="w-10 h-10 text-lsai-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Industry Validated</h3>
                <p className="text-gray-600">Curriculum designed with input from top tech firms to ensure market relevance.</p>
              </Card>
              <Card className="p-8">
                 <TrendingUp className="w-10 h-10 text-lsai-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Career Focused</h3>
                <p className="text-gray-600">Practical skills that translate directly to job performance and promotion.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Credential */}
        <section className="py-20 bg-lsai-black text-white overflow-hidden">
           <div className="container mx-auto px-4 md:px-6">
             <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1">
                 <img 
                    src="/images/diploma-certificate.png" 
                    alt="Applied AI Professional Diploma Certificate"
                    className="w-full h-auto rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                 />
               </div>
               <div className="order-1 md:order-2 space-y-6">
                 <div className="inline-block px-3 py-1 bg-lsai-red rounded-full text-xs font-bold tracking-wider uppercase">Flagship Program</div>
                 <h2 className="text-3xl md:text-5xl font-bold">Applied AI Professional Diploma</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   The definitive credential for the modern professional. Master 5 key disciplines in one comprehensive timeline. 
                 </p>
                 <ul className="space-y-3">
                   {['Comprehensive Curriculum', 'Capstone Project', 'Career Coaching'].map((item) => (
                     <li key={item} className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-lsai-red" /> {item}</li>
                   ))}
                 </ul>
                 <Button className="mt-4" size="lg">View Diploma Details</Button>
               </div>
             </div>
           </div>
        </section>

        {/* Course Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Tracks</h2>
              <p className="text-gray-600 text-lg">Targeted courses to build specific competencies in the AI landscape.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* 1. AI Navigator */}
               <Card className="overflow-hidden flex flex-col h-full">
                 <img src="/images/ai-navigator-cert.png" alt="AI Navigator" className="w-full h-48 object-cover" />
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold mb-2">AI Navigator</h3>
                   <p className="text-gray-600 text-sm mb-4 flex-1">Foundation course. Understand capabilities, limitations, and prompt engineering.</p>
                   <Link href="/programs/ai-navigator" className="text-lsai-red font-medium hover:underline text-sm flex items-center">Learn More <TrendingUp className="w-3 h-3 ml-1" /></Link>
                 </div>
               </Card>

               {/* 2. AI Content Architect */}
               <Card className="overflow-hidden flex flex-col h-full">
                 <img src="/images/ai-content-architect-cert.png" alt="AI Content Architect" className="w-full h-48 object-cover" />
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold mb-2">AI Content Architect</h3>
                   <p className="text-gray-600 text-sm mb-4 flex-1">Master content creation, strategy, and brand voice with AI tools.</p>
                   <Link href="/programs" className="text-lsai-red font-medium hover:underline text-sm flex items-center">Learn More <TrendingUp className="w-3 h-3 ml-1" /></Link>
                 </div>
               </Card>

               {/* 3. AI Career Catalyst */}
               <Card className="overflow-hidden flex flex-col h-full">
                 <img src="/images/ai-career-catalyst-cert.png" alt="AI Career Catalyst" className="w-full h-48 object-cover" />
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold mb-2">AI Career Catalyst</h3>
                   <p className="text-gray-600 text-sm mb-4 flex-1">Personal branding and job search optimization using AI.</p>
                   <Link href="/programs" className="text-lsai-red font-medium hover:underline text-sm flex items-center">Learn More <TrendingUp className="w-3 h-3 ml-1" /></Link>
                 </div>
               </Card>

               {/* 4. AI Automation Engineer */}
               <Card className="overflow-hidden flex flex-col h-full">
                 <img src="/images/ai-automation-engineer-cert.png" alt="AI Automation Engineer" className="w-full h-48 object-cover" />
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold mb-2">AI Automation Engineer</h3>
                   <p className="text-gray-600 text-sm mb-4 flex-1">Workflow automation and process optimization with no-code tools.</p>
                   <Link href="/programs" className="text-lsai-red font-medium hover:underline text-sm flex items-center">Learn More <TrendingUp className="w-3 h-3 ml-1" /></Link>
                 </div>
               </Card>

               {/* 5. AI App Builder */}
               <Card className="overflow-hidden flex flex-col h-full">
                 <img src="/images/ai-app-builder-cert.png" alt="AI App Builder" className="w-full h-48 object-cover" />
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold mb-2">AI App Builder</h3>
                   <p className="text-gray-600 text-sm mb-4 flex-1">Build functional AI applications and MVPs without deep coding knowledge.</p>
                   <Link href="/programs" className="text-lsai-red font-medium hover:underline text-sm flex items-center">Learn More <TrendingUp className="w-3 h-3 ml-1" /></Link>
                 </div>
               </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-lsai-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
             <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
               Join thousands of professionals mastering the skills of the future. Start your journey today.
             </p>
             <div className="flex justify-center gap-4">
               <Button size="lg">View All Programs</Button>
               <Button size="lg" variant="secondary">Contact Support</Button>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
