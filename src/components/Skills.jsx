import React from 'react';
import './Skills.css';

// ── Edit your skill categories and tags here ──
const SKILLS = [
  {
    category: 'Help Desk & ITSM',
    tags: [
      'TeamWork Desk',
      'Ticketing Systems',
      'Knowledge Base Mgmt',
      'IT Service Desk Ops',
      'Remote Diagnostics',
    ],
  },
  {
    category: 'Technical',
    tags: [
      'SnipeIT API',
      'Deployment Servers',
      'Domain Imaging',
      'Microsoft 365',
      'VPN Configuration',
      'PC Hardware',
    ],
  },
  {
    category: 'Security',
    tags: [
      'Data Protection Policies',
      'Incident Response',
      'Access Provisioning',
      'Endpoint Security',
    ],
  },
  {
    category: 'Leadership',
    tags: [
      'Team Mentorship',
      'Cross-functional Collab',
      'Training & Onboarding',
      'Shift Management',
      'Documentation',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label fade-in">Skills</p>
      <h2 className="fade-in">
        Tech <em>Stack</em>
      </h2>
      <div className="skills-grid">
        {SKILLS.map((block) => (
          <div className="skill-block fade-in" key={block.category}>
            <p className="skill-category">{block.category}</p>
            <div className="skill-tags">
              {block.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
