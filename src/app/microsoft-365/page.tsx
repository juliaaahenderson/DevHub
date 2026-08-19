'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, FileSpreadsheet, Presentation, Mail, Notebook, Users, Cloud, CheckSquare, Kanban, ClipboardList, List, Database, Sparkles, ArrowRight, Globe, Laptop, Smartphone, BookOpen } from 'lucide-react';
import { microsoft365Products, Microsoft365Product } from '@/data/microsoft-products';

// Dynamic icon resolver mapping
const iconMap: Record<string, any> = {
  FileText: FileText,
  FileSpreadsheet: FileSpreadsheet,
  Presentation: Presentation,
  Mail: Mail,
  Notebook: Notebook,
  Users: Users,
  Cloud: Cloud,
  CheckSquare: CheckSquare,
  Kanban: Kanban,
  ClipboardList: ClipboardList,
  List: List,
  Database: Database,
  Sparkles: Sparkles,
};

const categories = [
  'All',
  'Core Apps',
  'Collaboration',
  'Productivity',
  'Business Tools',
  'Power Platform & AI'
];

export default function Microsoft365Hub() {
  const [selectedProductId, setSelectedProductId] = useState(microsoft365Products[0].slug);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const matchedCategory = categories.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
        const newFiltered = microsoft365Products.filter(
          (p) => p.category === matchedCategory
        );
        if (newFiltered.length > 0) {
          setSelectedProductId(newFiltered[0].slug);
        }
      }
    }
  }, []);

  const filteredProducts = microsoft365Products.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  const activeProduct = microsoft365Products.find((p) => p.slug === selectedProductId) || microsoft365Products[0];
  const ActiveIcon = iconMap[activeProduct.iconName] || FileText;

  // Handle changing category: auto-select the first product in the new category filter
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const newFiltered = microsoft365Products.filter(
      (p) => cat === 'All' || p.category === cat
    );
    if (newFiltered.length > 0) {
      setSelectedProductId(newFiltered[0].slug);
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen relative overflow-hidden font-sans text-slate-800 selection:bg-blue-100/80">
      
      {/* ── Decorative premium curved waves & glow background ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Wave Stack */}
        <div className="absolute -left-20 top-20 w-[380px] h-[600px] opacity-[0.4]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200" strokeWidth="0.4">
            <path d="M-20,0 C20,40 40,80 20,120 C0,160 -10,180 -30,200" />
            <path d="M-10,0 C30,40 50,80 30,120 C10,160 0,180 -20,200" />
            <path d="M0,0 C40,40 60,80 40,120 C20,160 10,180 -10,200" />
          </svg>
        </div>
        {/* Right Wave Stack */}
        <div className="absolute -right-24 top-40 w-[420px] h-[600px] opacity-[0.4]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200" strokeWidth="0.4">
            <path d="M120,0 C80,40 60,80 80,120 C100,160 110,180 130,200" />
            <path d="M110,0 C70,40 50,80 70,120 C90,160 100,180 120,200" />
            <path d="M100,0 C60,40 40,80 60,120 C80,160 90,180 110,200" />
          </svg>
        </div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-indigo-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ── Page Hero Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Microsoft 365 Workspaces
          </h1>
          <p className="text-lg text-slate-605 leading-relaxed">
            Unify code development with corporate workspace solutions. Master Excel formulas, team communications in Teams channels, and OneDrive directory structures.
          </p>
        </motion.div>

        {/* ── Central Microsoft 365 Dashboard Area ── */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation (Product Selector List) */}
          <div className="lg:col-span-4 space-y-4 lg:max-h-[750px] lg:overflow-y-auto pr-2 scrollbar-thin">
            
            {/* Category Pills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase px-2">
                Filter Category
              </h4>
              <div className="flex flex-wrap gap-1 px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase px-2 mb-2">
                Microsoft 365 Products ({filteredProducts.length})
              </h4>
              <div className="space-y-1.5">
                {filteredProducts.map((prod) => {
                  const ProdIcon = iconMap[prod.iconName] || FileText;
                  const isActive = selectedProductId === prod.slug;
                  return (
                    <button
                      key={prod.slug}
                      onClick={() => setSelectedProductId(prod.slug)}
                      className={`group w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 text-left cursor-pointer border border-transparent hover:scale-[1.01] ${
                        isActive
                          ? 'bg-slate-900 shadow-lg shadow-slate-900/10 scale-[1.01] hover:bg-slate-800'
                          : 'bg-transparent hover:bg-slate-100/50 hover:border-slate-200'
                      }`}
                    >
                      <div
                        style={{ backgroundColor: isActive ? 'transparent' : prod.color }}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all ${
                          isActive ? 'bg-white/10' : ''
                        }`}
                      >
                        <ProdIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 
                          style={{ color: isActive ? '#ffffff' : '#0f172a' }}
                          className="font-bold truncate transition-colors duration-150"
                        >
                          {prod.name}
                        </h5>
                        <span 
                          style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#64748b' }}
                          className="text-xs font-medium block truncate transition-colors duration-150"
                        >
                          {prod.tagline}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Product Showcase Panel */}
          <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-slate-200 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      style={{ 
                        backgroundColor: activeProduct.color,
                        boxShadow: `0 10px 25px -5px ${activeProduct.color}40`
                      }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300"
                    >
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {activeProduct.name}
                      </h3>
                      <span className="text-sm font-semibold text-slate-500">
                        {activeProduct.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic platforms badge */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {activeProduct.platforms.map((platform) => (
                        <span 
                          key={platform} 
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-655 font-bold"
                        >
                          {platform === 'Web' && <Globe className="w-3 h-3 text-slate-400" />}
                          {platform === 'Desktop' && <Laptop className="w-3 h-3 text-slate-400" />}
                          {platform === 'Mobile' && <Smartphone className="w-3 h-3 text-slate-400" />}
                          {platform}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/microsoft-365/${activeProduct.slug}`}
                      style={{ 
                        backgroundColor: activeProduct.color,
                        boxShadow: `0 4px 14px -3px ${activeProduct.color}50`
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-xs font-bold transition-all hover:brightness-95 active:scale-98 cursor-pointer shadow-sm"
                    >
                      View Detailed Documentation →
                    </Link>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Primary Use Case Box */}
                <div 
                  style={{ borderLeftColor: activeProduct.color }}
                  className="p-4 bg-slate-50 border border-slate-150 border-l-4 rounded-r-2xl space-y-1 shadow-sm"
                >
                  <span className="text-xs font-bold text-slate-450 uppercase tracking-wider block">
                    Primary Use Case
                  </span>
                  <p className="text-sm font-semibold text-slate-700 leading-normal">
                    {activeProduct.useCases[0]}
                  </p>
                </div>

                {/* Detailed Feature List */}
                <div className="space-y-4 pt-4 border-t border-slate-150">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Core Integrations & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProduct.features.map((feat, i) => (
                      <div 
                        key={i} 
                        className="p-4 bg-slate-50/50 border border-slate-100 hover:border-slate-250 rounded-2xl flex gap-3 items-start hover:bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <Sparkles 
                          style={{ color: activeProduct.color }}
                          className="w-4 h-4 mt-0.5 flex-shrink-0" 
                        />
                        <div className="space-y-0.5">
                          <span className="text-sm font-bold text-slate-800 block">{feat.title}</span>
                          <span className="text-xs text-slate-500 leading-relaxed block">{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Helpful Integration Guide Card */}
                <div className="p-4 rounded-2xl bg-blue-50/20 border border-blue-100/70 flex gap-3.5 items-start mt-6 shadow-sm">
                  <div 
                    style={{ backgroundColor: `${activeProduct.color}15`, color: activeProduct.color }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-800">Workspace Integration Tip</h5>
                    <p className="text-xs text-slate-650 leading-relaxed font-medium">
                      Want to learn about onboarding workflows, client licensing, profile synchronization, or setup matrix? Select <strong>View Detailed Documentation</strong> at the top of the showcase header.
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </div>
  );
}
