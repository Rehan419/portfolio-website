import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ArrowUp, ChevronRight, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About Me', target: 'about' },
    { name: 'Work Experience', target: 'experience' },
    { name: 'Key Projects', target: 'projects' },
    { name: 'Certifications', target: 'certifications' },
    { name: 'Technical Skills', target: 'skills' },
    { name: 'Education', target: 'education' },
    { name: 'Get in Touch', target: 'contact' },
  ];

  return (
    <footer className="mt-20 border-t border-cyan-500/15 bg-[#000000] pt-14 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Footer Grid matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Bio (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-extrabold tracking-wider text-white font-mono">
              {personalInfo.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science undergraduate at NationaL University of Modern Languages (NUML). Passionate about building robust backend architectures, scalable REST APIs, and full-stack web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Open for Internships & Roles</span>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>QUICK LINKS</span>
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer group"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT CONTACT</span>
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="hover:text-cyan-300 transition-colors truncate"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={personalInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Column 4: Connect (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5" />
              <span>CONNECT</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 flex items-center justify-center transition-all"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalInfo.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 flex items-center justify-center transition-all"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={personalInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 flex items-center justify-center transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Image 3 */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {personalInfo.footer.copyrightYear} {personalInfo.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
