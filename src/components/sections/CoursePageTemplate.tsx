import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Check } from 'lucide-react';

interface CoursePageProps {
  title: string;
  description: string;
  placeholderId?: number;
  imageSrc?: string;
}

// Temporary component for individual course pages
export function CoursePageTemplate({ title, description, placeholderId, imageSrc }: CoursePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-lsai-black text-white py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                   <p className="text-xl text-gray-300 mb-8">{description}</p>
                   <Button size="lg">Enroll Now</Button>
                </div>
                <div>
                   {imageSrc ? (
                     <img src={imageSrc} alt={title} className="rounded-lg bg-gray-800 border-gray-700 w-full h-auto object-cover" />
                   ) : (
                     <ImagePlaceholder id={placeholderId || 0} height="h-64" alt={title} className="rounded-lg bg-gray-800 border-gray-700" />
                   )}
                </div>
            </div>
        </div>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                 <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                    {['Understand core AI concepts', 'Apply tools in real-world scenarios', 'Build a professional portfolio', 'Navigate ethical considerations'].map((item, i) => (
                        <div key={i} className="flex items-center p-4 bg-lsai-gray-50 rounded-md">
                            <Check className="w-5 h-5 text-lsai-red mr-3" />
                            <span>{item}</span>
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
