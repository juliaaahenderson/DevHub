import Hero from '@/components/Hero';
import PlatformIntro from '@/components/PlatformIntro';
import PathTimeline from '@/components/PathTimeline';
import DocPreview from '@/components/DocPreview';
import ToolShowcase from '@/components/ToolShowcase';
import MicrosoftEcosystem from '@/components/MicrosoftEcosystem';
import ValueProps from '@/components/ValueProps';
import TrendingTech from '@/components/TrendingTech';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Platform Introduction */}
      <PlatformIntro />

      {/* 3. Learn Pathway Timeline */}
      <PathTimeline />

      {/* 4. Documentation Preview */}
      <DocPreview />

      {/* 5. Tool Explorer Showcase */}
      <ToolShowcase />

      {/* 6. Microsoft 365 Orbiting Ecosystem */}
      <MicrosoftEcosystem />

      {/* 7. Value Propositions */}
      <ValueProps />

      {/* 8. Trending Tech Slider Row */}
      <TrendingTech />

      {/* 9. Final CTA - Premium Grid Matrix Layout */}
      <section className="pt-4 pb-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#050917] text-white border border-slate-900 shadow-[0_24px_50px_-15px_rgba(3,7,18,0.5)] px-6 py-12 sm:px-12 sm:py-16">
            
            {/* Glowing card accents & rich background glow */}
            <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-blue-600/25 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Faint clean grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Heading & Buttons */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] max-w-xl text-white">
                  Build, reference, <br />
                  and optimize{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
                    your stacks
                  </span>
                </h2>

                {/* Performance Badge */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Built for modern builders
                  </div>
                </div>

                <p className="text-slate-400 text-sm sm:text-base font-normal max-w-md">
                  Structured learning and stable references
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all gap-2 group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Stacked Transparent Cards */}
              <div className="lg:col-span-6 space-y-4">
                {/* Card 1 */}
                <div className="relative p-5 bg-[#0e172e]/60 border border-slate-800/85 rounded-2xl flex flex-col items-start gap-1.5 transition-all duration-300 hover:bg-[#0e172e]/85 hover:border-slate-700/60 group shadow-md shadow-slate-950/20">
                  <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Structured learning paths
                  </h4>
                  <p className="text-xs text-slate-300">
                    Go from syntax basics to production deployment pipelines
                  </p>
                </div>

                {/* Card 2 */}
                <div className="relative p-5 bg-[#0e172e]/60 border border-slate-800/85 rounded-2xl flex flex-col items-start gap-1.5 transition-all duration-300 hover:bg-[#0e172e]/85 hover:border-slate-700/60 group shadow-md shadow-slate-950/20">
                  <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Interactive API documentation
                  </h4>
                  <p className="text-xs text-slate-300">
                    Search and cross-reference versioned language features
                  </p>
                </div>

                {/* Card 3 */}
                <div className="relative p-5 bg-[#0e172e]/60 border border-slate-800/85 rounded-2xl flex flex-col items-start gap-1.5 transition-all duration-300 hover:bg-[#0e172e]/85 hover:border-slate-700/60 group shadow-md shadow-slate-950/20">
                  <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Premium developer tools directory
                  </h4>
                  <p className="text-xs text-slate-300">
                    Compare software specs and ecosystem capabilities
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
