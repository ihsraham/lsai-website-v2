import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Mission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mission & Values</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            To democratize AI education and empower professionals with the tools to succeed in an AI-driven world.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-lsai-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>We believe that AI literacy is the new digital literacy. Our mission is to provide accessible, high-quality, and industry-relevant AI education to professionals across all sectors.</p>
            </div>
            <div className="p-6 bg-lsai-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Practicality:</strong> We focus on real-world application over abstract theory.</li>
                    <li><strong>Integrity:</strong> We commit to ethical AI practices and teaching.</li>
                    <li><strong>Innovation:</strong> We constantly update our curriculum to match the pace of AI.</li>
                </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
