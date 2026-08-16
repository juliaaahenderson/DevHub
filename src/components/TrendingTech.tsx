'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';

const trendingTechnologies = [
  { 
    name: 'React', 
    desc: 'Interactive SPA systems', 
    count: '14.2M devs', 
    color: '#61dafb', 
    bgColor: 'bg-[#61dafb]/10', 
    textColor: 'text-[#00c8ff]',
    glowColor: 'rgba(97, 218, 251, 0.15)',
    logoUrl: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
  },
  { 
    name: 'TypeScript', 
    desc: 'Strict runtime typing compilation', 
    count: '8.4M devs', 
    color: '#3178c6', 
    bgColor: 'bg-[#3178c6]/10', 
    textColor: 'text-[#3178c6]',
    glowColor: 'rgba(49, 120, 198, 0.15)',
    logoUrl: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
  },
  { 
    name: 'Python', 
    desc: 'AI orchestration and pipelines', 
    count: '11.1M devs', 
    color: '#ffd343', 
    bgColor: 'bg-[#ffd343]/10', 
    textColor: 'text-amber-600',
    glowColor: 'rgba(255, 211, 67, 0.15)',
    logoUrl: 'https://www.vectorlogo.zone/logos/python/python-icon.svg'
  },
  { 
    name: 'Docker', 
    desc: 'Lightweight virtualized packaging', 
    count: '6.2M devs', 
    color: '#2496ed', 
    bgColor: 'bg-[#2496ed]/10', 
    textColor: 'text-[#2496ed]',
    glowColor: 'rgba(36, 150, 237, 0.15)',
    logoUrl: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg'
  },
  { 
    name: 'Spring Boot', 
    desc: 'Enterprise microservice structures', 
    count: '4.8M devs', 
    color: '#6db33f', 
    bgColor: 'bg-[#6db33f]/10', 
    textColor: 'text-[#6db33f]',
    glowColor: 'rgba(109, 179, 63, 0.15)',
    logoUrl: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'
  },
];

// Doubling items for seamless marquee effect
const doubledTech = [...trendingTechnologies, ...trendingTechnologies, ...trendingTechnologies];

export default function TrendingTech() {
  return (
    <section className="py-24 bg-slate-50/50 border-b border-slate-200/50 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 tech-dot-grid opacity-[0.2]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Trending</span> Technologies
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              Discover technologies scaling rapidly across standard software platforms. Review user count metrics and operational use cases.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft fading edges for premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max px-4"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {doubledTech.map((tech, idx) => (
            <div
              key={idx}
              className="min-w-[280px] bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between gap-5 relative group"
            >
              {/* Highlight gradient glow on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${tech.glowColor}, transparent 55%)`
                }}
              />

              <div className="space-y-4">
                {/* Tech logo and badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-2xl ${tech.bgColor} flex items-center justify-center shadow-sm`}>
                    <img 
                      src={tech.logoUrl} 
                      alt={`${tech.name} original brand logo`} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Hot Stack
                  </span>
                </div>

                {/* Tech information */}
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    {tech.desc}
                  </p>
                </div>
              </div>

              {/* Statistics details count */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  {tech.count}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
