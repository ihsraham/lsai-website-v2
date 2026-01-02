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
               <span className="text-2xl font-bold tracking-tight text-white border-b-2 border-lsai-red pb-0.5">LSAI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering professionals with industry-recognized AI credentials. Bridging the gap between theory and practice.
            </p>
            <div className="flex space-x-2">
               {/* Social Icons Placeholder */}
               <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-xs text-gray-500">LI</div>
               <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-xs text-gray-500">X</div>
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
              {/* <li><Link href="/certification/cpd" className="hover:text-white transition-colors">CPD Information</Link></li> */}
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
