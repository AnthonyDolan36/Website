import React from 'react';
import './Projects.css';

// ── Add or edit your GitHub repos here ──
const REPOS = [
  {
    name: 'AnthonyDolan36 / Pong',
    description:
      'A fully playable Pong game built with Python and PyGame — a hands-on dive into game loop architecture, collision detection, and real-time rendering logic.',
    language: 'Python',
    meta: 'PyGame',
    url: 'https://github.com/AnthonyDolan36/Pong',
  },
  // Add more repos below by copying the object above:
  // {
  //   name: 'AnthonyDolan36 / your-repo',
  //   description: 'What this project does.',
  //   language: 'Python',
  //   meta: 'Some tool',
  //   url: 'https://github.com/AnthonyDolan36/your-repo',
  // },
];

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label fade-in">Projects</p>
      <h2 className="fade-in">
        GitHub <em>Repos</em>
      </h2>
      <p className="projects-intro fade-in">
        A growing collection of personal and academic projects. More on the way as I continue building.
      </p>

      <div className="repos-grid">
        {REPOS.map((repo) => (
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card fade-in"
            key={repo.name}
          >
            <div className="repo-header">
              <span className="repo-icon">⎇</span>
              <span className="repo-name">{repo.name}</span>
            </div>
            <p className="repo-desc">{repo.description}</p>
            <div className="repo-meta">
              <span className="repo-lang">{repo.language}</span>
              {repo.meta && <span>{repo.meta}</span>}
            </div>
            <span className="repo-link">View on GitHub →</span>
          </a>
        ))}
      </div>

      <p className="projects-footer fade-in">
        // More projects coming soon — check back or follow on GitHub.
      </p>
    </section>
  );
}
