import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Briefcase, Home, Building2, PaintBucket, ArrowRight, 
  ShieldCheck, Cog, FileSearch, HardHat, Key, Ruler,
  CheckCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    {
      id: 1,
      title: "Homes & Villas",
      desc: "Turnkey residential contracting focusing on family-first architecture, classic finishings, and a completely stress-free building experience.",
      icon: <Home className="h-6 w-6" />,
      colorClass: "orange",
      img: "/images/brick_residential.png",
      link: "/services/homes"
    },
    {
      id: 2,
      title: "Commercial Spaces",
      desc: "Robust, scalable corporate spaces and shops built with heavy-duty premium materials designed to optimize layouts and handle massive footfalls.",
      icon: <Building2 className="h-6 w-6" />,
      colorClass: "blue",
      img: "/images/brick_commercial.png",
      link: "/services/commercial"
    },
    {
      id: 3,
      title: "Renovations & Upgrades",
      desc: "Breathe new life into old structures. We handle everything from safe civil tear-downs to complete plumbing and electrical overhauls.",
      icon: <PaintBucket className="h-6 w-6" />,
      colorClass: "emerald",
      img: "https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1200",
      link: "/services/renovations"
    }
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
      title: "11-Year Structural Warranty",
      desc: "We stand behind our work. Our core structures are guaranteed safe and stable for over a decade."
    },
    {
      icon: <Cog className="h-8 w-8 text-orange-600" />,
      title: "End-to-End Execution",
      desc: "From the first blueprint to the final coat of paint, our team manages all contractors and materials."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-600" />,
      title: "100% App Transparency",
      desc: "Verify every cement bag purchased and every labor cost incurred through our dedicated client app."
    }
  ];

  const workingProcess = [
    {
      icon: <FileSearch className="h-8 w-8 text-orange-600" />,
      title: "1. Planning & Design",
      desc: "We discuss requirements, finalize budgets, and our architects draft municipal-compliant structural blueprints."
    },
    {
      icon: <Ruler className="h-8 w-8 text-orange-600" />,
      title: "2. Procurement",
      desc: "Sourcing Grade-A materials like Tata steel and Ultratech cement directly from verified wholesale suppliers."
    },
    {
      icon: <HardHat className="h-8 w-8 text-orange-600" />,
      title: "3. Civil Execution",
      desc: "On-site heavy lifting managed by senior engineers. You get daily photos and expense ledgers on the app."
    },
    {
      icon: <Key className="h-8 w-8 text-orange-600" />,
      title: "4. Handover",
      desc: "A rigorous 40-point quality check ensures there are absolutely no defects before handing over the keys."
    }
  ];

  const faqs = [
    { q: "Is the design cost included in the total budget?", a: "Yes, if you choose our Turnkey execution package, standard structural and architectural design costs are fully bundled in. No hidden design fees." },
    { q: "How do I track what materials are being used?", a: "Every time raw material arrives at the site, the invoice and a photo of the material are uploaded to your personalized Client App dashboard on the very same day." },
    { q: "Do you handle government approvals?", a: "Absolutely. Our liaison team will prepare all required documents and coordinate with local municipal bodies to secure building sanctions before work begins." },
    { q: "What exactly is covered under the 11-Year warranty?", a: "The warranty covers core structural integrity like cracks in pillars or beams, concealed plumbing leakages, and concealed electrical wiring faults." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Construction Plans" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 mb-6 border border-orange-500/30">
               <Briefcase className="h-5 w-5" />
               <span className="font-bold tracking-widest text-sm uppercase">Our Services</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-6">Expertise You Can Trust</h1>
             <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
               We deliver world-class contracting services with unwavering commitment to quality, timelines, and absolute financial transparency.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {servicesList.map((srv, idx) => (
              <motion.div 
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group border border-neutral-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                   <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className={`absolute top-4 left-4 z-20 bg-white p-3 shadow-lg text-${srv.colorClass}-600 group-hover:bg-${srv.colorClass}-600 group-hover:text-white transition-colors`}>
                     {srv.icon}
                   </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {srv.desc}
                  </p>
                </div>
                
                <Link to={srv.link} className={`px-8 py-5 border-t border-neutral-100 flex justify-between items-center bg-slate-50 group-hover:bg-${srv.colorClass}-50 transition-colors`}>
                  <span className={`font-bold text-slate-700 group-hover:text-${srv.colorClass}-700`}>Explore Service</span>
                  <ArrowRight className={`h-5 w-5 text-slate-400 group-hover:text-${srv.colorClass}-600 group-hover:translate-x-1 transition-all`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Why Choose Brick By Brick?</h2>
              <p className="text-slate-600 text-lg">We bring transparency, quality, and strict timelines to an otherwise chaotic industry.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueProps.map((prop, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-8 border border-slate-200 text-center hover:border-orange-300 transition-colors"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-orange-50 p-4 rounded-full">
                       {prop.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{prop.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-slate-900 text-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">How We Work</h2>
              <p className="text-slate-400 text-lg">A systematic, heavily regulated four-step workflow ensures your project is delivered on time.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workingProcess.map((prop, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-800 p-6 border border-slate-700 text-center hover:border-orange-500 hover:shadow-xl hover:shadow-orange-900/20 transition-all group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-slate-900 p-4 rounded-full border border-slate-700 group-hover:border-orange-500 transition-colors shadow-inner">
                       {prop.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Materials & Assurance Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Guaranteed Premium Quality Raw Materials</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  A strong building requires strong ingredients. We strictly refuse to use sub-standard raw materials just to increase our margins. You pay for premium, and we deliver premium.
                </p>
                <ul className="space-y-4 mb-4">
                  {[
                    "Cement: Ultratech or Ambuja",
                    "Steel TMT: Tata Tiscon",
                    "Plumbing: Ashirvad or Supreme",
                    "Electricals: Finolex or Havells",
                    "Paints: Asian Paints Royale"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src="/images/brick_residential.png" alt="Material check" className="w-full h-80 object-cover shadow-2xl border border-slate-200" />
              </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Action */}
      <section className="bg-orange-600 py-16 text-center">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-serif font-bold text-white mb-6">Need a custom quotation?</h2>
           <p className="text-orange-100 mb-8 text-lg">Discuss your project requirements directly with our experienced engineering team today.</p>
           <Link to="/contact" className="inline-block px-8 py-4 bg-white text-orange-700 font-bold hover:bg-slate-100 transition-colors shadow-xl">
             Schedule a Consultation
           </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
