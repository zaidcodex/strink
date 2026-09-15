import React from 'react';
import { Bot, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Terminal, Zap } from 'lucide-react';
import { AIAgentsSection } from '../components/products/AIAgentsSection';
import { AgentLiveTester } from '../components/tools/AgentLiveTester';
import { LiveCodeSandbox } from '../components/tools/LiveCodeSandbox';

interface AgentsPageProps {
  onOpenDemo: () => void;
}

export const AgentsPage: React.FC<AgentsPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Bot className="w-3.5 h-3.5 text-brand-500" />
            <span>Autonomous Intelligence Fleet</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
            Autonomous AI Agents <br />
            for Mission-Critical Operations
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Deploy production-grade autonomous swarms that reason, execute multi-step workflows, call deterministic APIs, and recover gracefully from edge-case anomalies.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Deploy Fleet in Sandbox</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Fleet Section */}
      <AIAgentsSection onOpenDemo={onOpenDemo} />

      {/* Live Agent Tester */}
      <AgentLiveTester />

      {/* Code Sandbox */}
      <LiveCodeSandbox />

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-sans">Ready to scale your autonomous agent fleet?</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Schedule a session with a Strink Principal AI Architect to review tool integrations and custom enterprise memory bounds.
          </p>
          <button
            onClick={onOpenDemo}
            className="mt-6 px-8 py-3.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg"
          >
            Schedule Technical Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
