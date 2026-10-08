import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  badge?: string | number;
  actionText?: string;
  onActionClick?: () => void;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
  badge,
  actionText,
  onActionClick,
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-between mb-8 pb-3 border-b border-cyan-500/10 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            {title}
            {badge !== undefined && (
              <span className="text-sm font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {badge}
              </span>
            )}
          </h2>
        </div>
      </div>

      {actionText && (
        <button
          onClick={onActionClick}
          className="group flex items-center gap-1.5 text-xs md:text-sm font-medium text-cyan-400/80 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <span>{actionText}</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </div>
  );
};
