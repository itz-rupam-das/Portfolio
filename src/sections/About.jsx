import { motion } from 'framer-motion';
import '../styles/sections.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I am a passionate developer focused on building scalable and user-centric web applications.
          </motion.p>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              My journey as a developer is driven by a commitment to excellence in Full Stack Development. 
              I specialize in creating production-ready applications that combine high-performance backends 
              with seamless, intuitive user interfaces.
            </p>
            <br />
            <p>
              My interests and expertise include:
            </p>
            <ul style={{ listStyle: 'none', marginTop: '1rem', color: 'var(--muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}>⚡ Full Stack Development (React & Supabase)</li>
              <li style={{ marginBottom: '0.5rem' }}>🔄 Real-time Applications</li>
              <li style={{ marginBottom: '0.5rem' }}>🎨 UI/UX Design & Responsive Interfaces</li>
              <li style={{ marginBottom: '0.5rem' }}>🔐 Secure and Scalable Practices</li>
            </ul>
          </motion.div>

          <div className="grid">
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="project-title">Core Focus</h3>
              <p className="project-description">Developing end-to-end solutions with a focus on real-world impact and technical excellence.</p>
            </motion.div>
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="project-title">Philosophy</h3>
              <p className="project-description">Clean, minimal UI coupled with robust, scalable architectures.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;