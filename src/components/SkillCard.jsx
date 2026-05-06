const SkillCard = ({ category, skills }) => {
  return (
    <div className="card">
      <h3 className="project-title" style={{ textTransform: 'capitalize' }}>{category}</h3>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;