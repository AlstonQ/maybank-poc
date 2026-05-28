import React from 'react';
import { User, MapPin, Briefcase, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function WealthProfileSuitability({ customer }) {
  if (!customer) return null;

  const DetailItem = ({ label, value, alert }) => (
    <div className="flex flex-col py-3 border-b border-zinc-100 last:border-0">
      <span className="text-xs text-zinc-500 mb-1">{label}</span>
      <span className={`text-sm font-medium ${alert ? 'text-rose-600 flex items-center gap-1.5' : 'text-zinc-900'}`}>
        {alert && <AlertTriangle className="w-3.5 h-3.5" />}
        {value || '-'}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Demographic & KYC Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
            <User className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-zinc-900">Demographics & KYC</h3>
        </div>
        
        <div className="p-5 grid grid-cols-2 gap-x-8">
          <DetailItem label="Full Name" value={customer.name} />
          <DetailItem label="NRIC / Passport" value={customer.nricMasked} />
          <DetailItem label="Date of Birth (Age)" value={`${customer.dob} (${customer.age} years)`} />
          <DetailItem label="Nationality" value={customer.nationality} />
          <DetailItem label="Marital Status" value={customer.maritalStatus} />
          <DetailItem label="Dependents" value={customer.dependents} />
          
          <div className="col-span-2">
            <DetailItem label="Residential Address" value={customer.residentialAddress} />
          </div>

          <DetailItem label="Occupation" value={customer.occupation} />
          <DetailItem label="Employer / Business" value={customer.employer} />
          <DetailItem label="Source of Wealth" value={customer.sourceOfWealth} />
          <DetailItem label="Source of Funds" value={customer.sourceOfFunds} />
          <DetailItem label="Income Band" value={customer.incomeBand} />
          <DetailItem label="Tax Residency" value={customer.taxResidency} />
          <div className="col-span-2">
             <DetailItem label="FATCA / CRS Status" value={customer.fatcaCrs} />
          </div>
        </div>
      </div>

      {/* Suitability & Preferences */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-zinc-900">Investment Suitability</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                customer.suitability.validity === 'Expired' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
              }`}>
                {customer.suitability.validity === 'Expired' ? 'EXPIRED' : 'VALID'}
              </span>
            </div>
          </div>
          
          <div className="p-5">
            {customer.suitability.warnings?.length > 0 && (
              <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-2">
                {customer.suitability.warnings.map((w, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-amber-800 font-medium">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    {w}
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <span className="block text-xs text-zinc-500 mb-1">Risk Profile Score</span>
                <span className="text-lg font-bold text-zinc-900">{customer.suitability.score}</span>
              </div>
              <div>
                <span className="block text-xs text-zinc-500 mb-1">CKA / FIMM Status</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" /> {customer.suitability.ckaStatus}
                </span>
              </div>
              
              <div className="col-span-2 border-t border-zinc-100 pt-4 mt-2">
                <div className="grid grid-cols-2 gap-6">
                  <DetailItem label="Investment Objective" value={customer.suitability.investmentObjective} />
                  <DetailItem label="Time Horizon" value={customer.suitability.timeHorizon} />
                  <DetailItem label="Loss Tolerance" value={customer.suitability.lossTolerance} />
                  <DetailItem label="Liquidity Need" value={customer.suitability.liquidityNeed} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden p-5">
           <h4 className="text-sm font-bold text-zinc-900 mb-4">Client Preferences</h4>
           <div className="grid grid-cols-2 gap-4">
              <DetailItem label="Shariah Preference" value={customer.suitability.shariahPreference} />
              <DetailItem label="ESG Preference" value={customer.suitability.esgPreference} />
              <DetailItem label="Preferred Channel" value={customer.preferredChannel} />
              <DetailItem label="Preferred Language" value={customer.preferredLanguage} />
           </div>
        </div>
      </div>
    </div>
  );
}
