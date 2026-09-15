import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Bot, 
  Terminal, 
  TrendingUp,
  Workflow,
  Lock,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      
      {/* Background Subtle Gradient & Grid Layer */}
      <div className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-hero pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Release Pill */}
        <div className="flex justify-center">
          <a 
            href="#interactive-sandbox" 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50/80 border border-brand-200/80 hover:border-brand-300 shadow-sm transition-all duration-200 group text-xs sm:text-sm font-medium text-slate-800"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-brand-700 font-semibold">Strink 2.4 Released</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
              Sub-millisecond Autonomous Multi-Agent Swarms
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
            Mission-Critical <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-brand-700 to-brand-500 bg-clip-text text-transparent">
              Autonomous Systems
            </span> <br />
            for the Modern Enterprise
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Deploy autonomous AI agents, enterprise automation pipelines, and high-frequency trading bots with deterministic reliability, SOC 2 compliance, and zero data retention with Strink.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            <span>Deploy Autonomous Fleet</span>
            <ArrowRight className="w-4 h-4 text-brand-300 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#interactive-sandbox"
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl shadow-subtle hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Explore Live Sandbox</span>
          </a>
        </div>

        {/* Enterprise Key Guarantees */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Zero Data Retention (ZDR)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Private VPC / On-Premise Deployable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Sub-Millisecond Execution</span>
          </div>
        </div>

        {/* Four Value Pillar Metric Cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">4.2M+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Autonomous Agent Runs</div>
            <p className="text-xs text-slate-500 mt-1">99.82% deterministic accuracy with zero hallucination guardrails.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <Workflow className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">200+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Enterprise Connectors</div>
            <p className="text-xs text-slate-500 mt-1">Direct bi-directional sync for SAP, Salesforce, Postgres & Snowflake.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">&lt;0.8ms</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">HFT Execution Latency</div>
            <p className="text-xs text-slate-500 mt-1">Ultra-low latency C++ algorithmic arbitrage and liquidity routing.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Sovereign Isolation</div>
            <p className="text-xs text-slate-500 mt-1">Air-gapped VPC architecture with guaranteed zero training on prompts.</p>
          </div>

        </div>

        {/* Enterprise Social Proof Logos */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Powering Autonomous Intelligence Across Fortune 500 & High-Growth Scale-Ups
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">VANGUARD LOGISTICS</div>
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">KESTREL QUANT</div>
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">SYNOVUS HEALTH</div>
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">STRATEX GLOBAL</div>
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">NOVANETWORKS</div>
            <div className="text-center font-bold font-sans text-sm tracking-widest text-slate-700">PRISM DYNAMICS</div>
          </div>
        </div>

      </div>
    </section>
  );
};
