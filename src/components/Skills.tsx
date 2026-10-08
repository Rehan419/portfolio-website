import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { skills } from '../data/skills';

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'backend' | 'frontend' | 'tools'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Cloud & Tools' },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" ref={sectionRef} className="pt-16 pb-12 scroll-mt-20">
      {/* Title & Subtitle matching Image 3 */}
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-medium mt-1">
          Interactive proficiency visualizations, core languages, backend architecture, and cloud tooling.
        </p>
      </div>

      {/* Controls Bar: Search Input (Left) & Category Filter Pills (Right) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Search Skill Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skill..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#070b14]/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#070b14]/90 border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-semibold shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Skills Grid matching Image 3 */}
      {filteredSkills.length === 0 ? (
        <div className="p-8 text-center text-slate-500 font-mono text-sm bg-[#060a12]/60 rounded-xl border border-slate-800">
          No skills matching "{searchQuery}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 rounded-xl tech-card border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 group"
            >
              {/* Skill Name & Percentage */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {skill.name}
                </span>
                <span className="font-mono text-xs font-bold text-cyan-400">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar with Unique Gradient Color */}
              <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden mt-3.5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.barColor} transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(6,182,212,0.3)]`}
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
