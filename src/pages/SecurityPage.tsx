import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Lock, FileCheck, Key, Server, Cpu } from 'lucide-react';
import { SecurityCompliance } from '../components/home/SecurityCompliance';
import { SECURITY_SPECS } from '../data/platformData';

interface SecurityPageProps {
  onOpenDemo: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Page Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
            <span>Trust & Compliance Center</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-sans">
            Enterprise Security, Sovereignty & <br />
            Continuous Audit Compliance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Strink implements defense-in-depth isolation, AES-256 encryption at rest, TLS 1.3 in transit, and immutable audit trails to guarantee total data privacy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Request Full SOC 2 Type II Dossier</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Security Matrix */}
      <SecurityCompliance onOpenDemo={onOpenDemo} />

      {/* Deep Architecture Specifications */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Cryptographic Isolation Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every inference session is assigned an ephemeral memory sandbox that is cryptographically shredded upon completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle">
              <div className="text-xs font-bold font-mono text-brand-600 uppercase mb-2">01. Key Management</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Customer-Managed Keys (BYOK)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrate directly with AWS KMS, Azure Key Vault, or HashiCorp Vault. Strink never holds the master encryption keys to your data store.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle">
              <div className="text-xs font-bold font-mono text-brand-600 uppercase mb-2">02. SIEM & Audit</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Real-Time Event Streaming</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stream cryptographically signed JSON audit logs directly to your enterprise Splunk, Datadog, or Elastic SIEM in real time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle">
              <div className="text-xs font-bold font-mono text-brand-600 uppercase mb-2">03. Determinism</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Mathematical Guardrails</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigid schema validators ensure that model hallucination or prompt injection attacks are intercepted prior to any tool execution.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
