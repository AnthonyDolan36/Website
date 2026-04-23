import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <p className="section-label fade-in">About</p>
      <h2 className="fade-in">
        Who I <em>Am</em>
      </h2>
      <div className="about-grid">
        <div className="about-text fade-in">
          {/* ── Edit your bio paragraphs here ── */}
          <p>
            Information technology professional with hands-on experience supporting enterprise IT
            infrastructure, managing hardware assets, troubleshooting complex technical issues, and
            mentoring service desk teams.
          </p>
          <p>
            I thrive at the intersection of people and systems — whether that's automating asset
            management pipelines via REST API, deploying workstations onto a university domain, or
            coaching junior analysts on troubleshooting methodology and documentation standards.
          </p>
          <p>
            Currently completing a B.S. in Management Information Systems with an emphasis in
            Cybersecurity and Systems Analysis. Proven track record of building automation tools,
            streamlining workflows, and driving end-user satisfaction at scale.
          </p>
        </div>

        <div className="edu-wrapper fade-in">
          <div className="edu-card">
            <p className="edu-label">Education</p>
            {/* ── Edit your degree info here ── */}
            <p className="edu-degree">B.S. Management Information Systems</p>
            <p className="edu-school">The Master's University</p>
            <p className="edu-detail">
              Emphasis: Computer Programming, Networking &amp; Database Management
            </p>
            <span className="edu-expected">Expected 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
