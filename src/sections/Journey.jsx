import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/education';
import { experience } from '../data/experience';

function Timeline({ items, type }) {
  const Icon = type === 'education' ? GraduationCap : BriefcaseBusiness;
  return <div className="timeline">{items.map((item) => <article className="timeline-item" key={`${item.title}-${item.period}`}><div className="timeline-icon"><Icon size={19} /></div><div><span className="timeline-date">{item.period}</span><h3>{item.title}</h3><p className="organization">{item.organization}</p><p>{item.description}</p>{item.tags && <ul className="tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}{item.status && <span className="status-label">{item.status}</span>}</div></article>)}</div>;
}

export default function Journey() {
  return (
    <section className="section section-pad alt-section" id="trayectoria">
      <div className="container">
        <SectionTitle number="05" eyebrow="Trayectoria" title="Aprender, aplicar, documentar, mejorar." />
        <div className="journey-grid">
          <Reveal><h3 className="column-title"><GraduationCap size={22} /> Formación</h3><Timeline items={education} type="education" /></Reveal>
          <Reveal delay={.1}><h3 className="column-title"><BriefcaseBusiness size={22} /> Experiencia</h3><Timeline items={experience} type="experience" /></Reveal>
        </div>
      </div>
    </section>
  );
}
