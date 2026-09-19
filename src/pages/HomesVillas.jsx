import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, Ruler, Maximize, Sun, Smartphone, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomesVillas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Shield className="h-6 w-6" />, title: "11-Year Warranty", desc: "Solid construction with long-term protection on core structures." },
    { icon: <Ruler className="h-6 w-6" />, title: "Custom Architecture", desc: "Designed precisely to your taste, maximizing space and light." },
    { icon: <Sun className="h-6 w-6" />, title: "Vastu Compliant", desc: "Thoughtful layouts that respect traditional Indian architectural sciences." },
    { icon: <Smartphone className="h-6 w-6" />, title: "App Monitored", desc: "Track every cement bag and every worker through our app dashboard." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <section className="bg-slate-900 text-white relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-50 mix-blend-overlay">
          <img src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Homes and Villas Construction" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="bg-orange-600/20 text-orange-400 p-3 inline-flex items-center gap-2 rounded-none mb-6 border border-orange-500/30">
              <Home className="h-5 w-5" />
              <span className="font-bold tracking-widest text-sm uppercase">Residential Contracting</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight">
              Build The Home <br/> <span className="text-orange-500">You Deserve.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Turnkey residential construction with classic craftsmanship. From the foundation stone to handing over the keys—100% digitally transparent and completely stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/50">
                Book a Free Site Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grids */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">The Brick by Brick Standard</h2>
            <p className="text-slate-600 text-lg">We don't just build walls; we craft generational homes using the highest quality standards and completely honest practices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-50 p-8 border border-neutral-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-100 transition-all group"
              >
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-none mb-6 border border-neutral-200 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Showcase Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 border-8 border-white shadow-2xl">
                <img src="/images/brick_commercial.png" alt="Villa Exterior" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 z-0"></div>
              
              {/* Floating widget */}
              <div className="absolute top-10 -right-12 bg-white p-4 shadow-xl border-l-4 border-orange-500 z-20 flex items-center gap-4 hidden md:flex">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Grade A Materials</p>
                  <p className="text-xs text-slate-500">Ultratech, Tata Tigor, Ashirvad</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Uncompromising Quality in Every Square Foot</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Building a home is highly personal. With Brick by Brick, we ensure the entire journey is completely handled by experts. No running to hardware stores, no bargaining with daily laborers. We handle it all, while showing you every bill.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Complete Civil Structure (Foundation to Roof)",
                  "Plumbing, Electricals, & Waterproofing",
                  "Flooring, Tiling & Premium Finishing Works",
                  "Modern Elevation & Exterior Facade Design"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center p-4 bg-white border border-slate-100 shadow-sm hover:border-orange-300 transition-colors">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img src="/images/brick_hero.png" alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to construct your dream home?</h2>
          <p className="text-orange-100 text-lg mb-10">Stop worrying about rogue contractors. Get absolute transparency and premium quality today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/#contact" className="px-8 py-4 bg-white text-orange-700 font-bold hover:bg-slate-100 transition-colors">
                Request a Callback
             </Link>
             <a href="tel:+918400984678" className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call +91 8400984678
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomesVillas;
