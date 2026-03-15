import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

const ParticleField = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create particle system
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.42; colors[i * 3 + 1] = 0.39; colors[i * 3 + 2] = 1.0;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.0; colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 1.0;
      } else {
        colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.33; colors[i * 3 + 2] = 0.97;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

const FloatingIcon = ({ icon, style, delay = 0 }) => (
  <motion.div
    className="absolute glass rounded-2xl p-3 text-2xl flex items-center justify-center"
    style={{
      ...style,
      border: '1px solid rgba(108, 99, 255, 0.3)',
      boxShadow: '0 0 20px rgba(108, 99, 255, 0.2)',
    }}
    animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {icon}
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #12122a 50%, #1a0a2e 100%)' }}
    >
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      {/* Floating Tech Icons */}
      <FloatingIcon icon="⚛️" style={{ top: '20%', right: '10%', width: 60, height: 60 }} delay={0} />
      <FloatingIcon icon="🎨" style={{ top: '35%', right: '18%', width: 50, height: 50 }} delay={0.8} />
      <FloatingIcon icon="⚡" style={{ bottom: '30%', right: '12%', width: 55, height: 55 }} delay={1.4} />
      <FloatingIcon icon="🔷" style={{ top: '25%', left: '8%', width: 52, height: 52 }} delay={0.4} />
      <FloatingIcon icon="📱" style={{ bottom: '35%', left: '10%', width: 58, height: 58 }} delay={1.2} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-cyan-400 font-mono border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Hire
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">Hi, I'm </span>
          <br />
          <span className="gradient-text">Shivam Kumar</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl font-bold mb-6 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'UI/UX Enthusiast', 2000,
              'React Specialist', 2000,
              'Web Animator', 2000,
              'Creative Coder', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="neon-text-cyan"
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I build <span className="text-purple-400 font-semibold">modern</span>,{' '}
          <span className="text-cyan-400 font-semibold">responsive</span> and{' '}
          <span className="text-pink-400 font-semibold">interactive</span> web experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a href="#projects" id="view-projects-btn" className="btn-primary text-base px-8 py-3">
            🚀 View Projects
          </a>
          <a href="#contact" id="contact-btn" className="btn-outline text-base px-8 py-3">
            📬 Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Scroll Down</span>
          <motion.div
            className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1"
            animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(108,99,255,0.6)', 'rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
