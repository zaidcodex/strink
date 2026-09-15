import React from 'react';
import { TrendingUp, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { TradingBotsSection } from '../components/products/TradingBotsSection';
import { LiveCodeSandbox } from '../components/tools/LiveCodeSandbox';

interface TradingPageProps {
  onOpenDemo: () => void;
}

export const TradingPage: React.FC<TradingPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 border border-brand-800 text-brand-300 text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
            <span>Quantitative High-Frequency Execution</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-sans">
            Sub-Millisecond Algorithmic <br />
            Trading Infrastructure
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Co-located C++ execution bots engineered for crypto hedge funds, proprietary trading desks, and quantitative asset managers with zero slippage tolerance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2"
            >
              <span>Request Quant Backtest & Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Trading Bots Section */}
      <TradingBotsSection onOpenDemo={onOpenDemo} />

      {/* Code Sandbox */}
      <LiveCodeSandbox />

    </div>
  );
};
