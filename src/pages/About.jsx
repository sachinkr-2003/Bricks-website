import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Target, Users, Trophy, HardHat, CheckCircle, Clock, Map, TrendingUp, Cpu, Smartphone, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
      title: "Absolute Transparency",
      desc: "No hidden costs. No fake materials. Our clients see every invoice via our dedicated app."
    },
    {
      icon: <Trophy className="h-8 w-8 text-orange-600" />,
      title: "Engineering Excellence",
      desc: "We don't take shortcuts. Every pillar and beam is calculated for maximum safety and longevity."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Client-Centric",
      desc: "Your money, your house. We act as your technical partners, ensuring absolute peace of mind."
    }
  ];

  const timeline = [
    {
      year: "2015",
      icon: <Map className="h-6 w-6 text-orange-600" />,
      title: "The Beginning",
      desc: "Started as a small consulting firm in Delhi NCR to oversee independent house constructions."
    },
    {
      year: "2018",
      icon: <HardHat className="h-6 w-6 text-orange-600" />,
      title: "Turnkey Operations",
      desc: "Scaled into a full turnkey civil contracting company, managing projects end-to-end without middlemen."
    },
    {
      year: "2021",
      icon: <Smartphone className="h-6 w-6 text-orange-600" />,
      title: "Tech Revolution",
      desc: "Launched the exclusive Brick by Brick Client App to provide daily dashboard updates and invoice tracking."
    },
    {
      year: "2026",
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Industry Leaders",
      desc: "Successfully delivered over 150+ residential and commercial properties with a 100% on-time rate."
    }
  ];

  const techAdvantage = [
    {
      icon: <Cpu className="h-8 w-8 text-orange-600" />,
      title: "Live Dashboard",
      desc: "Track daily labor attendance and exact material usage right from your phone."
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: "Secure Payments",
      desc: "Milestone-based digital payment tracking. You only pay when a specific slab of work is fully completed."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Cloud Blueprints",
      desc: "All architectural and structural CAD drawings are stored securely on your app forever."
    }
  ];

  const team = [
    {
      name: "Rahul Verma",
      role: "Founder & Chief Engineer",
      img: "/images/team_rahul.png",
      desc: "With 15+ years in civil engineering, Rahul founded Brick by Brick to eliminate fraud in local contracting."
    },
    {
      name: "Sanya Kapoor",
      role: "Head of Architecture",
      img: "/images/team_sanya.png",
      desc: "An award-winning architect who believes functional spaces should not compromise on aesthetics."
    },
    {
      name: "Amit Desai",
      role: "Project Director",
      img: "/images/team_amit.png",
      desc: "Amit ensures every site operates like a well-oiled machine, enforcing strict timelines and safety."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/brick_hero.png" alt="Blueprint" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 mb-6 border border-orange-500/30">
               <HardHat className="h-5 w-5" />
               <span className="font-bold tracking-widest text-sm uppercase">About Us</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-6">Building Trust, One Brick at a Time.</h1>
             <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
               We deliver world-class contracting services with unwavering commitment to quality, timelines, and absolute financial transparency.
             </p>
           </motion.div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The Unorganized Sector Needed a Change.</h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  For decades, home construction has been plagued by unreliable contractors, hidden material costs, and endless project delays. <strong>Brick by Brick</strong> was founded to solve exactly this.
                </p>
                <ul className="space-y-4 mb-4">
                  {[
                    "100% Mobile App Transparency",
                    "No Hidden Costs or Fees",
                    "On-Time Project Delivery",
                    "Rigorous Engineering Standards"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src="/images/brick_residential.png" alt="Site Visit" className="w-full h-96 object-cover shadow-2xl border border-slate-200" />
              </div>
            </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600 text-lg">These are the non-negotiable principles that drive every site we manage.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((prop, idx) => (
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

      {/* Timeline / Journey Section (New Area) */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Journey So Far</h2>
              <p className="text-slate-400 text-lg">From a small consulting squad to a full-fledged technical contracting empire.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-800 p-6 border border-slate-700 hover:border-orange-500 transition-colors"
                >
                  <div className="text-orange-500 font-extrabold text-2xl mb-4 opacity-50">{item.year}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-slate-900 p-2 rounded-full border border-slate-700">
                       {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Tech Advantage Section (New Area) */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Tech Advantage</h2>
              <p className="text-slate-600 text-lg">How our custom-built client mobile app gives you 100% control of your home building process.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techAdvantage.map((prop, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-8 border border-slate-200 text-center hover:shadow-xl transition-all"
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

      {/* Meet The Team Section */}
      <section className="py-20 bg-white border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Meet The Experts</h2>
              <p className="text-slate-600 text-lg">The dedicated team behind your dream project.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 text-center hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="aspect-square w-full bg-slate-100 mb-6">
                     <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 pt-0">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-bold mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Pre-Footer Action */}
      <section className="bg-orange-600 py-16 text-center">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to trust the experts?</h2>
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

export default About;
