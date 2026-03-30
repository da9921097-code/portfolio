import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'AI-Powered Cybersecurity Threat Detection System',
    description:
      'Built an ML pipeline with anomaly detection for network traffic and dashboard alerting.',
    techStack: ['Python', 'TensorFlow', 'Node.js', 'React', 'PostgreSQL'],
    github: 'https://github.com/your-username/ai-cybersecurity',
    demo: '#',
  },
  {
    title: 'React Inventory Management App',
    description: 'Responsive product management dashboard with filtering, CRUD operations, and charts.',
    techStack: ['React', 'Context API', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/your-username/react-inventory',
    demo: '#',
  },
  {
    title: 'Mini Project: Markdown Note App',
    description: 'Create, edit and save notes in markdown with real-time preview and local storage.',
    techStack: ['React', 'HTML5', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/your-username/markdown-note-app',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-grid">
      <h2 className="section-title">Projects</h2>
      <p className="subheading">
        Highlighted projects illustrating modern web application development skills.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
