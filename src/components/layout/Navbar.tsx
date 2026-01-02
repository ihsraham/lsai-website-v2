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
           <span className="text-2xl font-bold tracking-tight text-lsai-black border-b-2 border-lsai-red pb-0.5">LSAI</span>
           <span className="hidden lg:inline-block text-sm font-medium text-gray-600 pl-2 border-l border-gray-300 ml-2">London School of AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-lsai-red transition-colors">
              <span>Institute</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {/* Mega Menu Placeholder - simplified for now */}
            <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
               <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2 flex flex-col space-y-1">
                 <Link href="/about-us" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">About Us</Link>
                 <Link href="/about-us/mission" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">Mission & Values</Link>
               </div>
            </div>
          </div>
          
          
          <div className="group relative">
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-lsai-red transition-colors">
              <span>Programs</span>
              <ChevronDown className="h-4 w-4" />
            </button>
             <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
               <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2 flex flex-col space-y-1">
                 <Link href="/programs/applied-ai-professional" className="px-4 py-2 text-sm text-lsai-red font-medium hover:bg-gray-50 rounded-md">Applied AI Diploma (Bundle)</Link>
                 <div className="h-px bg-gray-100 my-1"></div>
                 <Link href="/programs/ai-navigator" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">AI Navigator</Link>
                 <Link href="/programs/ai-content-architect" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">AI Content Architect</Link>
                 <Link href="/programs/ai-career-catalyst" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">AI Career Catalyst</Link>
                 <Link href="/programs/ai-automation-engineer" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">AI Automation Engineer</Link>
                 <Link href="/programs/ai-app-builder" className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-lsai-red rounded-md">AI App Builder</Link>
               </div>
            </div>
          </div>

          {/* Hidden for now as per user request */}
          {/* <Link href="/certification/certificates" className="text-sm font-medium text-gray-700 hover:text-lsai-red transition-colors">
            Certification
          </Link> */}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
           <Link href="/verify" className="text-sm font-medium text-gray-500 hover:text-lsai-black transition-colors">
             Verify
           </Link>
           <Button>Explore Programs</Button>
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
