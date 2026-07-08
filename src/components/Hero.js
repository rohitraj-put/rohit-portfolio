import React, { useEffect, useState } from 'react';
import './Hero.css';
import { IoMail } from "react-icons/io5";

const phrases = [
  'Web Developer',
  'React.js Specialist',
  'UI/UX Enthusiast',
  'Web App Builder',
];

export default function Hero({profileImg}) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1200);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx - 1 < 0) {
            setDeleting(false);
            setCharIdx(0);
            setPhraseIdx((p) => (p + 1) % phrases.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 50 : 85
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Hey, I'm <br />
            <span>Rohit Rajput</span>
          </h1>
          <div className="typing-wrapper">
            <span>{displayed}</span>
            <span className="cursor" />
          </div>
          <p className="hero-desc">
            A Frontend-focused Web Developer building responsive, user-friendly
            websites and web applications that lead to the success of the overall
            project.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">
             <IoMail/> Get in Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work →
            </a>
          </div>
        </div>

        <div className="hero-avatar-wrap">
          <div className="avatar-orb orb1" />
          <div className="avatar-orb orb2" />
          <div className="avatar-orb orb3" />
          <div className="hero-avatar">
            <img src={profileImg} alt='Rohit Images'/>
          </div>
        </div>
      </div>
    </section>
  );
}
