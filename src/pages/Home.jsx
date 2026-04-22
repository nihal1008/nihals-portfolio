import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import myPhoto from '../assets/NihalKumarMishra (4).png';

const Home = () => {
  return (
    <div className="home-container page-container">
      <div className="hero-section animate-fade-in">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Nihal Kumar Mishra<span className="accent">.</span></h1>
          <h3 className="title">CSE-AIML Graduate</h3>
          <p className="description">
            I am a Computer Science & Engineering (AIML) graduate (Class of June 2025). 
            I build exceptional and accessible digital experiences for the web.
            Welcome to my personal slice of the internet where I showcase my work,
            experiences, and media.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn primary-btn">View My Work</Link>
            <Link to="/contact" className="btn secondary-btn glass">Contact Me</Link>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <div className="hero-image-container glass">
          <img 
            src={myPhoto} 
            alt="Nihal Kumar Mishra" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
