export interface AgentModel {
  id: string;
  name: string;
  role: string;
  tagline: string;
  category: 'Sales & Growth' | 'Financial Ops' | 'Quantitative Finance' | 'Engineering & Ops' | 'Security & Compliance';
  status: 'active' | 'deploying' | 'idle';
  modelEngine: string;
  latencyMs: number;
  uptime: string;
  tasksCompleted: number;
  accuracyRate: string;
  description: string;
  capabilities: string[];
  samplePayload: {
    input: string;
    output: string;
    toolsUsed: string[];
  };
}

export interface WorkflowPipeline {
  id: string;
  name: string;
  description: string;
  category: string;
  triggerEvent: string;
  executionRate: string;
  avgCostPerRun: string;
  steps: {
    title: string;
    service: string;
    type: 'trigger' | 'transform' | 'llm' | 'validation' | 'database' | 'action';
    latency: string;
  }[];
}

export interface QuantStrategy {
  id: string;
  name: string;
  assetClass: string;
  frequency: string;
  latencyMicrosec: string;
  ytdReturn: string;
  sharpeRatio: number;
  maxDrawdown: string;
  executionVenues: string[];
  description: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  logoText: string;
  industry: string;
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
  authorRole: string;
  tag: string;
}

export const AGENTS_CATALOG: AgentModel[] = [
  {
    id: 'agt-sdr',
    name: 'Apex SDR & Growth Agent',
    role: 'Autonomous Outbound & Account Research',
    tagline: 'Performs deep multi-source account intelligence, generates personalized hyper-targeted outreach, and schedules qualified buyer meetings directly to CRM.',
    category: 'Sales & Growth',
    status: 'active',
    modelEngine: 'Strink-Sovereign-Llama3-70B',
    latencyMs: 140,
    uptime: '99.98%',
    tasksCompleted: 48920,
    accuracyRate: '97.2%',
    description: 'Replaces manual sales development work with autonomous 24/7 account scraping, technographic matching, executive signal detection, and compliant email sequences.',
    capabilities: [
      'Multi-source intent verification (LinkedIn, SEC Filings, Job Boards)',
      'Deterministic tone matching & brand guidelines compliance',
      'Instant calendar routing via Google Workspace & Microsoft 365',
      'Native bi-directional sync with Salesforce & HubSpot'
    ],
    samplePayload: {
      input: 'Analyze Snowflake Inc. hiring for Head of RevOps. Draft targeted C-suite pipeline solution.',
      output: 'Identified 3 executive buying signals. Drafted enterprise value thesis highlighting 38% ramp-time reduction. Meeting booked for Oct 4th.',
      toolsUsed: ['SearchAPI', 'SalesforceConnector', 'CalendarRouter', 'SecurityEnforcer']
    }
  },
  {
    id: 'agt-finance',
    name: 'Synapse Financial Document Extractor',
    role: 'Document Intelligence & Ledger Reconciliation',
    tagline: 'Extracts tabular and unstructured data from complex multi-page financial statements, invoices, and contracts with mathematical precision.',
    category: 'Financial Ops',
    status: 'active',
    modelEngine: 'Strink-Vision-Embed-v2',
    latencyMs: 85,
    uptime: '99.99%',
    tasksCompleted: 812400,
    accuracyRate: '99.85%',
    description: 'High-throughput enterprise document parser trained on GAAP/IFRS standards, cross-verifying tax IDs, line-item totals, and multi-currency conversions.',
    capabilities: [
      'Zero-shot extraction from scanned PDFs, TIFFs, and unformatted spreadsheets',
      'Real-time double-entry bookkeeping validation',
      'Audit-ready trail with exact pixel-level bounding boxes and citations',
      'ERP integration: SAP S/4HANA, NetSuite, Oracle Cloud Financials'
    ],
    samplePayload: {
      input: 'Reconcile 450-page Q3 vendor master invoice bundle with PO #88924 in SAP.',
      output: 'Extracted 1,428 line items. Reconciled $4,892,110.40 total. Flagged 1 duplicate shipping surcharge ($420.00). Ledger synced.',
      toolsUsed: ['OCRParser', 'SAPConnector', 'MathValidator', 'AuditLogger']
    }
  },
  {
    id: 'agt-quant',
    name: 'Hyperion Sub-Millisecond Arbitrage Engine',
    role: 'Algorithmic High-Frequency Execution',
    tagline: 'Executes cross-exchange triangular arbitrage, statistical pairs trading, and liquidity provisioning with sub-millisecond execution times.',
    category: 'Quantitative Finance',
    status: 'active',
    modelEngine: 'Strink-MicroQuant-C++ Engine',
    latencyMs: 0.72,
    uptime: '100.0%',
    tasksCompleted: 1420950,
    accuracyRate: '99.4%',
    description: 'Institutional-grade quantitative trading bot engineered for proprietary trading desks and crypto hedge funds. Includes real-time risk mitigation and smart order routing.',
    capabilities: [
      'Colocated sub-millisecond WebSocket and FIX protocol feeds',
      'Dynamic slippage minimization & cross-venue order slicing',
      'Hard real-time circuit breakers & maximum drawdown guardrails',
      'Integrated backtesting harness across 5+ years of tick-level order book data'
    ],
    samplePayload: {
      input: 'Cross-venue spread detected: Binance SOL/USDC ($142.10) vs OKX SOL/USDC ($142.34). Capital allocated: $250k.',
      output: 'Routed 2-leg atomic execution in 0.68ms. Captured +$582.40 net of all gas and maker/taker fees. Slippage: 0.002%.',
      toolsUsed: ['FIXProtocolAdapter', 'RiskCircuitBreaker', 'MemPoolMonitor', 'OrderSlicer']
    }
  },
  {
    id: 'agt-ops',
    name: 'OmniCare Autonomous L3 Support & Triage',
    role: 'Engineering & Customer Operations',
    tagline: 'Diagnoses complex software issues, reads application logs, executes reproduction steps, and opens draft GitHub pull requests.',
    category: 'Engineering & Ops',
    status: 'active',
    modelEngine: 'Strink-Reasoning-v3',
    latencyMs: 190,
    uptime: '99.96%',
    tasksCompleted: 94300,
    accuracyRate: '94.8%',
    description: 'Goes beyond standard FAQ chatbots by connecting directly to Kubernetes, Datadog, Sentry, and GitHub to investigate and resolve real technical incidents.',
    capabilities: [
      'Log parsing and trace correlation across microservice clusters',
      'Automated pull request generation for syntax errors and schema migrations',
      'Interactive guided troubleshooting for enterprise end-users',
      'Zero customer data storage on public LLM clouds'
    ],
    samplePayload: {
      input: 'Ticket #4021: Enterprise customer reports 504 Gateway Timeout on /api/v2/reports endpoint.',
      output: 'Correlated Sentry trace to unindexed Postgres join on workspace_id. Generated migration PR #891 to add composite B-Tree index. Customer notified.',
      toolsUsed: ['DatadogAPI', 'GitHubConnector', 'PostgresAnalyzer', 'ZendeskSync']
    }
  }
];

