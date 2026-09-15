import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  Terminal, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { AGENTS_CATALOG } from '../../data/platformData';
import { apiService } from '../../services/api';

export const AgentLiveTester: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState(AGENTS_CATALOG[0].id);
  const [customPrompt, setCustomPrompt] = useState(AGENTS_CATALOG[0].samplePayload.input);
  const [loading, setLoading] = useState(false);
  const [executionResult, setExecutionResult] = useState<any>(null);

  const handleAgentChange = (agentId: string) => {
    setSelectedAgentId(agentId);
    const matched = AGENTS_CATALOG.find(a => a.id === agentId);
    if (matched) {
      setCustomPrompt(matched.samplePayload.input);
      setExecutionResult(null);
    }
  };

  const handleExecute = async () => {
    setLoading(true);
    const result = await apiService.executeAgentTest(selectedAgentId, customPrompt);
    setExecutionResult(result.data);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Activity className="w-3.5 h-3.5 text-brand-500" />
            <span>Interactive Fleet Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Test Autonomous Agents Live
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Trigger real-time execution across our multi-agent runtime. Inspect step-by-step reasoning, tool dispatch latency, and deterministic output schemas.
          </p>
        </div>

        {/* Live Test Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-enterprise p-6 sm:p-10 max-w-4xl mx-auto space-y-6">
          
          {/* Agent Selection Buttons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Choose Agent Runtime
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {AGENTS_CATALOG.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => handleAgentChange(agent.id)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedAgentId === agent.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold truncate">{agent.name}</div>
                  <div className={`text-[10px] mt-0.5 ${selectedAgentId === agent.id ? 'text-brand-300' : 'text-slate-500'}`}>
                    {agent.category}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              2. Mission Objective / Input Payload
            </label>
            <textarea
              rows={3}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          {/* Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Sandbox Isolation: Active (SOC 2 Type II Bound)</span>
            </div>

            <button
              onClick={handleExecute}
              disabled={loading}
              className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-brand-400" />
                  <span>Executing Multi-Agent Swarm...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-brand-300" />
                  <span>Execute Agent Pipeline</span>
                </>
              )}
            </button>
          </div>

          {/* Execution Result Container */}
          {executionResult && (
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                <span className="font-mono text-brand-700 font-semibold">
                  EXECUTION TRACE ID: {executionResult.executionId}
                </span>
                <span className="font-mono text-emerald-600 font-bold">
                  {executionResult.executionTimeMs}ms (Deterministic Passed)
                </span>
              </div>

              {/* Step By Step Logs */}
              <div className="space-y-2">
                {executionResult.steps.map((step: any, i: number) => (
                  <div key={i} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-mono flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{step.title}</span>
                      </div>
                      <p className="text-slate-600 text-[11px] font-sans mt-0.5">{step.detail}</p>
                    </div>
                    <span className="text-brand-600 font-mono text-[11px] flex-shrink-0">{step.latency}</span>
                  </div>
                ))}
              </div>

              {/* Final Output */}
              <div className="p-4 bg-slate-950 text-white rounded-2xl font-mono text-xs space-y-2 border border-slate-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Final Reconciled Artifact:</div>
                <div className="text-emerald-300 font-sans text-xs">{executionResult.output.result}</div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
