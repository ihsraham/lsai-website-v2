import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-lsai-gray-50 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Shaping the Next Generation of AI Professionals</h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              LSAI is dedicated to bridging the gap between theoretical AI knowledge and practical application in the modern workplace.
            </p>
        </div>

        {/* Links Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
             <Link href="/about-us/mission" className="group p-6 border rounded-lg hover:border-lsai-red transition-colors text-center">
                <Target className="w-8 h-8 mx-auto mb-2 text-lsai-red" />
                <h3 className="font-bold">Mission & Values</h3>
             </Link>
             <Link href="/about-us/education" className="group p-6 border rounded-lg hover:border-lsai-red transition-colors text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-lsai-red" />
                <h3 className="font-bold">Education</h3>
             </Link>
             <Link href="/about-us/recognition" className="group p-6 border rounded-lg hover:border-lsai-red transition-colors text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-lsai-red" />
                <h3 className="font-bold">Recognition</h3>
             </Link>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-lsai-gray-50">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold mb-12">Our Leadership</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                    <ImagePlaceholder id={8} height="h-64" alt="Team Member" promptReference="Leadership Headshot" className='rounded-md mb-4' />
                    <h3 className="font-bold text-lg">Team Member {i}</h3>
                    <p className="text-gray-500 text-sm">Executive Role</p>
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
