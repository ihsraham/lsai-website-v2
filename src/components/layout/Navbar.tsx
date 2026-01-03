"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
            <img src="/images/lsai-logo-wide.png" alt="LSAI" className="h-10 md:h-12 w-auto" />
        </Link>
        
        {/* ... (keep nav) ... */}
        
        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
           <Link href="/verify" className="text-sm font-medium text-gray-500 hover:text-lsai-black transition-colors">
             Verify
           </Link>
           <Link href="/programs">
             <Button>Explore Programs</Button>
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-lsai-black" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4">
           <Link href="/about-us" className="text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Institute</Link>
           <Link href="/programs" className="text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
           <Link href="/certification" className="text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Certification</Link>
           <Link href="/verify" className="text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Verify Certificate</Link>
           <Button className="w-full">Explore Programs</Button>
        </div>
      )}
    </header>
  );
}