export const WORKFLOWS_CATALOG: WorkflowPipeline[] = [
  {
    id: 'wf-1',
    name: 'Enterprise Contract Review & Risk Classification',
    category: 'Legal & Risk Ops',
    description: 'Ingests NDAs, MSAs, and vendor agreements, verifies indemnification limits, flags high-risk clauses, and prepares redlines against company playbooks.',
    triggerEvent: 'DocuSign / Ironclad / Google Drive Ingestion',
    executionRate: '350 contracts/day',
    avgCostPerRun: '$0.42 / agreement',
    steps: [
      { title: 'Doc Ingestion & OCR', service: 'Amazon Textract / Strink OCR', type: 'trigger', latency: '450ms' },
      { title: 'Clause Segmentation', service: 'Strink NLP Engine', type: 'transform', latency: '120ms' },
      { title: 'Playbook Compliance Check', service: 'Sovereign LLM Core', type: 'llm', latency: '680ms' },
      { title: 'Redline Generation', service: 'Word / PDF Synthesizer', type: 'action', latency: '210ms' },
      { title: 'Legal Counsel Slack Ping', service: 'Slack Enterprise Grid', type: 'action', latency: '80ms' }
    ]
  },
  {
    id: 'wf-2',
    name: 'Real-Time Fraud & Anti-Money Laundering (AML) Triangulation',
    category: 'Banking & FinTech',
    description: 'Monitors high-volume wire transfers, correlates IP geolocation with device telemetry, performs OFAC sanctions check, and calculates fraud probability.',
    triggerEvent: 'Kafka Transaction Stream (8,000 tx/sec)',
    executionRate: '6.9M events/day',
    avgCostPerRun: '$0.0008 / transaction',
    steps: [
      { title: 'Kafka Message Ingest', service: 'Confluent Cloud', type: 'trigger', latency: '4ms' },
      { title: 'Graph Vector Lookup', service: 'Neo4j / Pinecone RAG', type: 'database', latency: '18ms' },
      { title: 'Risk Score Classification', service: 'Strink Quant Model', type: 'llm', latency: '22ms' },
      { title: 'Deterministic Sanctions Match', service: 'OFAC & PEP Database', type: 'validation', latency: '12ms' },
      { title: 'Automated SAR Filing Draft', service: 'FinCEN Bridge', type: 'action', latency: '40ms' }
    ]
  },
  {
    id: 'wf-3',
    name: 'Multi-Ecosystem Inventory & Supply Chain Reordering',
    category: 'Supply Chain & Retail',
    description: 'Predicts stock depletion across 40 warehouses using weather, lead-time volatility, and seasonal models, issuing automated purchase orders to ERP.',
    triggerEvent: 'Hourly Warehouse Telemetry Cron',
    executionRate: '40,000 SKUs monitored',
    avgCostPerRun: '$1.20 / warehouse sync',
    steps: [
      { title: 'Inventory Database Query', service: 'Snowflake Data Cloud', type: 'database', latency: '820ms' },
      { title: 'Lead Time Predictor', service: 'Strink Time-Series Model', type: 'transform', latency: '150ms' },
      { title: 'Purchase Order Synthesis', service: 'LLM PO Generator', type: 'llm', latency: '340ms' },
      { title: 'ERP Ledger Commit', service: 'SAP S/4HANA REST API', type: 'action', latency: '240ms' }
    ]
  }
];

