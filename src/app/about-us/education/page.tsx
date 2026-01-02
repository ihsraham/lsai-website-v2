import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Education() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Educational Philosophy</h1>
        <p className="text-gray-600 mb-4">We prioritize practical, hands-on learning...</p>
      </main>
      <Footer />
    </div>
  );
}
