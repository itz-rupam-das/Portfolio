import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const liveLinks = {
  'Expense-Tracker': 'https://itz-rupam-das.github.io/Expense-Tracker/#/login'
};

const ProjectCard = ({ project }) => {
  return (
    <div className="card project-card">
      <div className="project-icon">
        <FaFolder />
      </div>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description || 'No description provided.'}</p>
      
      <div className="project-tags">
        {project.topics && project.topics.length > 0 ? (
          project.topics.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-tag">
              {tech}
            </span>
          ))
        ) : (
          <span className="project-tag">{project.language || 'Code'}</span>
        )}
      </div>

      <div className="project-links">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
          <FaGithub /> GitHub
        </a>
        {(project.homepage || liveLinks[project.name]) && (
          <a href={project.homepage || liveLinks[project.name]} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;