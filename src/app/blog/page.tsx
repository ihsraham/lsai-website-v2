import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold mb-12 text-center">Insights & Updates</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                    <ImagePlaceholder id={9} height="h-48" alt={`Blog Post ${i}`} />
                    <div className="p-6">
                        <div className="text-xs text-lsai-red font-bold mb-2 uppercase tracking-wide">AI Trends</div>
                        <h3 className="text-xl font-bold mb-2">The Future of AI in the Workplace {i}</h3>
                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                        <span className="text-sm font-medium underline">Read Article</span>
                    </div>
                </Card>
            ))}
         </div>
      </main>
      <Footer />
    </div>
  );
}
