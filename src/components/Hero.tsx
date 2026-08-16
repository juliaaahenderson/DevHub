'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const tickerItems = [
  { label: 'React', logoUrl: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', accent: '#61DAFB' },
  { label: 'TypeScript', logoUrl: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg', accent: '#3178C6' },
  { label: 'Python', logoUrl: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', accent: '#3776AB' },
  { label: 'Docker', logoUrl: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', accent: '#2496ED' },
  { label: 'Node.js', logoUrl: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', accent: '#339933' },
  { label: 'Next.js', logoUrl: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg', accent: '#FFFFFF', invert: true },
  { label: 'MongoDB', logoUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', accent: '#47A248' },
  { label: 'Kubernetes', logoUrl: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', accent: '#326CE5' },
];

export default function Hero() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col">
      {/* ── Full-Width Background Image ── */}
      <Image
        src="/Hero section background visual.jpg"
        alt="DevHub Developer Ecosystem"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
        unoptimized
      />

      {/* ── Gradient Overlays for Text Readability ── */}
      {/* Top: strong overlay where text lives */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/30 pointer-events-none" />
      {/* Extra top edge blend for header area */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />


      {/* ── Hero Content (Overlaid on top) ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-start max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 pb-36">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white drop-shadow-lg"
        >
          Learn. Build. Explore
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            the technology behind what&apos;s next.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed drop-shadow-sm"
        >
          A premium, unified hub to master coding languages, browse structured
          technical docs, discover developer tools, and explore the M365 ecosystem —
          all in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/learn"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-black/20 hover:shadow-black/30 transition-all gap-2"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/tools"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-white/[0.1] hover:bg-white/[0.18] border border-white/20 backdrop-blur-md transition-colors"
          >
            Browse Tools
          </Link>
        </motion.div>
      </div>

      {/* ── Horizontal Tech Ticker Strip ── */}
      <div className="relative z-10 bg-slate-950">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-0 py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {doubled.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-8 whitespace-nowrap group cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors"
                  >
                    <img 
                      src={item.logoUrl} 
                      alt={item.label}
                      className="w-5 h-5 object-contain"
                      style={{ filter: item.invert ? 'invert(1) brightness(2)' : 'none' }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="ml-5 w-1 h-1 rounded-full bg-slate-700" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
