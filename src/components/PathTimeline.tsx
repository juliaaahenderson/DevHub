'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Play,
  Compass,
  Target,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: 'FOUNDATIONS',
    subtitle: 'Learn Core Syntaxes',
    description:
      'Master the building blocks of programming — variables, data types, control flow, and object-oriented principles.',
    icon: Compass,
    image: '/pathways/foundations.png',
    skills: ['Variables & Types', 'Control Flow', 'Object Basics'],
    gradient: 'from-blue-600 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.12)',
    accentRing: 'ring-blue-500/20',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
    skillBg: 'bg-blue-50 text-blue-600 border border-blue-100/50',
  },
  {
    title: 'BUILD PROJECTS',
    subtitle: 'Apply & Solve Problems',
    description:
      'Turn theory into practice by building real applications with API integrations, dynamic UIs, and state orchestration.',
    icon: Play,
    image: '/pathways/build-projects.png',
    skills: ['API Integrations', 'Interactive UIs', 'State Management'],
    gradient: 'from-violet-600 to-purple-500',
    glowColor: 'rgba(139, 92, 246, 0.12)',
    accentRing: 'ring-violet-500/20',
    badgeColor: 'bg-violet-50 text-violet-600 border-violet-100',
    skillBg: 'bg-violet-50 text-violet-600 border border-violet-100/50',
  },
  {
    title: 'ADVANCED CONCEPTS',
    subtitle: 'Optimize Performance',
    description:
      'Dive deep into concurrency models, memory management strategies, and enterprise-grade design patterns.',
    icon: Target,
    image: '/pathways/advanced-concepts.png',
    skills: ['Concurrency', 'Memory Control', 'Design Patterns'],
    gradient: 'from-amber-600 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    accentRing: 'ring-amber-500/20',
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-100',
    skillBg: 'bg-amber-50 text-amber-600 border border-amber-100/50',
  },
  {
    title: 'CAREER READY',
    subtitle: 'Deploy and Collaborate',
    description:
      'Ship production code with containerization, continuous integration pipelines, and cloud-native deployment strategies.',
    icon: Award,
    image: '/pathways/career-ready.png',
    skills: ['Docker Packaging', 'CI/CD Pipelines', 'Cloud Hosting'],
    gradient: 'from-emerald-600 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    accentRing: 'ring-emerald-500/20',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    skillBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100/50',
  },
];

/* Stagger offsets: each card drops progressively to form a "staircase" */
const staggerOffsets = [0, 20, 40, 60];

