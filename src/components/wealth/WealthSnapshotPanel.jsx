import React from 'react';
import { Shield, TrendingUp, Briefcase, Activity, AlertCircle, Phone, Calendar } from 'lucide-react';

export default function WealthSnapshotPanel({ customer }) {
  if (!customer) return null;

  return (
    <div className="bg-white border-b border-zinc-200 shadow-sm sticky top-0 z-30">
      <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Side: Avatar and Quick Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={customer.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"} 
              alt={customer.name} 
              className="w-16 h-16 rounded-xl object-cover shadow-sm border border-zinc-100"
            />
            {customer.tier === 'Diamond' && (
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Diamond Tier">
                <Shield className="w-3 h-3" />
              </div>
            )}
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-zinc-900 tracking-tight">{customer.name}</h1>
              <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                customer.segment === 'Private Wealth' 
                  ? 'bg-zinc-900 text-amber-400' 
                  : 'bg-brand/10 text-brand'
              }`}>
                {customer.segment}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>CIF: <span className="font-medium text-zinc-700">{customer.cif}</span></span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {customer.occupation}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {customer.mobile}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: KPIs */}
        <div className="flex items-center gap-6 divide-x divide-zinc-100">
          <div className="flex flex-col items-end px-4">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">AUM</span>
            <span className="text-lg font-bold text-zinc-900">
              RM {(customer.aum / 1000000).toFixed(2)}M
            </span>
          </div>
          
          <div className="flex flex-col items-end px-4">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">Fin. Assets</span>
            <span className="text-lg font-bold text-zinc-900">
              RM {(customer.totalFinancialAssets / 1000000).toFixed(2)}M
            </span>
          </div>

          <div className="flex flex-col items-end px-4">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">Health</span>
            <div className="flex items-center gap-1.5">
              <Activity className={`w-4 h-4 ${
                customer.relationshipHealth === 'Excellent' ? 'text-emerald-500' :
                customer.relationshipHealth === 'Strong' ? 'text-emerald-400' :
                customer.relationshipHealth === 'At Risk' ? 'text-rose-500' : 'text-amber-500'
              }`} />
              <span className="text-sm font-bold text-zinc-800">{customer.relationshipHealth}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end pl-4">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">Next Appt</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-800">
              <Calendar className="w-3.5 h-3.5 text-brand" />
              {customer.appointments?.[0] ? customer.appointments[0].date : 'None Scheduled'}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
