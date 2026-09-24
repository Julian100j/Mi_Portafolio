import { ArrowUpRight, BookOpen, GitFork, Github, Star, Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/profile';
import { useGitHub } from '../hooks/useGitHub';

export default function GitHubSection() {
  const { loading, profile: githubProfile, repos, error } = useGitHub(profile.githubUsername);
  return (
    <section className="section section-pad github-section" id="github">
      <div className="container">
        <SectionTitle number="04" eyebrow="Código abierto" title="Actividad que habla por el trabajo." description="Conexión preparada con la API pública de GitHub, sin tokens ni credenciales privadas." />
        {loading && <div className="github-skeleton" aria-label="Cargando datos de GitHub"><span /><span /><span /></div>}
        {!loading && error && <Reveal className="github-empty"><Github size={34} /><div><h3>GitHub listo para conectar</h3><p>{error}</p></div></Reveal>}
        {!loading && githubProfile && <Reveal className="github-panel">
          <div className="github-profile">
            <img src={githubProfile.avatar_url} alt={`Avatar de ${githubProfile.login}`} width="88" height="88" loading="lazy" />
            <div><span>@{githubProfile.login}</span><h3>{githubProfile.name || githubProfile.login}</h3><p>{githubProfile.bio || 'Perfil de desarrollo en GitHub.'}</p></div>
            <div className="github-stats"><span><BookOpen size={17} /><b>{githubProfile.public_repos}</b> repositorios</span><span><Users size={17} /><b>{githubProfile.followers}</b> seguidores</span></div>
          </div>
          <div className="repo-grid">{repos.map((repo) => <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"><div><BookOpen size={17} /><ArrowUpRight size={17} /></div><h4>{repo.name}</h4><p>{repo.description || 'Repositorio público en GitHub.'}</p><span>{repo.language || 'Código'} · <Star size={14} /> {repo.stargazers_count} · <GitFork size={14} /> {repo.forks_count}</span></a>)}</div>
          <a className="button button-ghost" href={githubProfile.html_url} target="_blank" rel="noreferrer"><Github size={18} /> Ver perfil completo</a>
        </Reveal>}
      </div>
    </section>
  );
}
