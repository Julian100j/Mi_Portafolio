import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { interests, skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="section section-pad alt-section" id="habilidades">
      <div className="container">
        <SectionTitle number="02" eyebrow="Stack" title="Herramientas para convertir ideas en sistemas." description="Un panorama honesto y editable de las tecnologías con las que trabajo y continúo aprendiendo." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <Reveal className="skill-card" key={group.category} delay={(index % 3) * .05}><div className="skill-head"><Icon size={21} /><h3>{group.category}</h3></div><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></Reveal>;
          })}
        </div>
        <div className="interests-row" aria-label="Áreas de interés">
          <p>Áreas que quiero seguir explorando</p>
          <div>{interests.map(({ name, icon: Icon }) => <span key={name}><Icon size={16} />{name}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
