import React from 'react';
import { Workflow, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Database, Layers } from 'lucide-react';
import { AutomationPipelinesSection } from '../components/products/AutomationPipelinesSection';
import { RoiCalculator } from '../components/tools/RoiCalculator';

interface WorkflowsPageProps {
  onOpenDemo: () => void;
}

export const WorkflowsPage: React.FC<WorkflowsPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Workflow className="w-3.5 h-3.5 text-brand-500" />
            <span>Enterprise Integration Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
            Enterprise Automation & <br />
            Event Pipeline Architecture
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate manual data entry across legacy ERPs, databases, document streams, and revenue systems with 100% deterministic schema validation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Build Custom Workflow Pipeline</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Automation Section */}
      <AutomationPipelinesSection onOpenDemo={onOpenDemo} />

      {/* Financial ROI Calculator */}
      <RoiCalculator onOpenDemo={onOpenDemo} />

    </div>
  );
};
