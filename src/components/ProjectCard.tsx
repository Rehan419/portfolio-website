import React from 'react';
import { ExternalLink, Globe, Code2, Cpu, Cloud, ShoppingBag, Terminal as TerminalIcon } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = () => {
    switch (project.iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      default:
        return <TerminalIcon className="w-5 h-5 text-cyan-400" />;
    }
  };

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <div className="flex flex-col justify-between p-5 rounded-2xl tech-card group">
      <div>
        {/* Top Header: Icon + Category/Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300">
            {getIcon()}
          </div>
          {project.featured && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-slate-300/85 leading-relaxed mb-4 min-h-[50px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-200/90 border border-cyan-900/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
        {/* Live Demo Button */}
        {hasLiveUrl ? (
          <a
            href={project.liveUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Live deployment is currently being finalized"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-slate-800/40 text-slate-500 border border-slate-700/40 cursor-not-allowed"
          >
            <span>Live Demo Coming Soon</span>
          </button>
        )}

        {/* GitHub Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="p-2 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
        >
          <GithubIcon size={16} />
        </a>
      </div>
    </div>
  );
};
