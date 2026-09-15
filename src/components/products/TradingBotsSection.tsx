import React, { useState } from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Zap, 
  Cpu, 
  Lock,
  Layers,
  BarChart3
} from 'lucide-react';
import { QUANT_STRATEGIES, type QuantStrategy } from '../../data/platformData';

interface TradingBotsSectionProps {
  onOpenDemo: () => void;
}

export const TradingBotsSection: React.FC<TradingBotsSectionProps> = ({ onOpenDemo }) => {
  const [selectedStrategy, setSelectedStrategy] = useState<QuantStrategy>(QUANT_STRATEGIES[0]);

  return (
    <section id="trading" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-brand-500" />
              <span>Quantitative Finance Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
              Sub-Millisecond Algorithmic <br className="hidden sm:inline" />
              Trading Bots & Quant Infrastructure
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            Co-located C++ execution bots engineered for crypto hedge funds, proprietary trading desks, and institutional asset managers with zero slippage tolerance.
          </p>
        </div>

        {/* Strategies & Terminal View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Strategy Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Select Algorithmic Model
            </div>

            {QUANT_STRATEGIES.map((strat) => {
              const isSelected = selectedStrategy.id === strat.id;
              return (
                <div
                  key={strat.id}
                  onClick={() => setSelectedStrategy(strat)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-subtle'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isSelected ? 'bg-slate-800 text-brand-300' : 'bg-sky-50 text-brand-700'
                    }`}>
                      {strat.frequency}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">{strat.ytdReturn} YTD</span>
                  </div>

                  <h3 className="text-base font-bold mb-1">{strat.name}</h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-400' : 'text-slate-600'}`}>
                    {strat.description}
                  </p>
                </div>
              );
            })}

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Hard Risk Circuit Breakers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hardware-enforced maximum portfolio drawdown limits kill execution threads in under 20 microseconds if slippage exceeds 0.05 bps.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Strategy Metrics & Order Telemetry */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 sm:p-8 text-white font-mono border border-slate-800 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-brand-400 font-semibold">{selectedStrategy.assetClass}</span>
                <h3 className="text-xl font-bold font-sans text-white mt-1">{selectedStrategy.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Execution Venue Latency</div>
                <div className="text-lg font-bold text-emerald-400">{selectedStrategy.latencyMicrosec}</div>
              </div>
            </div>

            {/* Performance Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="text-[11px] text-slate-400">Sharpe Ratio</div>
                <div className="text-lg font-bold text-white mt-1">{selectedStrategy.sharpeRatio}</div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="text-[11px] text-slate-400">Max Drawdown</div>
                <div className="text-lg font-bold text-brand-300 mt-1">{selectedStrategy.maxDrawdown}</div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="text-[11px] text-slate-400">Annual Return</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{selectedStrategy.ytdReturn}</div>
              </div>
            </div>

            {/* Venues */}
            <div>
              <div className="text-xs text-slate-400 mb-2">Connected Execution Venues:</div>
              <div className="flex flex-wrap gap-2">
                {selectedStrategy.executionVenues.map((v, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300">
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Live Order Routing Log */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                <span className="flex items-center gap-1.5 text-brand-300">
                  <Activity className="w-3.5 h-3.5" />
                  ATOMIC 2-LEG ORDER ROUTING TELEMETRY
                </span>
                <span className="text-emerald-400">SLIPPAGE: 0.002%</span>
              </div>
              <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
{`[00:00.124] DETECTED SPREAD: Venue_A $3,450.10 vs Venue_B $3,452.80
[00:00.125] RISK CHECK: Passed (Drawdown < 0.2%, Capital $500,000 OK)
[00:00.126] SUBMIT ATOMIC SWAP: 2 legs colocated over direct dark fiber
[00:00.127] CONFIRMED: Captured +$1,350.00 | Net profit after fees: +$1,120.40`}
              </pre>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-sans">
                Available via FIX 4.4, gRPC, and ultra-low latency C++ SDK.
              </span>
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Institutional Backtest</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
