import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal, 
  Lock, 
  Cpu, 
  Activity,
  Globe2
} from 'lucide-react';
import { apiService } from '../../services/api';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    await apiService.subscribeNewsletter(email);
    setSubmitting(false);
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Executive Briefing Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800/60 text-brand-300 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>Weekly Technical Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Enterprise AI & Autonomous Systems Intelligence
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-xl leading-relaxed">
                Receive quantitative research, sub-millisecond architecture breakdowns, benchmark studies, and enterprise AI orchestration patterns directly from the Strink engineering team.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 bg-brand-950/60 border border-brand-700/50 rounded-2xl text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold text-brand-200">Subscription confirmed.</span> You are now on the technical briefing priority dispatch list.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter corporate email (e.g. name@company.com)"
                    className="flex-1 bg-slate-950/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-brand-500/10"
                  >
                    <span>{submitting ? 'Subscribing...' : 'Subscribe'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Zero Spam Policy</span>
                <span>•</span>
                <span>Unsubscribe anytime</span>
                <span>•</span>
                <span>12,000+ Enterprise Leaders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-850">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">STRINK<span className="text-brand-400">.AI</span></span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Strink AI builds institutional-grade autonomous execution engines, enterprise workflow pipelines, sub-millisecond quantitative trading bots, and sovereign on-premises intelligence infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Global Nodes: 100% Operational</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1.5">
                <Globe2 className="w-3 h-3 text-brand-400" />
                <span>US-East / EU-West / APAC</span>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Products</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/agents" className="hover:text-white transition-colors">Autonomous AI Agents</Link></li>
              <li><Link to="/workflows" className="hover:text-white transition-colors">Enterprise Workflows</Link></li>
              <li><Link to="/trading" className="hover:text-white transition-colors">Quant Trading Bots</Link></li>
              <li><Link to="/custom-solutions" className="hover:text-white transition-colors">Custom AI & VPCs</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Cost Savings ROI</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Financial Services & Banking</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Healthcare & Insurance</Link></li>
              <li><Link to="/trading" className="hover:text-white transition-colors">Proprietary Trading Desks</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Enterprise B2B SaaS</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust & Developers */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Platform & Trust</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/security" className="hover:text-white transition-colors flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-brand-400" /> SOC 2 Type II Report</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Zero Data Retention Policy</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors flex items-center gap-1"><Activity className="w-3 h-3 text-emerald-400" /> Live Telemetry Console</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Enterprise Pricing</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security Whitepaper</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Security Badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Strink AI Inc. All rights reserved.</span>
            <Link to="/security" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/security" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-slate-400 transition-colors">Security Dossier</Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> SOC 2 Type II
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
              <Lock className="w-3 h-3 text-brand-400" /> HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
              <Cpu className="w-3 h-3 text-slate-400" /> Air-Gapped Ready
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