export const QUANT_STRATEGIES: QuantStrategy[] = [
  {
    id: 'qs-1',
    name: 'Triangular CEX/DEX Flash Liquidity',
    assetClass: 'Digital Assets & FX',
    frequency: 'Sub-Millisecond (<1ms)',
    latencyMicrosec: '480 μs',
    ytdReturn: '+38.4%',
    sharpeRatio: 3.82,
    maxDrawdown: '1.24%',
    executionVenues: ['Binance VIP', 'Coinbase Prime', 'Uniswap v3', 'Curve Finance'],
    description: 'Captures spatial price discrepancies between centralized limit order books and automated market maker liquidity pools with zero directional overnight market risk.'
  },
  {
    id: 'qs-2',
    name: 'Statistical Equity Pairs & Mean Reversion',
    assetClass: 'US Equities (S&P 500)',
    frequency: 'High-Frequency (10-50ms)',
    latencyMicrosec: '1,200 μs',
    ytdReturn: '+26.1%',
    sharpeRatio: 2.94,
    maxDrawdown: '2.10%',
    executionVenues: ['NASDAQ Colocated', 'NYSE Arca', 'BATS Direct'],
    description: 'Cointegrated asset basket monitoring with Kalman-filtered dynamic hedge ratios, isolating alpha while remaining dollar and beta neutral.'
  },
  {
    id: 'qs-3',
    name: 'Cross-Venue Volatility Surface Arbitrage',
    assetClass: 'Options & Derivatives',
    frequency: 'Medium-Frequency (100ms)',
    latencyMicrosec: '2,400 μs',
    ytdReturn: '+44.7%',
    sharpeRatio: 4.12,
    maxDrawdown: '0.95%',
    executionVenues: ['Deribit Ultra-Low Latency', 'CBOE Direct', 'CME Globex'],
    description: 'Trades implied volatility mispricings against calculated localized Black-Scholes surfaces with automated delta-gamma neutralization.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Vanguard Logistics Global',
    logoText: 'VANGUARD LOGISTICS',
    industry: 'Enterprise Freight & Supply Chain',
    metrics: [
      { label: 'Operational Cost Reduction', value: '74%' },
      { label: 'Customs Clearance Speed', value: '18x faster' },
      { label: 'Annual Net Savings', value: '$3.8M' }
    ],
    quote: 'Strink AI automated 85% of our international customs manifest validation in 6 weeks. The error rate dropped to near zero, and our operational team now focuses purely on client relationship exceptions.',
    author: 'Elena Rostova',
    authorRole: 'Chief Operating Officer, Vanguard Global',
    tag: 'Supply Chain Automation'
  },
  {
    id: 'cs-2',
    client: 'Kestrel Quantitative Capital',
    logoText: 'KESTREL CAPITAL',
    industry: 'Quantitative Hedge Fund',
    metrics: [
      { label: 'Sub-ms Execution Latency', value: '0.64ms' },
      { label: 'Sharpe Ratio Improvement', value: '+1.4' },
      { label: 'Annual Traded Volume', value: '$4.2B' }
    ],
    quote: 'Strink’s C++ co-located trading infrastructure provided institutional-grade speed without us having to build a 20-person low-latency infrastructure team from scratch. The risk circuit breakers are bulletproof.',
    author: 'Marcus Sterling',
    authorRole: 'Managing Partner & Head of Trading, Kestrel Capital',
    tag: 'Quant Algorithmic Trading'
  },
  {
    id: 'cs-3',
    client: 'Synovus Health Group',
    logoText: 'SYNOVUS HEALTH',
    industry: 'Healthcare & Insurance Services',
    metrics: [
      { label: 'Prior Auth Turnaround', value: '2 mins (vs 4 days)' },
      { label: 'HIPAA Audit Score', value: '100%' },
      { label: 'Monthly Claims Processed', value: '620,000+' }
    ],
    quote: 'Deploying Strink in an isolated on-premises VPC gave our security officers complete confidence. We have processed over 600k patient prior authorizations with zero security incidents.',
    author: 'Dr. Aris Thorne',
    authorRole: 'Chief Technology Officer, Synovus Health',
    tag: 'Custom AI & Compliance'
  }
];

