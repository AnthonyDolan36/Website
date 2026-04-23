import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-tag">IT Operations &amp; Service Desk Professional</p>
      <h1>
        Anthony<br />
        <span>Dolan</span>
      </h1>
      <p className="hero-sub">
        // Enterprise infrastructure. Asset automation. Help desk leadership.<br />
        Building the systems and teams that keep organizations running.
      </p>
      <div className="hero-contact">
        <a href="tel:6616253171">661-625-3171</a>
        <span className="pipe">|</span>
        <a href="mailto:AnthonyDolan36@gmail.com">AnthonyDolan36@gmail.com</a>
        <span className="pipe">|</span>
        <span className="location">Santa Clarita, CA</span>
      </div>
      <div className="hero-ctas">
        <a href="#experience" className="btn btn-primary">View Experience →</a>
        <a href="#connect" className="btn btn-secondary">Get In Touch</a>
      </div>
    </section>
  );
}
