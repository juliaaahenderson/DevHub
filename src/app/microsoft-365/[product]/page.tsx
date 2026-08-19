'use client';

import { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Globe, Laptop, Smartphone, FileText, FileSpreadsheet, Presentation, Mail, Notebook, Users, Cloud, CheckSquare, Kanban, ClipboardList, List, Database, Sparkles, AlertCircle } from 'lucide-react';
import { microsoft365Products, Microsoft365Product } from '@/data/microsoft-products';

// Lucide icon helper
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

const getOfficialLink = (slug: string) => {
  const customLinks: Record<string, string> = {
    word: 'https://www.microsoft.com/en-us/microsoft-365/word',
    excel: 'https://www.microsoft.com/en-us/microsoft-365/excel',
    powerpoint: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint',
    outlook: 'https://www.microsoft.com/en-us/microsoft-365/outlook',
    onedrive: 'https://www.microsoft.com/en-us/microsoft-365/onedrive',
    onenote: 'https://www.microsoft.com/en-us/microsoft-365/onenote',
    teams: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-teams',
    sharepoint: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint',
    publisher: 'https://www.microsoft.com/en-us/microsoft-365/publisher',
    access: 'https://www.microsoft.com/en-us/microsoft-365/access',
    visio: 'https://www.microsoft.com/en-us/microsoft-365/visio',
    sway: 'https://www.microsoft.com/en-us/microsoft-365/sway',
    whiteboard: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-whiteboard',
    stream: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-stream',
    planner: 'https://www.microsoft.com/en-us/microsoft-365/planner/microsoft-planner',
    project: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software',
    todo: 'https://to-do.office.com',
    forms: 'https://forms.office.com',
    lists: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-lists',
    'power-automate': 'https://www.microsoft.com/en-us/power-platform/products/power-automate',
    'power-apps': 'https://www.microsoft.com/en-us/power-platform/products/power-apps',
    'power-bi': 'https://powerbi.microsoft.com',
    copilot: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
    'copilot-pages': 'https://copilot.microsoft.com',
    bookings: 'https://www.microsoft.com/en-us/microsoft-365/business/scheduling-and-booking-app',
    defender: 'https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business',
    intune: 'https://www.microsoft.com/en-us/microsoft-365/enterprise-mobility-security/microsoft-intune',
    purview: 'https://www.microsoft.com/en-us/security/business/microsoft-purview',
    exchange: 'https://www.microsoft.com/en-us/microsoft-365/exchange/email',
    viva: 'https://www.microsoft.com/en-us/microsoft-viva',
    loop: 'https://loop.microsoft.com',
  };
  return customLinks[slug] || `https://www.microsoft.com/en-us/search/result.aspx?q=${encodeURIComponent(slug)}`;
};

