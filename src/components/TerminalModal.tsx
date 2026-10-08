import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { experiences } from '../data/experience';
import { educationList } from '../data/education';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on output change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'init-1',
          command: 'welcome',
          output: (
            <div className="space-y-1 text-slate-300">
              <p className="text-cyan-400 font-bold">
                Welcome to Rehan's Interactive Terminal v2.4.0 (x86_64-portfolio)
              </p>
              <p className="text-xs text-slate-400">
                Type <span className="text-cyan-300 font-semibold">'help'</span> to see a list of available commands.
              </p>
            </div>
          )
        }
      ]);
    }
  }, []);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-cyan-300 font-mono font-bold">about</span> - Read bio & background</div>
              <div><span className="text-cyan-300 font-mono font-bold">skills</span> - View technical proficiencies</div>
              <div><span className="text-cyan-300 font-mono font-bold">projects</span> - List all portfolio projects</div>
              <div><span className="text-cyan-300 font-mono font-bold">experience</span> - Show career & dev timeline</div>
              <div><span className="text-cyan-300 font-mono font-bold">education</span> - Show academic journey</div>
              <div><span className="text-cyan-300 font-mono font-bold">contact</span> - Show email, phone & socials</div>
              <div><span className="text-cyan-300 font-mono font-bold">github</span> - Open GitHub repository profile</div>
              <div><span className="text-cyan-300 font-mono font-bold">linkedin</span> - Open LinkedIn profile</div>
              <div><span className="text-cyan-300 font-mono font-bold">sudo</span> - Execute recruiter easter egg</div>
              <div><span className="text-cyan-300 font-mono font-bold">clear</span> - Clear terminal screen</div>
              <div><span className="text-cyan-300 font-mono font-bold">exit</span> - Close terminal window</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="text-cyan-300 font-bold">{personalInfo.fullName} • {personalInfo.title}</p>
            <p>{personalInfo.bio}</p>
            <p className="text-slate-400">Status: <span className="text-emerald-400 font-medium">{personalInfo.statusBadge}</span></p>
            <p className="text-slate-400">Location: {personalInfo.contact.location}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-semibold mb-1">Technical Skills & Proficiency:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((s) => (
                <div key={s.name} className="flex items-center justify-between bg-slate-900/60 px-2 py-1 rounded border border-slate-800">
                  <span className="text-slate-200">{s.name}</span>
                  <span className="text-cyan-400 font-mono">{s.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Featured Projects ({projects.length}):</p>
            {projects.map((p, idx) => (
              <div key={p.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="flex items-center justify-between text-cyan-300 font-semibold">
                  <span>{idx + 1}. {p.title}</span>
                  <span className="text-[10px] text-slate-400">[{p.technologies.join(', ')}]</span>
                </div>
                <p className="text-slate-300 mt-1">{p.description}</p>
                <div className="mt-1 text-slate-400">
                  GitHub: <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-200">{p.githubUrl}</a>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Experience & Milestones:</p>
            {experiences.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-300 font-semibold">{exp.period}: {exp.role}</div>
                <div className="text-slate-400 text-[11px]">{exp.organization}</div>
                <p className="text-slate-300 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Education Timeline:</p>
            {educationList.map((edu) => (
              <div key={edu.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-300 font-semibold">{edu.period}: {edu.degree}</div>
                <div className="text-slate-400 text-[11px]">{edu.institution}</div>
                <p className="text-slate-300 mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Contact & Reach Out:</p>
            <p>Email: <a href={`mailto:${personalInfo.contact.email}`} className="text-cyan-300 underline">{personalInfo.contact.email}</a></p>
            <p>WhatsApp: <a href={personalInfo.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">{personalInfo.contact.phone}</a></p>
            <p>LinkedIn: <a href={personalInfo.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">{personalInfo.contact.linkedinUsername}</a></p>
            <p>GitHub: <a href={personalInfo.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">{personalInfo.contact.githubUsername}</a></p>
            <p>Location: {personalInfo.contact.location}</p>
          </div>
        );
        break;

      case 'github':
        window.open(personalInfo.contact.githubUrl, '_blank');
        output = <p className="text-xs text-cyan-300">Opening GitHub repository profile in new tab...</p>;
        break;

      case 'linkedin':
        window.open(personalInfo.contact.linkedinUrl, '_blank');
        output = <p className="text-xs text-cyan-300">Opening LinkedIn profile in new tab...</p>;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        output = (
          <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200">
            <p className="font-bold text-cyan-400">⚡ ROOT PRIVILEGES GRANTED</p>
            <p className="mt-1">Authenticated as authorized recruiter. Candidate status: Ready for high-impact internship & full-stack roles!</p>
          </div>
        );
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Command not recognized: <span className="font-mono">'{cmd}'</span>. Type <span className="text-cyan-300 font-semibold">'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: cmd,
        output
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandList.length) {
        setHistoryIndex(nextIndex);
        setInputVal(commandList[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full flex flex-col bg-[#070b14] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden transition-all duration-300 ${
          isMaximized ? "h-[92vh] max-w-6xl" : "h-[540px] max-w-3xl"
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a101f] border-b border-cyan-500/20 select-none">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer"
              title="Close"
              aria-label="Close terminal"
            />
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer"
              title="Clear screen"
              aria-label="Clear screen"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer"
              title={isMaximized ? "Restore" : "Maximize"}
              aria-label="Maximize terminal"
            />
          </div>

          {/* Window Title */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300/80">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>rehan@portfolio: ~ (zsh)</span>
          </div>

          {/* Window actions */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="Toggle full screen"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="hover:text-rose-400 transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-3 tech-grid-bg"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              {item.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="text-cyan-400 font-bold">rehan@portfolio:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
              )}
              <div className="pl-1">{item.output}</div>
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-cyan-400 font-bold text-xs select-none">rehan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white text-xs outline-none border-none focus:ring-0 p-0 font-mono caret-cyan-400"
              placeholder="Type 'help' for commands..."
              autoFocus
              spellCheck={false}
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer info */}
        <div className="px-4 py-2 bg-[#080d19] border-t border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Type <span className="text-cyan-400">help</span> for command list</span>
          <span>Tab / Enter to run</span>
        </div>
      </div>
    </div>
  );
};
