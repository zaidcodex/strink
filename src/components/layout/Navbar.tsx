import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bot, 
  Workflow, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles,
  Calculator,
  Activity,
  Lock,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setProductsOpen(false);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - STRINK.AI */}
          <Link to="/" onClick={closeDropdowns} className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-sm shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-slate-900 font-sans whitespace-nowrap">
                  STRINK<span className="text-brand-500">.AI</span>
                </span>
                <span className="px-1.5 py-0.2 text-[9px] font-semibold uppercase tracking-wider bg-sky-50 text-brand-600 border border-brand-200/60 rounded">
                  v2.4
                </span>
              </div>
              <span className="text-[9px] text-slate-500 font-medium tracking-wide whitespace-nowrap hidden sm:inline-block">
                Enterprise Autonomous Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single-line with whitespace-nowrap */}
          <nav className="hidden xl:flex items-center gap-1">
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-[540px] p-3.5 bg-white rounded-2xl shadow-xl border border-slate-200/90 mt-1 grid grid-cols-2 gap-2.5 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    to="/agents" 
                    onClick={closeDropdowns}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item border border-transparent hover:border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-brand-600 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/item:text-brand-600">
                        AI Agents Fleet
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Autonomous multi-step execution agents with memory.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    to="/workflows" 
                    onClick={closeDropdowns}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item border border-transparent hover:border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-brand-600 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/item:text-brand-600">
                        Enterprise Pipelines
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Multi-system ERP & document orchestration.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    to="/trading" 
                    onClick={closeDropdowns}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item border border-transparent hover:border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-brand-600 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/item:text-brand-600">
                        Quant Trading Bots
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Sub-millisecond high-frequency execution.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    to="/custom-solutions" 
                    onClick={closeDropdowns}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item border border-transparent hover:border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-brand-600 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/item:text-brand-600">
                        Custom Sovereign AI
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        Air-gapped VPCs & proprietary model fine-tuning.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-[380px] p-3 bg-white rounded-2xl shadow-xl border border-slate-200/90 mt-1 space-y-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link to="/case-studies" onClick={closeDropdowns} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group/sol">
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/sol:text-brand-600">Banking & Financial Services</div>
                      <div className="text-[11px] text-slate-500">Automated AML, trade reconciliation & fraud checks</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sol:text-brand-600 group-hover/sol:translate-x-0.5 transition-all" />
                  </Link>
                  <Link to="/case-studies" onClick={closeDropdowns} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group/sol">
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/sol:text-brand-600">Logistics & Supply Chain</div>
                      <div className="text-[11px] text-slate-500">Autonomous customs manifest & inventory sync</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sol:text-brand-600 group-hover/sol:translate-x-0.5 transition-all" />
                  </Link>
                  <Link to="/case-studies" onClick={closeDropdowns} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group/sol">
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover/sol:text-brand-600">Healthcare & Insurance</div>
                      <div className="text-[11px] text-slate-500">HIPAA-compliant document parsing & claims triage</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sol:text-brand-600 group-hover/sol:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Single-Line Links */}
            <Link 
              to="/case-studies" 
              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/case-studies' ? 'bg-sky-50 text-brand-700 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Case Studies
            </Link>

            <Link 
              to="/security" 
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/security' ? 'bg-sky-50 text-brand-700 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Security & Trust</span>
            </Link>

            <Link 
              to="/pricing" 
              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/pricing' ? 'bg-sky-50 text-brand-700 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/dashboard" 
              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                location.pathname === '/dashboard' 
                  ? 'bg-sky-50 text-brand-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-brand-500" />
              <span>Live Console</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            <Link 
              to="/dashboard"
              className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Client Portal</span>
            </Link>
            
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 group whitespace-nowrap"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg whitespace-nowrap"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-400 px-3 py-1">Products</div>
            <Link to="/agents" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <Bot className="w-4 h-4 text-brand-500" /> Autonomous AI Agents Fleet
            </Link>
            <Link to="/workflows" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <Workflow className="w-4 h-4 text-brand-500" /> Enterprise Workflows & Pipelines
            </Link>
            <Link to="/trading" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <TrendingUp className="w-4 h-4 text-brand-500" /> Quant Trading Bots
            </Link>
            <Link to="/custom-solutions" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <Cpu className="w-4 h-4 text-brand-500" /> Custom Sovereign AI & VPCs
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-400 px-3 py-1">Company & Platform</div>
            <Link to="/case-studies" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <FileText className="w-4 h-4 text-slate-500" /> Case Studies & ROI
            </Link>
            <Link to="/security" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-slate-500" /> Security & Trust Center
            </Link>
            <Link to="/pricing" onClick={closeDropdowns} className="block px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              Pricing Plans
            </Link>
            <Link to="/dashboard" onClick={closeDropdowns} className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-600 bg-sky-50 rounded-lg">
              <Activity className="w-4 h-4 text-brand-600" /> Open Live Console
            </Link>
          </div>

          <div className="pt-3">
            <button
              onClick={() => { closeDropdowns(); onOpenDemo(); }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
            >
              Schedule Enterprise Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
