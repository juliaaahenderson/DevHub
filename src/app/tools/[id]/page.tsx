import { developerTools } from '@/data/staticData';
import { ChevronLeft, ExternalLink, Globe, Sparkles, Shield, Cpu, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function ToolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = developerTools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="py-20 text-center bg-slate-50 min-h-screen flex flex-col items-center justify-center space-y-4">
        <Cpu className="w-12 h-12 text-slate-300" />
        <h2 className="text-xl font-bold text-slate-800">Tool Specification Not Found</h2>
        <Link href="/tools" className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" />
          Back to Directory
        </Link>
      </div>
    );
  }

  // Suggesting related tools in same category
  const relatedTools = developerTools.filter((t) => t.category === tool.category && t.id !== tool.id);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Tools Directory
          </Link>
        </div>

        {/* Detailed Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Block (Left Column) */}
          <main className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                  {tool.category}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Pricing model: <strong className="text-slate-800">{tool.pricing}</strong>
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {tool.name}
                </h1>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Ideal Deployment Scenario
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-normal">
                    {tool.bestFor}
                  </p>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    OS/Platform Compatibility
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {tool.compatibility.map((os) => (
                      <span
                        key={os}
                        className="px-2 py-0.5 rounded bg-white text-[10px] text-slate-600 font-bold border border-slate-200"
                      >
                        {os}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Core Functional Capacities
                </h3>
                <ul className="space-y-3">
                  {tool.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <Sparkles className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>

          {/* Action Callouts Panel (Right Column) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* CTA Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-6 border border-slate-800 shadow-xl">
              <div className="space-y-2">
                <h4 className="font-bold text-lg tracking-tight">Deploy Platform</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Redirect to external registries or official portals to initialize configuration scripts.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Official Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                  Similar Technologies
                </h4>
                <div className="space-y-3">
                  {relatedTools.slice(0, 3).map((rt) => (
                    <Link
                      key={rt.id}
                      href={`/tools/${rt.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-xs text-blue-600">
                        {rt.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                          {rt.name}
                        </h5>
                        <p className="text-[10px] text-slate-400 truncate">{rt.category}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}
