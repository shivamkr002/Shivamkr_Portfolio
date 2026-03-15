import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2024',
    title: 'Frontend Development Bootcamp',
    org: 'Udemy / Online',
    type: 'Certificate',
    desc: 'Completed an intensive bootcamp covering HTML, CSS, JavaScript, and React fundamentals.',
    icon: '🏆',
    color: '#f7df1e',
  },
  {
    year: '2024',
    title: 'Responsive Web Design',
    org: 'freeCodeCamp',
    type: 'Certificate',
    desc: 'Earned certification in responsive web design, covering CSS Grid, Flexbox, and mobile-first design.',
    icon: '🎖️',
    color: '#61dafb',
  },
  {
    year: '2024',
    title: 'Web Development Workshop',
    org: 'Local Developer Community',
    type: 'Workshop',
    desc: 'Participated in a hands-on workshop focusing on modern JavaScript and React patterns.',
    icon: '🛠️',
    color: '#6c63ff',
  },
  {
    year: '2023',
    title: 'JavaScript Algorithms',
    org: 'freeCodeCamp',
    type: 'Certificate',
    desc: 'Completed JavaScript algorithms and data structures certification with practical projects.',
    icon: '💡',
    color: '#00d4ff',
  },
  {
    year: '2023',
    title: 'Portfolio Projects Launch',
    org: 'Personal Achievement',
    type: 'Achievement',
    desc: 'Successfully built and deployed 5+ personal web projects including e-commerce and portfolio sites.',
    icon: '🚀',
    color: '#a855f7',
  },
];

const TypeBadge = ({ type }) => {
  const typeColors = {
    Certificate: { bg: 'rgba(247, 223, 30, 0.15)', border: '#f7df1e50', text: '#f7df1e' },
    Workshop: { bg: 'rgba(108, 99, 255, 0.15)', border: '#6c63ff50', text: '#a5b4fc' },
    Achievement: { bg: 'rgba(168, 85, 247, 0.15)', border: '#a855f750', text: '#c084fc' },
  };
  const style = typeColors[type] || typeColors.Achievement;
  return (
    <span className="text-xs font-bold px-3 py-1 rounded-full"
      style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.text }}>
      {type}
    </span>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #12122a 0%, #0a0a1a 100%)' }}>
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">{'// milestones'}</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, #6c63ff, #00d4ff, #a855f7, transparent)' }}
          />

          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <motion.div className="glass-card rounded-2xl p-5" whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
                  <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <TypeBadge type={item.type} />
                    <span className="text-xs text-white/40 font-mono">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-cyan-400 font-medium mb-2">{item.org}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>

              {/* Center dot / Icon */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2"
                  style={{ background: `${item.color}20`, borderColor: item.color, boxShadow: `0 0 20px ${item.color}40` }}
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Spacer on opposite side */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
