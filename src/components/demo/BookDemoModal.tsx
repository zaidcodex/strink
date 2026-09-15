import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  User, 
  Mail, 
  Users, 
  Cpu, 
  TrendingUp, 
  Bot, 
  Workflow
} from 'lucide-react';
import { apiService, type LeadSubmission } from '../../services/api';
import confetti from 'canvas-confetti';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '25-100',
    primaryInterest: 'Autonomous AI Agents',
    customBudget: '$50,000 - $150,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedLead, setConfirmedLead] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    const result = await apiService.submitLead(formData);
    setIsSubmitting(false);

    if (result.success) {
      setConfirmedLead(result.data);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  const interests = [
    { label: 'Autonomous AI Agents', icon: Bot, desc: 'Multi-step autonomous execution fleets' },
    { label: 'Enterprise Automation Workflows', icon: Workflow, desc: 'ERP, CRM, and Document intelligence' },
    { label: 'Sub-ms Quant Trading Bots', icon: TrendingUp, desc: 'High-frequency algorithmic execution' },
    { label: 'Custom Sovereign / On-Prem AI', icon: Cpu, desc: 'Private VPC fine-tuning & RAG models' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Scrollable Container Wrapper */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        
        <div 
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 text-left overflow-hidden my-6 transition-all transform max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-850 p-6 sm:p-7 text-white relative flex-shrink-0">
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800 text-brand-300 text-xs font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>VIP Enterprise Architecture Session</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Schedule Technical Architecture Demo
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
              Meet directly with a Principal AI Solutions Architect from Strink. We will review your workflows, latency requirements, and deployment topology.
            </p>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-7 overflow-y-auto flex-1">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-5">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Session Confirmed</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-md mx-auto">
                    A personalized sandbox environment and calendar invite has been provisioned for <span className="font-semibold text-slate-900">{formData.email}</span>.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-md mx-auto text-left space-y-2.5 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Assigned Lead Architect:</span>
                    <span className="font-semibold text-brand-700">Dr. Julian Vance (Senior Partner)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Primary Focus:</span>
                    <span className="font-semibold text-slate-900">{formData.primaryInterest}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Deployment Topology:</span>
                    <span className="font-semibold text-slate-900">Strink Dedicated Sovereign Sandbox</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    Return to Platform
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Interest Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Primary Technology Focus
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interests.map((item) => {
                      const Icon = item.icon;
                      const isSelected = formData.primaryInterest === item.label;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setFormData({ ...formData, primaryInterest: item.label })}
                          className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                            isSelected 
                              ? 'bg-sky-50/80 border-brand-500 text-brand-900 ring-1 ring-brand-500' 
                              : 'bg-white border-slate-200/80 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold">{item.label}</div>
                            <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@enterprise.com"
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Financial Corp"
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Organization Size</label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      >
                        <option value="1-20">1 - 20 employees</option>
                        <option value="25-100">25 - 100 employees</option>
                        <option value="100-500">100 - 500 employees</option>
                        <option value="500-2000">500 - 2,000 employees</option>
                        <option value="2000+">2,000+ Global Enterprise</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specific Requirements / Architecture notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Key Objectives & Requirements (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g., Automating accounts payable OCR and SAP integration with sub-second latency..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Strict NDA & SOC 2 compliance guaranteed.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Provisioning...' : 'Confirm Demo Session'}</span>
                    <ArrowRight className="w-4 h-4 text-brand-300" />
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
