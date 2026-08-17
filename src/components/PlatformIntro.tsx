'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface PlatformItem {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  link: string;
  linkLabel: string;
  stat: string;
}

const items: PlatformItem[] = [
  {
    number: '01',
    title: 'Learn',
    eyebrow: 'STRUCTURED LEARNING PATHS',
    description:
      'Step-by-step programming paths designed to take you from foundational syntax to real-world deployment pipelines.',
    link: '/learn',
    linkLabel: 'Start Learning',
    stat: '48 paths',
  },
  {
    number: '02',
    title: 'Documentation',
    eyebrow: 'REFERENCE YOU CAN ACTUALLY TRUST',
    description:
      'Clean, versioned technical references for the web platform, languages, runtimes and APIs — searchable and cross-linked.',
    link: '/documentation',
    linkLabel: 'Open Documentation',
    stat: '1,240 articles',
  },
  {
    number: '03',
    title: 'Explore Tools',
    eyebrow: 'DISCOVER YOUR NEXT STACK',
    description:
      'Browse and compare developer tools, editors, cloud providers, and databases. Find the right additions for your workflow.',
    link: '/tools',
    linkLabel: 'Browse Tools',
    stat: '320 tools',
  },
  {
    number: '04',
    title: 'Microsoft Office',
    eyebrow: 'PRODUCTIVITY AT SCALE',
    description:
      'Explore the full Microsoft 365 suite: Excel calculations, Teams workspaces, PowerPoint layouts, and OneDrive backups.',
    link: '/microsoft-office',
    linkLabel: 'Explore Suite',
    stat: '7 products',
  },
];

// Color configs matching the overall site theme for each index
const themeConfigs = [
  {
    borderActive: 'border-blue-500 bg-[#0f172a] shadow-[0_20px_50px_rgba(59,130,246,0.3)]',
    borderInactive: 'border-slate-800 bg-[#0f172a]/90 hover:border-slate-700 shadow-sm',
    accentText: 'text-blue-400',
    accentBadge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    progressGrad: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    accordionActive: 'border-blue-500 text-blue-600 bg-blue-50/30 shadow-sm',
  },
  {
    borderActive: 'border-violet-500 bg-[#0f172a] shadow-[0_20px_50px_rgba(139,92,246,0.3)]',
    borderInactive: 'border-slate-800 bg-[#0f172a]/90 hover:border-slate-700 shadow-sm',
    accentText: 'text-violet-400',
    accentBadge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    progressGrad: 'from-violet-500 to-fuchsia-400',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    accordionActive: 'border-violet-500 text-violet-600 bg-violet-50/30 shadow-sm',
  },
  {
    borderActive: 'border-amber-500 bg-[#0f172a] shadow-[0_20px_50px_rgba(245,158,11,0.3)]',
    borderInactive: 'border-slate-800 bg-[#0f172a]/90 hover:border-slate-700 shadow-sm',
    accentText: 'text-amber-400',
    accentBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    progressGrad: 'from-amber-500 to-orange-400',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    accordionActive: 'border-amber-500 text-amber-600 bg-amber-50/30 shadow-sm',
  },
  {
    borderActive: 'border-emerald-500 bg-[#0f172a] shadow-[0_20px_50px_rgba(16,185,129,0.3)]',
    borderInactive: 'border-slate-800 bg-[#0f172a]/90 hover:border-slate-700 shadow-sm',
    accentText: 'text-emerald-400',
    accentBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    progressGrad: 'from-emerald-500 to-teal-400',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    accordionActive: 'border-emerald-500 text-emerald-600 bg-emerald-50/30 shadow-sm',
  },
];

