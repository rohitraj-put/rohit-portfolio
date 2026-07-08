import React from 'react';
import './Skills.css';
import html from '../assets/skill-logos/html.png'
import css from '../assets/skill-logos/css.png'
import js from '../assets/skill-logos/js.png'
import react from '../assets/skill-logos/react.png'
import Next from '../assets/skill-logos/nextjs.png'
import sass from '../assets/skill-logos/sass.png'
import redux from '../assets/skill-logos/redux.png'
import tailwind from '../assets/skill-logos/tailwind.png'
import firebase from '../assets/skill-logos/firebase.webp'
import bootstrap from '../assets/skill-logos/bootstrap.png'
import git from '../assets/skill-logos/git.png'
import mui from '../assets/skill-logos/mui.png'

const skills = [
  { img: html, name: 'HTML5' },
  { img: css, name: 'CSS3' },
  { img: js, name: 'JavaScript' },
  { img: react, name: 'React.js' },
  { img: Next, name: 'Next.js' },
  { img: sass, name: 'SASS' },
  { img: redux, name: 'Bootstrap' },
  { img: tailwind, name: 'Tailwind CSS' },
  { img: firebase, name: 'Firebase' },
  { img: bootstrap, name: 'Git & GitHub' },
  { img: git, name: 'Responsive' },
  { img: mui, name: 'Figma' },
  { img: git, name: 'Deployment' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div className="fade-in skills-header">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-sub">
            Technologies and tools I use to build modern, performant web experiences.
          </p>
        </div>
        <div className="skills-marquee fade-in">
          <div className="marquee-track">
            {[...skills, ...skills].map((s, index) => (
              <div className="skill-card" key={`${s.name}-${index}`}>
                <div className="skill-icon">
                  <img src={s.img} alt={s.name} />
                </div>
                <div className="skill-name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .skills-marquee {
          position: relative;
          width: 100%;

        }

        .marquee-track {
          display: flex;
          gap: 1rem;
                    
          width: calc(200% + 1rem);
          animation: marquee-slide 18s linear infinite;
          align-items: center;
        }
          .marquee-track:hover {
            animation-play-state: paused;
          }

        .skill-card {
          flex: 0 0 auto;
          min-width: 140px;
          padding: 1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .skill-icon {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
        }
        .skill-icon img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 600;
        }


        @keyframes marquee-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
