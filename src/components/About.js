import React from 'react';
import './About.css';
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from 'react-icons/io5';
import { MdOutlineFileDownload } from "react-icons/md";
import cv from '../assets/cv/Rohit.pdf'

export default function About({ profileImg }) {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text fade-in">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Get to know me!</h2>
            <p>
              I'm a Web Developer at <strong>Agile Regulatory</strong>, where
              I specialize in building responsive, user-friendly websites and web
              applications that contribute directly to project success. My focus is
              on delivering clean, efficient code and seamless user experiences that
              align with business goals.
            </p>
            <p>
              Previously, I worked at <strong>Namrata Universal</strong>, where I
              honed my skills in frontend development by contributing to a variety
              of client projects — transforming design concepts into fully functional
              digital products across diverse industries.
            </p>
            <p>
              I also enjoy sharing content about web development on LinkedIn to help
              the developer community grow. I'm open to job opportunities where I
              can contribute, learn, and grow.
            </p>
            <a href="#contact" className="btn-primary">
              Let's Connect →
            </a>
            <a style={{ marginLeft: "10px" }} href={cv} download className="btn-primary">
              Download CV <MdOutlineFileDownload />
            </a>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">2.5+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">11+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">2</div>
                <div className="stat-label">Companies</div>
              </div>
            </div>
          </div>

          <div className="about-visual fade-in">
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-avatar">
                  <img src={profileImg} alt='logo' />
                </div>
                <div>
                  <div className="about-card-name">Rohit Rajput</div>
                  <div className="about-card-role">Web Developer</div>
                </div>
              </div>
              <div className="about-card-divider" />
              <div className="about-card-item">
                <span className="about-card-icon"><FaLocationDot /></span>
                <div>
                  <span className="about-card-label">Location</span>
                  <span className="about-card-value">Noida, India</span>
                </div>
              </div>
              <div className="about-card-item">
                <span className="about-card-icon"><MdOutlineWork /></span>
                <div>
                  <span className="about-card-label">Current Role</span>
                  <span className="about-card-value">Web Developer (Agile Regulatory)</span>
                </div>
              </div>
              <div className="about-card-item">
                <span className="about-card-icon"><IoMail /></span>
                <div>
                  <span className="about-card-label">Email</span>
                  <span className="about-card-value about-card-email">
                    rohitraj05072000@gmail.com
                  </span>
                </div>
              </div>
              <div className="about-card-item">
                <div className="status-dot" />
                <div>
                  <span className="about-card-label">Status</span>
                  <span className="about-card-value about-card-open">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
