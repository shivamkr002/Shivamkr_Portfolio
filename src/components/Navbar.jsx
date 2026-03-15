import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Determine active section
      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActive(href);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-purple-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}>
            <span className="text-white font-black text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>S</span>
          </div>
          <span className="font-bold text-xl hidden sm:block" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="gradient-text">SK</span>
            <span className="text-white/50 text-sm ml-1 font-mono">{'</>'}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link font-medium text-sm tracking-wide ${active === href ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="btn-primary text-sm px-5 py-2"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10"
          >
            <ul className="flex flex-col py-4">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-6 py-3 text-white/70 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-2">
                <a href="/resume.pdf" download className="btn-primary text-sm block text-center">
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
