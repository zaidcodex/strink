import React from 'react';
import { TrendingUp, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Building2, FileText } from 'lucide-react';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { RoiCalculator } from '../components/tools/RoiCalculator';

interface CaseStudiesPageProps {
  onOpenDemo: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <FileText className="w-3.5 h-3.5 text-brand-500" />
            <span>Proven Production Results</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
            Enterprise Customer Case Studies & <br />
            Quantified Business Impact
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how global logistics operators, quant hedge funds, and healthcare conglomerates scaled with Strink autonomous infrastructure.
          </p>
        </div>
      </section>

      {/* Main Case Studies Section */}
      <CaseStudiesSection onOpenDemo={onOpenDemo} />

      {/* ROI Calculator */}
      <RoiCalculator onOpenDemo={onOpenDemo} />

    </div>
  );
};
