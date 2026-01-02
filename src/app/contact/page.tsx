import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
               <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
               <p className="text-gray-600 mb-6">Have questions about our programs or certification? Our team is here to help.</p>
               <div className="space-y-4">
                  <p><strong>Email:</strong> support@lsai.ai</p>
                  <p><strong>Address:</strong> London, UK</p>
               </div>
            </div>
            <div className="bg-lsai-gray-50 p-8 rounded-lg">
               <form className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input className="w-full p-2 border rounded-md" type="text" placeholder="Your Name" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input className="w-full p-2 border rounded-md" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea className="w-full p-2 border rounded-md h-32" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
               </form>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
