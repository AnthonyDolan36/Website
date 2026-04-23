import React from 'react';
import './Experience.css';

// ── Edit your work history here ──
const JOBS = [
  {
    role: 'Senior Service Desk Analyst',
    date: 'Aug 2025 — Oct 2025',
    company: "The Master's University · Santa Clarita, CA",
    itRole: true,
    bullets: [
      'Supervised daily service desk operations for 1,200+ faculty, staff, and students; triaged requests and delegated tickets by complexity and workload.',
      'Served as departmental Asset Management Specialist — leveraged the SnipeIT REST API to programmatically resolve data redundancy across all deployed devices and append a custom Last Service Date field to every asset record.',
      'Automated email alerts triggered whenever a device reached end-of-lifecycle or was due for routine maintenance, significantly reducing manual audit overhead.',
      'Designed and implemented a formal device maintenance process with standardized service intervals and inspection checklists, improving asset lifecycle tracking.',
      'Deployed workstations and peripherals onto the university domain via a deployment server, streamlining imaging and configuration for new and refreshed endpoints.',
      'Tracked service metrics in TeamWork Desk to identify recurring issues; collaborated with network and applications teams to reduce repeat ticket volume.',
      'Mentored three junior analysts on troubleshooting methodology, documentation standards, and customer service; led weekly knowledge-sharing sessions.',
      'Authored and maintained knowledge base articles covering password resets, VPN setup, and Microsoft 365 configuration.',
    ],
  },
  {
    role: 'IT Service Desk Analyst',
    date: 'Feb 2024 — Aug 2025',
    company: "The Master's University · Santa Clarita, CA",
    itRole: true,
    bullets: [
      'Served as first point of contact for IT support requests via email, phone, and walk-ins; documented all actions and resolutions in the ticketing system.',
      'Used remote diagnostic tools to troubleshoot hardware and software issues; performed hands-on PC repairs when remote access was insufficient.',
      'Delivered peripheral equipment to end users, maintained knowledge base documentation, and conducted classroom A/V checks.',
    ],
  },
  {
    role: 'Team Member → Shift Leader',
    date: 'Dec 2021 — Aug 2024',
    company: 'Chick-fil-A · Aurora, CO',
    itRole: false,
    bullets: [
      'Promoted from Team Member to Shift Lead within the first year; supervised team members and upheld service standards in a high-volume environment.',
      'Managed real-time task delegation and problem-solving; assisted with inventory counts and equipment maintenance.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label fade-in">Experience</p>
      <h2 className="fade-in">
        Work <em>History</em>
      </h2>
      <div className="timeline">
        {JOBS.map((job) => (
          <div
            className={`timeline-item fade-in${job.itRole ? '' : ' non-it'}`}
            key={job.role + job.date}
          >
            <div className="timeline-dot" />
            <div className="tl-header">
              <span className="tl-role">{job.role}</span>
              <span className="tl-date">{job.date}</span>
            </div>
            <p className="tl-company">{job.company}</p>
            <ul className="tl-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
