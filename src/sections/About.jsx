import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section className="section section-pad" id="sobre-mi">
      <div className="container">
        <SectionTitle number="01" eyebrow="Perfil" title="Pensamiento técnico, mirada humana." />
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="lead">{profile.bio}</p>
            <p>{profile.objective}</p>
            <a className="text-link" href="#contacto">Hablemos de una oportunidad <ArrowUpRight size={17} /></a>
          </Reveal>
          <Reveal className="stats-grid" delay={.1}>
            {profile.stats.map((stat, index) => <div className="stat" key={stat.label}><span>0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></div>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