export default function PathTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative pt-4 pb-20 lg:pt-6 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200/50">
      {/* ── Ambient Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb — top left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[120px]" />
        {/* Accent orb — bottom right */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/[0.02] blur-[100px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 tech-dot-grid opacity-[0.2]" />
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 max-w-2xl">
            <div className="space-y-3 flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]"
              >
                Flowing Learning{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Pathways
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base text-slate-500 leading-relaxed"
              >
                Skip static videos and follow a structured interactive flow.
                Progress step-by-step from base variables to modern system
                designs.
              </motion.p>
            </div>

            {/* Premium SVG centered next to text content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <svg className="w-28 h-28 sm:w-32 sm:h-32 overflow-visible" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="1" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
                  </linearGradient>
                </defs>
                {/* Outer rotating/pulsing dash circle */}
                <g className="animate-spin" style={{ transformOrigin: '50px 50px', animationDuration: '16s' }}>
                  <circle cx="50" cy="50" r="40" stroke="url(#glow-grad)" strokeWidth="2" strokeDasharray="6 4" />
                </g>
                {/* Inner hexagon node */}
                <path d="M50 22 L74 36 L74 64 L50 78 L26 64 L26 36 Z" stroke="url(#glow-grad)" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Central node network lines */}
                <circle cx="50" cy="50" r="6" fill="url(#glow-grad)" className="animate-pulse" />
                <path d="M50 22 L50 44 M26 36 L45 47 M74 36 L55 47 M26 64 L45 53 M74 64 L55 53 M50 78 L50 56" stroke="url(#glow-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/learn"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Browse All Paths
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Desktop: Staggered Staircase Layout ── */}
        <div className="hidden lg:block relative">
          {/* Animated connecting path line */}
          <svg
            className="absolute top-[3.25rem] left-0 w-full h-4 z-0"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="33%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="66%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {/* Background track */}
            <line
              x1="12.5%"
              y1="50%"
              x2="87.5%"
              y2="50%"
              stroke="rgba(15,23,42,0.06)"
              strokeWidth="2"
              strokeDasharray="8 6"
            />
            {/* Active progress */}
            <motion.line
              x1="12.5%"
              y1="50%"
              x2="87.5%"
              y2="50%"
              stroke="url(#pathLineGrad)"
              strokeWidth="2"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: (activeStep + 1) / steps.length }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </svg>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  style={{ marginTop: staggerOffsets[idx] }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group"
                >
                  {/* Card */}
                  <div
                    className={`relative rounded-2xl border transition-all duration-500 ${
                      isCurrent
                        ? 'bg-white border-slate-200/80 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)]'
                        : 'bg-slate-100/50 border-slate-200/40 hover:bg-white hover:border-slate-250 hover:shadow-lg'
                    }`}
                  >
                    {/* Glow effect on active card */}
                    {isCurrent && (
                      <div
                        className="absolute -inset-px rounded-2xl opacity-60 blur-xl -z-10 transition-opacity"
                        style={{ background: step.glowColor }}
                      />
                    )}

                    {/* Premium photo visual */}
                    <div className="relative w-full h-32 rounded-t-2xl overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                    </div>

                    <div className="p-5">
                      {/* Icon Node */}
                      <div className="mb-4 relative inline-flex">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCurrent
                              ? `bg-gradient-to-br ${step.gradient} shadow-lg ring-4 ${step.accentRing}`
                              : isActive
                              ? 'bg-slate-100 border border-slate-200/80 shadow-sm'
                              : 'bg-slate-100/50 border border-slate-200/30 group-hover:bg-slate-100 group-hover:border-slate-300'
                          }`}
                        >
                          <StepIcon
                            className={`w-6 h-6 transition-colors ${
                              isCurrent
                                ? 'text-white'
                                : isActive
                                ? 'text-slate-700'
                                : 'text-slate-400 group-hover:text-slate-600'
                            }`}
                          />
                        </div>
                        {/* Completed check */}
                        {isActive && !isCurrent && (
                          <span className="absolute -top-1.5 -right-1.5">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          </span>
                        )}
                      </div>



                      {/* Title */}
                      <h3
                        className={`text-base font-bold tracking-tight mb-1 transition-colors ${
                          isCurrent
                            ? 'text-slate-900'
                            : 'text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className={`text-xs transition-colors ${
                          isCurrent ? 'text-slate-500 font-medium' : 'text-slate-400'
                        }`}
                      >
                        {step.subtitle}
                      </p>

                      {/* Expandable Description */}
                      <AnimatePresence>
                        {isCurrent && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xs text-slate-600 leading-relaxed mt-3 overflow-hidden"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Skills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {step.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                              isCurrent
                                ? step.skillBg
                                : 'bg-slate-200/50 text-slate-600 group-hover:text-slate-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom gradient bar */}
                    <div
                      className={`h-1 rounded-b-2xl transition-all duration-500 ${
                        isCurrent
                          ? `bg-gradient-to-r ${step.gradient}`
                          : 'bg-transparent'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;
            const StepIcon = step.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className="cursor-pointer"
              >
                <div
                  className={`relative rounded-2xl border p-5 transition-all duration-400 ${
                    isCurrent
                      ? 'bg-white border-slate-200 shadow-xl'
                      : 'bg-slate-100/50 border-slate-200/40'
                  }`}
                >
                  {isCurrent && (
                    <div
                      className="absolute -inset-px rounded-2xl opacity-20 blur-xl -z-10"
                      style={{ background: step.glowColor }}
                    />
                  )}

                  {/* Premium photo visual */}
                  <div className="relative w-full h-36 rounded-t-xl overflow-hidden mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                  </div>

                  <div className="flex items-start gap-4 px-1">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
                        isCurrent
                          ? `bg-gradient-to-br ${step.gradient} shadow-lg`
                          : 'bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <StepIcon
                        className={`w-5 h-5 ${
                          isCurrent ? 'text-white' : 'text-slate-600'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {isActive && !isCurrent && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
                      )}
                      <h3
                        className={`text-sm font-bold tracking-tight ${
                          isCurrent ? 'text-slate-900' : 'text-slate-700'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {step.subtitle}
                      </p>

                      <AnimatePresence>
                        {isCurrent && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-slate-600 leading-relaxed mt-2">
                              {step.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {step.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${step.skillBg}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  {isCurrent && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${step.gradient}`}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Progress Indicator ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <div className="flex gap-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeStep
                    ? `w-10 bg-gradient-to-r ${step.gradient}`
                    : i < activeStep
                    ? 'w-4 bg-blue-500/80'
                    : 'w-4 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to stage ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-slate-450">
            <span className="text-slate-900 font-bold">
              {String(activeStep + 1).padStart(2, '0')}
            </span>{' '}
            / {String(steps.length).padStart(2, '0')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
