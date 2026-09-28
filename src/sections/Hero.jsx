import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Download, Terminal } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="eyebrow"><span className="status-dot" /> Disponible para nuevas oportunidades</p>
          <h1>Construyo soluciones donde <span>software, datos e ideas</span> se encuentran.</h1>
          <p className="hero-role">{profile.name} · {profile.role}</p>
          <p className="hero-copy">Me interesa convertir problemas reales en soluciones digitales útiles, combinando desarrollo de software, inteligencia artificial y análisis de datos.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowDownRight size={18} /></a>
            <a className="button button-ghost" href={`https://github.com/${profile.githubUsername}`} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a className="icon-button" href={`https://linkedin.com/in/${profile.linkedinUsername}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a className="button button-ghost" href={profile.cvPath} download aria-label="Descargar hoja de vida"><Download size={18} /> Hoja de vida</a>
          </div>
        </motion.div>
        <motion.div className="terminal-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.15 }} aria-label="Resumen profesional">
          <div className="terminal-head"><span /><span /><span /><p><Terminal size={15} /> profile.js</p></div>
          <pre><code><b>const</b> perfil = {'{'}{`\n`}  enfoque: [<i>'software'</i>, <i>'IA'</i>, <i>'datos'</i>],{`\n`}  mentalidad: <i>'aprendizaje continuo'</i>,{`\n`}  objetivo: <i>'crear impacto útil'</i>,{`\n`}  estado: <em>true</em>{`\n`}{'}'};</code></pre>
          <div className="terminal-foot"><span>01</span><span>ideas → sistemas</span></div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#sobre-mi"><span>Explorar</span><ArrowDownRight size={18} /></a>
    </section>
  );
}
