import React from 'react';

export const SectionDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full my-8 sm:my-12 flex items-center justify-center ${className}`}>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] opacity-70" />
    </div>
  );
};
