import React from 'react';

const About = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">About Me</h1>
      <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          Hi, I'm Nihal Kumar Mishra. I am a recent graduate in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML), having passed out in June 2025. 
          I am a passionate developer and designer with a knack for creating intuitive and dynamic user experiences. 
          With a strong foundation in modern web technologies and AI/ML, I strive to build applications that are not only 
          functional but also visually stunning and intelligent.
        </p>
        <br/>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          When I'm not coding, I enjoy exploring new design trends, contributing to open-source projects, and 
          documenting my journey through the media section of this site.
        </p>
      </div>
    </div>
  );
};

export default About;
