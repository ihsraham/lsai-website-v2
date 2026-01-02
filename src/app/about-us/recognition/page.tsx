import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Recognition() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Recognition & Accreditation</h1>
        <p className="text-gray-600 mb-4">Our programs are industry-recognized...</p>
        {/* CPD section hidden for now as per request */}
      </main>
      <Footer />
    </div>
  );
}
