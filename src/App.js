import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import rohitImg from './assets/skill-logos/rohit.jpeg'

export const ThemeContext = React.createContext();

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  }, [dark]);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const pct =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      const bar = document.getElementById('scrollProgress');
      if (bar) bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div id="scrollProgress" className="scroll-progress" />
      <Navbar profileImg={rohitImg}/>
      <Hero profileImg={rohitImg}/>
      <About profileImg={rohitImg}/>
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
