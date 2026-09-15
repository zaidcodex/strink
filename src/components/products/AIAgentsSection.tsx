import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Database, 
  RefreshCw, 
  Terminal,
  Zap,
  Lock,
  GitBranch
} from 'lucide-react';
import { AGENTS_CATALOG, type AgentModel } from '../../data/platformData';

interface AIAgentsSectionProps {
  onOpenDemo: () => void;
}

export const AIAgentsSection: React.FC<AIAgentsSectionProps> = ({ onOpenDemo }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentModel>(AGENTS_CATALOG[0]);

  return (
    <section id="agents" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
              <Bot className="w-3.5 h-3.5 text-brand-500" />
              <span>Autonomous Agent Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
              Autonomous AI Agents <br className="hidden sm:inline" />
              that Execute, Verify, and Deliver
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            Not simple prompt wrappers. Strata Agents maintain persistent state, plan multi-step workflows, call deterministic APIs, and recover gracefully from edge-case anomalies.
          </p>
        </div>

        {/* 2-Column Interactive Agent Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Agent Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Fleet Agent Instance
            </div>
            
            {AGENTS_CATALOG.map((agent) => {
              const isSelected = selectedAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-subtle'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${
                    isSelected ? 'bg-brand-500 text-white' : 'bg-sky-50 text-brand-600'
                  }`}>
                    <Bot className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold truncate">{agent.name}</h4>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                        isSelected ? 'bg-slate-800 text-brand-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {agent.latencyMs}ms
                      </span>
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {agent.role}
                    </div>
                    <div className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {agent.tagline}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 border border-brand-200/60"
              >
                <span>Request Custom Enterprise Agent Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Deep-Dive Agent Profile & Live Capabilities */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-enterprise p-6 sm:p-8 space-y-6">
            
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Production Fleet Ready
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Engine: {selectedAgent.modelEngine}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">{selectedAgent.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{selectedAgent.description}</p>
              </div>

              <div className="flex sm:flex-col items-end gap-1">
                <div className="text-xs text-slate-500">Fleet Reliability</div>
                <div className="text-xl font-bold text-slate-900">{selectedAgent.accuracyRate}</div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Enterprise Autonomous Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedAgent.capabilities.map((cap, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700 leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Realistic Sample Execution Preview */}
            <div className="p-4 bg-slate-950 rounded-2xl text-slate-300 font-mono text-xs space-y-3 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Terminal className="w-3.5 h-3.5 text-brand-400" />
                  REAL-TIME PAYLOAD TRACE
                </span>
                <span className="text-brand-300">{selectedAgent.category}</span>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Input Prompt / Event Trigger:</span>
                  <div className="text-slate-200 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-sans text-xs mt-1">
                    "{selectedAgent.samplePayload.input}"
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Autonomous Execution Output:</span>
                  <div className="text-emerald-300 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/50 font-sans text-xs mt-1">
                    "{selectedAgent.samplePayload.output}"
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px]">
                <span className="text-slate-400">Authenticated Tools:</span>
                {selectedAgent.samplePayload.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-brand-300 rounded font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Guarantee Bottom Bar */}
            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Guaranteed Zero PII Leakage
              </span>
              <button 
                onClick={onOpenDemo}
                className="text-brand-600 font-semibold hover:underline flex items-center gap-1"
              >
                Provision in Sandbox <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
