'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, FileText, Search, Star, Copy, Check, ExternalLink, Compass, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface DocArticle {
  title: string;
  category: string;
  excerpt: string;
  code: string;
  resultTitle: string;
  resultDesc: string;
  toc: string[];
}

const previewArticles: Record<string, DocArticle> = {
  flexbox: {
    title: 'Flexbox Layout Engineering',
    category: 'CSS Architecture',
    excerpt: 'Flexbox (Flexible Box Layout) is a highly efficient one-dimensional layout model designed to distribute space along a single axis (either row or column) while aligning items dynamically. It handles responsive dimension recalculations without ad-hoc margins, floats, or complex layout calculations.',
    code: `// Define a flexible, centered row layout with auto-spacing
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem; /* modern gap sizing */
  flex-wrap: wrap; /* responsive safety fallback */
}`,
    resultTitle: 'Live Spacing Output',
    resultDesc: 'Arranges multiple child nodes horizontally, aligning their center lines perfectly while maintaining an even 24px (1.5rem) gap. Items wrap automatically when screen boundaries are exceeded.',
    toc: ['Overview & Core Concepts', 'Flex Container Properties', 'Flex Axis Alignments', 'Responsive Wrapping Rules']
  },
  grid: {
    title: 'CSS Grid Specifications',
    category: 'CSS Architecture',
    excerpt: 'CSS Grid Layout is a two-dimensional layout system that lets you align items into columns and rows. It provides a more robust structural framework than Flexbox when handling complex, grid-like grid templates and overlap controls.',
    code: `// Create a responsive 3-column auto-fit layout
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: stretch;
}`,
    resultTitle: 'Grid Template Output',
    resultDesc: 'Generates a dynamic multi-column layout. Columns scale symmetrically. If horizontal space narrows under 250px, items shift downstream automatically.',
    toc: ['Two-Dimensional Systems', 'Grid Templates', 'Auto-Fit vs Auto-Fill', 'Implicit vs Explicit Grids']
  },
  tailwind: {
    title: 'Tailwind CSS Conventions',
    category: 'CSS Architecture',
    excerpt: 'Tailwind is a utility-first CSS framework designed to compose layouts directly in markup. Instead of maintaining separate stylesheets, style cards are built with granular classes that map to fixed design tokens.',
    code: `<!-- Premium responsive flex card wrapper -->
<div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300">
  <div className="w-12 h-12 rounded-xl bg-blue-50" />
  <h3 className="text-lg font-bold text-slate-900">Custom Card</h3>
</div>`,
    resultTitle: 'Utility Render Output',
    resultDesc: 'Arranges items in a column structure on mobile viewports, shifting to a row alignment on medium screens (md: 768px) with hover scale shadows.',
    toc: ['Utility-First Rationale', 'Responsive Breakpoints', 'Arbitrary Styling Keys', 'Configuration & Purge']
  },
  closures: {
    title: 'Lexical Closures & Scope',
    category: 'Modern JavaScript',
    excerpt: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time, allowing inner routines to preserve parent scope parameters.',
    code: `// Encapsulating state using an anonymous lexical scope
function createSecureCounter(initialValue = 0) {
  let privateCount = initialValue;
  return {
    increment: () => ++privateCount,
    decrement: () => --privateCount,
    getValue: () => privateCount
  };
}

const secureCounter = createSecureCounter(10);
secureCounter.increment(); // returns: 11
console.log(secureCounter.getValue()); // returns: 11`,
    resultTitle: 'Console Scope Output',
    resultDesc: 'Returns a stateful API object. The outer function terminates, yet the enclosed increment/decrement operations maintain stable access to the private state variable.',
    toc: ['Execution Context & Scope', 'Lexical Environments', 'State Encapsulation', 'Memory & Garbage Collection']
  },
  promises: {
    title: 'Asynchronous Promise Patterns',
    category: 'Modern JavaScript',
    excerpt: 'Promises represent the eventual completion or failure of an asynchronous operation. Async/await patterns provide syntactic sugar on top of promise chaining, making async execution blocks read like synchronous operations.',
    code: `// Simulating an asynchronous database fetch request
async function fetchUserRecord(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error('Fetch failed');
    return await response.json();
  } catch (error) {
    console.error('Request failed:', error);
  }
}`,
    resultTitle: 'Async Thread Resolver',
    resultDesc: 'Spawns a background API network request, suspends execution cleanly without blocking the UI thread, and handles runtime failures safely within a try-catch block.',
    toc: ['Event Loop & Microtasks', 'Promise Lifecycle States', 'Async / Await Syntax', 'Error Catching Boundaries']
  },
  destructuring: {
    title: 'ES6 Object Destructuring',
    category: 'Modern JavaScript',
    excerpt: 'Destructuring binding syntax allows unpacking properties from objects or arrays into distinct variables. This simplifies data extraction and functional parameter configurations.',
    code: `const devConfig = { port: 3000, host: 'localhost', db: 'dev' };

// Unpacking configuration parameters with fallback defaults
const { port, host, ssl = false } = devConfig;

// Parameter destructuring inside a function signature
function start({ port, host }) {
  console.log(\`Running on \${host}:\${port}\`);
}`,
    resultTitle: 'Parameter Extraction',
    resultDesc: 'Binds variable names matching target object properties. Unspecified keys (like ssl) fall back gracefully to their defined default assignments.',
    toc: ['Object Unpacking', 'Array Index Offsets', 'Property Aliasing', 'Nested Parameters']
  },
  hooks: {
    title: 'State Lifecycle with React Hooks',
    category: 'React & Next.js',
    excerpt: 'Hooks are specialized JavaScript functions that enable developers to hook state values and lifecycle triggers directly into functional React components. The useState hook handles component re-renders, while useEffect isolates state-based side effects and cleanups.',
    code: `import { useState, useEffect } from 'react';

export default function LifecycleTracker() {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    console.log('Component initialized');
    return () => {
      console.log('Component unmounted, clearing side-effects');
    };
  }, []); // empty dependency array triggers mount/unmount only
}`,
    resultTitle: 'React Lifecycle Flow',
    resultDesc: 'Tracks initialization signals on component mount, binds event listeners or API feeds, and runs cleanups automatically upon component destruction to prevent memory leakage.',
    toc: ['Functional React Paradigms', 'State Hooks (useState)', 'Side Effect cleanups (useEffect)', 'Rules of React Hooks']
  },
  routing: {
    title: 'Next.js App Router Structure',
    category: 'React & Next.js',
    excerpt: 'The Next.js App Router is a folder-based system that uses Server Components by default. Pages, layouts, and error boundaries are configured by creating specific file tokens inside structural directories.',
    code: `// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="dashboard-wrapper">
      <nav className="side-navigation" />
      {children}
    </section>
  );
}`,
    resultTitle: 'Nested Layout Resolver',
    resultDesc: 'Renders persistent sidebar elements while injecting children routes inside the content slot. Prevents re-rendering parent components during sub-page transitions.',
    toc: ['Folder-Based Routing', 'React Server Components', 'Shared Layout States', 'Dynamic URL Segments']
  }
};

