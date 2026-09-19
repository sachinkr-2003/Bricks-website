import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, TrendingDown, Clock, Smartphone, CheckCircle, Calculator, FileText, Bell, PenTool, ArrowRight, Home, Building2, PaintBucket, HardHat, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featurePillars = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
    title: "100% Transparency",
    description: "No hidden costs, no surprises. See exactly where your money goes.",
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-orange-600" />,
    title: "Cost Effective",
    description: "Better planning and smart purchasing provides unmatched value for you.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
    title: "11-Year Warranty",
    description: "Solid construction with long-term protection ensuring peace of mind.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Daily Updates",
    description: "Progress reports with site photos & videos delivered directly to you.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-orange-600" />,
    title: "Everything on App",
    description: "Bills, labor attendance, and expenses tracked on our custom app.",
  },
];

const appFeatures = [
  {
    title: "Live Project Dashboard",
    description: "View overall completion %, current stage, and today's progress with photos.",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    title: "Material & Bills Tracking",
    description: "Track exact material quantities, suppliers, and view invoice photos.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Daily Labour Attendance",
    description: "Monitor daily worker count and exact daily labour expenses in real-time.",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: "Real-time Notifications",
    description: "Get alerts for site updates, payment receipts, or cost approvals.",
    icon: <Bell className="h-5 w-5" />,
  }
];

