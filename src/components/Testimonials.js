import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Rohit is an outstanding Web Developer whose technical skills, attention to detail, and collaborative spirit greatly contribute to the success of our team. I highly recommend them for any future projects or opportunities.',
    name: 'Yatin Yadav',
    role: 'Team Lead',
    initials: 'YY',
  },
  {
    text: 'Rohit is committed to their professional development. They actively pursue new learning opportunities and stay up-to-date with the latest industry trends. This commitment is evident in the innovative solutions they bring to our projects.',
    name: 'Aaditya',
    role: 'Colleague',
    initials: 'AA',
  },
  {
    text: "A standout quality is meticulous attention to detail. Every user interface is pixel-perfect and functions flawlessly across devices and browsers. The code is always clean, maintainable, and well-documented.",
    name: 'Nitish',
    role: 'Developer',
    initials: 'NI',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-inner">
        <div className="fade-in testimonials-header">
          <div className="section-tag">Reviews</div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-sub">
            Kind words from colleagues and collaborators who've worked with me.
          </p>
        </div>
        <div className="testimonials-grid fade-in">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="quote-icon">"</div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
