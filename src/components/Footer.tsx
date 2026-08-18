import Link from 'next/link';
import Image from 'next/image';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/DevHub logo.png"
                alt="DevHub"
                width={260}
                height={68}
                className="h-[4.5rem] w-auto object-contain brightness-0 invert group-hover:opacity-80 transition-opacity"
                unoptimized
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A premium, unified hub designed to elevate your developer journey. Learn code, explore tech tools, read core docs, and master workspace productivity.
            </p>

          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Explore Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="hover:text-white transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-white transition-colors">
                  Technical Documentation
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Developer Tools Directory
                </Link>
              </li>
              <li>
                <Link href="/microsoft-office" className="hover:text-white transition-colors">
                  Microsoft Office Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Popular Topics
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn?cat=Web Development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/learn?cat=JavaScript" className="hover:text-white transition-colors">
                  JavaScript & TS
                </Link>
              </li>
              <li>
                <Link href="/learn?cat=Python" className="hover:text-white transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link href="/learn?cat=C%2B%2B" className="hover:text-white transition-colors">
                  Systems Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Company & Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About DevHub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DevHub Platform. Designed for modern builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
