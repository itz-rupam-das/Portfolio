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

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            className="card contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '500px', width: '100%' }}
          >
            <h3 className="project-title" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Contact Information</h3>
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

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Connect with me</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="https://github.com/itz-rupam-das" target="_blank" rel="noopener noreferrer" className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1.2rem', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/rupam-das-kolkata" target="_blank" rel="noopener noreferrer" className="project-icon" style={{ width: '40px', height: '40px', margin: 0, fontSize: '1.2rem', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;