export const PRICING_TIERS = [
  {
    id: 'tier-starter',
    name: 'Foundation',
    badge: 'Growth Teams',
    description: 'For fast-moving engineering and operations teams launching their first fleet of autonomous agents.',
    priceMonthly: 1290,
    priceAnnual: 990,
    features: [
      'Up to 5 Dedicated Autonomous AI Agents',
      '50,000 automated workflow executions / mo',
      'Pre-built connectors (Salesforce, Hubspot, Slack, Postgres)',
      'Sub-250ms API response latency',
      'SOC 2 Type II compliant cloud hosting',
      'Email & Community support with 4h SLA',
      'Standard RAG vector database (10GB context)'
    ],
    ctaText: 'Start 14-Day Free Sandbox',
    highlighted: false
  },
  {
    id: 'tier-growth',
    name: 'Enterprise Scale',
    badge: 'Most Popular',
    description: 'For mid-market and enterprise organizations scaling multi-department automation and custom agent swarms.',
    priceMonthly: 3890,
    priceAnnual: 2990,
    features: [
      'Up to 25 Dedicated Autonomous AI Agents',
      '500,000 workflow executions / mo',
      'Full custom tool integration & human-in-the-loop review',
      'Enterprise ERP integration (SAP, NetSuite, Oracle, Snowflake)',
      'Sub-100ms dedicated inference endpoints',
      'Private VPC deployment option (AWS, GCP, Azure)',
      'Dedicated Solutions Architect & 15m SLA',
      'Custom fine-tuning pipeline on company data',
      'Role-based access control (RBAC) & audit logs'
    ],
    ctaText: 'Deploy Enterprise Fleet',
    highlighted: true
  },
  {
    id: 'tier-quant',
    name: 'Quant & High-Frequency',
    badge: 'Institutional Finance',
    description: 'Designed for proprietary trading desks, family offices, and quantitative funds requiring microsecond execution.',
    priceMonthly: 7490,
    priceAnnual: 5990,
    features: [
      'Colocated Sub-Millisecond Execution Infrastructure',
      'Unlimited high-frequency bot instances',
      'Direct FIX protocol and low-latency WebSocket feeds',
      'Hardware-accelerated risk circuit breakers',
      'Historical 10-year tick-level backtesting engine',
      'Cross-exchange triangular & statistical arbitrage modules',
      '24/7 dedicated Quant Engineering desk support',
      'Custom C++ algorithmic strategy compilation'
    ],
    ctaText: 'Request Quant Access',
    highlighted: false
  },
  {
    id: 'tier-custom',
    name: 'Sovereign / Custom AI',
    badge: 'Global 2000',
    description: 'Full air-gapped on-premises or private sovereign cloud infrastructure tailored for mission-critical operations.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    features: [
      'Unlimited custom agents, workflows, and users',
      'Air-gapped on-premise Kubernetes cluster deployment',
      'Proprietary model fine-tuning with zero data retention',
      'Custom SLM/LLM architecture development from scratch',
      'Guaranteed 99.999% uptime SLA',
      'Custom hardware procurement & GPU cluster provisioning',
      'Named executive sponsor and 24/7/365 war-room support'
    ],
    ctaText: 'Contact Solutions Engineering',
    highlighted: false
  }
];

export const SECURITY_SPECS = [
  {
    title: 'SOC 2 Type II Certified',
    description: 'Independently audited controls across security, availability, processing integrity, confidentiality, and privacy.',
    badge: 'Certified'
  },
  {
    title: 'Zero Data Retention (ZDR)',
    description: 'Your proprietary company data and prompts are never used to train global models. All memory stores are cryptographically isolated.',
    badge: 'Guaranteed'
  },
  {
    title: 'Private VPC & Air-Gapped',
    description: 'Deploy the entire Strink AI execution plane directly within your own AWS, Azure, or GCP Virtual Private Cloud.',
    badge: 'Enterprise VPC'
  },
  {
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption for data at rest and TLS 1.3 with Perfect Forward Secrecy for all data in transit.',
    badge: 'AES-256'
  },
  {
    title: 'Granular Role-Based Access (RBAC)',
    description: 'Fine-grained policy enforcement with SAML 2.0 / Okta SSO integration and immutable SIEM-ready audit trails.',
    badge: 'SAML / SSO'
  },
  {
    title: 'Deterministic Guardrails',
    description: 'Hard mathematical circuit breakers prevent hallucinations, schema violations, and unverified transactional operations.',
    badge: 'Circuit Breakers'
  }
];
