import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import './Navbar.css';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


const links = ['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'];

export default function Navbar({profileImg}) {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">
          <img src={profileImg} alt='Logo'/>
        </div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <MdLightMode className='theme-color'/> : <MdDarkMode/>}
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
