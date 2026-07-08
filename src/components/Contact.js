import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxd6u-7nqacdH8OTU8GjLL3l72eA6YI2T_3tS9XPpjx2By_6EgsTh2Sdiwg31eWYezsIg/exec';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setSending(true);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then((response) => {
        if (response.type === 'opaque') {
          setSent(true);
          setForm({ name: '', email: '', message: '' });
          return;
        }
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Contact form error:', err);
        setError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="fade-in">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-intro">
              Feel free to reach out — whether it's an opportunity, a project
              collaboration, or just to say hi. I'll get back to you as soon as
              possible.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon"><IoMail /></div>
              <div>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">rohitraj05072000@gmail.com</span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaLocationDot /></div>
              <div>
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Noida, Uttar Pradesh, India</span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">💼</div>
              <div>
                <span className="contact-info-label">Status</span>
                <span className="contact-info-value contact-open">Open to Opportunities</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" title="GitHub"><FaGithub /></a>
              <a href="mailto:rohitraj05072000@gmail.com" className="social-btn" title="Email"><IoMail /></a>
            </div>
          </div>

          <div className="fade-in">
            <div className="contact-form">
              <h3 className="form-heading">Send a Message</h3>
              {sent ? (
                <div className="form-success">
                  🎉 Message sent! I'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Rohit Rajput"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="rohitrajput@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Hi Rohit, I'd love to discuss a project with you..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <p className="form-error">{error}</p>}
                  <button type="submit" className="btn-submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message ✉️'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
