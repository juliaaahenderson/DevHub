'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developerTools } from '@/data/staticData';
import { Tag, ArrowRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'All Tools',
  'Code Editors & IDEs',
  'Version Control',
  'API Development',
  'DevOps',
  'Databases',
  'Cloud Platforms'
];

// Visual configuration helper to match colors exactly from the mockup
const getToolConfig = (name: string) => {
  const code = name.substring(0, 2).toUpperCase();
  const configs: Record<string, { 
    border: string; 
    avatarBg: string; 
    avatarText: string; 
    badgeBg: string; 
    badgeText: string;
  }> = {
    'VI': { // VS Code
      border: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100/50',
      avatarBg: 'bg-blue-50',
      avatarText: 'text-blue-600',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badgeText: 'FREE'
    },
    'GI': { // GitHub
      border: 'border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-100/50',
      avatarBg: 'bg-indigo-50',
      avatarText: 'text-indigo-600',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
      badgeText: 'FREEMIUM'
    },
    'PO': { // Postman
      border: 'border-amber-200 hover:border-amber-400 hover:shadow-amber-100/50',
      avatarBg: 'bg-amber-50',
      avatarText: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
      badgeText: 'FREEMIUM'
    },
    'DO': { // Docker
      border: 'border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-100/50',
      avatarBg: 'bg-cyan-50',
      avatarText: 'text-cyan-600',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
      badgeText: 'FREEMIUM'
    },
    'MO': { // MongoDB
      border: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100/50',
      avatarBg: 'bg-emerald-50',
      avatarText: 'text-emerald-600',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
      badgeText: 'FREEMIUM'
    },
    'MI': { // Azure
      border: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100/50',
      avatarBg: 'bg-blue-50',
      avatarText: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
      badgeText: 'PAID'
    },
  };

  return configs[code] || {
    border: 'border-slate-200 hover:border-slate-400 hover:shadow-slate-100/50',
    avatarBg: 'bg-slate-50',
    avatarText: 'text-slate-600',
    badgeBg: 'bg-slate-50 text-slate-600 border-slate-100',
    badgeText: 'FREE'
  };
};

const renderToolVisual = (id: string, name: string) => {
  switch (id) {
    case 'vscode':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100/70 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
          <div className="relative w-full max-w-[200px] bg-white rounded-xl shadow-lg border border-slate-100 p-2.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" className="w-6 h-6 object-contain" alt="" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-2 w-2/3 bg-slate-200 rounded animate-pulse" />
              <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
            </div>
            <div className="flex gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      );
    case 'github':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50/50 border border-indigo-100/70 overflow-hidden flex items-center justify-center p-4">
          <svg className="absolute inset-0 w-full h-full stroke-indigo-100/40" viewBox="0 0 100 60" fill="none">
            <path d="M10 30 C 30 10, 70 50, 90 30" strokeWidth="1.5" />
            <path d="M10 30 H 90" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xl shadow-indigo-900/15">
            <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" className="w-7 h-7 object-contain invert" alt="" />
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-white/80 border border-slate-100 px-2 py-0.5 rounded-full shadow-sm text-[8px] font-bold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            PR merged
          </div>
        </div>
      );
    case 'postman':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-100/70 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute w-24 h-24 rounded-full border border-amber-200/40 animate-[spin_20s_linear_infinite]" />
          <div className="relative w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-6 h-6 object-contain brightness-0 invert" alt="" />
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-100 px-2.5 py-0.5 rounded-full shadow-sm text-[8px] font-mono text-slate-500 flex items-center gap-1">
            <span className="text-emerald-500 font-bold">200 OK</span>
            <span className="text-slate-300">|</span>
            <span>12ms</span>
          </div>
        </div>
      );
    case 'docker':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50/50 border border-cyan-100/70 overflow-hidden flex items-center justify-center p-4">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-10 h-12 bg-white rounded-lg border border-slate-100 shadow-md flex flex-col items-center justify-between p-1.5"
                style={{ transform: `translateY(${i % 2 === 0 ? '-4px' : '4px'})` }}
              >
                <div className="w-full h-1.5 rounded bg-cyan-100" />
                <div className="w-5 h-5 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-600 text-[8px]">
                  ⚓
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-4 bottom-3 w-6 h-6 rounded bg-white border border-slate-100 flex items-center justify-center shadow-sm">
            <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" className="w-4 h-4 object-contain" alt="" />
          </div>
        </div>
      );
    case 'mongodb':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100/70 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
          <div className="relative flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-lg shadow-emerald-900/5">
              <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" className="w-7 h-7 object-contain" alt="" />
            </div>
            <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-1.5 py-0.2 rounded-full">
              Cluster Active
            </span>
          </div>
        </div>
      );
    case 'azure':
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50/50 border border-blue-100/70 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-blue-500/5 rounded-full blur-xl" />
          <div className="relative w-12 h-12 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-lg shadow-blue-500/10">
            <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" className="w-6 h-6 object-contain" alt="" />
          </div>
          <div className="absolute left-4 top-3 flex items-center gap-1 text-[8px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span>East US Node</span>
          </div>
        </div>
      );
    default:
      return (
        <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/70 overflow-hidden flex items-center justify-center p-4">
          <span className="text-[10px] font-mono text-slate-500">{name} Ecosystem</span>
        </div>
      );
  }
};

