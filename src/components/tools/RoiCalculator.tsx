import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle2,
  Download
} from 'lucide-react';
import { formatCurrency, formatNumber } from '../../lib/utils';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [teamSize, setTeamSize] = useState<number>(35);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(12);
  const [automationRate, setAutomationRate] = useState<number>(80);

  // Financial Calculations
  const weeklyManualHours = teamSize * manualHoursPerWeek;
  const annualManualHours = weeklyManualHours * 52;
  const currentAnnualCost = annualManualHours * hourlyRate;
  
  const savedAnnualHours = annualManualHours * (automationRate / 100);
  const grossAnnualSavings = savedAnnualHours * hourlyRate;
  
  // Platform investment tier estimation
  const strataEstimatedCost = teamSize <= 10 ? 15480 : teamSize <= 50 ? 46680 : teamSize <= 150 ? 89880 : 180000;
  const netAnnualSavings = Math.max(0, grossAnnualSavings - strataEstimatedCost);
  const roiMultiplier = ((netAnnualSavings / strataEstimatedCost) * 100).toFixed(0);
  const hoursRecoveredPerEmployee = Math.round(savedAnnualHours / teamSize);

  return (
    <section id="roi-calculator" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5 text-brand-500" />
            <span>Interactive Financial Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Calculate Your Organization's <br className="hidden sm:inline" />
            Net Automation ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Quantify direct labor cost savings, recovered productive hours, and return on investment from deploying Strink Autonomous Agents.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Team Size */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brand-500" />
                    <span>Operational & Knowledge Workers</span>
                  </label>
                  <span className="text-base font-bold text-slate-900 font-mono">
                    {teamSize} <span className="text-xs font-normal text-slate-500">people</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-brand-500 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
                  <span>5</span>
                  <span>100</span>
                  <span>250+</span>
                </div>
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-brand-500" />
                    <span>Fully-Loaded Hourly Rate ($/hr)</span>
                  </label>
                  <span className="text-base font-bold text-slate-900 font-mono">
                    ${hourlyRate} <span className="text-xs font-normal text-slate-500">/hr</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-brand-500 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
                  <span>$30/hr</span>
                  <span>$85/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>

              {/* Slider 3: Hours Spent on Repetitive Tasks */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span>Manual Repetitive Hours / Person / Week</span>
                  </label>
                  <span className="text-base font-bold text-slate-900 font-mono">
                    {manualHoursPerWeek} <span className="text-xs font-normal text-slate-500">hrs/week</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="1"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-brand-500 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
                  <span>4 hrs</span>
                  <span>14 hrs</span>
                  <span>25 hrs</span>
                </div>
              </div>

              {/* Slider 4: Target Automation Efficiency */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-brand-500" />
                    <span>Target Process Automation Rate</span>
                  </label>
                  <span className="text-base font-bold text-brand-600 font-mono">
                    {automationRate}% <span className="text-xs font-normal text-slate-500">automated</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="95"
                  step="5"
                  value={automationRate}
                  onChange={(e) => setAutomationRate(Number(e.target.value))}
                  className="w-full accent-brand-500 h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
                  <span>50%</span>
                  <span>75%</span>
                  <span>95%</span>
                </div>
              </div>

            </div>

            {/* Right Output: Detailed Financial Impact Box */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                  ESTIMATED ANNUAL IMPACT
                </span>
                <span className="px-2.5 py-0.5 rounded bg-brand-950 border border-brand-800 text-brand-300 text-xs font-mono">
                  Verified Model
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400">Net Annual Cost Savings</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1 font-mono tracking-tight">
                  {formatCurrency(netAnnualSavings)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  After factoring Strata platform infrastructure investment ({formatCurrency(strataEstimatedCost)}/yr).
                </div>
              </div>

              {/* Financial Metrics Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">ROI Multiplier</div>
                  <div className="text-xl font-bold text-white font-mono mt-1">+{roiMultiplier}%</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Hours Recovered / Year</div>
                  <div className="text-xl font-bold text-brand-300 font-mono mt-1">
                    {formatNumber(savedAnnualHours)} <span className="text-xs text-slate-400">hrs</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Recovered / Employee</div>
                  <div className="text-xl font-bold text-white font-mono mt-1">
                    {hoursRecoveredPerEmployee} <span className="text-xs text-slate-400">hrs/yr</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Time-to-Value</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1">&lt; 14 Days</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                >
                  <span>Request Custom Financial Feasibility Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
