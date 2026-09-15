import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  TrendingUp,
  Cpu,
  Bot
} from 'lucide-react';
import { PRICING_TIERS } from '../../data/platformData';
import { formatCurrency } from '../../lib/utils';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-brand-500" />
            <span>Transparent Enterprise Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Predictable Scaling with Zero Hidden Fees
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Deploy dedicated agents and custom pipelines with fixed infrastructure predictability. No surprise per-token surcharges.
          </p>

          {/* Billing Toggle Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billing
            </span>
            
            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
              className="w-14 h-8 bg-slate-900 rounded-full p-1 transition-colors relative"
              aria-label="Toggle Billing Cycle"
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-transform ${
                billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </button>

            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[10px]">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isCustom = tier.priceMonthly === 'Custom';
            const price = isCustom ? 'Custom' : billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  tier.highlighted
                    ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-brand-500 relative scale-[1.02]'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-subtle hover:shadow-card-hover'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      tier.highlighted 
                        ? 'bg-brand-500 text-slate-950' 
                        : 'bg-sky-50 text-brand-700 border border-brand-200/60'
                    }`}>
                      {tier.badge}
                    </span>
                    {tier.highlighted && (
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-300 font-semibold">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-sans">{tier.name}</h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6">
                    {isCustom ? (
                      <div className="text-3xl font-extrabold font-sans">Custom Quote</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                          ${typeof price === 'number' ? price.toLocaleString() : price}
                        </span>
                        <span className={`text-xs ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                          / month
                        </span>
                      </div>
                    )}
                    <div className={`text-[11px] mt-1 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isCustom ? 'Tailored to dedicated VPC compute' : billingCycle === 'annual' ? 'Billed annually with SLA' : 'Billed monthly, cancel anytime'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/40">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${
                      tier.highlighted ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Included Features:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${
                          tier.highlighted ? 'bg-brand-400 text-slate-950' : 'bg-brand-50 text-brand-600'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`leading-snug ${tier.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      tier.highlighted
                        ? 'bg-brand-500 hover:bg-brand-400 text-slate-950 shadow-md hover:shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> 14-Day Risk-Free Enterprise Pilot</span>
          <span>•</span>
          <span>Zero Long-term Lock-in</span>
          <span>•</span>
          <span>SOC 2 Type II & HIPAA Audit Reports Included</span>
        </div>

      </div>
    </section>
  );
};
