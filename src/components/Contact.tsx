import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, Phone, Linkedin, Github, Twitter, Dribbble } from 'lucide-react';

interface ContactProps {
  mousePosition: { x: number; y: number };
}

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/archana-t-p-b7b8b127a',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/archanasunilkumar',
    color: 'from-gray-600 to-gray-400',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:achuhhhh1324@gmail.com',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    icon: Phone,
    name: 'Phone',
    href: 'tel:+918754601324',
    color: 'from-pink-600 to-pink-400',
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'achuhhhh1324@gmail.com',
    href: 'mailto:achuhhhh1324@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8754601324',
    href: 'tel:+918754601324',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Coimbatore, India',
    href: '#',
  },
];

export function Contact({ mousePosition }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

              {/* Form Card */}
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                      Your Name
                    </label>
                    <motion.div
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-600/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/40"
                        placeholder="John Doe"
                      />
                    </motion.div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                      Email Address
                    </label>
                    <motion.div
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-600/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/40"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                      Subject
                    </label>
                    <motion.div
                      animate={{
                        scale: focusedField === 'subject' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-600/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/40"
                        placeholder="Project Inquiry"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                      Message
                    </label>
                    <motion.div
                      animate={{
                        scale: focusedField === 'message' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-600/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/40 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group/btn relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      Send Message
                      <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl mb-6 text-white">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-600/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{info.title}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl mb-6 text-white">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all flex flex-col items-center gap-3"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                      <social.icon size={24} className="text-white" />
                    </div>
                    <span className="text-white/80">{social.name}</span>

                    {/* Hover Glow */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}
                      initial={false}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-600/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-400">Open to Opportunities</span>
              </div>
              <p className="text-sm text-white/60">
                Passionate about creating meaningful design solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}