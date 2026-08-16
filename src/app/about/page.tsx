import { Code2, BookOpen, Cpu, Shield, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Vision Header */}
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            Platform Vision
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl leading-none">
            Empowering Modern Builders
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            DevHub brings together syntax lessons, structured technical manuals, software catalogs, and productivity configurations into one elegant workspace.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Developers often face excessive context-switching. Flipping between code tutorials, reference manual tabs, package managers, and spreadsheet charts drains productivity.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our mission is to eliminate fragmentation by curating a high-quality developer hub. We bridge coding theories directly to execution tools and productivity systems.
          </p>
        </div>

        {/* Four Hub Pillars */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight text-center">Core Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm">01. Learn Roadmaps</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Step-by-step programming tracks mapping foundations through containerizations and serverless setups.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm">02. Reference Manuals</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Structured reference documentation sheets, syntax code highlights, and detailed concept definitions.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm">03. Stack Discovery</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Directory comparisons for editors, cloud providers, databases, and container tools.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm">04. Workspace Productivity</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Connecting system-level engineering roadmaps cleanly with Microsoft 365 spreadsheet formulas and Teams.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center pt-8 border-t border-slate-200">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
          >
            Start Your Journey
          </Link>
        </div>

      </div>
    </div>
  );
}
