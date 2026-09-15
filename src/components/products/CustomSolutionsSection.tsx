import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Server, 
  Layers, 
  Database,
  Building2,
  HardDrive
} from 'lucide-react';

interface CustomSolutionsSectionProps {
  onOpenDemo: () => void;
}

export const CustomSolutionsSection: React.FC<CustomSolutionsSectionProps> = ({ onOpenDemo }) => {
  const customPillars = [
    {
      title: 'Private VPC & Air-Gapped Kubernetes',
      desc: 'Deploy Strink runtime containers directly inside your enterprise AWS VPC, Microsoft Azure subscription, Google Cloud Platform project, or on-premises bare metal.',
      badge: 'Zero Public Internet Egress',
      icon: Server
    },
    {
      title: 'Proprietary Model Fine-Tuning',
      desc: 'We fine-tune state-of-the-art foundation models on your internal documents, schemas, and historical logs with deterministic evaluation benchmarks.',
      badge: 'Custom LoRA & Full Weights',
      icon: Cpu
    },
    {
      title: 'Zero Data Retention (ZDR) SLA',
      desc: 'No customer data is ever retained or reused for global model training. All weights, vector embeddings, and inference caches are cryptographically isolated.',
      badge: '100% Data Sovereignty',
      icon: Lock
    },
    {
      title: 'Dedicated Solutions Engineering Desk',
      desc: 'Work directly with designated Principal AI Solutions Architects and Quantitative Engineers to build customized multi-agent swarms for your stack.',
      badge: 'Named Architect & 15m SLA',
      icon: Building2
    }
  ];

  return (
    <section id="custom-ai" className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Cpu className="w-3.5 h-3.5 text-brand-500" />
            <span>Sovereign Enterprise Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Custom AI Solutions & <br className="hidden sm:inline" />
            Air-Gapped Sovereign Deployments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            When standard public cloud APIs do not satisfy strict security, regulatory, or latency requirements, Strink deploys dedicated private intelligence infrastructure.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {customPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-8 bg-white border border-slate-200/90 rounded-3xl shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-sky-50 text-brand-600 rounded-2xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Sovereign Deployment Comparison Matrix */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-850 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-2.5 py-1 rounded bg-brand-950 border border-brand-800 text-brand-300 text-xs font-mono">
                ENTERPRISE TOPOLOGY COMPARISON
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight">
                Public Cloud Wrappers vs. Strink Sovereign
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Most AI agencies glue together generic OpenAI/Anthropic APIs with third-party automation tools, exposing your proprietary company intelligence. Strink gives you true sovereign ownership of your models and infrastructure.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Full control over weights, embeddings, and telemetry pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>SOC 2 Type II, HIPAA, and ISO 27001 audit-ready by design</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Fixed, predictable compute pricing without per-token markup surprises</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mx-auto">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-sans">Ready for Private VPC Deployment?</h4>
                <p className="text-xs text-slate-400 mt-1">Our engineering team can spin up a dedicated sandbox in your environment within 48 hours.</p>
              </div>
              <button
                onClick={onOpenDemo}
                className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Consult with Principal Solutions Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
