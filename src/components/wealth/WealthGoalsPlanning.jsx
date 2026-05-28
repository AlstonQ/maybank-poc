import React from 'react';
import { Target, HeartPulse, ShieldCheck, HelpCircle } from 'lucide-react';

export default function WealthGoalsPlanning({ customer }) {
  if (!customer) return null;

  const goals = customer.goals || [];
  const protection = customer.protection || {};

  const formatRM = (val) => new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR', minimumFractionDigits: 0 }).format(val);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Wealth Goals */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-brand" /> Wealth Planning Goals
        </h3>
        
        {goals.map(goal => (
          <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg">{goal.type}</h4>
                  <span className="text-xs text-zinc-500">Horizon: {goal.horizon} • Risk: {goal.risk}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-0.5">Target</span>
                  <span className="font-bold text-zinc-900">{formatRM(goal.target)}</span>
                </div>
              </div>

              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-emerald-600">Current: {formatRM(goal.current)}</span>
                <span className="font-semibold text-rose-600">Gap: {formatRM(goal.gap)}</span>
              </div>
              
              <div className="w-full bg-zinc-100 rounded-full h-2.5 mb-1 overflow-hidden">
                <div className="bg-brand h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
              </div>
              <div className="text-right text-xs text-zinc-500 font-bold">{goal.progress}% Funded</div>

              <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Monthly Contribution</span>
                  <span className="font-semibold text-zinc-800">{formatRM(goal.monthlyCont)}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Recommended Product</span>
                  <span className="font-semibold text-zinc-800">{goal.recProduct}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {goals.length === 0 && (
          <div className="bg-white p-8 text-center text-zinc-500 rounded-xl border border-dashed border-zinc-200">
            No wealth goals captured. Initiate goal discovery.
          </div>
        )}
      </div>

      {/* Protection & Insurance */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-rose-500" /> Protection & Legacy
        </h3>
        
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <span className="block text-xs text-zinc-500 mb-1">Life Coverage (Sum Assured)</span>
              <span className="text-xl font-bold text-zinc-900">{protection.lifeCoverage ? formatRM(protection.lifeCoverage) : 'None'}</span>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 mb-1">PA Coverage</span>
              <span className="text-xl font-bold text-zinc-900">{protection.paCover ? formatRM(protection.paCover) : 'None'}</span>
            </div>
            <div className="col-span-2 border-t border-zinc-100 pt-5">
              <span className="block text-xs text-zinc-500 mb-1">Medical Coverage</span>
              <span className="text-sm font-semibold text-zinc-900">{protection.medicalCover}</span>
            </div>
            <div className="col-span-2 border-t border-zinc-100 pt-5">
              <span className="block text-xs text-zinc-500 mb-1">Registered Nominees / Beneficiaries</span>
              <span className="text-sm font-semibold text-zinc-900">{protection.nominees}</span>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl shadow-sm border border-rose-200 p-5">
          <h4 className="font-bold text-rose-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600" /> Protection Gap Analysis
          </h4>
          <div className="space-y-3">
            <div>
              <span className="block text-[10px] uppercase text-rose-400 font-bold mb-1">Identified Gap</span>
              <p className="text-sm text-rose-800 font-medium">{protection.protectionGap}</p>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-rose-400 font-bold mb-1">Family Dependency Risk</span>
              <p className="text-sm text-rose-800 font-medium">{protection.familyDependency}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