export default function DocPreview() {
  const [selectedKey, setSelectedKey] = useState<string>('flexbox');
  const [copied, setCopied] = useState<boolean>(false);
  const [showCode, setShowCode] = useState<boolean>(true);

  // Interactive Playground States
  const [flexJustify, setFlexJustify] = useState<'space-between' | 'space-around' | 'center'>('space-between');
  const [counterVal, setCounterVal] = useState<number>(10);
  const [hookActive, setHookActive] = useState<boolean>(false);
  const [hookLogs, setHookLogs] = useState<string[]>(['Component initialized']);

  const article = previewArticles[selectedKey];

  const handleCopy = () => {
    navigator.clipboard.writeText(article.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (codeText: string) => {
    return codeText.split('\n').map((line, idx) => {
      // Escape HTML entities to prevent rendering tags as markup
      let escaped = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      // Match comments first
      if (escaped.trim().startsWith('//') || escaped.trim().startsWith('<!--')) {
        return (
          <div key={idx} className="min-h-[1.2rem] text-slate-500 italic" dangerouslySetInnerHTML={{ __html: escaped }} />
        );
      }

      // 1. Highlight strings first, using single quotes temporarily for styles
      escaped = escaped.replace(/(["'`])(.*?)\1/g, "<span class='text-emerald-400'>$1$2$1</span>");

      // 2. Highlight keywords (excluding 'class' to avoid collision with CSS tags)
      const keywords = /\b(const|let|var|function|return|import|from|export|default|display|flex-direction|justify-content|align-items|gap|flex-wrap|repeat|auto-fit|minmax|async|await|try|catch|throw|if|else)\b/g;
      escaped = escaped.replace(keywords, "<span class='text-sky-400 font-medium'>$1</span>");

      // 3. Highlight key terms/functions
      const functions = /\b(createSecureCounter|secureCounter|increment|decrement|getValue|useState|useEffect|console|log|error|fetch|DashboardLayout|LifecycleTracker|isActive|setIsActive|devConfig|start)\b/g;
      escaped = escaped.replace(functions, "<span class='text-amber-300'>$1</span>");

      // 4. Convert single quotes in class names back to standard double quotes
      escaped = escaped.replace(/class='([^']+)'/g, 'class="$1"');

      return (
        <div key={idx} className="min-h-[1.2rem]" dangerouslySetInnerHTML={{ __html: escaped }} />
      );
    });
  };

  // Group items by category for high-fidelity sidebar nesting
  const groupedCategories: Record<string, string[]> = {
    'CSS Architecture': ['flexbox', 'grid', 'tailwind'],
    'Modern JavaScript': ['closures', 'promises', 'destructuring'],
    'React & Next.js': ['hooks', 'routing']
  };

  return (
    <section className="py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/50 relative overflow-hidden">
      {/* Decorative premium curved waves background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Wave Stack */}
        <div className="absolute -left-20 top-12 w-[380px] h-[600px] opacity-[0.45]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200/80" strokeWidth="0.4">
            <path d="M-20,0 C20,40 40,80 20,120 C0,160 -10,180 -30,200" />
            <path d="M-10,0 C30,40 50,80 30,120 C10,160 0,180 -20,200" />
            <path d="M0,0 C40,40 60,80 40,120 C20,160 10,180 -10,200" />
            <path d="M10,0 C50,40 70,80 50,120 C30,160 20,180 0,200" />
            <path d="M20,0 C60,40 80,80 60,120 C40,160 30,180 10,200" />
          </svg>
        </div>
        {/* Right Wave Stack */}
        <div className="absolute -right-24 top-24 w-[420px] h-[600px] opacity-[0.5]">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full stroke-slate-200/80" strokeWidth="0.4">
            <path d="M120,0 C80,40 60,80 80,120 C100,160 110,180 130,200" />
            <path d="M110,0 C70,40 50,80 70,120 C90,160 100,180 120,200" />
            <path d="M100,0 C60,40 40,80 60,120 C80,160 90,180 110,200" />
            <path d="M90,0 C50,40 30,80 50,120 C70,160 80,180 100,200" />
            <path d="M80,0 C40,40 20,80 40,120 C60,160 70,180 90,200" />
          </svg>
        </div>
        {/* Vivid background glow orbs */}
        <div className="absolute -top-48 -right-40 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/10 via-transparent to-indigo-100/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-500 mx-auto"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
            8 Interactive References
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-slate-800 leading-[1.15]"
          >
            Technical Knowledge,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Structured</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            Inspired by MDN Web Docs. Discover clean semantic explanations, custom syntax-highlighted IDE environments, and structured tables of contents.
          </motion.p>
        </div>

        {/* Documentation Editorial Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-3xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto"
        >
          
          {/* Column 1: Left Navigation Sidebar */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-50/80 to-white p-6 border-b lg:border-b-0 lg:border-r border-slate-200/70 flex flex-col justify-between max-h-[640px] overflow-y-auto">
            <div className="space-y-6">
              {/* Search Bar Input (Mocked) */}
              <div className="relative group">
                <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Quick search docs..."
                  className="w-full bg-white pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder:text-slate-400 cursor-not-allowed shadow-sm hover:shadow-md hover:border-slate-300"
                  readOnly
                />
              </div>

              {/* Nested Categories & Sub-items */}
              <div className="space-y-6">
                {Object.entries(groupedCategories).map(([categoryName, keys]) => (
                  <div key={categoryName} className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5 px-1.5">
                      <Compass className="w-3.5 h-3.5 text-slate-400" />
                      {categoryName}
                    </h4>
                    <div className="space-y-1">
                      {keys.map((key) => {
                        const isActive = selectedKey === key;
                        const item = previewArticles[key];
                        return (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedKey(key);
                              setCopied(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                              isActive
                                ? 'bg-blue-50 text-blue-600 shadow-sm border-l-[3px] border-blue-500 pl-2.5 font-bold ring-1 ring-blue-100'
                                : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-900 hover:ring-1 hover:ring-slate-200/60'
                            }`}
                          >
                            <span className="flex items-center gap-2.5 truncate">
                              <FileText className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${isActive ? 'text-blue-500' : 'text-slate-400'}`} />
                              <span className="truncate">{item.title}</span>
                            </span>
                            <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-all ${isActive ? 'opacity-100 translate-x-0.5 text-blue-500' : 'opacity-40'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar Bottom Link */}
            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <Link
                href="/documentation"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                Go to Docs Portal
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Central Content Preview Block */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/70">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedKey + '-header'}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/80 shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* IDE Code & Explanation Switcher Container */}
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_8px_30px_-10px_rgba(15,23,42,0.4)]">
                <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-0.5 bg-slate-900/50 rounded-lg p-0.5">
                    <button 
                      onClick={() => setShowCode(true)}
                      className={`px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${showCode ? 'bg-slate-700 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Code View
                    </button>
                    <button 
                      onClick={() => setShowCode(false)}
                      className={`px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${!showCode ? 'bg-slate-700 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Explanation Output
                    </button>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={handleCopy}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                      title="Copy Code"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="p-5 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed min-h-[140px] max-h-[220px] overflow-y-auto scrollbar-thin">
                  <AnimatePresence mode="wait">
                    {showCode ? (
                      <motion.pre
                        key="code"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                      >
                        <code>{highlightCode(article.code)}</code>
                      </motion.pre>
                    ) : (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4 font-sans text-slate-300"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {article.resultTitle}
                          </h4>
                        </div>
                        
                        {/* Live Sandbox rendering based on active documentation item */}
                        {selectedKey === 'flexbox' && (
                          <div className="space-y-3">
                            <div className="flex gap-1.5">
                              {(['space-between', 'space-around', 'center'] as const).map((mode) => (
                                <button
                                  key={mode}
                                  onClick={() => setFlexJustify(mode)}
                                  className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                                    flexJustify === mode
                                      ? 'bg-blue-600 border-blue-500 text-white font-bold'
                                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                                  }`}
                                >
                                  {mode}
                                </button>
                              ))}
                            </div>
                            <div 
                              className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 flex items-center gap-3 transition-all duration-300 min-h-[50px]"
                              style={{ justifyContent: flexJustify }}
                            >
                              <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-[9px] font-bold shadow-md shadow-blue-500/20">A</div>
                              <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white text-[9px] font-bold shadow-md shadow-indigo-500/20">B</div>
                              <div className="w-6 h-6 rounded bg-violet-500 flex items-center justify-center text-white text-[9px] font-bold shadow-md shadow-violet-500/20">C</div>
                            </div>
                          </div>
                        )}

                        {selectedKey === 'grid' && (
                          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 grid grid-cols-3 gap-2">
                            <div className="bg-slate-800/80 p-2 rounded border border-slate-700/40 text-center text-[9px] font-mono text-slate-400">col-1</div>
                            <div className="bg-slate-800/80 p-2 rounded border border-slate-700/40 text-center text-[9px] font-mono text-slate-400">col-2</div>
                            <div className="bg-slate-800/80 p-2 rounded border border-slate-700/40 text-center text-[9px] font-mono text-slate-400">col-3</div>
                          </div>
                        )}

                        {selectedKey === 'tailwind' && (
                          <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 flex items-center justify-center">
                            <div className="flex items-center gap-3 p-3 bg-slate-900 border border-slate-850 rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                              <div className="w-7 h-7 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs">◆</div>
                              <div>
                                <h5 className="text-[10px] font-bold text-white leading-none">Custom Card</h5>
                                <p className="text-[8px] text-slate-500 mt-1 leading-none">Compose with utilities</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedKey === 'closures' && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                              <span className="text-[9px] font-mono text-slate-400">secureCounter.getValue() = <span className="text-amber-300 font-bold">{counterVal}</span></span>
                              <button
                                onClick={() => setCounterVal(prev => prev + 1)}
                                className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-[9px] rounded shadow-md shadow-blue-500/10 active:scale-95 transition-all"
                              >
                                secureCounter.increment()
                              </button>
                            </div>
                          </div>
                        )}

                        {selectedKey === 'hooks' && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                              <span className="text-[9px] font-mono text-slate-400">isActive = <span className={hookActive ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>{String(hookActive)}</span></span>
                              <button
                                onClick={() => {
                                  const nextState = !hookActive;
                                  setHookActive(nextState);
                                  setHookLogs(prev => [
                                    ...prev.slice(-1),
                                    nextState ? 'State: isActive = true' : 'State: isActive = false'
                                  ]);
                                }}
                                className="px-2 py-0.5 bg-slate-850 hover:bg-slate-800 text-white font-bold text-[9px] rounded border border-slate-700 transition-all"
                              >
                                Toggle State
                              </button>
                            </div>
                            <div className="bg-slate-950 p-2 rounded border border-slate-850 font-mono text-[8px] text-slate-500 space-y-0.5">
                              {hookLogs.map((log, lIdx) => (
                                <div key={lIdx} className="flex gap-1.5">
                                  <span className="text-blue-500">&gt;</span>
                                  <span>{log}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Fallback to text output description if no custom visual playground */}
                        {!(['flexbox', 'grid', 'tailwind', 'closures', 'hooks'].includes(selectedKey)) && (
                          <p className="text-slate-400 text-xs leading-relaxed">
                            {article.resultDesc}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Right Table of Contents Sidebar */}
          <div className="lg:col-span-3 bg-gradient-to-b from-slate-50/60 to-white p-6 flex flex-col justify-between gap-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>On This Page</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={selectedKey + '-toc'}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  {article.toc.map((item, idx) => (
                    <li
                      key={idx}
                      className={`text-xs font-medium cursor-pointer transition-all duration-200 flex items-center gap-2 group px-3 py-2 rounded-lg ${
                        idx === 0 
                          ? 'text-blue-600 font-bold bg-blue-50/60' 
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/60'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${idx === 0 ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-500'}`} />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
            
            {/* Quick stats / overview sidebar widget */}
            <div className="p-4 bg-white border border-slate-200/60 rounded-2xl space-y-3 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-500" />
                Reference Status
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-700">Verified Stable</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Matches the ECMAScript 2026 specs & CSS specifications.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-[9px] text-slate-400">
                  <span>Last verified</span>
                  <span className="font-semibold text-slate-500">Aug 2026</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
