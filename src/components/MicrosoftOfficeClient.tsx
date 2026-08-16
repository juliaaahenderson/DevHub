'use client';

import { useState } from 'react';
import { FileText, FileSpreadsheet, Presentation, Mail, Users, HardDrive, Sparkles } from 'lucide-react';
import { MicrosoftProduct } from '@/data/staticData';

const iconMap: Record<string, any> = {
  FileText: FileText,
  FileSpreadsheet: FileSpreadsheet,
  Presentation: Presentation,
  Mail: Mail,
  Users: Users,
  HardDrive: HardDrive,
};

interface MicrosoftOfficeClientProps {
  microsoftProducts: MicrosoftProduct[];
}

export default function MicrosoftOfficeClient({ microsoftProducts }: MicrosoftOfficeClientProps) {
  const [selectedProductId, setSelectedProductId] = useState(microsoftProducts[0].id);
  const activeProduct = microsoftProducts.find((p) => p.id === selectedProductId) || microsoftProducts[0];
  const ActiveIcon = iconMap[activeProduct.icon];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            Workspace Automation
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Microsoft 365 Workspaces
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Unify code development with corporate workspace solutions. Master Excel formulas, team communications in Teams channels, and OneDrive directory structures.
          </p>
        </div>

        {/* Central Microsoft 365 Dashboard Area */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation (Product Selector List) */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-3 mb-2">
              Microsoft 365 Suite Products
            </h4>
            <div className="space-y-1.5">
              {microsoftProducts.map((prod) => {
                const ProdIcon = iconMap[prod.icon];
                const isActive = selectedProductId === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 bg-transparent'
                    }`}
                  >
                    <div
                      style={{ backgroundColor: isActive ? 'transparent' : prod.color }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${
                        isActive ? 'bg-white/10' : ''
                      }`}
                    >
                      <ProdIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold">{prod.name}</h5>
                      <span className="text-[10px] opacity-60 font-medium block">
                        {prod.tagline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Product Showcase Panel */}
          <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-slate-200 lg:pl-8">
            <div className="flex items-center gap-4">
              <div
                style={{ backgroundColor: activeProduct.color }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
              >
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {activeProduct.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {activeProduct.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Use Case Box */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Primary Use Case
              </span>
              <p className="text-xs font-semibold text-slate-700 leading-normal">
                {activeProduct.useCase}
              </p>
            </div>

            {/* Detailed Feature List */}
            <div className="space-y-4 pt-4 border-t border-slate-150">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Core Integrations & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProduct.features.map((feat, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 items-start">
                    <Sparkles className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-600 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
