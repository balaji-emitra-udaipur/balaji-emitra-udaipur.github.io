import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Fingerprint,
  FileText,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Printer,
  ExternalLink,
  MessageCircle,
  CreditCard as BankIcon,
  Zap,
  ArrowRight,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const SERVICES = [
  {
    title: "Identity & Registration",
    icon: <Fingerprint className="w-8 h-8" />,
    popular: true,
    color: "blue",
    items: ["Aadhaar Enrollment & Updates", "Jan Aadhaar Card", "New PAN Card", "Passport Application", "RTO Driving License"]
  },
  {
    title: "Certificates & Land Records",
    icon: <FileText className="w-8 h-8" />,
    color: "orange",
    items: ["Domicile (Mool Niwas)", "Caste Certificate", "Marriage Registration", "Khata Nakal & Jamabandi"]
  },
  {
    title: "Education & Exams",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "green",
    items: ["MLSU Online Forms", "College & Board Forms", "Competitive Exam Forms", "Admit Card Printing"]
  },
  {
    title: "Banking & Finance",
    icon: <BankIcon className="w-8 h-8" />,
    popular: true,
    color: "blue",
    items: ["Secure Money Transfer", "AePS Cash Withdrawals", "Balance Inquiry", "Micro-Banking Solutions"]
  },
  {
    title: "Insurance & Utilities",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "orange",
    items: ["Vehicle Insurance", "Electricity & Water Bills", "Mobile & DTH Recharge", "Life Insurance Payments"]
  },
  {
    title: "Travel & Office Services",
    icon: <Printer className="w-8 h-8" />,
    color: "green",
    items: ["Train & Bus Tickets", "Passport Size Photos", "Lamination & Photocopy", "PF & Pension Work"]
  }
];

