import React from 'react';
import './Connect.css';

// ── Edit your contact links here ──
const LINKS = [
  {
    name: 'LinkedIn',
    handle: 'anthony-dolan-5049a1207',
    url: 'https://www.linkedin.com/in/anthony-dolan-5049a1207',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#0077B5" opacity="0.2" />
        <path
          d="M6.5 9.5H4v9h2.5v-9ZM5.25 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 13.5c0-2.5-1.5-4-3.5-4a3.5 3.5 0 0 0-2.5 1V9.5H11.5v9H14v-5c0-1 .75-2 2-2s2 1 2 2v5H20v-5Z"
          fill="#0af"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'AnthonyDolan36',
    url: 'https://github.com/AnthonyDolan36',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
          fill="var(--text)"
        />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'AnthonyDolan36@gmail.com',
    url: 'mailto:AnthonyDolan36@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#00e6b4" strokeWidth="1.5" />
        <path d="M3 7l9 7 9-7" stroke="#00e6b4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    handle: '661-625-3171',
    url: 'tel:6616253171',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
          stroke="#00e6b4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Connect() {
  return (
    <section id="connect">
      <p className="section-label fade-in">Connect</p>
      <h2 className="fade-in">
        Get In <em>Touch</em>
      </h2>
      <div className="connect-grid fade-in">
        {LINKS.map((link) => (
          <a
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="connect-card"
            key={link.name}
          >
            <div className="connect-icon">{link.icon}</div>
            <div>
              <p className="connect-name">{link.name}</p>
              <p className="connect-handle">{link.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
