import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4 flex justify-center pointer-events-none">
      {/* Floating Pill Navbar Wrapper */}
      <nav 
        className={`pointer-events-auto transition-all duration-300 ease-in-out w-full max-w-5xl rounded-full ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 py-2' 
            : 'bg-white/80 backdrop-blur-sm shadow-md py-3'
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <div className="h-10 w-10 bg-white rounded-lg shadow-sm border border-gray-100 transform transition hover:scale-105 overflow-hidden flex items-center justify-center">
                <img src="/images/logo.png" alt="Brick by Brick Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl text-gray-900 tracking-tight leading-none block">Brick by Brick</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold font-sans">Premium Build</span>
              </div>
            </div>

            {/* Desktop Links - Centered */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="px-4 py-2 rounded-full text-sm font-semibold text-orange-600 bg-orange-50 transition-colors">
                Home
              </a>
              <a href="/services" className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                Services
              </a>
              <a href="/projects" className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                Projects
              </a>
              <a href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                About Us
              </a>
            </div>

            {/* Desktop CTA & Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/contact" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-700 transition-transform transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden absolute w-full left-0 top-[110%] transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="px-4 pt-4 pb-3 space-y-1">
              <a href="/" className="bg-orange-50 text-orange-600 block px-4 py-3 rounded-2xl text-base font-semibold">Home</a>
              <a href="/services" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-4 py-3 rounded-2xl text-base font-medium">Services</a>
              <a href="/projects" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-4 py-3 rounded-2xl text-base font-medium">Projects</a>
              <a href="/about" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-4 py-3 rounded-2xl text-base font-medium">About Us</a>
            </div>
            <div className="p-4 bg-gray-50 flex flex-col gap-3">
              <a href="/contact" className="w-full text-center bg-orange-600 text-white px-4 py-3.5 rounded-2xl font-bold shadow-md active:scale-95 transition-transform">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
