import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Education() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-lsai-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Educational Philosophy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe AI education should be empowering, practical, and accessible. We don't just teach you how AI works; we teach you how to make it work for you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
             <div className="space-y-16">
                <div>
                   <h2 className="text-3xl font-bold mb-4 text-lsai-red">Bridging the Gap</h2>
                   <p className="text-gray-700 text-lg leading-relaxed">
                     Traditional education often lags behind the rapid pace of technological innovation. LSAI was founded to close this gap. We strip away the unnecessary academic jargon and focus purely on high-impact, industry-relevant skills that you can apply immediately to your career or business.
                   </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-lsai-gray-50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Practical Application First</h3>
                      <p className="text-gray-600">
                         Theory is important, but execution adds value. Our curriculum is built around real-world projects, case studies, and hands-on tool usage. By the time you finish a course, you won't just know "about" a tool—you'll have a portfolio item to prove your mastery.
                      </p>
                   </div>
                   <div className="bg-lsai-gray-50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Human-Centric AI</h3>
                      <p className="text-gray-600">
                         We advocate for AI as a tool for augmentation, not replacement. Our philosophy centers on "Human-in-the-Loop" systems, ensuring that students learn to leverage AI to enhance their own creativity, productivity, and strategic thinking.
                      </p>
                   </div>
                   <div className="bg-lsai-gray-50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Continuous Evolution</h3>
                      <p className="text-gray-600">
                         The AI landscape changes weekly. So does our curriculum. We commit to a living syllabus that evolves in real-time with industry developments, ensuring our graduates are always ahead of the curve.
                      </p>
                   </div>
                   <div className="bg-lsai-gray-50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Ethical Responsibility</h3>
                      <p className="text-gray-600">
                         Power requires responsibility. We embed ethical considerations, bias detection, and data privacy into every module, training a new generation of responsible AI practitioners.
                      </p>
                   </div>
                </div>

                <div className="bg-lsai-red/5 border border-lsai-red/20 p-8 rounded-xl text-center">
                   <h3 className="text-2xl font-bold mb-4 text-lsai-black">Join the Movement</h3>
                   <p className="text-gray-700 mb-0">
                      LSAI is more than a school; it's a community of forward-thinkers. We invite you to join us in shaping a future where technology amplifies human potential.
                   </p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
