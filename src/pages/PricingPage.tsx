import React from 'react';
import { Zap, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Calculator } from 'lucide-react';
import { PricingSection } from '../components/pricing/PricingSection';
import { RoiCalculator } from '../components/tools/RoiCalculator';

interface PricingPageProps {
  onOpenDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Zap className="w-3.5 h-3.5 text-brand-500" />
            <span>Predictable Enterprise Economics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
            Transparent Pricing Built for Scale
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose the deployment tier that matches your infrastructure and latency requirements. Fixed pricing with zero surprise per-token surcharges.
          </p>
        </div>
      </section>

      {/* Main Pricing Matrix */}
      <PricingSection onOpenDemo={onOpenDemo} />

      {/* Dynamic Financial ROI Model */}
      <RoiCalculator onOpenDemo={onOpenDemo} />

    </div>
  );
};