export default function ToolShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');

  const filteredTools = developerTools.filter((tool) => {
    if (selectedCategory === 'All Tools') return true;
    return tool.category === selectedCategory;
  });

  return (
    <section className="py-20 bg-white border-b border-slate-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section with Isometric SVG Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Text content block */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]">
              Professional{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tools & Stacks
              </span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
              Explore professional technologies, lightweight containers, cloud providers, and databases. Review pricing structures and compatibility specs.
            </p>
          </div>

          {/* Interactive Isometric SVG Illustration block */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="w-full max-w-[360px] h-[280px] relative">
              <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                {/* Isometric Base Grid Shadow */}
                <ellipse cx="200" cy="220" rx="140" ry="50" fill="url(#radial-glow)" opacity="0.6"/>

                <defs>
                  <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="central-hex" x1="200" y1="90" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>

                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
                  </filter>
                </defs>

                {/* Slabs - Platform Stack */}
                {/* Bottom slab */}
                <path d="M200 240 L310 185 L200 130 L90 185 Z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M200 248 L310 193 L310 185 L200 240 Z" fill="#cbd5e1" />
                <path d="M90 193 L200 248 L200 240 L90 185 Z" fill="#e2e8f0" />

                {/* Middle slab */}
                <path d="M200 215 L280 175 L200 135 L120 175 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow)" />
                <path d="M200 221 L280 181 L280 175 L200 215 Z" fill="#cbd5e1" />
                <path d="M120 181 L200 221 L200 215 L120 175 Z" fill="#e2e8f0" />

                {/* Dashed Connecting Network Lines */}
                <path d="M200 155 L290 110" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200 155 L290 200" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200 155 L110 110" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200 155 L110 200" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200 155 L200 80" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200 155 L200 240" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Central glowing code hexagon block */}
                <g filter="url(#shadow)">
                  <path d="M200 115 L230 130 L230 160 L200 175 L170 160 L170 130 Z" fill="url(#central-hex)" />
                  {/* Front/top highlighting line */}
                  <path d="M200 115 L230 130 L230 160" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
                  
                  {/* Central Code symbol */}
                  <text x="200" y="151" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
                </g>

                {/* Floating Node 1: Microsoft Azure (Top Blue) */}
                <g filter="url(#shadow)">
                  <path d="M200 45 L218 54 L218 72 L200 81 L182 72 L182 54 Z" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" x="189" y="52" width="22" height="22" />
                </g>

                {/* Floating Node 2: VS Code (Right Blue) */}
                <g filter="url(#shadow)">
                  <path d="M290 85 L308 94 L308 112 L290 121 L272 112 L272 94 Z" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" x="279" y="92" width="22" height="22" />
                </g>

                {/* Floating Node 3: Docker (Bottom Right Blue) */}
                <g filter="url(#shadow)">
                  <path d="M290 175 L308 184 L308 202 L290 211 L272 202 L272 184 Z" fill="#ecfeff" stroke="#a5f3fc" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" x="279" y="182" width="22" height="22" />
                </g>

                {/* Floating Node 4: Github (Bottom Grey) */}
                <g filter="url(#shadow)">
                  <path d="M200 215 L218 224 L218 242 L200 251 L182 242 L182 224 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/github/github-icon.svg" x="189" y="222" width="22" height="22" />
                </g>

                {/* Floating Node 5: Postman (Left Orange) */}
                <g filter="url(#shadow)">
                  <path d="M110 175 L128 184 L128 202 L110 211 L92 202 L92 184 Z" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" x="99" y="182" width="22" height="22" />
                </g>

                {/* Floating Node 6: MongoDB (Top Left Green) */}
                <g filter="url(#shadow)">
                  <path d="M110 85 L128 94 L128 112 L110 121 L92 112 L92 94 Z" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                  <image href="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" x="99" y="92" width="22" height="22" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Filter bar and CTA button beside each other */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 mt-2">
          {/* Categories Tab Selector Row */}
          <div className="bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/50 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <LayoutGrid className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* CTA Directory Button */}
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/10 gap-2 shrink-0 self-start md:self-auto"
          >
            All Tools Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tools Dynamic Grid Matching Mockup Perfectly */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const config = getToolConfig(tool.name);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  key={tool.id}
                  className={`group relative bg-white border ${config.border} rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    {/* Visual representation on top */}
                    {renderToolVisual(tool.id, tool.name)}

                    {/* Metadata & Texts below visual */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {tool.category}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${config.badgeBg}`}>
                          {config.badgeText}
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>

                      {/* Desc */}
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {tool.description}
                      </p>
                    </div>

                    {/* Metadata Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-50 text-[10px] text-slate-500 font-semibold border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors"
                        >
                          <Tag className="w-2.5 h-2.5 text-slate-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400">
                      {tool.compatibility.slice(0, 2).join(' / ')}
                    </span>
                    
                    <Link
                      href={`/tools/${tool.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                    >
                      View Specs
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
