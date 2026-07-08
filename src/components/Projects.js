import React from 'react';
import './Projects.css';
import agile from '../assets/projects/agile.PNG'
import taj from '../assets/projects/taj-tazgi.png'
import jps from '../assets/projects/jps.png'
import namrata from '../assets/projects/namrata-attendance.png'
import carat from '../assets/projects/caratflitz.png'
import jingle from '../assets/projects/jingle-holiday-bazar.png'
import cp from '../assets/projects/compilace-pilot.PNG'

const projects = [
  {
    title: 'Compliance Pilot - 🔴Coming Soon...',
    desc: 'A compliance management solution for CA firms and compliance consultants managing multiple client companies — licenses, renewals, documents, and regulatory tasks in one register.',
    img: cp,
    color: '#FFF7ED',
    darkColor: '#2D1F0A',
    link: '#',
  },
  {
    title: 'Agile Regulatory',
    desc: 'A professional, accessibility-focused corporate website for a regulatory consultancy, featuring clear information architecture, fast load times, and responsive design to improve user trust and engagement.',
    img: agile,
    color: '#FFF7ED',
    darkColor: '#2D1F0A',
    link: 'https://www.agileregulatory.com/',
  },
  {
    title: 'Namrata Attendance System',
    desc: 'An innovative Attendance System web application built with React.js and Firebase, providing a robust solution for managing attendance records seamlessly.',
    img: namrata,
    color: '#F0FDF4',
    darkColor: '#0A2015',
    link: 'https://attendance-system-142cb.web.app/',
  },
  {
    title: 'JPS Engineers',
    desc: 'A modern, responsive site built using React. Featuring sleek design, fast performance, and seamless cross-device compatibility for dynamic engineering needs.',
    img: jps,
    color: '#EFF6FF',
    darkColor: '#0A1929',
    link: 'https://www.jpsengineers.com/',
  },
  {
    title: 'Taj Taazagi Catters',
    desc: 'A modern, user-friendly catering website with sleek UI, fast performance, and full mobile responsiveness. Crafted to enhance user engagement for catering services.',
    img: taj,
    color: '#FFF7ED',
    darkColor: '#2D1F0A',
    link: 'https://tajtaazagicatters.com/',
  },
  {
    title: 'CaratGlitz E-Commerce',
    desc: 'A sophisticated e-commerce platform designed for jewelry enthusiasts, built with React.js providing a seamless shopping experience with a modern user interface.',
    img: carat,
    color: '#FDF4FF',
    darkColor: '#1A0A2D',
    link: 'https://caratglitzwebsite.netlify.app/',
  },
  {
    title: 'Jingle Holiday Bazar',
    desc: 'A dynamic travel platform offering flights, tours, and hotel bookings with engaging visuals and seamless navigation for domestic and international destinations.',
    img: jingle,
    color: '#ECFDF5',
    darkColor: '#0A1E15',
    link: 'https://jingleholiday.netlify.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="fade-in projects-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A selection of personal and client projects — each crafted with care for
            performance and user experience.
          </p>
        </div>
        <div className="projects-grid fade-in">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-thumb">
                <img src={p.img} alt={p.title || "project image"} />
                <div className="project-overlay" />
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <a href={p.link} className="project-link" target="_blank" rel="noreferrer">
                  Live View ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
