import React from 'react';
import { Calendar, MapPin, Cpu, Code2, Terminal } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Cpu className="w-5 h-5 text-cyan-400" />;
    if (idx === 1) return <Code2 className="w-5 h-5 text-cyan-400" />;
    return <Terminal className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="experience" className="pt-20 pb-12 scroll-mt-20">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work Experience & Timeline
        </h2>
        <p className="text-sm sm:text-base text-cyan-400/90 font-medium mt-1.5">
          Hands-on technical internships, engineering responsibilities, and system contributions.
        </p>
      </div>

      {/* Vertical Timeline with Wide Cards */}
      <div className="relative pl-6 sm:pl-8 space-y-8">
        {/* Continuous vertical timeline line */}
        <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-slate-800" />

        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Timeline node */}
            <div
              className={`absolute -left-[19px] sm:-left-[23px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                exp.isCurrent
                  ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_15px_#06b6d4]'
                  : 'border-cyan-500/60 bg-[#070b14] group-hover:border-cyan-400 group-hover:bg-cyan-500/30'
              }`}
            >
              {exp.isCurrent && (
                <span className="absolute -inset-1 rounded-full bg-cyan-400/40 animate-ping" />
              )}
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-2xl tech-card border border-cyan-500/20 group-hover:border-cyan-500/45 transition-all duration-300">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    {getIcon(idx)}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Organization handle */}
              <p className="text-xs font-medium text-cyan-400/90 mb-3 pl-0 sm:pl-13">
                {exp.organization}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4 pl-0 sm:pl-13">
                {exp.description}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-13">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/60 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
