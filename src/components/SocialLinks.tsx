import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personal';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  iconSize = 18,
  showLabels = false
}) => {
  const links = [
    {
      name: "GitHub",
      url: personalInfo.contact.githubUrl,
      icon: (size: number) => <GithubIcon size={size} />,
      label: "GitHub"
    },
    {
      name: "LinkedIn",
      url: personalInfo.contact.linkedinUrl,
      icon: (size: number) => <LinkedinIcon size={size} />,
      label: "LinkedIn"
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.contact.email}`,
      icon: (size: number) => <Mail size={size} />,
      label: "Email"
    },
    {
      name: "WhatsApp",
      url: personalInfo.contact.whatsappUrl,
      icon: (size: number) => <MessageSquare size={size} />,
      label: "WhatsApp"
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all duration-200"
          >
            {link.icon(iconSize)}
            {showLabels && <span className="text-xs font-medium">{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
};
