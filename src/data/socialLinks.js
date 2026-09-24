import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from './profile';

export const socialLinks = [
  { label: 'GitHub', href: `https://github.com/${profile.githubUsername}`, icon: Github },
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${profile.linkedinUsername}/`, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];
