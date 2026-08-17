'use client';

import { useState } from 'react';
import { Search, Tag, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DevTool } from '@/data/staticData';
import { motion, AnimatePresence } from 'framer-motion';

interface ToolsClientProps {
  developerTools: DevTool[];
}

export default function ToolsClient({ developerTools }: ToolsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = developerTools.filter((tool) => {
    const matchSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const categories = [
    'All',
    'Code Editors & IDEs',
    'Version Control',
    'API Development',
    'DevOps',
    'Databases',
    'Cloud Platforms',
  ];

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

  // Tool specific configurations for visual states
  const getToolTheme = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('vscode') || lower.includes('vs code') || lower.includes('visual studio')) return {
      borderHover: 'hover:border-blue-300', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]', 
      logoBg: 'bg-blue-50/80 border-blue-100', 
      accentColor: 'group-hover:text-blue-600'
    };
    if (lower.includes('github')) return {
      borderHover: 'hover:border-slate-400', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]', 
      logoBg: 'bg-slate-100/80 border-slate-200', 
      accentColor: 'group-hover:text-slate-900'
    };
    if (lower.includes('postman')) return {
      borderHover: 'hover:border-orange-300', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]', 
      logoBg: 'bg-orange-50/80 border-orange-100', 
      accentColor: 'group-hover:text-orange-600'
    };
    if (lower.includes('docker')) return {
      borderHover: 'hover:border-cyan-300', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(6,182,212,0.08)]', 
      logoBg: 'bg-cyan-50/80 border-cyan-100', 
      accentColor: 'group-hover:text-cyan-600'
    };
    if (lower.includes('mongodb')) return {
      borderHover: 'hover:border-emerald-300', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]', 
      logoBg: 'bg-emerald-50/80 border-emerald-100', 
      accentColor: 'group-hover:text-emerald-600'
    };
    if (lower.includes('azure')) return {
      borderHover: 'hover:border-sky-300', 
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)]', 
      logoBg: 'bg-sky-50/80 border-sky-100', 
      accentColor: 'group-hover:text-sky-600'
    };
    return {
      borderHover: 'hover:border-slate-350', 
      shadowHover: 'hover:shadow-lg', 
      logoBg: 'bg-slate-50 border-slate-200', 
      accentColor: 'group-hover:text-slate-800'
    };
  };

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
            <path d="M10,0 C50,40 70,80 50,120 C30,160 20,180 0,200" />
          </svg>
        </div>
        {/* Right Wave Stack */}
        <div className="absolute -right-24 top-40 w-[420px] h-[600px] opacity-[0.4]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200" strokeWidth="0.4">
            <path d="M120,0 C80,40 60,80 80,120 C100,160 110,180 130,200" />
            <path d="M110,0 C70,40 50,80 70,120 C90,160 100,180 120,200" />
            <path d="M100,0 C60,40 40,80 60,120 C80,160 90,180 110,200" />
            <path d="M90,0 C50,40 30,80 50,120 C70,160 80,180 100,200" />
          </svg>
        </div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-indigo-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Developer Tools Explorer
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find the right developer libraries, lightweight container engines, version control platforms, database clouds, and APIs.
          </p>
        </motion.div>

        {/* Directory Controls (Search + Category Filter Tab bar) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-200/80 pb-6"
        >
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools by name, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
            />
          </div>
          
          <div className="md:col-span-8 overflow-x-auto pb-2 scrollbar-none flex gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 border ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Listings Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => {
                const logo = getToolLogo(tool.name);
                const theme = getToolTheme(tool.name);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -12 }}
                    transition={{ duration: 0.3 }}
                    key={tool.id}
                    className={`bg-white border border-slate-200/80 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 ${theme.borderHover} ${theme.shadowHover}`}
                  >
                    <div className="space-y-4">
                      {/* Top line metadata */}
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-extrabold text-blue-600 text-sm shadow-sm overflow-hidden p-0 transition-all duration-300 group-hover:scale-105 ${theme.logoBg}`}>
                          {logo ? (
                            <img 
                              src={logo} 
                              alt={`${tool.name} logo`} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="p-2">{tool.name.substring(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                          tool.pricing === 'Free'
                            ? 'bg-emerald-50/60 text-emerald-700 border-emerald-200'
                            : tool.pricing === 'Freemium'
                            ? 'bg-amber-50/60 text-amber-700 border-amber-200'
                            : 'bg-blue-50/60 text-blue-700 border-blue-200'
                        }`}>
                          {tool.pricing}
                        </span>
                      </div>

                      <div>
                        <h3 className={`text-lg font-extrabold text-slate-900 tracking-tight transition-colors ${theme.accentColor}`}>
                          {tool.name}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                          {tool.category}
                        </span>
                        <p className="text-slate-500 text-xs leading-relaxed mt-2.5 line-clamp-3">
                          {tool.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-[10px] text-slate-500 font-semibold border border-slate-100 transition-colors"
                          >
                            <Tag className="w-2.5 h-2.5 text-slate-450" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card footer CTA */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-400">
                        {tool.compatibility.slice(0, 2).join(' / ')}
                      </span>
                      
                      <Link
                        href={`/tools/${tool.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-all group-hover:translate-x-0.5"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16 bg-white border border-slate-200 rounded-3xl"
              >
                <Cpu className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 text-lg">No Developer Tools Match</h3>
                <p className="text-slate-500 text-xs mt-1">Adjust search key phrases or select another category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