export default function ProductDetailPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = use(params);
  const { product: slug } = resolvedParams;

  const product = microsoft365Products.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState('overview');

  // Document sections references for IntersectionObserver
  const sectionIds = [
    { id: 'overview', label: 'Overview' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'get-started', label: 'Get Started' },
    { id: 'installation', label: 'Installation' },
    { id: 'new-users', label: 'New Users' },
    { id: 'existing-users', label: 'Existing Users' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'related-tools', label: 'Related Tools' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset to trigger highlight slightly before section hits top
          if (rect.top <= 160) {
            current = section.id;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4 space-y-4">
        <AlertCircle className="w-12 h-12 text-slate-350 animate-pulse" />
        <h2 className="text-xl font-extrabold text-slate-800">Microsoft Application Not Found</h2>
        <p className="text-xs text-slate-500">The requested specification slug could not be located in our ecosystem.</p>
        <Link href="/microsoft-365" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Directory
        </Link>
      </div>
    );
  }

  const ProductIcon = iconMap[product.iconName] || FileText;

  // Find related products objects from database
  const relatedProdObjects = microsoft365Products.filter(p => 
    product.relatedProducts.includes(p.slug)
  );

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-100/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[400px] rounded-full bg-indigo-50/20 blur-[100px]" />
      </div>

      {/* ── 1. PRODUCT HERO (Breadcrumb + Header + Quick Badges) ── */}
      <header className="bg-white border-b border-slate-200/80 pt-10 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <Link href="/microsoft-365" className="hover:text-slate-700 transition-colors">Microsoft 365</Link>
            <ChevronRight className="w-3 h-3 text-slate-350" />
            <Link 
              href={`/microsoft-365?category=${encodeURIComponent(product.category)}`}
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-350" />
            <span className="text-slate-900 font-extrabold">{product.name}</span>
          </div>

          {/* Hero Content Grid */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div 
                style={{ backgroundColor: product.color }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0"
              >
                <ProductIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                  {product.name}
                </h1>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-xl">
                  {product.tagline}
                </p>
              </div>
            </div>

            <div className="space-y-3 shrink-0">
              {/* Platform badge list */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mr-1">Available on:</span>
                {product.platforms.map((platform) => (
                  <span 
                    key={platform} 
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-bold"
                  >
                    {platform === 'Web' && <Globe className="w-3 h-3 text-slate-450" />}
                    {platform === 'Desktop' && <Laptop className="w-3 h-3 text-slate-450" />}
                    {platform === 'Mobile' && <Smartphone className="w-3 h-3 text-slate-450" />}
                    {platform}
                  </span>
                ))}
              </div>

              {/* Primary CTA */}
              <a 
                href={getOfficialLink(product.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/10 cursor-pointer"
              >
                Get Started
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* ── 2. STICKY SUB-NAVIGATION ── */}
      <nav className="sticky top-14 z-30 bg-white/90 backdrop-blur border-b border-slate-200/80 shadow-sm overflow-x-auto scrollbar-none py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 sm:space-x-2">
          {sectionIds.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToAnchor(section.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
                    : 'text-slate-500 hover:text-slate-850 hover:bg-slate-50'
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── 3. MAIN WORKSPACE CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Main documentation block (Spans 9 columns on desktop) */}
        <main className="lg:col-span-9 space-y-16">
          
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">01 / Ecosystem Profile</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                What is {product.name}?
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
              {product.overview}
            </p>

            {/* Use Case Columns */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Common Use Cases & Workflows
              </h4>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {product.useCases.map((useCase, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      y: -3, 
                      borderColor: product.color,
                      boxShadow: `0 8px 25px -4px ${product.color}18`
                    }}
                    style={{ 
                      borderLeftColor: product.color,
                      background: `linear-gradient(135deg, ${product.color}03 0%, #f8fafc 100%)`
                    }}
                    className="p-4 bg-slate-50/50 border border-slate-100 border-l-4 rounded-r-2xl rounded-l-sm flex gap-3 items-center justify-between hover:bg-white transition-all duration-300 shadow-sm cursor-default group"
                  >
                    <div className="flex gap-3 items-start flex-1">
                      <div 
                        style={{ 
                          backgroundColor: `${product.color}15`,
                          color: product.color
                        }}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 shadow-sm"
                      >
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-655 font-medium leading-relaxed">{useCase}</span>
                    </div>
                    <ChevronRight 
                      style={{ color: product.color }}
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-6px] group-hover:translate-x-0 shrink-0" 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
                 {/* Section 2: How It Works */}
          <section id="how-it-works" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm overflow-hidden">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">02 / Workflow Mechanics</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Step-by-Step Workflow
              </h2>
            </div>

            {/* Premium Horizontal Connected Timeline with Animations */}
            <div className="relative pt-6 pb-2">
              {/* Animated Connector Line behind bubbles */}
              <div className="absolute top-10 left-10 right-10 h-[2px] bg-slate-100 hidden md:block pointer-events-none">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ backgroundColor: product.color }}
                  className="h-full w-0 opacity-40"
                />
              </div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10"
              >
                {product.howItWorks.map((stepText, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } }
                    }}
                    className="flex flex-col items-center md:items-start space-y-4 group"
                  >
                    {/* Timeline Bubble aligned at the top of connector line */}
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      style={{ 
                        borderColor: product.color,
                        color: product.color,
                        boxShadow: `0 4px 12px -2px ${product.color}25`
                      }}
                      className="w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center text-xs font-mono font-bold z-20 transition-all duration-355 cursor-default"
                    >
                      {(idx + 1).toString().padStart(2, '0')}
                    </motion.div>
                    
                    {/* Content Box below */}
                    <motion.div 
                      whileHover={{ 
                        y: -6,
                        boxShadow: `0 12px 25px -5px ${product.color}15`,
                        borderColor: product.color
                      }}
                      style={{ borderTopColor: product.color }}
                      className="w-full bg-slate-50/40 border border-slate-100 border-t-4 rounded-2xl p-4 shadow-sm transition-all duration-300 flex-1 flex flex-col min-h-[140px]"
                    >
                      <p className="text-sm text-slate-655 font-medium leading-relaxed">
                        {stepText}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 3: Key Features */}
          <section id="key-features" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">03 / Bento Capabilities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Key Features
              </h2>
            </div>

            {/* Asymmetric Bento-style Layout */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2"
            >
              {product.features.map((feat, idx) => {
                // Alternating sizes to create an asymmetric bento grid rhythm
                const isLarge = idx === 0 || idx === 3;
                return (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: `0 12px 25px -5px ${product.color}18`,
                      borderColor: product.color
                    }}
                    style={{
                      borderLeftColor: product.color,
                      background: `linear-gradient(135deg, ${product.color}03 0%, #f8fafc 100%)`
                    }}
                    className={`border border-slate-100 border-l-4 rounded-r-3xl rounded-l-sm transition-all duration-300 p-6 space-y-3 shadow-sm ${
                      isLarge ? 'md:col-span-8' : 'md:col-span-4'
                    }`}
                  >
                    <div 
                      style={{ 
                        backgroundColor: `${product.color}15`,
                        color: product.color
                      }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-sm text-slate-655 leading-relaxed font-medium">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Section 4: Getting Started */}
          <section id="get-started" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">04 / Accessibility Options</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                How do you want to use it?
              </h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2"
            >
              {/* Option 1: Web */}
              {product.platforms.includes('Web') && (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5,
                    borderColor: product.color,
                    boxShadow: `0 12px 25px -5px ${product.color}18`
                  }}
                  style={{
                    borderLeftColor: product.color,
                    background: `linear-gradient(135deg, ${product.color}02 0%, #ffffff 100%)`
                  }}
                  className="border border-slate-200 border-l-4 rounded-r-3xl rounded-l-sm p-5 space-y-4 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <Globe className="w-6 h-6 text-blue-650" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Use on the Web</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Open office.com or click below, log in, select the product icon, and begin drafting documents securely in any modern browser.
                    </p>
                  </div>
                  <a 
                    href="https://office.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-655 hover:text-blue-700 pt-2"
                  >
                    Open Office Web →
                  </a>
                </motion.div>
              )}

              {/* Option 2: Desktop */}
              {product.platforms.includes('Desktop') && (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5,
                    borderColor: product.color,
                    boxShadow: `0 12px 25px -5px ${product.color}18`
                  }}
                  style={{
                    borderLeftColor: product.color,
                    background: `linear-gradient(135deg, ${product.color}02 0%, #ffffff 100%)`
                  }}
                  className="border border-slate-200 border-l-4 rounded-r-3xl rounded-l-sm p-5 space-y-4 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <Laptop className="w-6 h-6 text-blue-650" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Use on Desktop</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Ensure your system license permits local installs, run the client installer, link your Microsoft ID account, and run offline.
                    </p>
                  </div>
                  <button 
                    onClick={() => scrollToAnchor('installation')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-655 hover:text-blue-700 text-left pt-2"
                  >
                    View Setup Guide →
                  </button>
                </motion.div>
              )}

              {/* Option 3: Mobile */}
              {product.platforms.includes('Mobile') && (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5,
                    borderColor: product.color,
                    boxShadow: `0 12px 25px -5px ${product.color}18`
                  }}
                  style={{
                    borderLeftColor: product.color,
                    background: `linear-gradient(135deg, ${product.color}02 0%, #ffffff 100%)`
                  }}
                  className="border border-slate-200 border-l-4 rounded-r-3xl rounded-l-sm p-5 space-y-4 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <Smartphone className="w-6 h-6 text-blue-650" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Use on Mobile</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Download the official mobile app from the iOS App Store or Google Play Store, log in, and sync document lists on the go.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 pt-2">Download via App Store</span>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* Section 5: Installation Guide */}
          <section id="installation" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">05 / PC & macOS Client Setup</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Installation Guide
              </h2>
            </div>

            {product.platforms.includes('Desktop') ? (
              <div className="space-y-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } }
                  }}
                  className="divide-y divide-slate-100 border-t border-b border-slate-100"
                >
                  {product.installation.map((step, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="py-3 flex gap-4 items-start text-sm font-medium text-slate-655"
                    >
                      <div 
                        style={{ 
                          borderColor: product.color,
                          color: product.color,
                          backgroundColor: `${product.color}10`
                        }}
                        className="w-4 h-4 rounded-full border flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5"
                      >
                        ✓
                      </div>
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Important Disclaimer Banner */}
                <div className="p-4 bg-amber-50 border border-amber-100 text-amber-850 rounded-2xl flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold">Installation Requirement Notice</h5>
                    <p className="text-xs leading-relaxed text-amber-700 font-medium">
                      Availability may depend on your device, region, account type, and Microsoft subscription or license.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-2">
                <Globe className="w-8 h-8 text-slate-350 mx-auto" />
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Web-Only Application</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {product.name} is a cloud-based service managed directly within internet browsers or Teams spaces. No local desktop client installation is required.
                </p>
              </div>
            )}
          </section>

          {/* Section 6: New User Guide */}
          <section id="new-users" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">06 / Onboarding Timeline</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                New User Onboarding Guide
              </h2>
            </div>

            {/* Onboarding timeline graph */}
            <div className="relative pl-6 ml-3 space-y-8 pt-2">
              {/* Vertical line indicator */}
              <div className="absolute left-2 top-2 bottom-2 w-[2px] bg-slate-100 pointer-events-none">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  style={{ backgroundColor: product.color }}
                  className="w-full h-0 opacity-40"
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } }
                }}
                className="space-y-8 relative z-10"
              >
                {product.newUserGuide.map((stepObj) => (
                  <motion.div 
                    key={stepObj.step} 
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="relative space-y-1.5 pl-2"
                  >
                    {/* Timeline circle node */}
                    <span 
                      style={{ borderColor: product.color, color: product.color }}
                      className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center text-[9px] font-bold shadow-sm" 
                    />
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span 
                        style={{ color: product.color }}
                        className="text-[10px] font-mono font-bold"
                      >
                        {stepObj.step}
                      </span>
                      {stepObj.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-xl">
                      {stepObj.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 7: Existing User Guide */}
          <section id="existing-users" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">07 / Profile Sync</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Existing Microsoft Users Portal
              </h2>
            </div>

            {/* Visually distinct path layout */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2"
            >
              {product.existingUserGuide.map((stepObj) => (
                <motion.div 
                  key={stepObj.step} 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 12px 25px -5px ${product.color}18`,
                    borderColor: product.color
                  }}
                  style={{ 
                    borderLeftColor: product.color,
                    background: `linear-gradient(135deg, ${product.color}03 0%, #f8fafc 100%)`
                  }}
                  className="p-5 bg-slate-50 border border-slate-100 border-l-4 rounded-r-3xl rounded-l-sm space-y-3 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-3">
                    <div 
                      style={{ 
                        backgroundColor: `${product.color}15`,
                        color: product.color
                      }}
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-mono font-bold shadow-sm"
                    >
                      {stepObj.step}
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">{stepObj.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {stepObj.desc}
                    </p>
                  </div>
                  <div className="flex justify-end pt-2">
                    <ChevronRight 
                      style={{ color: product.color }}
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-6px] group-hover:translate-x-0 shrink-0" 
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Section 8: Platforms Comparison */}
          <section id="platforms" className="scroll-mt-32 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">08 / Environment Matrix</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Platform Workspaces Comparison
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Web details */}
              <div className={`p-6 rounded-3xl border ${
                product.platforms.includes('Web')
                  ? 'bg-blue-50/20 border-blue-200 shadow-sm'
                  : 'bg-slate-50/50 border-slate-200 opacity-60'
              } space-y-3`}>
                <Globe className="w-5 h-5 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Web Portal</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {product.platforms.includes('Web') 
                    ? 'Fully supported. Best for quick access from any computer, web browser, or public workspace.' 
                    : 'Not supported. Web interface access is unavailable for this business tool.'}
                </p>
              </div>

              {/* Desktop details */}
              <div className={`p-6 rounded-3xl border ${
                product.platforms.includes('Desktop')
                  ? 'bg-blue-50/20 border-blue-200 shadow-sm'
                  : 'bg-slate-50/50 border-slate-200 opacity-60'
              } space-y-3`}>
                <Laptop className="w-5 h-5 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Desktop Application</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {product.platforms.includes('Desktop') 
                    ? 'Fully supported. Best for full-featured, offline-ready professional production workflows.' 
                    : 'Not supported. Client installation is not supported; run directly on the web.'}
                </p>
              </div>

              {/* Mobile details */}
              <div className={`p-6 rounded-3xl border ${
                product.platforms.includes('Mobile')
                  ? 'bg-blue-50/20 border-blue-200 shadow-sm'
                  : 'bg-slate-50/50 border-slate-200 opacity-60'
              } space-y-3`}>
                <Smartphone className="w-5 h-5 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Mobile App</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {product.platforms.includes('Mobile') 
                    ? 'Fully supported. Best for accessing your documents and collaborating on the go.' 
                    : 'Not supported. No official standalone mobile application is active for this tool.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Related Tools Recommendations */}
          {relatedProdObjects.length > 0 && (
            <section id="related-tools" className="scroll-mt-32 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">09 / Integrated Ecosystem</span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Related Microsoft Products
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProdObjects.map((rp) => {
                  const RPIcon = iconMap[rp.iconName] || FileText;
                  return (
                    <Link
                      key={rp.slug}
                      href={`/microsoft-365/${rp.slug}`}
                      className="group p-5 bg-white border border-slate-200 hover:border-blue-350 rounded-2xl shadow-sm hover:shadow transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div 
                          style={{ backgroundColor: rp.color }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm shrink-0"
                        >
                          <RPIcon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-605 transition-colors">
                          {rp.name}
                        </h4>
                        <p className="text-xs text-slate-550 leading-relaxed line-clamp-2">
                          {rp.tagline}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 group-hover:text-blue-700 mt-4 block">
                        Explore Guide →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

        </main>

        {/* Sidebar Info Summary Panel (Spans 3 columns on desktop) */}
        <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-36">
          <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              Specification Digest
            </h4>
            
            <div className="space-y-3.5 divide-y divide-slate-100 text-xs font-semibold">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Product Category</span>
                <span className="text-slate-800 font-bold block">{product.category}</span>
              </div>
              <div className="space-y-1 pt-3.5">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Ecosystem Space</span>
                <span className="text-slate-800 block">Microsoft 365 / Office Suite</span>
              </div>
              <div className="space-y-1 pt-3.5">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Interactive Desk</span>
                <Link href="/contact" className="text-blue-600 hover:underline block">Request Tenant Assistance</Link>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
