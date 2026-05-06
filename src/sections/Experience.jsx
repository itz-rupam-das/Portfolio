import { motion } from 'framer-motion';
import '../styles/sections.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      organization: 'Remote / Freelance',
      duration: '2023 - Present',
      achievements: [
        'Building responsive web applications using React.js and modern CSS.',
        'Integrating Supabase for real-time database management and authentication.',
        'Collaborating on open-source projects and community-driven initiatives.'
      ]
    },
    {
      role: 'Full Stack Projects',
      organization: 'Personal & GitHub',
      duration: 'Ongoing',
      achievements: [
        'Developed multiple production-ready applications available on GitHub.',
        'Focused on performance optimization and scalable application architectures.',
        'Implemented secure and user-friendly authentication flows.'
      ]
    },
    {
      role: 'Learning Milestones',
      organization: 'Self-Taught / Certifications',
      duration: '2022 - 2023',
      achievements: [
        'Mastered modern JavaScript (ES6+) and React ecosystem.',
        'Deep dive into Backend-as-a-Service (BaaS) with Supabase.',
        'Developed a strong foundation in UI/UX design and responsive design principles.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A showcase of my journey through internships, projects, and learning.
          </motion.p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-date">{exp.duration}</div>
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-company">{exp.organization}</div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;