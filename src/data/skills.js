import { Braces, Cloud, Code2, Cpu, Database, GitBranch, Network, PanelsTopLeft, ChartNoAxesCombined, Bot } from 'lucide-react';

export const skillGroups = [
  { category: 'Frontend', icon: PanelsTopLeft, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Backend', icon: Braces, skills: ['Node.js', 'GraphQL', 'APIs REST'] },
  { category: 'Lenguajes', icon: Code2, skills: ['Python', 'JavaScript', 'SQL'] },
  { category: 'Bases de datos', icon: Database, skills: ['MySQL', 'PostgreSQL'] },
  { category: 'Data & IA', icon: Bot, skills: ['Machine Learning', 'TensorFlow / Keras', 'CNN', 'Análisis de datos', 'Power BI'] },
  { category: 'Cloud', icon: Cloud, skills: ['AWS'] },
  { category: 'Redes', icon: Network, skills: ['Cisco', 'Packet Tracer', 'VLAN'] },
  { category: 'Hardware & IoT', icon: Cpu, skills: ['Arduino', 'Sensores', 'Automatización'] },
  { category: 'Herramientas', icon: GitBranch, skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma'] },
];

export const interests = [
  { name: 'Desarrollo web', icon: PanelsTopLeft },
  { name: 'Backend', icon: Braces },
  { name: 'Inteligencia artificial', icon: Bot },
  { name: 'Análisis de datos', icon: ChartNoAxesCombined },
  { name: 'Cloud computing', icon: Cloud },
  { name: 'IoT y redes', icon: Network },
];
