import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  return <footer><div className="container footer-grid"><div><a className="brand" href="#inicio"><span>&lt;</span>{profile.initials}<span>/&gt;</span></a><p>Diseñado y desarrollado con React.</p></div><div className="footer-links">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><Icon size={16} />{label}<ArrowUpRight size={14} /></a>)}</div><p className="copyright">© {new Date().getFullYear()} {profile.name}</p></div></footer>;
}
