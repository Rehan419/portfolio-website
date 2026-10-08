import React from 'react';
import { ExternalLink, Terminal, Code2, Brain, GitBranch, Award } from 'lucide-react';
import type { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const getIcon = () => {
    switch (certificate.iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  const hasCertificateUrl = Boolean(certificate.certificateUrl && certificate.certificateUrl.trim().length > 0);

  return (
    <div className="flex flex-col justify-between p-5 rounded-2xl tech-card group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all">
            {getIcon()}
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300/80 border border-slate-700/60">
            {certificate.date}
          </span>
        </div>

        {/* Title & Issuer */}
        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
          {certificate.title}
        </h3>
        <p className="text-xs font-medium text-cyan-400/80 mb-2.5">
          {certificate.issuer}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-300/80 leading-relaxed mb-4 min-h-[42px]">
          {certificate.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {certificate.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-3 border-t border-slate-800/80">
        {hasCertificateUrl ? (
          <a
            href={certificate.certificateUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="w-full py-2 px-3 rounded-lg text-xs font-medium bg-slate-800/40 text-slate-500 border border-slate-700/40 cursor-not-allowed text-center"
          >
            Certificate Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};
