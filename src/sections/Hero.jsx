import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-badge">Full Stack Developer</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building <span className="text-gradient">Scalable</span> <br />
          Modern Applications
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm Rupam Das. I specialize in building robust full-stack applications 
          using modern technologies with a focus on performance and security.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <a href="https://github.com/itz-rupam-das" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> GitHub
          </a>
        </motion.div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;