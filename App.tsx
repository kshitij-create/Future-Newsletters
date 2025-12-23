import React from 'react';
import { PixelBackground } from './components/PixelBackground';
import { SignupForm } from './components/SignupForm';
import { Zap, Globe, Cpu, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-neon-purple/50 transition-colors group">
    <Icon className="w-8 h-8 text-neon-cyan mb-4 group-hover:text-neon-purple transition-colors duration-300" />
    <h3 className="text-lg font-bold font-sans mb-2 text-white">{title}</h3>
    <p className="text-gray-400 font-mono text-xs leading-relaxed">{desc}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col">
      <PixelBackground />

      {/* Navigation / Header */}
      <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center border-b border-white/5 bg-deep-space/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-cyan rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.5)]">
            <span className="text-deep-space font-bold text-xl -rotate-45">F</span>
          </div>
          <span className="font-sans font-bold text-xl tracking-tighter text-white">
            FUTURE<span className="text-neon-cyan">.IO</span>
          </span>
        </div>
        <div className="hidden sm:flex gap-6 font-mono text-xs text-gray-400">
          <a href="#" className="hover:text-neon-cyan transition-colors">
            SAMPLE ISSUE
          </a>
          <a href="#" className="hover:text-neon-cyan transition-colors">
            WHY THIS EXISTS
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-12 sm:py-20">
        {/* Hero Text */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-block px-3 py-1 mb-5 border border-neon-purple/50 bg-neon-purple/20 rounded-full shadow-[0_0_18px_rgba(188,19,254,0.4)]">
            <span className="text-neon-purple font-mono text-[11px] sm:text-xs tracking-widest uppercase">
              Weekly briefing from the near future
            </span>
          </div>

          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-2.5">
            UPGRADE YOUR INTELLECT
          </p>

          <h1 className="text-[2.35rem] sm:text-6xl md:text-7xl font-sans font-bold text-white leading-tight mb-4 sm:mb-5 tracking-tight drop-shadow-[0_0_22px_rgba(0,0,0,0.8)]">
            Stay ahead of AI, tech & the future
          </h1>

          <p className="max-w-2xl mx-auto text-gray-100 text-base sm:text-lg font-sans leading-relaxed">
            A short weekly email for founders, builders and curious minds. One big idea, a few curated links, and a
            practical takeaway—so you understand what&apos;s coming next without drowning in noise.
          </p>
        </div>

        {/* Signup Section */}
        <section className="w-full max-w-4xl mx-auto mb-16 sm:mb-20">
          <SignupForm />

          {/* Trust strip */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>One thoughtful email per week</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-gray-600" />
              <span>No spam, ever • Unsubscribe anytime</span>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="w-full max-w-4xl mx-auto mb-12 px-4 text-left">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neon-cyan mb-4">
            WHAT YOU&apos;LL RECEIVE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-100">
            <div className="border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[0_0_18px_rgba(0,0,0,0.7)]">
              <h3 className="font-sans font-semibold mb-1.5 text-white text-sm sm:text-[0.95rem]">1 big idea</h3>
              <p className="text-[11px] sm:text-xs text-gray-200 font-mono leading-relaxed">
                A clear breakdown of the most important shift in tech, culture or the economy that week.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[0_0_18px_rgba(0,0,0,0.7)]">
              <h3 className="font-sans font-semibold mb-1.5 text-white text-sm sm:text-[0.95rem]">Curated signals</h3>
              <p className="text-[11px] sm:text-xs text-gray-200 font-mono leading-relaxed">
                Handpicked links, tools and threads worth your attention—always with context, never just a dump.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[0_0_18px_rgba(0,0,0,0.7)]">
              <h3 className="font-sans font-semibold mb-1.5 text-white text-sm sm:text-[0.95rem]">Practical takeaway</h3>
              <p className="text-[11px] sm:text-xs text-gray-200 font-mono leading-relaxed">
                A concrete way to apply the insight to your work, projects or thinking in under 5 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto px-4">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neon-cyan mb-4 text-left">
              DESIGNED FOR BUILDERS OF TOMORROW
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureCard
                icon={Zap}
                title="Rapid Insights"
                desc="A fast, opinionated briefing on the week’s most important signal in AI, tech or culture—no fluff, no filler."
              />
              <FeatureCard
                icon={Globe}
                title="Global Trends"
                desc="Pattern recognition across markets, memes and movements so you can see waves before they break."
              />
              <FeatureCard
                icon={Cpu}
                title="Tech, explained"
                desc="Clear, human-first breakdowns of complex systems—from AI models to protocols—so you actually get it."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Zero Spam"
                desc="One clean email per week. No promos, no partners, no surprise sequences. Unsubscribe with one click."
              />
            </div>
          </div>
        </section>

        {/* Why this exists */}
        <section className="w-full max-w-3xl mx-auto mt-16 px-4 text-left">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neon-cyan mb-3.5">
            WHY THIS EXISTS
          </p>
          <p className="text-sm sm:text-[0.98rem] text-gray-100 font-sans leading-relaxed mb-3.5">
            The internet is saturated with hot takes, shallow threads and algorithmic noise. FUTURE.IO is a calm,
            high-signal channel for people who actually build, research and think about what comes next.
          </p>
          <p className="text-sm sm:text-[0.98rem] text-gray-200 font-sans leading-relaxed">
            No doom, no hype cycles—just grounded analysis, careful curation and a bias toward ideas you can use.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-deep-space/80 backdrop-blur text-center py-8">
        <p className="text-gray-600 font-mono text-xs">
          © 2050 FUTURE.IO <span className="opacity-50">// Independent, reader-supported newsletter</span>
          <br />
          <span className="opacity-50">One email. Once a week. That&apos;s it.</span>
        </p>
      </footer>
    </div>
  );
};

export default App;