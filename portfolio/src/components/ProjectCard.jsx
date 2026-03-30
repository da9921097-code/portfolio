export default function ProjectCard({ title, description, techStack, github, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-meta">{description}</p>
      <div className="project-tags">
        {techStack.map((item) => (
          <span key={item} className="project-tag">
            {item}
          </span>
        ))}
      </div>
      <div className="button-group" style={{ marginTop: '12px' }}>
        <a className="btn-secondary" href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {demo && (
          <a className="btn" href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
