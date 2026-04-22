import React from 'react';

const Experience = () => {
  const experiences = [
    { role: 'Senior Developer', company: 'Tech Innovators', year: '2024 - Present', desc: 'Leading frontend development and architecture.' },
    { role: 'Web Developer', company: 'Digital Solutions', year: '2022 - 2024', desc: 'Developed responsive and accessible web applications.' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">Experience</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
            <h2 style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>{exp.role}</h2>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>{exp.company} | {exp.year}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
