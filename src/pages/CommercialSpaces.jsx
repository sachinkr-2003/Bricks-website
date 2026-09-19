import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building2, CheckCircle, Briefcase, Settings, TrendingUp, Users, ArrowRight, ShieldCheck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CommercialSpaces = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    { icon: <TrendingUp className="h-6 w-6" />, title: "Time-Bound Delivery", desc: "For commerce, time is money. We strictly adhere to our project timelines." },
    { icon: <Briefcase className="h-6 w-6" />, title: "Turnkey Execution", desc: "From civil structure to final interior fit-outs, we manage everything." },
    { icon: <Settings className="h-6 w-6" />, title: "Heavy-Duty Build", desc: "Commercial-grade materials built to withstand massive daily footfalls." },
    { icon: <Users className="h-6 w-6" />, title: "Subcontractor Managed", desc: "We coordinate with HVAC, Fire-Safety, and Elevator vendors seamlessly." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-blue-200">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/brick_residential.png" alt="Commercial Strategy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="bg-blue-600/20 text-blue-400 p-3 inline-flex items-center gap-2 rounded-none mb-6 border border-blue-500/30">
              <Building2 className="h-5 w-5" />
              <span className="font-bold tracking-widest text-sm uppercase">Commercial & Industrial</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight">
              Spaces Designed For <br/> <span className="text-blue-500">Business Legacy.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Robust, scalable, and meticulously executed commercial projects. Eliminate budget overruns with our 100% digital app-based tracking system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Precision in Commercial Contracting</h2>
            <p className="text-slate-600 text-lg">Deadlines and budget constraints dominate commercial projects. Our tech-driven approach guarantees exceptional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-neutral-200 hover:border-blue-500 hover:shadow-xl transition-all flex gap-6"
              >
                <div className="bg-blue-50 w-16 h-16 flex-shrink-0 flex items-center justify-center border border-blue-100 text-blue-600">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Ledger Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Transparent App Ledger For Investors & Partners</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Commercial projects often involve multiple stakeholders. Our proprietary app acts as a digital ledger, showcasing daily labour counts, cement bags consumed, and photo updates, ensuring all partners remain in the loop without needing to visit the site daily.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <ShieldCheck className="h-8 w-8 text-blue-600 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg">Strict Code Compliance</h4>
                     <p className="text-slate-600 text-sm">We strictly adhere to local fire vectors, emergency exit planning, and building stability codes.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <Map className="h-8 w-8 text-blue-600 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg">Complex Layout Execution</h4>
                     <p className="text-slate-600 text-sm">Translating complex architectural blueprints flawlessly into concrete reality.</p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/images/brick_commercial.png" alt="Office Building" className="w-full h-80 object-cover border border-slate-200" />
              <img src="/images/brick_construction.png" alt="Retail Space" className="w-full h-80 object-cover border border-slate-200 mt-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 border-t-4 border-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Let's build your next commercial landmark.</h2>
          <div className="flex justify-center mt-8">
             <Link to="/#contact" className="px-8 py-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg">
                Book a Commercial Consultation
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialSpaces;
