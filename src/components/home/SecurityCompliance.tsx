import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  Server, 
  Key, 
  Activity, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SECURITY_SPECS } from '../../data/platformData';

interface SecurityComplianceProps {
  onOpenDemo: () => void;
}

export const SecurityCompliance: React.FC<SecurityComplianceProps> = ({ onOpenDemo }) => {
  return (
    <section id="security" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
            <span>Enterprise Security & Sovereignty</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Bank-Grade Security by Architecture, <br className="hidden sm:inline" />
            Not an Afterthought
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Strink is engineered from the silicon up to satisfy the strictest global compliance standards for financial institutions, healthcare providers, and defense contractors.
          </p>
        </div>

        {/* Security Matrix 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SECURITY_SPECS.map((spec, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-200/90 rounded-3xl hover:border-brand-300 hover:shadow-card-hover transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors shadow-subtle">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[11px] font-semibold">
                  {spec.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{spec.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>

        {/* Security Callout Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-brand-300 font-mono font-semibold">COMPREHENSIVE AUDIT REPORT</span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans mt-1">
              Need our SOC 2 Type II Report or Penetration Testing Results?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              We execute quarterly third-party penetration testing and continuous automated vulnerability scanning. Request access to our full security package.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Enterprise Security Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
