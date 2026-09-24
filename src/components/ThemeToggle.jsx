import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return <button className="theme-toggle" type="button" onClick={onToggle} aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>;
}
