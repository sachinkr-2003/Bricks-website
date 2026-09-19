import React from 'react';
import { HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t-[10px] border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-white rounded flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="Brick by Brick Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Brick by Brick</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Transparent Homes, Stronger Tomorrows. We are revolutionizing the contract construction market with 100% digital clarity.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/homes" className="hover:text-orange-500 transition-colors">Residential Construction</Link></li>
              <li><Link to="/services/commercial" className="hover:text-orange-500 transition-colors">Commercial Complexes</Link></li>
              <li><Link to="/services/renovations" className="hover:text-orange-500 transition-colors">Renovation Works</Link></li>
              <li><Link to="#features" className="hover:text-orange-500 transition-colors">App Portal Setup</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">App Portal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Customer Login</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Track Project</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Warranty Claim</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Ledgers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">Contact Details</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">📍</span>
                <span>Serving across major cities in India with unmatched reliability.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">📞</span>
                <span>+91 8400984678</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">🌐</span>
                <span>www.brickbybrick.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Brick by Brick Building Contractors. All rights reserved. 
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
