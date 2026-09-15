import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Workflow, 
  TrendingUp, 
  Cpu, 
  Play, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  RefreshCw, 
  Copy, 
  Check, 
  Database,
  ArrowRight,
  Zap,
  Clock,
  Sparkles,
  Server,
  FileCode2
} from 'lucide-react';
import { apiService } from '../../services/api';

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'workflow' | 'trading' | 'rag'>('agents');
  const [agentExecuting, setAgentExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState<number>(4);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [tradingTick, setTradingTick] = useState(0);

  // Interval for trading tick simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setTradingTick(prev => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleRunAgentDemo = async () => {
    setAgentExecuting(true);
    setExecutionStep(1);
    
    await new Promise(r => setTimeout(r, 450));
    setExecutionStep(2);
    await new Promise(r => setTimeout(r, 550));
    setExecutionStep(3);
    await new Promise(r => setTimeout(r, 600));
    setExecutionStep(4);
    setAgentExecuting(false);
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="interactive-sandbox" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-hero pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-subtle text-brand-600 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Interactive Platform Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Engineered for Mission-Critical Production
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Experience our four core architectures in real time. Built with deterministic guardrails, zero hallucination limits, and sub-millisecond execution.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
          <div className="p-1.5 bg-white border border-slate-200 rounded-2xl shadow-subtle inline-flex gap-1.5">
            
            <button
              onClick={() => setActiveTab('agents')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'agents'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bot className={`w-4 h-4 ${activeTab === 'agents' ? 'text-brand-300' : 'text-slate-500'}`} />
              <span>Autonomous Agent Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('workflow')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'workflow'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Workflow className={`w-4 h-4 ${activeTab === 'workflow' ? 'text-brand-300' : 'text-slate-500'}`} />
              <span>Enterprise Workflow Canvas</span>
            </button>

            <button
              onClick={() => setActiveTab('trading')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'trading'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <TrendingUp className={`w-4 h-4 ${activeTab === 'trading' ? 'text-brand-300' : 'text-slate-500'}`} />
              <span>Quant High-Frequency Terminal</span>
            </button>

            <button
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'rag'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Cpu className={`w-4 h-4 ${activeTab === 'rag' ? 'text-brand-300' : 'text-slate-500'}`} />
              <span>Sovereign RAG Vector Engine</span>
            </button>

          </div>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-enterprise overflow-hidden">
          
          {/* Top Browser / Window Chrome Header */}
          <div className="bg-slate-50/90 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              </div>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                strink://workspace.production.us-east-1.strink.ai/
                {activeTab === 'agents' && 'agents/sdr-orchestrator-01'}
                {activeTab === 'workflow' && 'pipelines/erp-reconcile-graph'}
                {activeTab === 'trading' && 'quant/hft-triangular-arb'}
                {activeTab === 'rag' && 'models/sovereign-vector-70b'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Simulation Active
              </span>
            </div>
          </div>

          {/* TAB 1: AUTONOMOUS AGENT STUDIO */}
          {activeTab === 'agents' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Agent Context & Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-mono text-xs font-semibold">
                      AGENT_ID: #AGT-SDR-8891
                    </span>
                    <span className="text-xs text-slate-500">Autonomous Orchestrator</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    Apex Strategic SDR & Account Research Agent
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Executes multi-threaded intent parsing across 14 data sources, drafts personalized enterprise pitches, and autonomously commits records to Salesforce CRM.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                    <span>Target Execution Prompt</span>
                    <span className="text-[10px] text-brand-600 font-mono">SOC 2 Bound</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed">
                    "Identify key engineering stakeholders at Stripe expanding AI compliance. Cross-reference 10-Q filing notes, generate solution brief, and schedule briefing."
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={handleRunAgentDemo}
                      disabled={agentExecuting}
                      className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
                    >
                      {agentExecuting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Executing Agent Swarm...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Trigger Live Execution</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-slate-500 font-medium">
                      Avg Latency: <strong className="text-slate-900">140ms</strong>
                    </span>
                  </div>
                </div>

                {/* Agent Health Badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500">Accuracy</div>
                    <div className="text-sm font-bold text-slate-900">97.8%</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500">Tokens/Sec</div>
                    <div className="text-sm font-bold text-slate-900">184 t/s</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500">Cost/Run</div>
                    <div className="text-sm font-bold text-emerald-600">$0.0028</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Real-time Execution Traces & Structured JSON */}
              <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 text-slate-300 font-mono text-xs border border-slate-800 shadow-inner space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-brand-400" />
                    <span className="text-slate-200 font-semibold">AGENT_EXECUTION_STREAM</span>
                  </div>
                  <span className="text-emerald-400 font-medium">STREAMING PROTOCOL v2</span>
                </div>

                {/* Step Trace Pipeline */}
                <div className="space-y-3">
                  <div className={`p-3 rounded-xl border transition-all ${
                    executionStep >= 1 ? 'bg-slate-900/90 border-slate-700 text-slate-200' : 'bg-slate-900/30 border-slate-900 text-slate-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-300">[STEP 1] Ingestion & Vector Retrieval</span>
                      <span className="text-[10px] text-slate-400">22ms</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 font-sans">
                      Retrieved 4 high-affinity vector chunks from enterprise knowledge base (Cosine Sim 0.94).
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border transition-all ${
                    executionStep >= 2 ? 'bg-slate-900/90 border-slate-700 text-slate-200' : 'bg-slate-900/30 border-slate-900 text-slate-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-300">[STEP 2] Policy Guardrail & Sandbox Constraints</span>
                      <span className="text-[10px] text-slate-400">38ms</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 font-sans">
                      Enforced strict SOC2 redaction for PII. Verified 0 sensitive data leakage.
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border transition-all ${
                    executionStep >= 3 ? 'bg-slate-900/90 border-slate-700 text-slate-200' : 'bg-slate-900/30 border-slate-900 text-slate-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-300">[STEP 3] Tool Calling: Salesforce & Gmail Router</span>
                      <span className="text-[10px] text-slate-400">76ms</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 font-sans">
                      Created Opportunity #OPP-8921. Sent personalized technical brief to VP of Engineering.
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border transition-all ${
                    executionStep >= 4 ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200' : 'bg-slate-900/30 border-slate-900 text-slate-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        [COMPLETED] Deterministic State Sync
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">SUCCESS (136ms Total)</span>
                    </div>
                  </div>
                </div>

                {/* Final JSON Output Preview */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Downstream JSON Payload:</span>
                    <button 
                      onClick={() => copyCode(JSON.stringify({
                        status: "reconciled",
                        leadScore: 98,
                        syncTarget: "Salesforce_v58.0",
                        action: "Meeting Scheduled Oct 4 10:00 AM EST"
                      }, null, 2))}
                      className="hover:text-white flex items-center gap-1 text-[10px]"
                    >
                      {copiedPayload ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedPayload ? 'Copied' : 'Copy JSON'}
                    </button>
                  </div>
                  <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-brand-200 overflow-x-auto">
{`{
  "status": "reconciled",
  "opportunityId": "0068b000014xYZ",
  "leadConfidence": 0.982,
  "action": "Executive brief delivered, calendar slot held",
  "auditHash": "sha256_9f82ab4792c..."
}`}
                  </pre>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: ENTERPRISE WORKFLOW CANVAS */}
          {activeTab === 'workflow' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Continuous Multi-Ecosystem Ingestion Pipeline
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Event-driven DAG orchestrating webhook ingestion, OCR parsing, RAG vector reconciliation, and SAP ERP commits.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-brand-700 text-xs font-semibold rounded-lg">
                    Throughput: 1,450 docs / min
                  </span>
                </div>
              </div>

              {/* Node Visualizer Graph */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                  
                  {/* Node 1 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative group hover:border-brand-500 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">1. Trigger</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">Webhook Ingest</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">DocuSign / Email</div>
                    <div className="mt-3 text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded">
                      Latency: 4ms
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative group hover:border-brand-500 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">2. Parser</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">Strata OCR v2</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Table extraction</div>
                    <div className="mt-3 text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded">
                      Accuracy: 99.8%
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="bg-white p-4 rounded-xl border border-brand-500/80 shadow-md ring-1 ring-brand-500/30 relative group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">3. Sovereign LLM</span>
                      <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">Risk Matrix Engine</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Playbook Check</div>
                    <div className="mt-3 text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded">
                      Inference: 62ms
                    </div>
                  </div>

                  {/* Node 4 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative group hover:border-brand-500 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">4. ERP Write</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">SAP S/4HANA</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Ledger Commit</div>
                    <div className="mt-3 text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded">
                      200 OK
                    </div>
                  </div>

                  {/* Node 5 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative group hover:border-brand-500 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">5. Alert</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">Slack Dispatch</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">#fin-ops-recon</div>
                    <div className="mt-3 text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded">
                      Delivered
                    </div>
                  </div>

                </div>

                {/* Pipeline Stats Summary */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-4 text-slate-600">
                    <span>Total Latency: <strong className="text-slate-900">188ms end-to-end</strong></span>
                    <span>•</span>
                    <span>Failover Policy: <strong className="text-emerald-600">Deterministic Retry x3</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Monthly Time Saved:</span>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-lg border border-emerald-200">
                      1,420 Hours
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: QUANT TRADING TERMINAL */}
          {activeTab === 'trading' && (
            <div className="p-6 sm:p-8 space-y-6 bg-slate-950 text-white font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-brand-950 border border-brand-700 text-brand-300 text-xs">
                      LIVE QUANT DESK: HYPERION-C++
                    </span>
                    <span className="text-xs text-emerald-400 font-sans flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Colocated Colocation NY4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1.5 font-sans">
                    Institutional Triangular Arbitrage Telemetry
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Total Portfolio Alpha</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">+$24,850,920.40</div>
                  </div>
                </div>
              </div>

              {/* Quant Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="text-slate-400 text-[11px]">Execution Latency</div>
                  <div className="text-base font-bold text-brand-300 mt-1">0.72 ms</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Sub-millisecond FIX</div>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="text-slate-400 text-[11px]">Sharpe Ratio (10Y)</div>
                  <div className="text-base font-bold text-emerald-400 mt-1">3.82</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Max DD: 1.24%</div>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="text-slate-400 text-[11px]">24h Traded Volume</div>
                  <div className="text-base font-bold text-white mt-1">$118.4M</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Across 4 Venues</div>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="text-slate-400 text-[11px]">Slippage Mitigation</div>
                  <div className="text-base font-bold text-emerald-400 mt-1">99.4%</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">0.04 bps variance</div>
                </div>
              </div>

              {/* Real-time Order Stream */}
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                  <span>RECENT HIGH-FREQUENCY EXECUTIONS</span>
                  <span>ROUTE ENGINE: MEMPOOL_WATCH_v4</span>
                </div>
                
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-300">ETH/USDC (Binance → OKX)</span>
                    <span className="text-brand-300">$125,000</span>
                    <span className="text-emerald-400">+$412.50 net</span>
                    <span className="text-slate-500">0.62ms</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-300">SOL/USDC (Coinbase → Bybit)</span>
                    <span className="text-brand-300">$85,000</span>
                    <span className="text-emerald-400">+$680.20 net</span>
                    <span className="text-slate-500">0.81ms</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-slate-950 border border-slate-850">
                    <span className="text-slate-300">BTC/USDT (Deribit → CME Globex)</span>
                    <span className="text-brand-300">$350,000</span>
                    <span className="text-emerald-400">+$1,120.00 net</span>
                    <span className="text-slate-500">0.54ms</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: SOVEREIGN RAG VECTOR ENGINE */}
          {activeTab === 'rag' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Sovereign Vector Pipeline & Dense Embedding Search
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Zero data retention vector indexing with exact multi-document citation verification and sub-10ms similarity clustering.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg">
                    Index Size: 48M Vectors
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <Database className="w-4 h-4 text-brand-500" />
                    <span>Dense Vector Indexing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    HNSW graph algorithm tuned for 1536-dim embeddings with 99.9% recall and sub-5ms search.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-slate-500 bg-white p-2 rounded-lg border border-slate-200">
                    cosine_similarity: 0.9624
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <ShieldCheck className="w-4 h-4 text-brand-500" />
                    <span>Zero Data Leakage (ZDL)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Air-gapped VPC architecture guarantees your proprietary data never leaves your enterprise boundary.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-emerald-600 bg-white p-2 rounded-lg border border-slate-200">
                    VPC Status: Isolated
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <FileCode2 className="w-4 h-4 text-brand-500" />
                    <span>Deterministic Citations</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every generated statement maps with pixel-level precision back to exact source PDF page and line numbers.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-brand-600 bg-white p-2 rounded-lg border border-slate-200">
                    Citations: 100% Verified
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