const FEATURES = [
  {
    title: "Zero Waiting Time",
    description: "Send documents via WhatsApp and pick up when ready.",
    icon: <Zap className="w-8 h-8" />,
    color: "blue"
  },
  {
    title: "100% Secure",
    description: "We protect your sensitive data and personal information.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "orange"
  },
  {
    title: "Expert Support",
    description: "High approval rates for all your government forms.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "green"
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We ensure you are 100% happy with our digital services.",
    icon: <Award className="w-8 h-8" />,
    color: "purple"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/919929996365?text=hellooo";
  const emailLink = "mailto:shreebalajiemitra2122@gmail.com";
  const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.042831825164!2d73.7109372!3d24.6227544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55953240b05%3A0x7393868bf0b3e5c9!2sSHREE%20BALAJI%20EMITRA!5e0!3m2!1sen!2sin!4v1715320000000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/50 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              SB
            </div>
            <span className={`font-display font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Shree Balaji <span className="text-brand-secondary">Emitra</span>
            </span>
          </div>

          {/* Primary Action Button (Always Visible) */}
          <div className="flex items-center gap-2">
            <a href={whatsappLink} className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-green-600 transition-colors text-sm md:text-base font-bold shadow-sm">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden mesh-gradient border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-brand-primary text-sm font-bold mb-6"
          >
            <Zap size={16} /> Most Trusted Digital Center In Udaipur
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your One-Stop <span className="text-brand-primary">e-Mitra</span> & <br className="hidden md:block" />
            Digital Service Hub
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-primary/40" />
            <span className="text-sm md:text-base font-black tracking-widest uppercase text-brand-primary bg-blue-50/90 backdrop-blur-md px-6 py-2.5 rounded-full border-2 border-blue-200 shadow-md flex items-center gap-2.5">
              <Award size={18} className="text-brand-primary animate-pulse" /> Prop: Yogesh Prajapat
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-brand-primary/40" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
          >
            Fast, secure, and professional government services,
            essential financial transactions, and expert digital solutions for Rajasthan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4"
          >
            <a href="tel:+919929996365" className="px-8 py-4 bg-brand-primary text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-bold text-lg flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now
            </a>
            <a href={whatsappLink} className="px-8 py-4 bg-white text-green-600 border border-green-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 font-bold text-lg flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
            <a href="https://maps.app.goo.gl/JXeamEdiXJ79iniD8" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-50 text-brand-primary border border-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 font-bold text-lg flex items-center justify-center gap-2">
              <MapPin size={20} /> Reach Store
            </a>
          </motion.div>
        </div>

        {/* Simple Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20" />
      </header>

      {/* Official Logos Ribbon */}
      <section className="bg-white py-8 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
            Associated with Official Portals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 hover:opacity-100 transition-all duration-300">
            {[
              { name: "Emitra", alt: "Emitra Rajasthan Form Online Fill - Udaipur eMitra", url: "/images/emitra.png" },
              { name: "Rajasthan Govt", alt: "Rajasthan Govt - Shree Balaji eMitra Bhuwana", url: "/images/rajasthan_logo.png" },
              { name: "Aadhaar", alt: "Aadhar card cash withdraw - Udaipur eMitra", url: "/images/aadhar_logo.png" },
              { name: "SSO Rajasthan", alt: "SSO Rajasthan - Bhuwana eMitra", url: "/images/sso_logo.png" },
              { name: "MLSU", alt: "MLSU form eMitra - Bhuwana", url: "/images/mlsu.jpg" },
              { name: "MSME", alt: "MSME Registration - Shree Balaji eMitra", url: "/images/msme_logo.png" }
            ].map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={logo.url}
                  alt={logo.alt || logo.name}
                  title={logo.alt || logo.name}
                  className="h-20 md:h-28 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 md:py-20 px-4 bg-slate-50 relative overflow-hidden">
        {/* Background Blobs for Visual Interest */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-12 h-12 bg-blue-600/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold border border-blue-200"
            >
              01
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">All Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all hover:shadow-2xl hover:border-brand-primary/20 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative faint pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-[0.03] -mr-10 -mt-10 rounded-full ${service.color === 'blue' ? 'bg-blue-600' :
                  service.color === 'orange' ? 'bg-orange-600' :
                    'bg-green-600'
                  }`} />

                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:rotate-6 ${service.color === 'blue' ? 'bg-blue-50 text-blue-600 shadow-[0_8px_16px_-4px_rgba(30,64,175,0.15)]' :
                    service.color === 'orange' ? 'bg-orange-50 text-orange-600 shadow-[0_8px_16px_-4px_rgba(249,115,22,0.15)]' :
                      'bg-green-50 text-green-600 shadow-[0_8px_16px_-4px_rgba(22,163,74,0.15)]'
                    }`}>
                    {service.icon}
                  </div>

                  {service.popular ? (
                    <span className="bg-brand-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Popular
                    </span>
                  ) : service.title === "Banking & Finance" ? (
                    <span className="flex items-center gap-1.5 bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Live
                    </span>
                  ) : null}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  {service.title}
                </h3>

                <ul className="space-y-1 flex-grow">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between p-2 rounded-xl transition-all hover:bg-slate-50 text-gray-600 hover:text-brand-primary group/item cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <ArrowRight size={14} className={`shrink-0 transition-transform group-hover/item:translate-x-1 ${service.color === 'blue' ? 'text-blue-400' :
                          service.color === 'orange' ? 'text-orange-400' :
                            'text-green-400'
                          }`} />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery Section */}
      <section className="py-12 md:py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Service Center</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional workspace where we handle your documents
              with care and precision using state-of-the-art digital equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:row-span-2 aspect-video md:aspect-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="/images/shop1.jpg"
                alt="Shree Balaji eMitra Center Udaipur - Main Front View"
                title="Shree Balaji eMitra Center Udaipur - Main Front View"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square md:aspect-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="/images/shop2.jpeg"
                alt="Shree Balaji eMitra Digital Services Workspace"
                title="Shree Balaji eMitra Digital Services Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square md:aspect-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="/images/shop3.jpeg"
                alt="Shree Balaji eMitra Customer Service Desk"
                title="Shree Balaji eMitra Customer Service Desk"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="/images/shop4.jpeg"
                alt="Professional Workspace and Document Processing Equipment"
                title="Professional Workspace and Document Processing Equipment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] transition-all group"
              >
                <div className={`p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-500 ${feature.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  feature.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                    feature.color === 'green' ? 'bg-green-50 text-green-600' :
                      'bg-purple-50 text-purple-600'
                  }`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.description}</p>

                {/* Decorative bar */}
                <div className={`w-12 h-1 rounded-full mt-6 opacity-20 ${feature.color === 'blue' ? 'bg-blue-600' :
                  feature.color === 'orange' ? 'bg-orange-600' :
                    feature.color === 'green' ? 'bg-green-600' :
                      'bg-purple-600'
                  }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl md:rounded-[3rem] bg-brand-primary text-white p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Apply for Services Now</h2>
            <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
              Send your documents via WhatsApp or Email for fast and error-free processing.
              We are ready to assist you with all your digital needs!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={whatsappLink} className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-green-500/30">
                <MessageCircle /> WhatsApp Documents
              </a>
              <a href={emailLink} className="flex items-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-white/20">
                <Mail /> Email Documents
              </a>
            </div>
          </div>
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Visit Our Center</h2>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-brand-primary" />
              Yogesh Prajapat, Shree Balaji Emitra, Joda Bavji Chowk, Bhuwana, Udaipur, Rajasthan 313001
            </p>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-8 border-white bg-white h-[450px] relative z-10">
            <iframe
              src={mapLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                  SB
                </div>
                <span className="font-display font-bold text-xl uppercase tracking-wider">
                  Shree Balaji <span className="text-brand-secondary">Emitra</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Your trusted local e-Mitra & digital services hub by Yogesh eMitra. Fast, secure, and professional solutions for all your government, MLSU forms, PAN card apply, UPI cash, photocopy, Aadhar card cash, and Bhuwana, Sukher, Amberi eMitra needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href={emailLink} className="flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all font-bold">
                <Mail size={20} /> Email Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-900 border-b">
            <div className="flex items-center gap-4 text-gray-400">
              <MapPin className="w-6 h-6 text-brand-primary shrink-0" />
              <p className="text-sm">Yogesh Prajapat, Shree Balaji Emitra, Joda Bavji Chowk, Bhuwana, Udaipur, Rajasthan 313001</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 md:justify-end">
              <Phone className="w-6 h-6 text-brand-primary shrink-0" />
              <p className="text-sm">+91 99299 96365</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 Shree Balaji Emitra. Udaipur, Rajasthan. All rights reserved.</p>
            <div className="flex gap-6 uppercase tracking-widest font-semibold">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
