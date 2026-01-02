import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-16 bg-white">
        <div className="container mx-auto px-4">
             <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>
             <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
               Specialized tracks designing to take you from foundational understanding to mastery in specific AI domains.
             </p>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: 'AI Navigator', id: 2, slug: 'ai-navigator', image: 'ai-navigator-cert.png' },
                 { title: 'AI Content Architect', id: 3, slug: 'ai-content-architect', image: 'ai-content-architect-cert.png' },
                 { title: 'AI Career Catalyst', id: 4, slug: 'ai-career-catalyst', image: 'ai-career-catalyst-cert.png' },
                 { title: 'AI Automation Engineer', id: 5, slug: 'ai-automation-engineer', image: 'ai-automation-engineer-cert.png' },
                 { title: 'AI App Builder', id: 6, slug: 'ai-app-builder', image: 'ai-app-builder-cert.png' },
               ].map((course) => (
                 <Card key={course.slug} className="overflow-hidden flex flex-col h-full">
                     <img src={`/images/${course.image}`} alt={course.title} className="w-full h-48 object-cover" />
                     <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <div className="mt-auto">
                           <Link href={`/programs/${course.slug}`} className="text-lsai-red font-medium hover:underline text-sm flex items-center">
                             View Program Details <TrendingUp className="w-3 h-3 ml-1" />
                           </Link>
                        </div>
                     </div>
                 </Card>
               ))}
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
