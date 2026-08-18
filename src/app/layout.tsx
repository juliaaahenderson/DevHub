import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevHub - Premium Programming, Development & Productivity Hub',
  description:
    'A world-class digital product built for developers, software professionals, and technology enthusiasts. Learn code, explore tech tools, and master productivity.',
  keywords: 'Next.js, React, Tailwind CSS, TypeScript, Learning Paths, Codecademy, MDN, StackShare, Microsoft Office',
  icons: {
    icon: [
      { url: '/DevHub favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/DevHub favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/DevHub favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/DevHub favicon.png',
    apple: [
      { url: '/DevHub favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
