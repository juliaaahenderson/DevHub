'use client';

import { useState } from 'react';
import { Search, ChevronRight, FileText, BookOpen, Star, HelpCircle } from 'lucide-react';
import { DocTopic } from '@/data/staticData';

interface DocumentationClientProps {
  documentation: DocTopic[];
}

export default function DocumentationClient({ documentation }: DocumentationClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTopicId, setActiveTopicId] = useState(documentation[0].id);
  const [activeArticleId, setActiveArticleId] = useState(documentation[0].articles[0].id);

  // Flattened articles list for search filtering
  const allArticles = documentation.flatMap((topic) =>
    topic.articles.map((art) => ({
      ...art,
      topicId: topic.id,
      topicTitle: topic.title,
    }))
  );

  const filteredArticles = allArticles.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTopic = documentation.find((t) => t.id === activeTopicId) || documentation[0];
  const selectedArticle =
    selectedTopic.articles.find((a) => a.id === activeArticleId) || selectedTopic.articles[0];

  const handleSelectArticle = (topicId: string, articleId: string) => {
    setActiveTopicId(topicId);
    setActiveArticleId(articleId);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Left Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles & concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Sidebar list items */}
            {searchQuery ? (
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                  Search Results ({filteredArticles.length})
                </h4>
                <div className="space-y-1">
                  {filteredArticles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => handleSelectArticle(art.topicId, art.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                        activeArticleId === art.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">{art.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 flex-shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <nav className="space-y-6">
                {documentation.map((topic) => (
                  <div key={topic.id} className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-3">
                      {topic.title}
                    </h4>
                    <div className="space-y-1">
                      {topic.articles.map((art) => {
                        const isActive = activeArticleId === art.id;
                        return (
                          <button
                            key={art.id}
                            onClick={() => handleSelectArticle(topic.id, art.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                              isActive
                                ? 'bg-blue-50 text-blue-700 shadow-sm border-l-2 border-blue-600'
                                : 'text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <span className="truncate flex items-center gap-2">
                              <FileText className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                              {art.title}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            )}
          </aside>

          {/* 2. Main Article Content Area */}
          <main className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
              <BookOpen className="w-4 h-4" />
              <span>{selectedTopic.title}</span>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
              <p className="whitespace-pre-wrap">{selectedArticle.content}</p>
            </div>

            {/* Code blocks */}
            {selectedArticle.codeSnippet && (
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
                <div className="px-4 py-2.5 bg-slate-800/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>code_snippet.{selectedArticle.language || 'js'}</span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase">Syntax Highlighter</span>
                </div>
                <pre className="p-5 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
                  <code>{selectedArticle.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Related concepts */}
            <div className="pt-6 border-t border-slate-150">
              <h4 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Related Articles
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTopic.articles
                  .filter((art) => art.id !== selectedArticle.id)
                  .map((art) => (
                    <button
                      key={art.id}
                      onClick={() => handleSelectArticle(selectedTopic.id, art.id)}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 text-xs font-medium text-slate-600 transition-colors"
                    >
                      {art.title}
                    </button>
                  ))}
              </div>
            </div>
          </main>

          {/* 3. Right Sidebar Table of Contents */}
          <aside className="lg:col-span-3 bg-slate-50/50 rounded-2xl border border-slate-200 p-6 hidden lg:block space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-blue-500" />
              <span>In this Reference</span>
            </div>
            
            <ul className="space-y-3">
              {['Concept Definition', 'Syntax Layout', 'Examples & Demos', 'Standard Exceptions'].map((tocItem, idx) => (
                <li
                  key={idx}
                  className={`text-xs font-medium cursor-default ${
                    idx === 0 ? 'text-blue-600' : 'text-slate-500'
                  }`}
                >
                  {tocItem}
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </div>
    </div>
  );
}
