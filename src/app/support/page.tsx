import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold mb-8">Support Center</h1>
         <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-lsai-gray-50 p-4 rounded-lg cursor-pointer">
                <summary className="font-bold">How do I access my course?</summary>
                <div className="mt-2 text-gray-600">You can access all courses through our community portal at community.lsai.ai. Use the same email you registered with.</div>
            </details>
            <details className="bg-lsai-gray-50 p-4 rounded-lg cursor-pointer">
                <summary className="font-bold">How does certificate verification work?</summary>
                <div className="mt-2 text-gray-600">Each certificate comes with a unique ID. Employers can verify this ID on our Verification page to confirm authenticity.</div>
            </details>
             <details className="bg-lsai-gray-50 p-4 rounded-lg cursor-pointer">
                <summary className="font-bold">What is the refund policy?</summary>
                <div className="mt-2 text-gray-600">We offer a 14-day money-back guarantee if you are not satisfied with the course content, provided you have not completed more than 20% of the material.</div>
            </details>
         </div>
      </main>
      <Footer />
    </div>
  );
}
