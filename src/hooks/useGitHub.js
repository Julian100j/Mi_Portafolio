import { useEffect, useState } from 'react';

export function useGitHub(username) {
  const [state, setState] = useState({ loading: true, profile: null, repos: [], error: null });

  useEffect(() => {
    if (!username || username.startsWith('TU_')) {
      setState({ loading: false, profile: null, repos: [], error: 'Configura tu usuario en src/data/profile.js para conectar GitHub.' });
      return;
    }
    const controller = new AbortController();
    async function load() {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`, { signal: controller.signal }),
        ]);
        if (!profileResponse.ok || !reposResponse.ok) throw new Error('No fue posible consultar GitHub.');
        const [profile, repos] = await Promise.all([profileResponse.json(), reposResponse.json()]);
        setState({ loading: false, profile, repos: repos.filter((repo) => !repo.fork).slice(0, 3), error: null });
      } catch (error) {
        if (error.name !== 'AbortError') setState({ loading: false, profile: null, repos: [], error: error.message });
      }
    }
    load();
    return () => controller.abort();
  }, [username]);
  return state;
}
