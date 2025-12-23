import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NeonButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  loading?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ text, onClick, type = "button", className = "", loading = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        group relative px-3 bg-transparent 
        border border-neon-cyan text-neon-cyan font-mono font-bold tracking-widest uppercase
        transition-all duration-300 ease-out
        hover:bg-neon-cyan hover:text-deep-space hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      <span className="absolute inset-0 bg-neon-cyan/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      <span className="relative flex items-center justify-center gap-3">
        {loading ? 'PROCESSING...' : text}
        {!loading && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      
      {/* Corner accents */}
      <span className="absolute top-[-2px] left-[-2px] w-2 h-2 border-t-2 border-l-2 border-neon-cyan" />
      <span className="absolute bottom-[-2px] right-[-2px] w-2 h-2 border-b-2 border-r-2 border-neon-cyan" />
    </button>
  );
};
