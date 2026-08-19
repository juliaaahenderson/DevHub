'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ArrowRight } from 'lucide-react';

const navigationLinks = [
  { name: 'Learn', href: '/learn' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Explore Tools', href: '/tools' },
  { name: 'Microsoft 365', href: '/microsoft-365' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-14 relative w-64">
              <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 group">
                <Image
                  src="/DevHub logo.png"
                  alt="DevHub"
                  width={280}
                  height={72}
                  className="h-20 w-auto max-w-none object-contain group-hover:opacity-90 transition-opacity"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all gap-1.5"
              >
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-slate-200 bg-white shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4">
                  <Link
                    href="/learn"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all gap-2"
                  >
                    Explore Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Interactive Search Modal Mockup */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
            >
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search paths, documentation, developer tools..."
                  className="flex-1 text-slate-800 placeholder-slate-400 focus:outline-none text-base"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs"
                >
                  ESC
                </button>
              </div>
              <div className="p-4 max-h-72 overflow-y-auto">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Popular Searches
                </h4>
                <div className="space-y-2">
                  {[
                    { label: 'React Hooks Guide', cat: 'Documentation', href: '/documentation' },
                    { label: 'Full-Stack Learning Pathway', cat: 'Learn', href: '/learn' },
                    { label: 'Docker Container Setup', cat: 'Tools', href: '/tools' },
                    { label: 'Microsoft Excel Formulas', cat: 'Office', href: '/microsoft-office' },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors text-sm text-slate-700 hover:text-slate-900"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {item.cat}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
