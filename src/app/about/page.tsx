'use client';

import { BookOpen, Cpu, Shield, Globe, Sparkles, ArrowRight, Trophy, Rocket, Layers } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const pillars = [
    {
      num: '01',
      title: 'Learn Roadmaps',
      desc: 'Step-by-step programming tracks mapping foundations through containerizations and serverless setups.',
      icon: BookOpen,
      color: 'border-blue-200 bg-blue-50/10 hover:border-blue-400',
      badgeColor: 'bg-blue-100/60 text-blue-700',
      iconBg: 'bg-blue-50 border-blue-100 text-blue-600',
      accentBar: 'bg-blue-500',
      waveColor: 'stroke-blue-200'
    },
    {
      num: '02',
      title: 'Reference Manuals',
      desc: 'Structured reference documentation sheets, syntax code highlights, and detailed concept definitions.',
      icon: Shield,
      color: 'border-emerald-200 bg-emerald-50/10 hover:border-emerald-400',
      badgeColor: 'bg-emerald-100/60 text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      accentBar: 'bg-emerald-500',
      waveColor: 'stroke-emerald-200'
    },
    {
      num: '03',
      title: 'Stack Discovery',
      desc: 'Directory comparisons for editors, cloud providers, databases, and container tools.',
      icon: Cpu,
      color: 'border-purple-200 bg-purple-50/10 hover:border-purple-400',
      badgeColor: 'bg-purple-100/60 text-purple-700',
      iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
      accentBar: 'bg-purple-500',
      waveColor: 'stroke-purple-200'
    },
    {
      num: '04',
      title: 'Workspace Productivity',
      desc: 'Connecting system-level engineering roadmaps cleanly with Microsoft 365 spreadsheet formulas and Teams.',
      icon: Globe,
      color: 'border-rose-200 bg-rose-50/10 hover:border-rose-400',
      badgeColor: 'bg-rose-100/60 text-rose-700',
      iconBg: 'bg-rose-50 border-rose-100 text-rose-600',
      accentBar: 'bg-rose-500',
      waveColor: 'stroke-rose-200'
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen relative overflow-hidden pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative premium curved waves background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Waves */}
        <div className="absolute -left-20 top-20 w-[450px] h-[600px] opacity-[0.6]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-blue-100" strokeWidth="0.5">
            <path d="M-20,0 C20,40 40,80 20,120 C0,160 -10,180 -30,200" />
            <path d="M-10,0 C30,40 50,80 30,120 C10,160 0,180 -20,200" />
            <path d="M0,0 C40,40 60,80 40,120 C20,160 10,180 -10,200" />
          </svg>
        </div>
        {/* Right Waves */}
        <div className="absolute -right-24 top-40 w-[450px] h-[600px] opacity-[0.6]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-indigo-100" strokeWidth="0.5">
            <path d="M120,0 C80,40 60,80 80,120 C100,160 110,180 130,200" />
            <path d="M110,0 C70,40 50,80 70,120 C90,160 100,180 120,200" />
            <path d="M100,0 C60,40 40,80 60,120 C80,160 90,180 110,200" />
          </svg>
        </div>
        {/* Glow orbs */}
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-indigo-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* Editorial Top Vision Badge + Title */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            Empowering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative">Modern Builders</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            DevHub brings together syntax lessons, structured technical manuals, software catalogs, and productivity configurations into one elegant workspace.
          </motion.p>
        </div>

        {/* Mission Statement Box (With 3D Stack Code SVG) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_15px_40px_rgba(15,23,42,0.03)]"
        >
          {/* Stunning 3D Code Stack SVG illustration */}
          <div className="w-32 h-32 relative shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              {/* Radial glow background */}
              <circle cx="50" cy="50" r="30" fill="url(#glow-radial)" opacity="0.6" />
              <defs>
                <radialGradient id="glow-radial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Bottom Layer */}
              <g className="animate-pulse">
                <path d="M20,62 L50,75 L80,62 L50,49 Z" fill="#6366f1" opacity="0.3" />
                <path d="M20,62 L50,75 L80,62" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
              </g>
              
              {/* Middle Layer */}
              <g>
                <path d="M20,50 L50,63 L80,50 L50,37 Z" fill="#4f46e5" opacity="0.5" />
                <path d="M20,50 L50,63 L80,50" stroke="#4f46e5" strokeWidth="1.5" strokeLinejoin="round" strokeOpacity="0.8" />
              </g>
              
              {/* Top Layer with Code Symbol */}
              <g>
                <path d="M20,38 L50,51 L80,38 L50,25 Z" fill="#2563eb" />
                <path d="M20,38 L50,51 L80,38 L50,25 Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round" />
                {/* </> symbol representation on top layer isometric surface */}
                <path d="M43,36 L39,38 L43,40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M57,36 L61,38 L57,40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52,35 L48,41" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          <div className="space-y-4 flex-1 border-l-2 border-blue-500/80 pl-6 text-left">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Our Mission
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Developers often face excessive context-switching. Flipping between code tutorials, reference manual tabs, package managers, and spreadsheet charts drains productivity.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our mission is to eliminate fragmentation by curating a high-quality developer hub. We bridge coding theories directly to execution tools and productivity systems.
            </p>
          </div>
        </motion.div>

        {/* Core Pillars Section Divider */}
        <div className="text-center space-y-2 pt-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-blue-200" />
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-blue-200" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Core Pillars
          </h2>
          <p className="text-xs text-slate-500">The foundation of DevHub</p>
        </div>

        {/* Core Pillars 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pil, i) => {
            const IconComponent = pil.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                key={i}
                className={`bg-white border rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${pil.color}`}
              >
                <div className="space-y-4">
                  {/* Icon & badge block */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm ${pil.iconBg}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${pil.badgeColor}`}>
                      {pil.num}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="flex gap-3">
                    <div className={`w-1 rounded-full ${pil.accentBar} shrink-0`} />
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-blue-600 transition-colors">
                        {pil.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {pil.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow & Bottom Wave stroke decoration */}
                <div className="flex items-center justify-between pt-6 mt-2 relative z-10">
                  <div className="w-full h-4 absolute bottom-0 left-0 pointer-events-none opacity-[0.6]">
                    <svg viewBox="0 0 100 20" fill="none" className={`w-full h-full ${pil.waveColor}`} strokeWidth="0.5">
                      <path d="M0,10 Q25,20 50,10 T100,10" />
                    </svg>
                  </div>
                  <div />
                  <ArrowRight className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Start Journey Trophy Footer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50/30 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm tracking-tight">Start Your Journey</h4>
              <p className="text-xs text-slate-500 leading-normal">Build better. Code smarter. Learn faster.</p>
            </div>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all gap-1.5 shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:scale-[1.01] active:scale-[0.99] shrink-0"
          >
            Explore Tools
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
