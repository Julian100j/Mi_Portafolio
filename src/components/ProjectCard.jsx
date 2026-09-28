import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react';

export default function ProjectCard({ project }) {
  const unavailable = !project.codeUrl && !project.demoUrl;
  return (
    <article className="project-card">
      {project.image ? <div className="project-visual"><img src={project.image} alt={`Vista previa de ${project.title}`} loading="lazy" /></div> : <div className={`project-visual accent-${project.accent}`} aria-hidden="true"><span>{project.code}</span><div className="visual-orbit" /></div>}
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Tecnologías">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-links">
          {project.codeUrl ? <a href={project.codeUrl} target="_blank" rel="noreferrer"><Github size={17} /> Código</a> : <span title="Este proyecto todavía no tiene un repositorio público"><LockKeyhole size={16} /> Repositorio no publicado</span>}
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Ver proyecto <ArrowUpRight size={17} /></a>}
          {unavailable && <span className="sr-only">Este proyecto no tiene enlaces públicos disponibles.</span>}
        </div>
      </div>
    </article>
  );
}
