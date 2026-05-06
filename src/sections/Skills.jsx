import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';
import '../styles/sections.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to build and deploy modern software solutions.
          </motion.p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard category={category} skills={skillList} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;