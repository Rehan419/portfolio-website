import React from 'react';
import { Layers, Cpu, Database, Cloud } from 'lucide-react';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';

export const About: React.FC = () => {
  const stats = [
    { label: "Completed Projects", value: `${projects.length}+` },
    { label: "Certifications", value: `${certificates.length}` },
    { label: "Python & React", value: "Core" },
    { label: "Degree Standing", value: "BSCS" },
  ];

  const pillars = [
    {
      icon: Layers,
      title: "Full-Stack & Web Systems",
      description: "Architecting responsive user interfaces, modular backend logic, and scalable web apps with React, TypeScript, and Tailwind CSS."
    },
    {
      icon: Cpu,
      title: "Python & Intelligent Systems",
      description: "Implementing algorithmic problem solving, Python backend automation, and conversational AI model integrations."
    },
    {
      icon: Database,
      title: "Databases & OOP Architecture",
      description: "Applying Object-Oriented principles, relational schema design, indexing, and efficient data handling across MySQL and modern stores."
    },
    {
      icon: Cloud,
      title: "Git Workflows & Cloud Deployment",
      description: "Practicing version control, branch management, collaborative pull requests, and automated deployment on Vercel and cloud platforms."
    }
  ];

  return (
    <section id="about" className="pt-20 pb-12 scroll-mt-20">
      {/* Section Title & Subtitle */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-cyan-400/90 font-medium mt-1.5">
          Turning Ideas Into Powerful Digital Experiences That Connect With People Bring Your Vision to Life.

        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Stats */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              <b>We are focused on designing and developing fast, responsive, and visually engaging websites</b> that combine clean design with practical functionality. From polished landing pages to dynamic web applications, we turn concepts into digital experiences that are built to perform across devices.
              Our approach is simple: understand the idea, refine the experience, and build it with attention to detail. We focus on creating seamless digital experiences that are modern, intuitive, and tailored to each project’s unique goals.
            </p>
            <p>
              We believe a great website is more than just good design — it should feel smooth, communicate clearly, and give users a reason to stay.
<br />
              <b>Design. Develop. Deliver.</b>
            </p>
          </div>

          {/* Metric Stats Cards (4 grid boxes like screenshot) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-4 rounded-xl tech-card border-l-2 ${i === 0
                    ? 'border-l-cyan-400'
                    : i === 1
                      ? 'border-l-blue-400'
                      : i === 2
                        ? 'border-l-teal-400'
                        : 'border-l-emerald-400'
                  }`}
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 4 Pillar Feature Cards (like screenshot) */}
        <div className="lg:col-span-5 space-y-3.5">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 rounded-xl tech-card group hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
