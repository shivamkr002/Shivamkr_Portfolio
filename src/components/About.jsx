import { useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95, color: "#e34f26" },
  { name: "CSS3", level: 90, color: "#1572b6" },
  { name: "JavaScript", level: 85, color: "#f7df1e" },
  { name: "React", level: 82, color: "#61dafb" },
  { name: "Tailwind CSS", level: 88, color: "#06b6d4" },
  { name: "Git & GitHub", level: 80, color: "#f05033" },
];

const SkillBar = ({ name, level, color, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-white/90">{name}</span>
        <span className="font-mono text-sm" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "80+", label: "Projects Done" },
    { value: "5+", label: "Tech Stack" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #12122a 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #6c63ff, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            {"// about me"}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Who <span className="gradient-text">Am I?</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #6c63ff, #00d4ff)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Profile Card */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-rotate-slow" />
              <div className="absolute -inset-6 rounded-full border border-cyan-500/10 animate-counter-rotate" />
              <div
                className="absolute -inset-12 rounded-full border border-purple-500/5 animate-rotate-slow"
                style={{ animationDuration: "30s" }}
              />

              {/* Profile image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: "3px solid transparent",
                  background:
                    "linear-gradient(#12122a, #12122a) padding-box, linear-gradient(135deg, #6c63ff, #00d4ff) border-box",
                }}
              >
                <img
                  src="/profile.png"
                  alt="Shivam Kumar - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-8 glass rounded-xl px-3 py-2 text-sm font-bold text-cyan-400 border border-cyan-500/20"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⚛️ React
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-12 glass rounded-xl px-3 py-2 text-sm font-bold text-purple-400 border border-purple-500/20"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎨 UI/UX
              </motion.div>
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 glass rounded-xl px-3 py-2 text-sm font-bold text-pink-400 border border-pink-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💡 Creative
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12 w-full max-w-xs">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-2xl font-black gradient-text">
                    {value}
                  </div>
                  <div className="text-xs text-white/50 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Info & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Frontend Developer passionate about{" "}
              <span className="gradient-text-2">UI/UX</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Hi! I'm <strong className="text-white">Shivam Kumar</strong>, a
              passionate Frontend Developer who loves building beautiful,
              performant, and user-friendly web experiences. I focus on creating
              pixel-perfect interfaces with smooth animations and great
              accessibility.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              I specialize in modern frontend technologies including{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-purple-400">Tailwind CSS</span>, and{" "}
              <span className="text-pink-400">JavaScript</span> — always pushing
              the limits of what's possible on the web.
            </p>

            {/* Skill Bars */}
            <div>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
