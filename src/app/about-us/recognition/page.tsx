import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Recognition() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-lsai-black text-white py-16">
           <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Recognition & Accreditation</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Setting the standard for excellence in AI education.
             </p>
           </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
             
             <div className="mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-lsai-red/10 rounded-full mb-6">
                   <svg className="w-10 h-10 text-lsai-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6">Accreditation Process Underway</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  The London School of AI is committed to maintaining the highest global standards for professional development.
                  <br /><br />
                  <strong>Our courses are currently in the process of receiving formal CPD (Continuing Professional Development) accreditation.</strong>
                </p>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-left">
                   <p className="text-blue-800 text-sm">
                      <strong>Note to Students:</strong> While formal accreditation is finalized, our curriculum continues to be rigorously vetted by industry leaders to ensure direct applicability to current job market demands. Certificates issued during this period will be fully recognized by the LSAI community and partner network.
                   </p>
                </div>
             </div>

             <hr className="border-gray-200 my-12" />

             <div>
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-gray-600">
                   Our graduates are employed at leading technology companies and innovative startups worldwide. LSAI credentials signify a verified mastery of practical AI tools and workflows, distinguishing our alumni in the competitive landscape of the AI revolution.
                </p>
             </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
