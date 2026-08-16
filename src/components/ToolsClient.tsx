'use client';

import { useState } from 'react';
import { Search, Tag, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DevTool } from '@/data/staticData';

interface ToolsClientProps {
  developerTools: DevTool[];
}

export default function ToolsClient({ developerTools }: ToolsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = developerTools.filter((tool) => {
    const matchSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const categories = [
    'All',
    'Code Editors & IDEs',
    'Version Control',
    'API Development',
    'DevOps',
    'Databases',
    'Cloud Platforms',
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            Discovery Directory
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Developer Tools Explorer
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find the right developer libraries, lightweight container engines, version control platforms, database clouds, and APIs.
          </p>
        </div>

        {/* Directory Controls (Search + Category Filter Tab bar) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-200 pb-6">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools by name, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            />
          </div>
          
          <div className="md:col-span-8 overflow-x-auto pb-2 scrollbar-none flex gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top line metadata */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-extrabold text-blue-600 text-sm shadow-sm">
                      {tool.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      tool.pricing === 'Free'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : tool.pricing === 'Freemium'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {tool.pricing}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                      {tool.category}
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2.5 line-clamp-3">
                      {tool.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-50 text-[10px] text-slate-500 font-semibold border border-slate-100"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">
                    {tool.compatibility.slice(0, 2).join(' / ')}
                  </span>
                  
                  <Link
                    href={`/tools/${tool.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white border border-slate-200 rounded-3xl">
              <Cpu className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-bold text-slate-800 text-lg">No Developer Tools Match</h3>
              <p className="text-slate-500 text-xs mt-1">Adjust search key phrases or select another category filter.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
