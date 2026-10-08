import React from 'react';

interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  technologies?: string[];
  isCurrent?: boolean;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  title,
  subtitle,
  description,
  technologies,
  isCurrent = false,
  isLast = false,
}) => {
  return (
    <div className="relative pl-7 pb-8 group last:pb-2">
      {/* Vertical connecting line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-slate-800" />
      )}

      {/* Node Dot */}
      <div
        className={`absolute left-[5px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
          isCurrent
            ? "border-cyan-400 bg-cyan-400 shadow-[0_0_12px_#06b6d4] scale-110"
            : "border-cyan-500/60 bg-[#070b14] group-hover:border-cyan-400 group-hover:bg-cyan-500/20"
        }`}
      >
        {isCurrent && (
          <span className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping opacity-75" />
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 rounded-xl tech-card transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {period}
          </span>
          {isCurrent && (
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Current
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
          {title}
        </h3>
        <p className="text-xs font-medium text-cyan-400/80 mb-2">
          {subtitle}
        </p>

        <p className="text-xs md:text-sm text-slate-300/90 leading-relaxed mb-3">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-700/60 group-hover:border-cyan-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