const faqs = [
  {
    question: "How does the '100% Transparency' work?",
    answer: "Through our custom customer portal app, you get daily updates containing exact material bills, labor attendance, and site photos. You see what we see—no hidden contractor margins."
  },
  {
    question: "Do you handle both material and labour?",
    answer: "Yes, we provide end-to-end turnkey contracting. We source premium materials at wholesale rates and manage the entire labour workforce under our supervision."
  },
  {
    question: "What does the 11-Year Warranty cover?",
    answer: "Our warranty covers structural integrity, plumbing concealed lines, and electrical concealed wiring against defects. You can raise a warranty claim directly from the app."
  },
  {
    question: "Can I approve extra costs before they happen?",
    answer: "Absolutely. Any deviation from the initial budget requires digital approval from the customer via the app. No unexpected costs will ever be added without your consent."
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Noida",
    review: "I was worried about contractors cheating on cement and materials. Brick by Brick's app showed me every single bill. Incredible transparency!",
    rating: 5
  },
  {
    name: "Sneha Sharma",
    role: "Commercial Space",
    review: "They built our 3-story office on time. The daily photo updates meant I didn't have to visit the site every single day. Very professional.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Villa Project, Gurugram",
    review: "The 11-year warranty gives a lot of peace of mind. Their finishing is classic, and the app UI is actually very easy to use.",
    rating: 5
  }
];

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* 1. Extended Classic Hero Section */}
      <section className="relative bg-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-orange-50 text-orange-700 text-sm font-semibold mb-6 border border-orange-100">
                <span className="flex h-2 w-2 bg-orange-600 animate-pulse"></span>
                Digital Construction Management
              </div>
              <h1 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-[1.1]">
                <span className="block mb-2 font-serif">आपका सपना का घर.</span>
                <span className="block text-orange-600 font-serif">अब पूरी तरह सुरक्षित हाथों में।</span>
              </h1>
              <p className="mt-6 text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the modern way of building your dream home. We combine classic craftsmanship with 100% digital transparency via our integrated app. Unmatched quality, no hidden costs.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-none text-white bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-200 transition-all hover:-translate-y-1">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-sm font-bold rounded-none text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all">
                  See App Features
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">11<span className="text-orange-600">+</span></p>
                  <p className="text-xs font-medium text-slate-500">Years Warranty</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">100<span className="text-orange-600">%</span></p>
                  <p className="text-xs font-medium text-slate-500">Transparency</p>
                </div>
              </div>
            </div>
            
            {/* Image Composition */}
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Main Large Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-none overflow-hidden shadow-2xl z-10 border-8 border-white"
                >
                  <img 
                    src="/images/brick_construction.png" 
                    alt="Luxury classic exterior home" 
                    className="w-full h-[300px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                
                {/* Overlapping Secondary Image */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 w-56 h-40 rounded-none overflow-hidden shadow-xl border-4 border-white z-20 hidden md:block"
                >
                  <img 
                    src="/images/brick_residential.png" 
                    alt="Construction planning" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Floating Experience Badge */}
                <div className="absolute top-6 -right-5 md:-right-8 bg-white p-3 rounded-none shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-emerald-100 p-2 rounded-none text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs">Trusted Builders</p>
                    <p className="text-[10px] text-slate-500 font-medium">Verified Professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Visual Services Segment (NEW) */}
      <section id="services" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-orange-600 font-semibold tracking-wider uppercase text-xs mb-2">Our Expertise</h2>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Building Visions Into Reality</h3>
            <p className="text-slate-600 text-base">We provide end-to-end contracting services covering materials, labor, and flawless execution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Homes & Villas",
                desc: "Turnkey residential contracting focusing on family-first architecture and classic finishings.",
                icon: <Home className="h-5 w-5" />,
                img: "/images/brick_residential.png",
                link: "/services/homes"
              },
              {
                title: "Commercial Spaces",
                desc: "Optimized corporate spaces, shops, and offices built with premium materials for longevity.",
                icon: <Building2 className="h-5 w-5" />,
                img: "/images/brick_commercial.png",
                link: "/services/commercial"
              },
              {
                title: "Renovations & Upgrades",
                desc: "Breathe new life into old spaces with our structured and planned civil renovation works.",
                icon: <PaintBucket className="h-5 w-5" />,
                img: "https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1200",
                link: "/services/renovations"
              }
            ].map((service, idx) => (
              <Link to={service.link} key={idx} className="block group rounded-none overflow-hidden bg-slate-50 border border-slate-200 hover:shadow-xl hover:border-orange-500 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-50 text-orange-600 p-2 rounded-none inline-block mb-3 border border-orange-100">
                      {service.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-600 transition-colors transform group-hover:translate-x-1" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust Pillars */}
      <section className="py-20 bg-white relative border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-extrabold sm:text-4xl text-slate-900 mb-4">
              अब घर बनाना होगा आसान, साफ़ और भरोसेमंद
            </h2>
            <p className="text-lg text-slate-600">Because every brick matters. We eliminate the stress of traditional contracting.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featurePillars.map((feature, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="bg-neutral-50 rounded-none p-6 border border-neutral-200 flex flex-col items-center text-center hover:shadow-xl hover:shadow-orange-100 transition-all"
              >
                <div className="bg-white p-4 rounded-none mb-4 shadow-sm border border-neutral-100">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Digital Extension - App Segment (Revised & Shorter) */}
      <section id="features" className="py-16 bg-slate-900 text-white overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-600 blur-[100px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <h2 className="text-xs text-orange-500 font-bold tracking-widest uppercase mb-2">Total Transparency</h2>
              <p className="mt-2 text-3xl font-serif font-extrabold sm:text-4xl">
                The Standard-Setting Customer Portal
              </p>
              <p className="mt-4 text-base text-slate-400">
                “Customer ko project ke paison aur progress ki complete visibility.” Contractor par blindly trust nahi karna—sab kuch aapke mobile par live.
              </p>
              
              <div className="mt-8 space-y-6">
                {appFeatures.map((item, idx) => (
                  <div key={idx} className="flex group bg-slate-800 p-4 border border-slate-700 hover:border-orange-500 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 bg-orange-600/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Changed Side Image App Visual (Dark Mode styling, shorter height) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="bg-slate-950 shadow-2xl border-[6px] border-slate-800 overflow-hidden relative w-full max-w-sm h-[600px] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col">
                <div className="bg-slate-950 px-5 py-2 flex justify-between items-center text-[10px] text-slate-400 font-medium">
                  <span>9:41</span>
                  <div className="w-24 h-4 bg-slate-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-md"></div>
                  <div className="flex space-x-2">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                
                <div className="flex-1 bg-slate-900 border-t border-slate-800 p-5 overflow-y-hidden relative">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                       <HardHat className="h-5 w-5 text-orange-500" />
                       <span className="font-bold text-white tracking-wide">Brick by Brick</span>
                    </div>
                    <div className="w-8 h-8 bg-slate-700 bg-cover bg-center border border-slate-600" style={{backgroundImage: "url('/images/brick_hero.png')"}}></div>
                  </div>
                  
                  {/* Dashboard Widget Dark */}
                  <div className="bg-orange-600 p-5 mb-5 shadow-lg shadow-orange-900/50">
                    <p className="text-[10px] text-orange-200 uppercase tracking-widest font-bold mb-1">Sharma Residence</p>
                    <div className="flex justify-between items-end mb-4">
                      <p className="text-4xl font-extrabold text-white">62%</p>
                      <span className="text-xs text-orange-100 font-medium">On Track</span>
                    </div>
                    <div className="w-full bg-orange-800 h-2">
                      <div className="bg-white h-2 relative" style={{ width: '62%' }}></div>
                    </div>
                  </div>

                  {/* Dark mode cards */}
                  <div className="space-y-4">
                    <div className="bg-slate-800 p-4 border border-slate-700 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                         <FileText size={18} className="text-blue-400" />
                         <span className="text-sm font-bold text-slate-200">Cement Bill</span>
                       </div>
                       <span className="px-2 py-1 bg-emerald-900/50 text-emerald-400 text-[10px] font-bold">PAID ₹12,000</span>
                    </div>
                    
                    <div className="bg-slate-800 p-4 border border-slate-700 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                         <PenTool size={18} className="text-purple-400" />
                         <span className="text-sm font-bold text-slate-200">Labour (8 workers)</span>
                       </div>
                       <span className="text-sm font-bold text-white">₹7,200</span>
                    </div>

                    <div className="bg-slate-800 p-4 border border-slate-700">
                      <p className="text-sm font-bold text-slate-200 mb-3">Live Photos</p>
                      <div className="flex gap-2">
                        <img src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-16 h-16 object-cover" alt="Site" />
                        <img src="/images/brick_residential.png" className="w-16 h-16 object-cover" alt="Site" />
                        <div className="w-16 h-16 bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">+3</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fade out bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-slate-700"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Testimonials Segment (NEW) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Don't just take our word for it. Hear from those who built their dreams with absolute transparency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 shadow-sm hover:border-orange-400 transition-colors">
                <div className="flex text-orange-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{review.review}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section (NEW) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-orange-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pre-Footer Classic Quote/Banner */}
      <section className="bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/brick_construction.png" alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl font-serif font-extrabold text-white sm:text-5xl mb-6">
              Ready to start your landmark project?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-orange-100 mx-auto mb-10">
              Homes | Commercial Spaces | Renovations. On Contract Basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+918400984678" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-none text-orange-700 bg-white hover:bg-orange-50 shadow-lg transform hover:-translate-y-1 transition-all">
                Call +91 8400984678
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-none text-white bg-transparent hover:bg-white/10 transition-all">
                Request a Callback
              </a>
            </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
