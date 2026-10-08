import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personal';

interface NavbarProps {
  onOpenTerminal: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Keyboard shortcut Ctrl+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onOpenTerminal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenTerminal]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_25px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#000000]/80 backdrop-blur-sm border-b border-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-lg font-extrabold tracking-wider text-white font-mono group-hover:text-cyan-300 transition-colors">
              REHAN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Terminal Console matching screenshot */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Terminal Console Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all cursor-pointer"
              title="Open Interactive Terminal (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Terminal Console</span>
              <kbd className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 border border-slate-700 text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* GitHub */}
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
            >
              <GithubIcon size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          {/* Mobile Menu & Terminal Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
              title="Open Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-[#000000]/98 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Connect with Rehan:</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
