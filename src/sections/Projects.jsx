import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectCategories, projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const visibleProjects = useMemo(() => filter === 'Todos' ? projects : projects.filter((project) => project.category === filter), [filter]);
  return (
    <section className="section section-pad" id="proyectos">
      <div className="container">
        <SectionTitle number="03" eyebrow="Trabajo seleccionado" title="Proyectos con intención, no solo código." description="Una selección de proyectos académicos y personales en desarrollo web, backend e inteligencia artificial." />
        <div className="filter-list" role="group" aria-label="Filtrar proyectos">
          {projectCategories.map((category) => <button type="button" key={category} className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => <Reveal key={project.id} delay={(index % 2) * .06}><ProjectCard project={project} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
