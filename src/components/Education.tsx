import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const educationItems = [
    {
      id: "BSCS",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "National University of Modern Languages",
      period: "2024 – 2028 (In Progress)",
      location: "Lahore, Pakistan",
      badge: "CGPA: 3.61 / 4.0",
      description: "Rigorous 4-year undergraduate curriculum focusing on web engineering principles, Python algorithm design, distributed computing, and modern full-stack systems.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Python & C++)",
        "Web Engineering",
        "Operating Systems & Concurrency",
        "Theory of Automata & Computation",
        "Python",
        "C++ & C",
        "Digital Logic Designs (DLD)"
      ]
    },
    {
      id: "ICS (physics)",
      degree: "Intermediate in Computer Science (ICS / FSc)",
      institution: "Government Islamia College Lahore Cantt",
      period: "2022 – 2024",
      location: "Lahore, Pakistan",
      badge: "Grade: C (CS)",
      description: "Completed higher secondary education with distinction, building strong foundations in mathematics, algorithmic logic, computer architecture, and programming fundamentals.",
      coursework: [
        "Mathematics & Calculus",
        "Computer Science Fundamentals",
        "Physics & Electronics",
        "Object-Oriented Basics"
      ]
    }
  ];

  return (
    <section id="education" className="pt-16 pb-8 scroll-mt-20">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education
        </h2>
        <p className="text-sm sm:text-base text-cyan-400/90 font-medium mt-1.5">
          Academic foundation, computer science degree coursework, and credentials.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8">
        {/* Continuous vertical timeline connector line */}
        <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/60 via-cyan-500/25 to-slate-800" />

        {educationItems.map((edu, idx) => (
          <div key={edu.id} className="relative group">
            {/* Timeline node */}
            <div
              className={`absolute -left-[19px] sm:-left-[23px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                idx === 0
                  ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_15px_#06b6d4]'
                  : 'border-cyan-500/60 bg-[#000000] group-hover:border-cyan-400 group-hover:bg-cyan-500/30'
              }`}
            >
              {idx === 0 && (
                <span className="absolute -inset-1 rounded-full bg-cyan-400/40 animate-ping" />
              )}
            </div>

            {/* Education Card matching reference Image 5 */}
            <div className="p-6 sm:p-7 rounded-2xl tech-card border border-cyan-500/25 group-hover:border-cyan-500/50 transition-all duration-300">
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Badges on right side */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.location}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                    {edu.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Core Coursework & Key Subjects */}
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CORE COURSEWORK & KEY SUBJECTS:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {edu.coursework.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/90 border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
