import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden py-12"
      style={{ background: 'linear-gradient(180deg, #12122a 0%, #080810 100%)' }}>
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6c63ff, #00d4ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}>
                <span className="text-white font-black text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>S</span>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="gradient-text">Shivam</span>
                <span className="text-white/50 text-sm ml-1 font-mono">Kumar</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Frontend Developer crafting modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4 font-mono">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="text-purple-500">{'>'}</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4 font-mono">Connect</h4>
            <div className="flex gap-4">
              {[
                { href: 'https://github.com', label: 'GitHub', icon: '🐙' },
                { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
                { href: 'https://instagram.com', label: 'Instagram', icon: '📸' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-lg hover:scale-110 transition-transform duration-200"
                  style={{ border: '1px solid rgba(108, 99, 255, 0.3)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-white/30 text-sm font-mono">
            © {new Date().getFullYear()} Shivam Kumar. Built with <span className="text-pink-500">❤️</span> using React & Three.js
          </p>

          {/* Back to top */}
          <motion.button
            id="back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors duration-200 group"
            whileHover={{ y: -3 }}
          >
            Back to Top
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg"
            >
              ↑
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
