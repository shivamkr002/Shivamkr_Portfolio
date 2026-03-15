import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'HTML5', emoji: '🌐', color: '#e34f26', desc: 'Semantic markup' },
  { name: 'CSS3', emoji: '🎨', color: '#1572b6', desc: 'Styling & layouts' },
  { name: 'JavaScript', emoji: '⚡', color: '#f7df1e', desc: 'Dynamic logic' },
  { name: 'React', emoji: '⚛️', color: '#61dafb', desc: 'UI Components' },
  { name: 'Tailwind', emoji: '💨', color: '#06b6d4', desc: 'Utility CSS' },
  { name: 'Git', emoji: '🔀', color: '#f05033', desc: 'Version control' },
  { name: 'GitHub', emoji: '🐙', color: '#a855f7', desc: 'Code hosting' },
  { name: 'Figma', emoji: '🖌️', color: '#a259ff', desc: 'UI Design' },
  { name: 'VS Code', emoji: '💻', color: '#007acc', desc: 'Code editor' },
];

const SkillCard = ({ name, emoji, color, desc, index }) => {
  const [hovered, setHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -15);
    setRotateY(((x - centerX) / centerX) * 15);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative glass-card rounded-2xl p-6 text-center cursor-default"
      style={{
        perspective: '1000px',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
        boxShadow: hovered ? `0 20px 40px ${color}30` : 'none',
        borderColor: hovered ? `${color}50` : 'rgba(108, 99, 255, 0.2)',
      }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}15, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="text-4xl mb-3 relative z-10"
        style={{ filter: hovered ? `drop-shadow(0 0 12px ${color})` : 'none', transition: 'filter 0.3s' }}
      >
        {emoji}
      </div>
      <div className="font-bold text-white relative z-10">{name}</div>
      <div className="text-xs text-white/40 mt-1 relative z-10">{desc}</div>

      {/* Corner accent */}
      <div
        className="absolute top-2 right-2 w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}`, opacity: hovered ? 1 : 0.4 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #12122a 0%, #0a0a1a 100%)' }}>
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">{'// my toolkit'}</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }} />
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            These are the technologies I work with to build modern, fast and interactive web experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <SkillCard key={tech.name} {...tech} index={i} />
          ))}
        </div>

        {/* Code snippet decoration */}
        <motion.div
          className="mt-16 glass rounded-2xl p-6 max-w-2xl mx-auto border border-purple-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-white/30 font-mono">shivam.js</span>
          </div>
          <pre className="font-mono text-sm text-left overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-300">developer</span>{' '}
              <span className="text-white">=</span>
              <span className="text-white"> {'{'}</span>{'\n'}
              <span className="text-white">  name: </span>
              <span className="text-green-400">"Shivam Kumar"</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-white">  role: </span>
              <span className="text-green-400">"Frontend Developer"</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-white">  skills: [</span>
              <span className="text-yellow-300">"React"</span>
              <span className="text-white">, </span>
              <span className="text-yellow-300">"JS"</span>
              <span className="text-white">, </span>
              <span className="text-yellow-300">"Tailwind"</span>
              <span className="text-white">],</span>{'\n'}
              <span className="text-white">  passion: </span>
              <span className="text-green-400">"Building Amazing UIs"</span>{'\n'}
              <span className="text-white">{'}'}</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
