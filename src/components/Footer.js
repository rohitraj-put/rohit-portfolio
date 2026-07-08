import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">Rohit Rajput</div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Rohit Rajput. Crafted with ❤ and lots of ☕ · Web Developer · Noida, India
        </p>
      </div>
    </footer>
  );
}
