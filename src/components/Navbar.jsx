import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/profile';

const links = [
  ['Inicio', 'inicio'], ['Sobre mí', 'sobre-mi'], ['Habilidades', 'habilidades'],
  ['Proyectos', 'proyectos'], ['Trayectoria', 'trayectoria'], ['Certificados', 'certificados'], ['Contacto', 'contacto'],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: '-35% 0px -55%' });
    links.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="nav-wrap">
      <nav className="container nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span aria-hidden="true">&lt;</span>{profile.initials}<span aria-hidden="true">/&gt;</span></a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, id]) => <a className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined} key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions"><ThemeToggle theme={theme} onToggle={onToggleTheme} /><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button></div>
      </nav>
    </header>
  );
}
