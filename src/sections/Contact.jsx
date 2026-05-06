import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/sections.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="card contact-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title" style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1rem' }}>
                  <FaEnvelope />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 600 }}>Email</div>
                  <div style={{ fontWeight: 500 }}>rdas40978@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1rem' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 600 }}>Location</div>
                  <div style={{ fontWeight: 500 }}>Howrah, West Bengal</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Connect with me</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/itz-rupam-das" target="_blank" rel="noopener noreferrer" className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1.2rem', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1.2rem', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="card contact-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" placeholder="Hi, I'd like to talk about..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;