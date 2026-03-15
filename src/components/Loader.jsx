import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const letters = 'SHIVAM KUMAR'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #12122a 50%, #1a0a2e 100%)' }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[200, 300, 400, 500].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-purple-500/10"
                style={{
                  width: size,
                  height: size,
                  animation: `rotateSlow ${10 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  borderColor: `rgba(108, 99, 255, ${0.08 - i * 0.015})`,
                }}
              />
            ))}
          </div>

          {/* Logo / Name */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="flex gap-1">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-3xl md:text-5xl font-black"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
                >
                  {letter === ' ' ? (
                    <span className="w-4 inline-block" />
                  ) : (
                    <span className={i < 6 ? 'gradient-text' : 'text-white/80'}>{letter}</span>
                  )}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-sm text-cyan-400 font-mono tracking-[0.4em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {'<'} Frontend Developer {'>'}
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 md:w-80">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full loader-bar rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/30 font-mono">
                <span>Loading portfolio...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-purple-500/40" />
          <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-cyan-500/40" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-cyan-500/40" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-purple-500/40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
