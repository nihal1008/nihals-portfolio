import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'E-Commerce Platform', tech: 'React, Node.js', desc: 'A full-stack e-commerce solution with dynamic cart functionality.' },
    { title: 'Portfolio Website', tech: 'Vite, React, Vanilla CSS', desc: 'A premium personal portfolio with a dedicated media management section.' },
    { title: 'Analytics Dashboard', tech: 'Vue, D3.js', desc: 'Interactive data visualization dashboard for business metrics.' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2>{proj.title}</h2>
            <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>{proj.tech}</span>
            <p style={{ color: 'var(--text-secondary)' }}>{proj.desc}</p>
            <button style={{ marginTop: 'auto', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '4px', cursor: 'pointer' }}>View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
