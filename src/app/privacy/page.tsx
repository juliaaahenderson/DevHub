'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
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
            Legal & Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: August 18, 2026 • Version 1.2
          </p>
        </div>

        {/* Content Layout */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
          
          {/* Summary Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4 items-start">
            <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Our Privacy Commitment</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                At DevHub, we build tools and roadmaps for developers. We value your data security and will never sell, lease, or distribute your email or search history to third-party advertisers.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-slate-400" />
              1. Information We Collect
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We collect minimal data required to provide a unified experience. This includes account credentials if registered, preferred difficulty levels, active category filters, and contact forms dispatched to our developer desk.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-slate-400" />
              2. Data Protection & Security
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All data transmitted to or from our servers is encrypted in transit using industry-standard TLS protocols. Database records are stored securely with restricted administrative access and regular configuration audits.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-400" />
              3. Cookies and Trackers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We use lightweight local storage tokens to persist your UI preferences (such as selected layout tabs, dark mode preference, or search terms). No cross-site advertisement or marketing tracking cookies are loaded on our platform.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-950">
              Questions or Concerns?
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              For any questions regarding this Privacy Policy, please file an inquiry through our{' '}
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
