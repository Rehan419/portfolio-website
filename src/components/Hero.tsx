import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Code2, Compass } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personal';

const TYPING_PHRASES = [
  "Scalable System Builder",
  "Full-Stack Developer",
  "Python & AI Developer",
  "CS Student Developer"
];

export const Hero: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  // Typewriter effect states
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 80);
      } else {
        // Finished typing full phrase, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        }, 40);
      } else {
        // Finished deleting, pause briefly before moving to next phrase
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  // Live ticking local clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs (order-2 on mobile, order-1 on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] md:text-xs font-mono uppercase tracking-wider text-cyan-300 font-medium">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Main Title with Typewriter Animation */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] min-h-[70px] sm:min-h-[110px] lg:min-h-[135px] flex items-center justify-center lg:justify-start flex-wrap">
                <span>{currentText}</span>
                {/* Glowing terminal cursor pipe */}
                <span className="inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[48px] lg:h-[54px] bg-cyan-400 ml-1.5 align-middle animate-pulse shadow-[0_0_12px_#06b6d4]" />
              </h1>

              {/* Subheading with Sparkle icon */}
              <div className="inline-flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-bold text-cyan-400 tracking-tight glow-cyan-text">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{personalInfo.subtitle}</span>
              </div>
            </div>

            {/* Narrative Intro */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* 3 Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Button 1: View GitHub (White background with black text) */}
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer"
              >
                <GithubIcon size={16} className="text-slate-900" />
                <span>View GitHub</span>
              </a>

              {/* Button 2: Connect */}
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#09101f] text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-[1.02] cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Button 3: Explore Work */}
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Work</span>
              </button>
            </div>
          </div>

          {/* Right Column: Futuristic Circular Glowing Profile Frame (order-1 on mobile, order-2 on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer decorative segmented cyan glowing ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow" />
              
              {/* Secondary smooth glow ring */}
              <div className="absolute inset-4 rounded-full border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.25)] animate-pulse-subtle" />

              {/* Tech corner accent notches */}
              <div className="absolute top-0 right-10 w-4 h-1 bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
              <div className="absolute bottom-4 left-8 w-4 h-1 bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />

              {/* Profile Image Container */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-cyan-500/40 via-slate-900 to-blue-600/40 border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Rehan Irfan"
                  className="w-full h-full object-cover object-top rounded-full filter contrast-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>

              {/* Floating Status Badge 1: Top Right */}
              <div className="absolute top-4 sm:top-6 -right-2 sm:right-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1122]/90 border border-cyan-500/40 text-slate-200 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-semibold text-emerald-300">{personalInfo.profileBadge1}</span>
              </div>

              {/* Floating Status Badge 2: Bottom Center/Right */}
              <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1122]/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md whitespace-nowrap">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-medium">{personalInfo.profileBadge2}</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Hero Metric / Status Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
          {/* Card 1: STATUS */}
          <div className="p-4 rounded-xl tech-card border border-cyan-500/20">
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              STATUS
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Open to Work</span>
            </div>
          </div>

          {/* Card 2: LOCAL TIME */}
          <div className="p-4 rounded-xl tech-card border border-cyan-500/20">
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              LOCAL TIME
            </span>
            <div className="text-xs sm:text-sm font-bold text-white font-mono">
              {localTime || '04:06:53 PM'}
            </div>
          </div>

          {/* Card 3: LOCATION */}
          <div className="p-4 rounded-xl tech-card border border-cyan-500/20">
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              LOCATION
            </span>
            <div className="text-xs sm:text-sm font-semibold text-white font-mono truncate" title="Lahore, PK (Remote)">
              Lahore, PK (Remote)
            </div>
          </div>

          {/* Card 4: PRIMARY FOCUS */}
          <div className="p-4 rounded-xl tech-card border border-cyan-500/20">
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              PRIMARY FOCUS
            </span>
            <div className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
              Full Stack & Python
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
