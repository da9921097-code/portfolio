const skillGroups = [
  { title: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Tools', items: ['Git', 'VS Code', 'Figma'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skill-card">
      <h2 className="section-title">Skills</h2>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((skill) => (
                <li className="skill-item" key={skill}>
                  <span className="skill-name">{skill}</span>
                  <span>✓</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
