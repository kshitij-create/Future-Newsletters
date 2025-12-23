import React, { useState } from 'react';
import { NeonButton } from './NeonButton';
import { Mail, CheckCircle, Terminal } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto p-6 sm:p-7 border border-green-500/50 bg-green-900/10 backdrop-blur-md rounded-sm text-center">
        <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-400 mx-auto mb-3 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
        <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-1">ACCESS GRANTED</h3>
        <p className="text-green-300 font-mono text-xs sm:text-sm mb-1.5">
          You&apos;re in. Check your inbox for your first issue in the next few minutes.
        </p>
        <p className="text-green-200/80 font-mono text-[10px] sm:text-[11px]">
          Didn&apos;t get it? Check your spam folder or mark FUTURE.IO as trusted.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-[10px] sm:text-xs text-gray-500 hover:text-white uppercase tracking-widest underline decoration-gray-700 underline-offset-4"
        >
          Back to signup
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto relative z-10 group">
      {/* Decorative box behind */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-sm opacity-20 group-hover:opacity-40 blur transition duration-500"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-deep-space/95 border border-gray-800 px-2.5 py-2.5 sm:px-3.5 sm:py-3 flex flex-col sm:flex-row items-stretch gap-0 rounded-md shadow-2xl backdrop-blur-xl"
      >
        <div className="flex-1 relative flex items-center">
          <Mail className="absolute left-3 sm:left-4 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email"
            className="w-full bg-transparent text-white font-mono placeholder-gray-600 pl-9 sm:pl-11 pr-10 py-2.5 sm:py-3 focus:outline-none focus:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gray-800 text-xs sm:text-sm"
            required
          />
          {/* Blinking cursor effect for aesthetic */}
          <span className="absolute right-3 sm:right-4 w-1.5 h-4 sm:w-2 sm:h-5 bg-neon-cyan animate-pulse hidden sm:block" />
        </div>

        <NeonButton
          text="Get the weekly briefing"
          type="submit"
          loading={status === 'loading'}
          className="w-full sm:w-auto mt-2.5 sm:mt-0 text-[11px] sm:text-xs py-3 sm:py-3.5"
        />
      </form>

      <div className="flex justify-between mt-3 px-2">
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          System Online
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          <Terminal className="w-3 h-3" />
          V.2.0.45
        </div>
      </div>
    </div>
  );
};