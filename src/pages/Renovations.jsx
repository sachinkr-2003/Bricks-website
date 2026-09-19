import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PaintBucket, CheckCircle, PenTool, RefreshCw, Layers, Wrench, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Renovations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    { icon: <Layers className="h-6 w-6" />, title: "Civil Restructuring", desc: "Safe internal wall teardowns and room expansion without affecting core pillars." },
    { icon: <RefreshCw className="h-6 w-6" />, title: "Full Overhauls", desc: "Replacing century-old plumbing, wiring, and waterproofing entirely." },
    { icon: <PenTool className="h-6 w-6" />, title: "Surface Finishing", desc: "Premium vitrified tiles, marble layers, and false ceiling installations." },
    { icon: <Wrench className="h-6 w-6" />, title: "System Upgrades", desc: "Integrating modern HVAC, smart wiring, and security systems." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-emerald-200">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/brick_construction.png" alt="Renovation Work" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 directly via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-emerald-600/20 text-emerald-400 p-3 inline-flex items-center gap-2 rounded-none mb-6 border border-emerald-500/30">
              <PaintBucket className="h-5 w-5" />
              <span className="font-bold tracking-widest text-sm uppercase">Revitalize & Upgrade</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
              Breathe New Life <br/> <span className="text-emerald-500">Into Old Spaces.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Professional civil renovations handled neatly and transparently. We tear down the old and build the new without disrupting your peace of mind.
            </p>
            <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/50">
              Get a Renovation Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Structured Remodeling</h2>
            <p className="text-slate-600 text-lg">Renovations require delicate handling, especially when retrofitting modern amenities. We minimize disruption while maximizing property value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-50 p-6 border-t-4 border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section Split */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full blur-[100px] opacity-50 -mr-40 -mt-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
              <img src="/images/brick_hero.png" alt="Renovated finish" className="w-full h-[400px] object-cover border-8 border-emerald-800 shadow-2xl" />
              <img src="/images/brick_hero.png" alt="Before" className="absolute -bottom-10 -right-10 w-48 lg:w-64 border-4 border-slate-900 shadow-xl hidden md:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Zero Hidden Surprises.</h2>
              <p className="text-emerald-100 leading-relaxed mb-8 text-lg">
                Traditional renovations are famous for budget extensions. With our transparent app ledger, you approve every cost before it happens. No ghost labor, no marked-up materials.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Clear Waste-Management & Environment Disposal",
                  "Dedicated Site Supervisor Present Daily",
                  "Digital App Approval for Design Variations",
                  "Protective Covering for Unaffected Areas"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-emerald-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center text-emerald-400 font-bold hover:text-white transition-colors">
                 Start Planning your Renovation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Renovations;
