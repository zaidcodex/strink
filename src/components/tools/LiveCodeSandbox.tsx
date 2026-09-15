import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';

export const LiveCodeSandbox: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'python' | 'typescript' | 'curl' | 'go'>('typescript');
  const [copied, setCopied] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState(false);

  const codeSnippets = {
    typescript: `import { StrinkClient } from "@strink-ai/sdk";

const strink = new StrinkClient({
  apiKey: process.env.STRINK_API_KEY!,
  endpoint: "https://api.strink.ai/v2",
  region: "us-east-1"
});

// Deploy an autonomous SDR agent with SOC 2 bound tools
const session = await strink.agents.deploy({
  agentId: "agt-sdr-enterprise",
  workflow: "strategic_account_research",
  constraints: {
    maxTokens: 4000,
    zeroDataRetention: true,
    requireHumanInTheLoop: false
  },
  payload: {
    targetDomain: "stripe.com",
    objective: "Identify compliance decision-makers for AI governance audit"
  }
});

console.log("Agent Execution ID:", session.id);
console.log("Telemetry Status:", session.status); // 'reconciled' (140ms)`,

    python: `from strink_ai import StrinkClient, SovereignAgent

client = StrinkClient(
    api_key=os.environ["STRINK_API_KEY"],
    region="us-east-1",
    enforce_soc2=True
)

# Initialize autonomous financial document parser
agent = SovereignAgent.load("synapse-financial-extractor-v2")

result = agent.execute_batch(
    document_uri="s3://enterprise-vault/invoices/2026-Q3-Master.pdf",
    target_schema="SAP_S4HANA_LEDGER_COMMIT",
    confidence_threshold=0.995
)

print(f"Extracted {result.records_count} line items in {result.latency_ms}ms")
print(f"Reconciliation Status: {result.status}")`,

    curl: `curl -X POST https://api.strink.ai/v2/agents/execute \\
  -H "Authorization: Bearer st_live_89a7f29b410c..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "agentId": "hyperion-triangular-arb",
    "executionVenue": "COLO_NY4_DIRECT",
    "maxSlippageBps": 0.05,
    "capitalAllocatedUsd": 250000,
    "strategyParams": {
      "pairA": "ETH/USDC",
      "pairB": "ETH/BTC",
      "pairC": "BTC/USDC"
    }
  }'`,

    go: `package main

import (
	"context"
	"fmt"
	"github.com/strink-ai/strink-go/v2"
)

func main() {
	client := strink.NewClient(strink.Config{
		APIKey: "st_live_...",
		ZeroDataRetention: true,
	})

	resp, err := client.Workflows.Trigger(context.Background(), &strink.WorkflowRequest{
		PipelineID: "wf-fraud-aml-triangulation",
		Payload: map[string]any{
			"transactionVolume": 850000,
			"sourceCountry": "US",
			"destCountry": "SG",
		},
	})
	if err != nil {
		panic(err)
	}

	fmt.Printf("AML Risk Score: %.4f (Latency: %s)\\n", resp.RiskScore, resp.Latency)
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-playground" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
            <Code2 className="w-3.5 h-3.5 text-brand-500" />
            <span>Developer First Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Built for Engineers. <br className="hidden sm:inline" />
            Simple to Integrate, Impossible to Break.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Integrate autonomous agent fleets into your existing codebase in under 10 lines of code. Typed SDKs in TypeScript, Python, Go, and REST.
          </p>
        </div>

        {/* Code Playground Box */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Tab Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="text-xs font-mono text-slate-400 ml-2">Strink Unified SDK v2.4</span>
            </div>

            {/* Language Switcher Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveLang('typescript')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeLang === 'typescript' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                TypeScript
              </button>
              <button
                onClick={() => setActiveLang('python')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeLang === 'python' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setActiveLang('curl')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeLang === 'curl' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                cURL
              </button>
              <button
                onClick={() => setActiveLang('go')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeLang === 'go' ? 'bg-brand-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Go
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Snippet'}</span>
            </button>
          </div>

          {/* Code Window */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
            <pre className="text-slate-300">{codeSnippets[activeLang]}</pre>
          </div>

          {/* Bottom Execution Bar */}
          <div className="bg-slate-900 border-t border-slate-800 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Compilation Latency</span>
              </span>
              <span>•</span>
              <span>End-to-End Type Safety</span>
            </div>

            <button
              onClick={() => setSimulatedResponse(!simulatedResponse)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-brand-300 rounded-xl text-xs font-mono transition-colors flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{simulatedResponse ? 'Hide Response' : 'Simulate API Call'}</span>
            </button>
          </div>

          {/* Simulated API Output View */}
          {simulatedResponse && (
            <div className="bg-slate-950/90 border-t border-slate-800 p-6 font-mono text-xs text-brand-200">
              <div className="text-[11px] text-slate-400 mb-2 font-bold">HTTP/2 200 OK — (138ms response time)</div>
              <pre className="text-emerald-400">
{`{
  "id": "ses_90a82b419c",
  "object": "agent_session",
  "status": "completed",
  "executionTimeMs": 138,
  "confidenceScore": 0.994,
  "result": {
    "recordsProcessed": 1,
    "destination": "salesforce://opportunity/0068b000014xYZ",
    "zeroDataRetentionVerified": true
  }
}`}
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
