'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText, ShieldAlert, Award } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-24">
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[120px]" />
        <div className="absolute top-1/3 -right-45 w-[500px] h-[500px] rounded-full bg-indigo-600/[0.03] blur-[100px]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.2]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link */}
        <div className="mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
            User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: August 18, 2026 • Version 1.0
          </p>
        </div>

        {/* Content Layout */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
          
          {/* Summary Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4 items-start">
            <Scale className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Legal Agreement Summary</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                By browsing DevHub, using our interactive references, roadmaps, or ecosystem databases, you agree to comply with the terms outlined below. These terms safeguard our collective developers community.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-slate-400" />
              1. Platform License & Use
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              DevHub grants you a personal, non-exclusive, non-transferable, and revocable license to access our learning tracks and tools for personal or educational purposes. Scraping data, indexing API contents, or mimicking platform stylesheets for competitor apps is strictly prohibited.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-400" />
              2. Intellectual Property
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The contents, styling systems, visual design tokens, custom diagrams, logos, and specific roadmap milestones compiled on DevHub are protected under intellectual property laws. Code snippets provided in the reference docs are open for integration into your personal or commercial software systems.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-slate-400" />
              3. Disclaimer of Warranties
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              DevHub code references and software specifications are provided on an "as-is" basis. We make no warranty that information is completely up-to-date or free of logical compilation defects. Use code integrations at your own risk.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-950">
              Questions or Concerns?
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If you have any questions or require clarifications on these Terms of Service, please reach out to us at our{' '}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-bold underline transition-colors">
                Interactive Contact Desk
              </Link>
              .
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
