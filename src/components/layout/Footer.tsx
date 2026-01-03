import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
               <img src="/images/lsai-logo-wide.png" alt="LSAI" className="h-10 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering professionals with industry-recognized AI credentials. Bridging the gap between theory and practice.
            </p>
            <div className="flex space-x-4">
               <a href="https://www.linkedin.com/company/london-school-of-ai-lsai" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-lsai-red transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="https://www.instagram.com/lsai.ai" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-lsai-red transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href="https://www.facebook.com/LSAI11" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-lsai-red transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Institute</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about-us/mission" className="hover:text-white transition-colors">Mission & Values</Link></li>
              <li><Link href="/about-us/recognition" className="hover:text-white transition-colors">Accreditation</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
             <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/programs/applied-ai-professional" className="hover:text-white transition-colors">Applied AI Diploma</Link></li>
              <li><Link href="/programs/ai-navigator" className="hover:text-white transition-colors">AI Navigator</Link></li>
              <li><Link href="/programs/ai-content-architect" className="hover:text-white transition-colors">AI Content Architect</Link></li>
              <li><Link href="/programs/ai-career-catalyst" className="hover:text-white transition-colors">AI Career Catalyst</Link></li>
              <li><Link href="/programs/ai-automation-engineer" className="hover:text-white transition-colors">AI Automation Engineer</Link></li>
              <li><Link href="/programs/ai-app-builder" className="hover:text-white transition-colors">AI App Builder</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Relevant</h3>
            <p className="text-gray-400 text-sm mb-4">Join our newsletter for the latest AI trends and course updates.</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:border-lsai-red"
              />
              <Button size="sm" className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
           <p>© {new Date().getFullYear()} London School of AI. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
