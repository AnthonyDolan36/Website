import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">
        A.DOLAN<span className="blink">_</span>
      </span>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#connect">Connect</a></li>
      </ul>
    </nav>
  );
}
