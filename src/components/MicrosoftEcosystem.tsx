'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microsoftProducts } from '@/data/staticData';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';

// Fluent-style highly accurate SVG icons for the modern Microsoft 365 Suite
const MicrosoftLogo = ({ id, className = 'w-7 h-7' }: { id: string; className?: string }) => {
  switch (id) {
    case 'word':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wordBgGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#185abd" />
              <stop offset="100%" stopColor="#104f91" />
            </linearGradient>
            <linearGradient id="wordFgGrad" x1="7.5" y1="5.5" x2="7.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2b79da" />
              <stop offset="100%" stopColor="#185abd" />
            </linearGradient>
          </defs>
          {/* Background card with document lines */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#wordBgGrad)" />
          {/* Document Lines on the right */}
          <line x1="15" y1="8" x2="18" y2="8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="15" y1="11" x2="19" y2="11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="15" y1="14" x2="18" y2="14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="15" y1="17" x2="19" y2="17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Foreground plate with W letter */}
          <rect x="2.5" y="5.5" width="10" height="13" rx="2" fill="url(#wordFgGrad)" />
          <path d="M4 8.5H5.2L6.1 12.8L7.1 8.5H8.3L9.2 12.8L10.1 8.5H11.3L10.1 14.5H8.9L8 10.2L7.1 14.5H5.9L4 8.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'excel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="excelBgGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#107c41" />
              <stop offset="100%" stopColor="#0a5c30" />
            </linearGradient>
            <linearGradient id="excelFgGrad" x1="7.5" y1="5.5" x2="7.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#23a25d" />
              <stop offset="100%" stopColor="#107c41" />
            </linearGradient>
          </defs>
          {/* Background card with spreadsheet lines */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#excelBgGrad)" />
          {/* Spreadsheet cells on the right */}
          <rect x="14" y="6" width="2" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="17" y="6" width="3" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="14" y="9" width="2" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="17" y="9" width="3" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="14" y="12" width="2" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="17" y="12" width="3" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="14" y="15" width="2" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          <rect x="17" y="15" width="3" height="2" rx="0.3" fill="#ffffff" opacity="0.5" />
          {/* Foreground plate with X letter */}
          <rect x="2.5" y="5.5" width="10" height="13" rx="2" fill="url(#excelFgGrad)" />
          <path d="M4.2 8.5H5.8L7.1 11.2L8.4 8.5H10L8 11.7L10.1 15H8.5L7.1 12.3L5.7 15H4.1L6.2 11.7L4.2 8.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'powerpoint':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pptBgGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c43e1c" />
              <stop offset="100%" stopColor="#9b2c11" />
            </linearGradient>
            <linearGradient id="pptFgGrad" x1="7.5" y1="5.5" x2="7.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ec6c4d" />
              <stop offset="100%" stopColor="#c43e1c" />
            </linearGradient>
          </defs>
          {/* Background card with chart info */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#pptBgGrad)" />
          {/* Slide design representation on the right */}
          <rect x="14" y="7" width="5" height="4" rx="0.5" fill="#ffffff" opacity="0.5" />
          <path d="M14 14.5L16.5 12L19 14.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          {/* Foreground plate with P letter */}
          <rect x="2.5" y="5.5" width="10" height="13" rx="2" fill="url(#pptFgGrad)" />
          <path d="M4.5 8.5H7.2C8.6 8.5 9.7 9.5 9.7 10.7C9.7 11.9 8.6 12.9 7.2 12.9H5.8V15H4.5V8.5ZM5.8 11.7H7.1C7.7 11.7 8.2 11.3 8.2 10.7C8.2 10.1 7.7 9.7 7.1 9.7H5.8V11.7Z" fill="#FFFFFF" />
        </svg>
      );
    case 'outlook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="outlookBgGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0078d4" />
              <stop offset="100%" stopColor="#005a9e" />
            </linearGradient>
            <linearGradient id="outlookFgGrad" x1="7.5" y1="5.5" x2="7.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2b88d8" />
              <stop offset="100%" stopColor="#0078d4" />
            </linearGradient>
          </defs>
          {/* Background card with envelope lines */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#outlookBgGrad)" />
          {/* Envelope lines on the right */}
          <rect x="14" y="7" width="5" height="4" rx="0.5" fill="#ffffff" opacity="0.5" />
          <path d="M14 8.5L16.5 10L19 8.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <line x1="14" y1="14" x2="18" y2="14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          <line x1="14" y1="16.5" x2="17" y2="16.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          {/* Foreground plate with O letter */}
          <rect x="2.5" y="5.5" width="10" height="13" rx="2" fill="url(#outlookFgGrad)" />
          <path d="M7 8.2C8.6 8.2 9.8 9.5 9.8 11.2C9.8 12.9 8.6 14.2 7 14.2C5.4 14.2 4.2 12.9 4.2 11.2C4.2 9.5 5.4 8.2 7 8.2ZM7 9.5C5.9 9.5 5.3 10.2 5.3 11.2C5.3 12.2 5.9 12.9 7 12.9C8.1 12.9 8.7 12.2 8.7 11.2C8.7 10.2 8.1 9.5 7 9.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'teams':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="teamsBgGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4f52b2" />
              <stop offset="100%" stopColor="#373985" />
            </linearGradient>
            <linearGradient id="teamsFgGrad" x1="7.5" y1="5.5" x2="7.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6264a7" />
              <stop offset="100%" stopColor="#4f52b2" />
            </linearGradient>
          </defs>
          {/* Background card with users/communication details */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#teamsBgGrad)" />
          {/* Two small users icons on the right */}
          <circle cx="16.5" cy="8" r="1.5" fill="#ffffff" opacity="0.6" />
          <path d="M14.5 12c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5v1.5h-3V12Z" fill="#ffffff" opacity="0.6" />
          <circle cx="18.5" cy="11.5" r="1.2" fill="#ffffff" opacity="0.4" />
          <path d="M17 14.5c0-0.6 0.5-1.2 1.2-1.2s1.2 0.6 1.2 1.2v1h-2.4v-1Z" fill="#ffffff" opacity="0.4" />
          {/* Foreground plate with T letter */}
          <rect x="2.5" y="5.5" width="10" height="13" rx="2" fill="url(#teamsFgGrad)" />
          <path d="M4 8.5H9.5V9.7H7.3V15H6.1V9.7H4V8.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'onedrive':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="onedriveBg" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0078d4" />
              <stop offset="100%" stopColor="#005a9e" />
            </linearGradient>
          </defs>
          {/* Beautiful Fluent overlapping cloud vector logo */}
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="url(#onedriveBg)" />
          <g transform="translate(1, 1)">
            {/* Back cloud */}
            <path d="M12.5 13.5A2.5 2.5 0 0012.5 8.5A3.2 3.2 0 009.5 6A3.2 3.2 0 006.5 8.5A2.5 2.5 0 006.5 13.5H12.5z" fill="#ffffff" opacity="0.5" />
            {/* Front clouds */}
            <path d="M14.5 15.5a2.5 2.5 0 000-5A3.2 3.2 0 0011.5 8a3.2 3.2 0 00-3 2.5a2.5 2.5 0 000 5H14.5z" fill="#ffffff" opacity="0.8" />
            <path d="M8.5 15.5a2.5 2.5 0 000-5A3 3 0 006 8a3 3 0 00-2.5 2.5a2.5 2.5 0 000 5H8.5z" fill="#ffffff" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default function MicrosoftEcosystem() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Excel for analytic feel
  const activeProduct = microsoftProducts[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white border-b border-slate-200/50 relative overflow-hidden">
      {/* Decorative premium blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/[0.02] blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-purple-500/[0.02] blur-[90px]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.3]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-[1.15]">
            Microsoft Productivity{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Workspace
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Integrate structured developer skills with Microsoft 365 workspaces. Harness data analytics in Excel, co-authoring in Teams, and secure OneDrive cloud storage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Interactive Radial Visual Map (Left Side) */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[440px] flex items-center justify-center bg-white border border-slate-200/80 rounded-3xl shadow-[0_15px_40px_-20px_rgba(15,23,42,0.08)] overflow-hidden group">
            {/* Subtle tech background inside */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-white -z-10" />
            <div className="absolute inset-0 tech-dot-grid opacity-[0.4]" />
            
            {/* Center Node (Microsoft 365 Hub) */}
            <div className="w-28 h-28 rounded-full bg-slate-950 flex flex-col items-center justify-center text-white shadow-2xl relative z-20 border border-white/10">
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400">M365</span>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-1">ECOSYSTEM</span>
              <div 
                className="absolute inset-0 -z-10 rounded-full blur-md opacity-40 transition-all duration-500" 
                style={{ backgroundColor: activeProduct.color }}
              />
            </div>

            {/* Circular Orbit Ring lines */}
            <div className="absolute w-[260px] h-[260px] rounded-full border-2 border-dashed border-slate-300 pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-slate-200 pointer-events-none" />

            {/* Surrounding orbit nodes */}
            {microsoftProducts.map((prod, idx) => {
              const angle = (idx * 360) / microsoftProducts.length;
              // Calculate x, y positions in circle coordinates
              const radius = 130; // Radius in pixels
              const radians = (angle * Math.PI) / 180;
              const x = Math.round(radius * Math.cos(radians));
              const y = Math.round(radius * Math.sin(radians));
              const isActive = activeIndex === idx;

              return (
                <button
                  key={prod.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 z-30 shadow-md ${
                    isActive
                      ? 'bg-white scale-115 ring-2 ring-slate-100 border border-slate-200'
                      : 'bg-white text-slate-500 hover:scale-105 border border-slate-200/80 hover:border-slate-300'
                  }`}
                  aria-label={prod.name}
                >
                  <MicrosoftLogo id={prod.id} className="w-8 h-8" />
                  {isActive && (
                    <span 
                      className="absolute -inset-0.5 rounded-2xl -z-10 opacity-20 blur-sm"
                      style={{ backgroundColor: prod.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Product Details (Right Side) */}
          <div className="lg:col-span-6">
            <div className="relative bg-white border border-slate-200/85 rounded-3xl p-8 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.06)] min-h-[360px] flex flex-col justify-between overflow-hidden">
              {/* Product Color Gradient Accent Border */}
              <div 
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500" 
                style={{ backgroundColor: activeProduct.color }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Header Tagline & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                      <MicrosoftLogo id={activeProduct.id} className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {activeProduct.name}
                      </h3>
                      <span className="text-sm font-semibold text-slate-500">
                        {activeProduct.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Core Feature Bullet Points */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Product Features
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {activeProduct.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                          <Sparkles 
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-colors duration-300"
                            style={{ color: activeProduct.color }} 
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 italic">
                      Use case: {activeProduct.useCase.split(',')[0]}
                    </span>
                    <Link
                      href="/microsoft-office"
                      className="group inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-colors gap-1.5 shadow-sm"
                      style={{ backgroundColor: activeProduct.color }}
                    >
                      Explore Suite
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