export default function PlatformIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header Area ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]">
              Four experiences, one{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">continuous workflow.</span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Move from learning a concept, to reading the reference, to
              choosing the tool, to shipping the work — without leaving the
              platform.
            </p>
          </div>
          <span className="text-sm font-mono text-slate-400 shrink-0">
            <span className="text-slate-900 font-bold">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>{' '}
            / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        {/* ── Main Content: List + Preview Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Numbered Accordion List */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
              {items.map((item, idx) => {
                const isActive = activeIndex === idx;
                const config = themeConfigs[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="cursor-pointer group"
                  >
                    <div className={`flex items-start gap-5 py-6 px-4 transition-all duration-300 rounded-2xl border-l-[3px] my-1 ${
                      isActive 
                        ? config.accordionActive 
                        : 'border-transparent text-slate-600 hover:bg-slate-100/50'
                    }`}>
                      {/* Number */}
                      <span
                        className={`text-xs font-bold mt-1.5 transition-colors ${
                          isActive ? config.accentText : 'text-slate-300'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                              isActive
                                ? 'text-slate-950 font-bold'
                                : 'text-slate-700 group-hover:text-slate-900'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-400 ml-4 shrink-0">
                            {item.stat}
                          </span>
                        </div>

                        {/* Expandable Description */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-slate-500 leading-relaxed mt-3 max-w-md">
                                {item.description}
                              </p>
                              <div className="mt-4">
                                <Link
                                  href={item.link}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                  {item.linkLabel}
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3D Stack Visual Column */}
          <div className="lg:col-span-6 sticky top-24 flex items-center justify-center min-h-[480px] overflow-visible py-10 select-none">
            <div className="relative w-full h-[460px] flex items-center justify-center scale-90 sm:scale-100">
              <div 
                className="relative w-[360px] h-[380px]"
                style={{
                  perspective: '1200px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {items.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const config = themeConfigs[idx];
                  const translateZ = isActive ? '50px' : '0px';
                  const translateY = `${idx * 92 + (isActive ? 12 : 0) - 240}px`;
                  const borderStyle = isActive 
                    ? config.borderActive 
                    : config.borderInactive;
                  
                  return (
                    <Link
                      key={idx}
                      href={item.link}
                      className={`absolute inset-x-0 h-[240px] rounded-2xl border p-5 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer text-white shadow-xl ${borderStyle}`}
                      style={{
                        transform: `translateY(${translateY}) rotateX(46deg) rotateZ(-45deg) translateZ(${translateZ})`,
                        transformStyle: 'preserve-3d',
                        zIndex: isActive ? 50 : 40 - idx,
                      }}
                    >
                      {/* Active floating card backdrop glow */}
                      {isActive && (
                        <div 
                          className="absolute -inset-px rounded-2xl opacity-60 blur-xl -z-10 transition-opacity"
                          style={{ background: config.glowColor }}
                        />
                      )}

                      {/* Layer Header */}
                      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider">
                        <span className={`font-bold uppercase ${config.accentText}`}>{item.eyebrow}</span>
                        <span className="text-slate-400 font-semibold">{item.stat.toUpperCase()}</span>
                      </div>

                      {/* Layer Body */}
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold tracking-tight text-white">{item.title}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${config.accentBadge}`}>{item.number}</span>
                        </div>
                      </div>

                      {/* Rich Mini Dash Layout inside the card */}
                      <div className="flex items-center justify-between gap-3 text-[10px] font-mono bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-inner">
                        {idx === 0 && (
                          <>
                            <span className="flex items-center gap-1 text-slate-400">⏰ 6 Months</span>
                            <span className="flex items-center gap-1 text-emerald-400">📊 Beg to Adv</span>
                          </>
                        )}
                        {idx === 1 && (
                          <>
                            <span className="text-violet-400 font-bold truncate">import &#123; useState &#125; from &apos;react&apos;;</span>
                          </>
                        )}
                        {idx === 2 && (
                          <div className="flex gap-1.5 overflow-hidden truncate">
                            <span className="px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/25 rounded text-blue-300">Docker</span>
                            <span className="px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/25 rounded text-indigo-300">Postgres</span>
                            <span className="px-1.5 py-0.5 bg-sky-500/10 border border-sky-500/25 rounded text-sky-300">VS Code</span>
                          </div>
                        )}
                        {idx === 3 && (
                          <>
                            <span className="text-emerald-400 font-bold">SUMIFS(), XLOOKUP()</span>
                            <span className="text-slate-400">Teams SDK</span>
                          </>
                        )}
                      </div>

                      {/* Progress bar line */}
                      <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mt-1 border border-slate-800">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${config.progressGrad}`}
                          style={{ width: idx === 0 ? '80%' : idx === 1 ? '95%' : idx === 2 ? '65%' : '40%' }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

