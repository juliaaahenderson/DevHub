import { GraduationCap, BookOpen, Wrench, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ValueProps() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/50 relative overflow-hidden">
      {/* Decorative dashed arch connecting top cards in background */}
      <div className="absolute top-[28%] left-[18%] right-[18%] h-32 pointer-events-none hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90 C 200 -20, 600 -20, 790 90" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Decorative sparkles & dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 tech-dot-grid opacity-[0.25]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Symmetrical Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]">
            A <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Complete</span> Tech Workspace
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mt-4">
            Eliminate context-switching. DevHub links your syntax tutorials, technical documentation catalogs, developer tools, and team productivity apps.
          </p>
        </div>

        {/* Symmetrical 2x2 Grid matching the 1st visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Structured Learning Paths */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left visual column */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center relative min-h-[160px]">
                {/* Soft backdrop glow */}
                <div className="absolute w-28 h-28 rounded-full bg-blue-400/10 blur-xl pointer-events-none" />
                
                {/* Floating Icon Node top-left */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 shadow-sm z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* 5 dots grid vertical column */}
                <div className="absolute left-0 bottom-4 flex flex-col gap-1 opacity-40 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* Highly detailed volumetric 3D Staircase illustration */}
                <div className="w-full max-w-[130px] h-[130px] flex items-center justify-center relative overflow-visible select-none">
                  <Image 
                    src="/value-prop-learn.png" 
                    alt="Structured Learning Paths 3D illustration"
                    width={130}
                    height={130}
                    priority
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right text content column */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Structured Learning Paths
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Study clean layouts, object models, and backend databases. Progress from foundations directly through deployment configs.
                </p>
                <div className="pt-2">
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-50 text-[10px] font-extrabold text-blue-600 uppercase tracking-wider hover:bg-blue-100/80 transition-colors"
                  >
                    Learn Step-By-Step
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Technical Reference */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] hover:border-emerald-500/20 transition-all duration-500 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left visual column */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center relative min-h-[160px]">
                {/* Soft backdrop glow */}
                <div className="absolute w-28 h-28 rounded-full bg-emerald-400/10 blur-xl pointer-events-none" />
                
                {/* Floating Icon Node top-left */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-emerald-600 shadow-sm z-10">
                  <BookOpen className="w-5 h-5" />
                </div>

                {/* 5 dots grid vertical column */}
                <div className="absolute left-0 bottom-4 flex flex-col gap-1 opacity-40 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* Highly detailed volumetric 3D Document illustration */}
                <div className="w-full max-w-[130px] h-[130px] flex items-center justify-center relative overflow-visible select-none">
                  <Image 
                    src="/value-prop-doc.png" 
                    alt="Technical Reference 3D illustration"
                    width={130}
                    height={130}
                    priority
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right text content column */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Technical Reference
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Access structured markdown docs, lexical closure rules, and API fetch examples. Inspired by MDN Web Docs.
                </p>
                <div className="pt-2">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-50 text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider hover:bg-emerald-100/80 transition-colors"
                  >
                    Structured Documentation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: Developer Directories */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] hover:border-indigo-500/20 transition-all duration-500 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left visual column */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center relative min-h-[160px]">
                {/* Soft backdrop glow */}
                <div className="absolute w-28 h-28 rounded-full bg-indigo-400/10 blur-xl pointer-events-none" />
                
                {/* Floating Icon Node top-left */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shadow-sm z-10">
                  <Wrench className="w-5 h-5" />
                </div>

                {/* 5 dots grid vertical column */}
                <div className="absolute left-0 bottom-4 flex flex-col gap-1 opacity-40 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* Highly detailed volumetric 3D container blade tabs illustration */}
                <div className="w-full max-w-[130px] h-[130px] flex items-center justify-center relative overflow-visible select-none">
                  <Image 
                    src="/value-prop-dir.png" 
                    alt="Developer Directories 3D illustration"
                    width={130}
                    height={130}
                    priority
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right text content column */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Developer Directories
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Discover containers, lightweight editors, or APIs. Review cross-platform compatibilities and billing badge metrics.
                </p>
                <div className="pt-2">
                  <Link
                    href="/tools"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-indigo-50 text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider hover:bg-indigo-100/80 transition-colors"
                  >
                    Tech Stack Selector
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 4: Productivity Integration */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)] hover:border-rose-500/20 transition-all duration-500 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left visual column */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center relative min-h-[160px]">
                {/* Soft backdrop glow */}
                <div className="absolute w-28 h-28 rounded-full bg-rose-400/10 blur-xl pointer-events-none" />
                
                {/* Floating Icon Node top-left */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100/50 flex items-center justify-center text-rose-600 shadow-sm z-10">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* 5 dots grid vertical column */}
                <div className="absolute left-0 bottom-4 flex flex-col gap-1 opacity-40 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* Highly detailed volumetric 3D Microsoft Office Orbiting diagram */}
                <div className="w-full max-w-[130px] h-[130px] flex items-center justify-center relative overflow-visible select-none">
                  <Image 
                    src="/value-prop-m365.png" 
                    alt="Productivity Integration 3D illustration"
                    width={130}
                    height={130}
                    priority
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right text content column */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  Productivity Integration
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Connect your engineering syntaxes to Microsoft 365 environments. Master Excel macros, Outlook channels, and OneDrive directory structures.
                </p>
                <div className="pt-2">
                  <Link
                    href="/microsoft-office"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-rose-50 text-[10px] font-extrabold text-rose-600 uppercase tracking-wider hover:bg-rose-100/80 transition-colors"
                  >
                    M365 Workspaces
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
