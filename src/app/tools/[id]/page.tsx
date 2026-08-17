'use client';

import { useState, use } from 'react';
import { developerTools } from '@/data/staticData';
import { ChevronLeft, ExternalLink, Globe, Sparkles, Cpu, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ToolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
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

  // Map tool names to official vector SVG brand logos
  const getToolLogo = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('vscode') || lower.includes('vs code') || lower.includes('visual studio')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg';
    if (lower.includes('github')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    if (lower.includes('postman')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg';
    if (lower.includes('docker')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg';
    if (lower.includes('mongodb')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
    if (lower.includes('azure')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg';
    return null;
  };

  // Map tool names to realistic photographs from public/tools
  const getRealisticVisual = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('vscode') || lower.includes('vs code') || lower.includes('visual studio')) return '/tools/vscode.png';
    if (lower.includes('github')) return '/tools/github.png';
    if (lower.includes('postman')) return '/tools/postman.png';
    if (lower.includes('docker')) return '/tools/docker.png';
    if (lower.includes('mongodb')) return '/tools/mongodb.png';
    if (lower.includes('azure')) return '/tools/azure.png';
    return null;
  };

  const originalLogo = getToolLogo(tool.name);
  const realisticVisual = getRealisticVisual(tool.name);

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen relative overflow-hidden">
      
      {/* Decorative premium curved waves & glow background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Wave Stack */}
        <div className="absolute -left-20 top-20 w-[380px] h-[600px] opacity-[0.4]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200" strokeWidth="0.4">
            <path d="M-20,0 C20,40 40,80 20,120 C0,160 -10,180 -30,200" />
            <path d="M-10,0 C30,40 50,80 30,120 C10,160 0,180 -20,200" />
            <path d="M0,0 C40,40 60,80 40,120 C20,160 10,180 -10,200" />
          </svg>
        </div>
        {/* Right Wave Stack */}
        <div className="absolute -right-24 top-40 w-[420px] h-[600px] opacity-[0.4]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200" strokeWidth="0.4">
            <path d="M120,0 C80,40 60,80 80,120 C100,160 110,180 130,200" />
            <path d="M110,0 C70,40 50,80 70,120 C90,160 100,180 120,200" />
            <path d="M100,0 C60,40 40,80 60,120 C80,160 90,180 110,200" />
          </svg>
        </div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-indigo-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Tools Directory
          </Link>
        </motion.div>

        {/* Detailed Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Block (Left Column) */}
          <main className="lg:col-span-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                  {tool.category}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Pricing model: <strong className="text-slate-800">{tool.pricing}</strong>
                </span>
              </div>

              {/* Dynamic full-width realistic banner visual */}
              {realisticVisual && (
                <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden shadow-inner relative border border-slate-200/50">
                  <img 
                    src={realisticVisual} 
                    alt={`${tool.name} premium visual representation`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <div className="flex items-start gap-4 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center font-extrabold text-blue-600 text-lg shadow-sm shrink-0 overflow-hidden p-2.5">
                  {originalLogo ? (
                    <img 
                      src={originalLogo} 
                      alt={`${tool.name} official logo`} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Cpu className="w-7 h-7 text-blue-500" />
                  )}
                </div>
                <div className="space-y-1">
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    {tool.name}
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {tool.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Ideal Deployment Scenario
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-normal">
                    {tool.bestFor}
                  </p>
                </div>
                
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    OS/Platform Compatibility
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {tool.compatibility.map((os) => (
                      <span
                        key={os}
                        className="px-2.5 py-0.5 rounded bg-white text-[10px] text-slate-600 font-bold border border-slate-200/80"
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
            </motion.div>
          </main>

          {/* Action Callouts Panel (Right Column) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* CTA Box (Styled like Main Landing Page matrix) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden bg-[#070b19] text-white border border-slate-900 shadow-xl p-6 space-y-6"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/15 via-transparent to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

              <div className="relative z-10 space-y-2">
                <h4 className="font-bold text-lg tracking-tight">Deploy Platform</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Redirect to external registries or official portals to initialize configuration scripts.
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-xs font-bold text-slate-950 bg-white hover:bg-slate-50 transition-all gap-2 shadow-[0_4px_12px_rgba(255,255,255,0.06)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Globe className="w-4 h-4 text-slate-700" />
                  Official Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-slate-200/85 rounded-3xl p-6 space-y-4 shadow-sm"
              >
                <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                  Similar Technologies
                </h4>
                <div className="space-y-3">
                  {relatedTools.slice(0, 3).map((rt) => {
                    const rtLogo = getToolLogo(rt.name);
                    return (
                      <Link
                        key={rt.id}
                        href={`/tools/${rt.id}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center font-bold text-[10px] text-blue-600 overflow-hidden p-1.5">
                          {rtLogo ? (
                            <img 
                              src={rtLogo} 
                              alt={`${rt.name} logo`} 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            rt.name.substring(0, 2).toUpperCase()
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                            {rt.name}
                          </h5>
                          <p className="text-[10px] text-slate-400 truncate">{rt.category}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}
