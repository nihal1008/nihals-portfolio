import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    // IMPORTANT: You will replace this string with your actual Web3Forms access key
    formData.append("access_key", "d81c0cdc-0b19-4ef6-9b28-d47db4db2abf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">Get In Touch</h1>
      <div className="glass" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
            <input type="text" name="name" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-color)' }} placeholder="Your Name" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-color)' }} placeholder="Your Email" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
            <textarea name="message" rows="5" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-color)', resize: 'vertical' }} placeholder="Your Message"></textarea>
          </div>

          {/* Honeypot to prevent spam */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <button type="submit" style={{ padding: '1rem', background: 'var(--accent-color)', color: 'var(--bg-color)', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>
            Send Message
          </button>

          {status && <p style={{ textAlign: 'center', marginTop: '1rem', color: status.includes("Successfully") ? '#00f0ff' : '#ff003c' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
