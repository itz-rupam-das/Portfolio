import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import '../styles/sections.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/itz-rupam-das/repos?sort=updated&per_page=12');
        const filteredProjects = response.data
          .filter(repo => !repo.fork && repo.name !== 'itz-rupam-das')
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setProjects(filteredProjects);
      } catch (err) {
        setError('Failed to fetch projects from GitHub. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A collection of my recent open-source projects and personal work.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="card" style={{ height: '250px', opacity: 0.5 }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--border)', borderRadius: '0.75rem', marginBottom: '1rem' }}></div>
                <div style={{ width: '60%', height: '24px', background: 'var(--border)', marginBottom: '1rem' }}></div>
                <div style={{ width: '100%', height: '80px', background: 'var(--border)' }}></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="card" style={{ textAlign: 'center', borderColor: '#ef4444' }}>
            <p style={{ color: '#ef4444' }}>{error}</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;