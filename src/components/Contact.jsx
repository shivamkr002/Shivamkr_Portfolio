import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/shivamkumar', icon: '🐙', color: '#6e5494' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/shivamkumar', icon: '💼', color: '#0077b5' },
  { name: 'Instagram', href: 'https://instagram.com/shivamkumar', icon: '📸', color: '#e1306c' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #12122a 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">{'// get in touch'}</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }} />
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's build something amazing together. I'm always open to discuss new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 mb-10">
              {[
                { icon: '📧', label: 'Email', value: 'shivam@example.com', href: 'mailto:shivam@example.com' },
                { icon: '📍', label: 'Location', value: 'India', href: null },
                { icon: '⏰', label: 'Available', value: 'Mon – Sat, 9AM – 6PM IST', href: null },
              ].map((info, i) => (
                <motion.div key={i} className="flex items-center gap-4 glass-card rounded-xl p-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}>
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-xs text-white/40 font-mono uppercase tracking-wider">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-cyan-400 font-medium hover:underline">{info.value}</a>
                    ) : (
                      <div className="text-white font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm text-white/40 font-mono uppercase tracking-widest mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                    id={`social-${social.name.toLowerCase()}`}
                    className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 group"
                    style={{ minWidth: 90 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ y: -6, boxShadow: `0 8px 30px ${social.color}40` }}>
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-xs text-white/50 group-hover:text-white transition-colors">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-purple-500/20">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2" htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} required
                    placeholder="Your name"
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                    style={{ border: '1px solid rgba(108, 99, 255, 0.3)', background: 'rgba(255,255,255,0.03)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(108, 99, 255, 0.3)'} />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2" htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                    style={{ border: '1px solid rgba(108, 99, 255, 0.3)', background: 'rgba(255,255,255,0.03)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(108, 99, 255, 0.3)'} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2" htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required
                  placeholder="Project inquiry..."
                  className="w-full rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                  style={{ border: '1px solid rgba(108, 99, 255, 0.3)', background: 'rgba(255,255,255,0.03)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(108, 99, 255, 0.3)'} />
              </div>
              <div className="mb-6">
                <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none resize-none transition-all duration-300"
                  style={{ border: '1px solid rgba(108, 99, 255, 0.3)', background: 'rgba(255,255,255,0.03)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(108, 99, 255, 0.3)'} />
              </div>
              <motion.button id="send-message-btn" type="submit"
                className="btn-primary w-full text-base py-3 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={sending || sent}>
                {sent ? <>✅ Message Sent!</> : sending ? (
                  <><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⚙️</motion.span> Sending...</>
                ) : <>📤 Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
