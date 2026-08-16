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

      {/* 9. Final CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid and gradient */}
        <div className="absolute inset-0 tech-dot-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Launch your project
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Your next build starts here.
          </h2>

          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Learn the skills, reference structured API documentation, select developer tools, and discover productivity software configurations to turn projects into realities.
          </p>

          <div>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-lg gap-2"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
