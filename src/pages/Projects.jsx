import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LayoutGrid, MapPin, Building, Home, ArrowRight, Trophy, Clock, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = [
    {
      id: 1,
      title: "The Sharma Residency",
      category: "Homes & Villas",
      location: "Sector 55, Noida",
      img: "/images/brick_commercial.png",
      status: "Completed"
    },
    {
      id: 2,
      title: "TechPark Alpha Hub",
      category: "Commercial Spaces",
      location: "Phase 2, Gurugram",
      img: "/images/brick_hero.png",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Heritage Villa Upgrade",
      category: "Renovations",
      location: "Vasant Vihar, Delhi",
      img: "/images/brick_residential.png",
      status: "Completed"
    },
    {
      id: 4,
      title: "Sunrise Modern Apartments",
      category: "Homes & Villas",
      location: "Gomti Nagar, Lucknow",
      img: "/images/brick_commercial.png",
      status: "Completed"
    },
    {
      id: 5,
      title: "City Center Mall Extension",
      category: "Commercial Spaces",
      location: "Connaught Place",
      img: "https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1200",
      status: "Completed"
    },
    {
      id: 6,
      title: "Oakwood Bungalow",
      category: "Homes & Villas",
      location: "Whitefield, Bangalore",
      img: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1200",
      status: "In Progress"
    }
  ];

  const stats = [
    { title: "15+ Years", desc: "Of engineering excellence and construction experience.", icon: <Clock /> },
    { title: "120+ Homes", desc: "Residential villas and independent homes completed.", icon: <Home /> },
    { title: "50+ Comm.", desc: "Commercial factories, offices, and retail spaces.", icon: <Building /> },
    { title: "Zero Delays", desc: "Our strict timelines guarantee 100% on-time delivery.", icon: <Trophy /> }
  ];

  const guarantees = [
    { title: "Quality Assurance", desc: "A rigorous 40-point quality check ensures there are absolutely no defects.", icon: <CheckCircle className="h-8 w-8 text-orange-600" /> },
    { title: "11-Year Warranty", desc: "We provide an 11-year warranty on core structural integrity and concealed leakages.", icon: <ShieldCheck className="h-8 w-8 text-orange-600" /> }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* Dynamic Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/brick_construction.png" alt="Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 mb-6 border border-orange-500/30">
               <LayoutGrid className="h-5 w-5" />
               <span className="font-bold tracking-widest text-sm uppercase">Our Portfolio</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6">Built With Precision</h1>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               Explore some of our most prestigious and challenging projects delivered on time and within budget.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border border-neutral-200 bg-neutral-50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold ${project.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'}`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                    <Building className="h-4 w-4" />
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                <div className="px-6 py-4 border-t border-neutral-200 flex justify-between items-center group-hover:bg-orange-50 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">View Details</span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Numbers That Speak For Themselves</h2>
             <p className="text-slate-400 text-lg">We let our delivered projects and satisfied clientele do the talking.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {stats.map((stat, idx) => (
               <div key={idx} className="bg-slate-800 p-8 border border-slate-700 text-center hover:border-orange-500 transition-colors">
                 <div className="flex justify-center mb-4 text-orange-500">
                    {stat.icon}
                 </div>
                 <h3 className="text-3xl font-extrabold text-white mb-2">{stat.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {guarantees.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: idx * 0.1 }}
                 className="flex flex-col sm:flex-row gap-6 items-start bg-white p-8 border border-slate-200 hover:shadow-xl transition-all"
               >
                 <div className="bg-orange-50 p-4 rounded-full flex-shrink-0">
                    {item.icon}
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Action */}
      <section className="bg-orange-600 py-16 text-center">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Inspired by our work?</h2>
           <p className="text-orange-100 mb-8 text-lg">Let's build your dream project together with absolute transparency.</p>
           <Link to="/contact" className="inline-block px-8 py-4 bg-white text-orange-700 font-bold hover:bg-slate-100 transition-colors shadow-2xl">
             Start Your Journey
           </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
