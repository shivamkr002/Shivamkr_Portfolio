import { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Noise overlay for premium feel */}
      <div className="noise-overlay" />

      {/* Loader */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main site */}
      <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
