import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Workflow, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Key, 
  Terminal, 
  Play, 
  Pause, 
  RefreshCw, 
  Copy, 
  Check, 
  ArrowLeft, 
  Search, 
  Plus, 
  Server, 
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { AGENTS_CATALOG, WORKFLOWS_CATALOG } from '../data/platformData';
import { apiService } from '../services/api';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'workflows' | 'trading' | 'apikeys' | 'logs'>('agents');
  const [agentsList, setAgentsList] = useState(AGENTS_CATALOG);
  const [tradingData, setTradingData] = useState<any>(null);
  const [apiKeys, setApiKeys] = useState([
    { id: 'key_live_9921', name: 'Production Fleet US-East', key: 'st_live_9f82ab74910ca84...', created: '2026-08-14', lastUsed: '2s ago' },
    { id: 'key_test_1042', name: 'Staging Sandbox CI/CD', key: 'st_test_8819ab24018ca92...', created: '2026-09-01', lastUsed: '14m ago' }
  ]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  useEffect(() => {
    const fetchTrading = async () => {
      const res = await apiService.getTradingMetrics();
      if (res.success) {
        setTradingData(res.data);
      }
    };
    fetchTrading();
    const interval = setInterval(fetchTrading, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleAgentStatus = (id: string) => {
    setAgentsList(prev => prev.map(a => {
      if (a.id === id) {
        return {
          ...a,
          status: a.status === 'active' ? 'idle' : 'active'
        };
      }
      return a;
    }));
  };

  const handleCreateApiKey = () => {
    setIsGeneratingKey(true);
    setTimeout(() => {
      const newKey = {
        id: 'key_live_' + Math.floor(Math.random() * 9000 + 1000),
        name: 'Auto-Generated Service Worker #' + (apiKeys.length + 1),
        key: 'st_live_' + Math.random().toString(36).substring(2, 18) + '...',
        created: 'Just now',
        lastUsed: 'Never'
      };
      setApiKeys([newKey, ...apiKeys]);
      setIsGeneratingKey(false);
    }, 600);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredAgents = filterCategory === 'All' 
    ? agentsList 
    : agentsList.filter(a => a.category === filterCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* Top Console Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Overview</span>
              </Link>
              <div className="h-4 w-px bg-slate-200"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 leading-none">Strink Cloud Console</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-0.5">org_vanguard_enterprise</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>US-East-1 Cluster: 100% Nominal</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                EV
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Console Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
            <div className="text-xs text-slate-500 font-medium">Active Autonomous Fleets</div>
            <div className="text-2xl font-bold text-slate-900 mt-1 font-mono">
              {agentsList.filter(a => a.status === 'active').length} / {agentsList.length}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">100% Health Score</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
            <div className="text-xs text-slate-500 font-medium">24h Task Executions</div>
            <div className="text-2xl font-bold text-slate-900 mt-1 font-mono">1,420,950</div>
            <div className="text-[11px] text-brand-600 font-semibold mt-1">+14.2% vs yesterday</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
            <div className="text-xs text-slate-500 font-medium">HFT Trading Alpha (24h)</div>
            <div className="text-2xl font-bold text-emerald-600 mt-1 font-mono">
              {tradingData ? tradingData.dayPnL : '+$142,830.15'}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Sharpe 3.82 | Latency 0.72ms</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
            <div className="text-xs text-slate-500 font-medium">SOC 2 & ZDR Status</div>
            <div className="text-2xl font-bold text-slate-900 mt-1 font-mono">Enforced</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">0 Security Violations</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('agents')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'agents' 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Agent Fleet ({agentsList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('workflows')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'workflows' 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>Pipelines ({WORKFLOWS_CATALOG.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('trading')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'trading' 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Quant Terminal</span>
            </button>

            <button
              onClick={() => setActiveTab('apikeys')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'apikeys' 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>API Credentials</span>
            </button>
          </div>
        </div>

        {/* TAB 1: AGENT FLEET MANAGEMENT */}
        {activeTab === 'agents' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {['All', 'Sales & Growth', 'Financial Ops', 'Quantitative Finance', 'Engineering & Ops'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      filterCategory === cat 
                        ? 'bg-brand-500 text-slate-950 font-bold' 
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500">
                Showing <strong className="text-slate-900">{filteredAgents.length}</strong> autonomous instances
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="p-4">Agent Name & Model</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Latency</th>
                    <th className="p-4">Lifetime Tasks</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-mono">
                  {filteredAgents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-slate-50/80 transition-colors font-sans">
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{agent.name}</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">{agent.modelEngine}</div>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-brand-700 text-[10px] font-semibold">
                          {agent.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          agent.status === 'active' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          {agent.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-slate-700">{agent.latencyMs} ms</td>
                      <td className="p-4 font-mono text-slate-900 font-semibold">{agent.tasksCompleted.toLocaleString()}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => toggleAgentStatus(agent.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1 ${
                            agent.status === 'active'
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          {agent.status === 'active' ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                          <span>{agent.status === 'active' ? 'Pause' : 'Activate'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PIPELINES */}
        {activeTab === 'workflows' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKFLOWS_CATALOG.map((wf) => (
              <div key={wf.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-sky-50 text-brand-700 text-[10px] font-semibold">
                      {wf.category}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{wf.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{wf.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Execution Rate:</span>
                  <span className="font-mono font-bold text-slate-900">{wf.executionRate}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: QUANT TERMINAL */}
        {activeTab === 'trading' && (
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 text-white font-mono border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs text-brand-300">INSTITUTIONAL QUANT DESK: NEW YORK METRO COLO</div>
                <h3 className="text-xl font-bold font-sans text-white mt-1">Live Order Routing & Alpha Stream</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Total Portfolio Value</div>
                <div className="text-xl font-bold text-emerald-400">
                  {tradingData ? tradingData.portfolioValue : '$24,850,920.40'}
                </div>
              </div>
            </div>

            {/* Trades */}
            <div className="space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Recent Atomic Fills (Sub-1ms):</div>
              <div className="space-y-1.5 text-xs">
                {tradingData?.recentTrades?.map((t: any) => (
                  <div key={t.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                    <span className="text-slate-300 font-bold">{t.pair}</span>
                    <span className="text-brand-300">{t.type}</span>
                    <span className="text-white">{t.size}</span>
                    <span className="text-emerald-400 font-bold">{t.return}</span>
                    <span className="text-slate-500">{t.latency}</span>
                    <span className="text-slate-500">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: API CREDENTIALS */}
        {activeTab === 'apikeys' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">API Access Tokens</h3>
                <p className="text-xs text-slate-600 mt-1">Manage scoped API keys for invoking Strink Agent fleets and Webhook ingestion.</p>
              </div>

              <button
                onClick={handleCreateApiKey}
                disabled={isGeneratingKey}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
              >
                {isGeneratingKey ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                <span>Generate New API Key</span>
              </button>
            </div>

            <div className="space-y-3">
              {apiKeys.map((k) => (
                <div key={k.id} className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{k.name}</div>
                    <div className="text-slate-500 font-mono text-[11px] mt-0.5">Created {k.created} • Last used {k.lastUsed}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <code className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-mono text-slate-700 text-xs">
                      {k.key}
                    </code>
                    <button
                      onClick={() => copyToClipboard(k.key, k.id)}
                      className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-600 transition-colors"
                      aria-label="Copy API Key"
                    >
                      {copiedKey === k.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
