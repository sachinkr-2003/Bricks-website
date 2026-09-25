import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: `Project Type: ${formData.projectType}\nDetails: ${formData.message}`
      };
      
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        Swal.fire({
          title: 'Request Sent Successfully!',
          text: 'One of our chief engineers will contact you shortly.',
          icon: 'success',
          confirmButtonColor: '#ea580c',
          confirmButtonText: 'Great, thanks!'
        });
        setFormData({ firstName: '', lastName: '', phone: '', email: '', projectType: '', message: '' });
      }
    } catch (error) {
       Swal.fire({
          title: 'Error',
          text: 'Failed to send request. Please try again.',
          icon: 'error',
       });
    }
  };

  const faqs = [
    { q: "What should I have prepared before contacting you?", a: "It helps if you have a rough idea of your plot size, budget, and the type of construction (Residential vs Commercial) you are looking for. However, even if you are just starting, we can guide you entirely." },
    { q: "Do you charge for the initial consultation?", a: "No. The first discovery call and initial site visit (within city limits) are completely free. We will assess the site and provide a rough estimate." },
    { q: "How quickly do you respond to queries?", a: "Our dedicated support team aims to respond to all web inquiries within 12-24 business hours." },
    { q: "Can I visit your office directly?", a: "Absolutely! We welcome clients to our headquarters. However, we recommend scheduling an appointment so a senior engineer is available to assist you." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 selection:bg-orange-200">
      <Navbar />
      
      {/* Dynamic Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Contact Us" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 mb-6 border border-orange-500/30">
               <MessageSquare className="h-5 w-5" />
               <span className="font-bold tracking-widest text-sm uppercase">Get In Touch</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-6">Let's Build Something Great.</h1>
             <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
               Whether you're ready to break ground or just exploring your options, our engineers are here to answer all your questions with total transparency.
             </p>
           </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="space-y-8 flex flex-col justify-between h-full"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-3">We'd love to hear from you</h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Have a challenging plot or an ambitious commercial idea? Drop us a line. We pride ourselves on fast responses and actionable advice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Office Info */}
                <div className="bg-slate-50 p-6 border border-slate-200 hover:border-orange-300 transition-colors">
                  <div className="bg-white p-3 inline-block rounded-full shadow-sm mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Headquarters</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Construction Avenue<br />
                    Sector 45, Brick City<br />
                    Pin - 110045, India
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 p-6 border border-slate-200 hover:border-orange-300 transition-colors">
                  <div className="bg-white p-3 inline-block rounded-full shadow-sm mb-4">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Direct Contact</h3>
                  <div className="space-y-2 mt-2 text-slate-600">
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 8400 984 678</p>
                    <p className="flex items-center gap-2 mt-2"><Mail className="h-4 w-4" /> hello@brickbybrick.in</p>
                  </div>
                  <p className="text-xs text-orange-600 font-bold mt-4 tracking-widest uppercase">24/7 Support Available</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-slate-900 p-8 text-white flex items-center justify-between border-l-4 border-orange-500">
                 <div>
                   <h3 className="font-bold text-xl mb-1">Business Hours</h3>
                   <p className="text-slate-400">Monday - Saturday (9:00 AM - 7:00 PM)</p>
                 </div>
                 <Clock className="h-10 w-10 text-orange-500 opacity-50 hidden sm:block" />
              </div>
              
            </motion.div>

            {/* Premium Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-6 md:p-8 border border-neutral-200 shadow-2xl relative h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-400"></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h2>
                <p className="text-slate-500 mb-6 text-sm">Fill out the form below and an engineer will reach out to you directly.</p>
                
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium" placeholder="Ex. Rahul" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium" placeholder="Ex. Sharma" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium" placeholder="+91 00000 00000" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleInputChange} required className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-slate-700">
                      <option value="">Select a project type...</option>
                      <option value="Residential construction">Residential construction</option>
                      <option value="Commercial construction">Commercial construction</option>
                      <option value="Renovation & Upgrade">Renovation & Upgrade</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="3" className="w-full bg-slate-50 border border-slate-200 px-4 py-2 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium" placeholder="Briefly describe plot size, location, and requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 flex justify-center items-center gap-2 hover:bg-slate-900 transition-colors shadow-lg shadow-orange-600/30">
                    Send Request to Engineers <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">Your data is safe and securely encrypted.</p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Support & Queries</h2>
            <p className="text-slate-600 text-lg">Common questions asked by our clients before a consultation.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 bg-white hover:border-slate-300 transition-colors">
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

      <Footer />
    </div>
  );
};

export default Contact;
