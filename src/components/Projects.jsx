import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Modern Portfolio Website',
    description: 'A stunning 3D animated portfolio built with React, Three.js, and Framer Motion featuring glassmorphism design.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    gradient: 'from-purple-600 to-cyan-500',
    emoji: '🌐',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce UI Dashboard',
    description: 'A full responsive e-commerce admin dashboard with dynamic charts, product management, and dark mode.',
    tech: ['React', 'JavaScript', 'CSS3', 'Chart.js'],
    gradient: 'from-pink-600 to-purple-600',
    emoji: '🛒',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: false,
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Real-time weather application with beautiful UI, location-based weather data, and 5-day forecast.',
    tech: ['JavaScript', 'API', 'HTML5', 'CSS3'],
    gradient: 'from-cyan-500 to-blue-600',
    emoji: '🌤️',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager App',
    description: 'A beautiful drag-and-drop task management app with categories, priorities, and progress tracking.',
    tech: ['React', 'Tailwind', 'Local Storage'],
    gradient: 'from-green-500 to-cyan-400',
    emoji: '✅',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate Website',
    description: 'Full-featured real estate listing platform with property search, filters, and contact system.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    gradient: 'from-orange-500 to-pink-600',
    emoji: '🏠',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: true,
  },
  {
    id: 6,
    title: 'Animated Landing Page',
    description: 'High-converting SaaS landing page with GSAP animations, parallax scrolling, and interactive UI elements.',
    tech: ['HTML5', 'CSS3', 'GSAP', 'JavaScript'],
    gradient: 'from-violet-600 to-pink-500',
    emoji: '🚀',
    live: '#',
    github: 'https://github.com/shivamkumar',
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -12);
    setRotateY(((x - centerX) / centerX) * 12);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative group cursor-default project-card"
      style={{
        perspective: '1000px',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? '10px' : '0'})`,
        transition: isHovered ? 'transform 0.1s ease' : 'transform 0.6s ease',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
        isHovered ? 'border-purple-500/50 shadow-2xl shadow-purple-900/30' : 'border-white/10'
      }`}>
        {/* Gradient header */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <motion.div
            className="text-7xl z-10"
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.emoji}
          </motion.div>

          {project.featured && (
            <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded-full">
              ⭐ Featured
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href={project.live} id={`live-demo-${project.id}`} className="btn-primary text-sm px-4 py-2"
              onClick={e => e.stopPropagation()}>Live Demo</a>
            <a href={project.github} id={`github-${project.id}`} target="_blank" rel="noopener noreferrer"
              className="btn-outline text-sm px-4 py-2"
              onClick={e => e.stopPropagation()}>GitHub</a>
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full font-mono"
                style={{ background: 'rgba(108, 99, 255, 0.15)', color: '#a5b4fc', border: '1px solid rgba(108, 99, 255, 0.3)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'React', 'JavaScript', 'PHP', 'CSS3'];
  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #12122a 100%)' }}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">{'// my work'}</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }} />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(f => (
            <button key={f} id={`filter-${f.toLowerCase()}`} onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f ? 'text-white shadow-lg shadow-purple-900/40' : 'glass text-white/60 hover:text-white border border-white/10 hover:border-purple-500/40'
              }`}
              style={filter === f ? { background: 'linear-gradient(135deg, #6c63ff, #a855f7)' } : {}}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <a href="https://github.com/shivamkumar" target="_blank" rel="noopener noreferrer"
            id="view-all-github" className="btn-outline text-base px-8 py-3 inline-block">
            🐙 View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
