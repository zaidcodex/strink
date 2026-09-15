import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Sparkles,
  Quote
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/platformData';

interface CaseStudiesSectionProps {
  onOpenDemo: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <TrendingUp className="w-3.5 h-3.5 text-brand-500" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Realized Results at Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            See how global leaders deployed Strata to drive measurable throughput gains, eliminate operational friction, and generate verified alpha.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="font-bold text-xs tracking-widest text-slate-900 font-sans">
                    {study.logoText}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-brand-700 font-mono text-[10px] font-semibold">
                    {study.tag}
                  </span>
                </div>

                {/* Metrics 3-Col Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6 text-center">
                  {study.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-base sm:text-lg font-bold text-slate-900 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{study.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{study.author}</div>
                  <div className="text-[11px] text-slate-500">{study.authorRole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
