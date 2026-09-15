import React, { useState } from 'react';
import { 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  Zap, 
  Server, 
  ShieldCheck, 
  GitBranch,
  FileCheck,
  RefreshCw,
  Clock
} from 'lucide-react';
import { WORKFLOWS_CATALOG, type WorkflowPipeline } from '../../data/platformData';

interface AutomationPipelinesSectionProps {
  onOpenDemo: () => void;
}

export const AutomationPipelinesSection: React.FC<AutomationPipelinesSectionProps> = ({ onOpenDemo }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowPipeline>(WORKFLOWS_CATALOG[0]);

  const connectors = [
    { name: 'SAP S/4HANA', category: 'ERP & Ledger', status: 'Certified Connector' },
    { name: 'Salesforce CRM', category: 'Revenue Ops', status: 'Bi-directional' },
    { name: 'Snowflake', category: 'Data Cloud', status: 'Zero-Copy Query' },
    { name: 'Confluent Kafka', category: 'Event Streaming', status: 'Sub-5ms Ingest' },
    { name: 'PostgreSQL & pgvector', category: 'Relational & RAG', status: 'ACID Compliant' },
    { name: 'Stripe Billing', category: 'Financial Clearing', status: 'Real-time Webhook' },
    { name: 'NetSuite Oracle', category: 'Financial Ops', status: 'REST & SOAP API' },
    { name: 'Amazon S3 / VPC', category: 'Cloud Storage', status: 'KMS Encrypted' }
  ];

  return (
    <section id="automation" className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <Workflow className="w-3.5 h-3.5 text-brand-500" />
            <span>Enterprise Automation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Eliminate Manual Data Entry <br className="hidden sm:inline" />
            Across Every Enterprise System
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Connect legacy ERPs, relational databases, document streams, and messaging platforms with deterministic autonomous event pipelines.
          </p>
        </div>

        {/* 3 Main Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {WORKFLOWS_CATALOG.map((wf) => {
            const isSelected = activeWorkflow.id === wf.id;
            return (
              <div 
                key={wf.id}
                onClick={() => setActiveWorkflow(wf)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-white border-brand-500 shadow-enterprise ring-1 ring-brand-500' 
                    : 'bg-white hover:bg-slate-50 border-slate-200/80 shadow-subtle'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-brand-700 text-[11px] font-semibold border border-brand-200/50">
                    {wf.category}
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">{wf.avgCostPerRun}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{wf.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{wf.description}</p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Throughput:</span>
                  <span className="font-bold text-slate-900">{wf.executionRate}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Workflow Deep Step Inspector */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-mono text-brand-600 uppercase font-semibold">Active Execution Schema</div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{activeWorkflow.name}</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600">Trigger:</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono font-medium text-slate-800">
                {activeWorkflow.triggerEvent}
              </span>
            </div>
          </div>

          <div className="py-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
              Sequential Node Orchestration
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {activeWorkflow.steps.map((step, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl relative group">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>STEP 0{idx + 1}</span>
                    <span className="text-brand-600 font-mono">{step.latency}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">{step.title}</div>
                  <div className="text-[11px] text-slate-600 font-mono mt-1">{step.service}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Deterministic schema guarantees with automated retry & dead-letter queue routing</span>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <span>Build Custom Workflow Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Enterprise Connectors Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Pre-Built Enterprise Connectors</h3>
            <p className="text-xs text-slate-600 mt-1">Native integration with zero maintenance code required</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {connectors.map((c, i) => (
              <div key={i} className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-subtle flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{c.name}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{c.category}</div>
                </div>
                <span className="text-[10px] font-mono text-brand-600 bg-sky-50 px-2 py-0.5 rounded border border-brand-200/50">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
