'use client';

import { useState } from 'react';
import { BookOpen, Clock, BarChart } from 'lucide-react';
import { LearningPath } from '@/data/staticData';

interface LearnClientProps {
  learningPaths: LearningPath[];
}

export default function LearnClient({ learningPaths }: LearnClientProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPaths = learningPaths.filter((path) => {
    const matchLevel = selectedLevel === 'All' || path.level === selectedLevel;
    const matchCategory = selectedCategory === 'All' || path.category === selectedCategory;
    return matchLevel && matchCategory;
  });

  const categories = ['All', 'Web Development', 'JavaScript', 'Python', 'Java', 'C++'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            Core Curriculum
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Learning Paths
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Follow a structured roadmap. Study from variables and compilers up to microservice architectures, containerizations, and cloud deployments.
          </p>
        </div>

        {/* Dynamic Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Skill Categories
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Difficulty Levels
            </span>
            <div className="flex flex-wrap gap-1.5">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pathway List */}
        <div className="space-y-8">
          {filteredPaths.length > 0 ? (
            filteredPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Meta details column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                      {path.category}
                    </span>
                    {path.popular && (
                      <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{path.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{path.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart className="w-4 h-4" />
                      {path.level}
                    </span>
                  </div>
                </div>

                {/* Flowing Pathway Milestone progress tracker */}
                <div className="lg:col-span-8 space-y-6">
                  <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    Roadmap Milestones ({path.milestones.length})
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {path.milestones.map((milestone, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 items-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold text-slate-900">{milestone.title}</h5>
                          <p className="text-[11px] text-slate-500 leading-normal">{milestone.description}</p>
                          <div className="pt-2 flex flex-wrap gap-1">
                            {milestone.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-1.5 py-0.5 rounded bg-white text-[9px] font-medium text-slate-500 border border-slate-100"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-bold text-slate-800 text-lg">No Learning Paths Match</h3>
              <p className="text-slate-500 text-xs mt-1">Try resetting the filters or category tabs.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
