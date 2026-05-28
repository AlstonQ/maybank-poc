import React from 'react';
import { User, Shield, Briefcase, Phone, Mail, ChevronRight, CheckCircle2, TrendingUp, AlertTriangle, AlertCircle, Clock } from 'lucide-react';

export default function WealthSidebarProfile({ customer }) {
  if (!customer) return null;

  return (
    <div className="w-[280px] shrink-0 border-r border-zinc-200 bg-white flex flex-col h-screen sticky top-0 overflow-y-auto custom-scrollbar">
      <div className="p-5">
        <h2 className="text-zinc-900 font-bold text-lg mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand"></span> Wealth Customer 360
        </h2>
        
        {/* Profile Snapshot */}
        <div className="mb-6">
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest block mb-4">Profile Snapshot</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <img 
                src={customer.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"} 
                alt={customer.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-zinc-100"
              />
              {customer.tier === 'Diamond' && (
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-0.5 rounded-full border border-white">
                  <Shield className="w-3 h-3" />
                </div>
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 leading-tight">{customer.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-zinc-500 font-medium">{customer.age}</span>
                <span className="px-1.5 py-0.5 bg-brand/10 text-brand rounded text-[9px] font-bold uppercase">{customer.segment}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 mt-5">
            <div className="text-xs">
              <span className="text-zinc-500 block mb-0.5 font-medium">Contact details</span>
              <span className="text-zinc-800 font-medium">{customer.name}</span>
            </div>
            <div className="text-xs">
              <span className="text-zinc-500 block mb-0.5 font-medium">Phone</span>
              <span className="text-zinc-800 font-medium">{customer.mobile}</span>
            </div>
            <div className="text-xs">
              <span className="text-zinc-500 block mb-0.5 font-medium">Email address</span>
              <span className="text-zinc-800 font-medium">{customer.email || `${customer.name.split(' ')[0].toLowerCase()}@gmail.com`}</span>
            </div>
          </div>
        </div>

        {/* Risk Profile */}
        <div className="mb-6 border-t border-zinc-100 pt-5">
          <div className="flex items-center justify-between mb-2 cursor-pointer group">
            <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Risk Profile</span>
            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-brand" />
          </div>
          <span className="text-sm text-zinc-900 font-bold">{customer.suitability?.score || 'Aggressive'}</span>
        </div>

        {/* Key Assets */}
        <div className="mb-6 border-t border-zinc-100 pt-5">
          <div className="flex items-center justify-between mb-4 cursor-pointer group">
            <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Key Assets</span>
            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-brand" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5" /></div>
              <span className="text-xs text-zinc-800 font-semibold">Global Equities</span>
            </div>
            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-100 text-amber-600 flex items-center justify-center"><AlertCircle className="w-3.5 h-3.5" /></div>
              <span className="text-xs text-zinc-800 font-semibold">Fixed Income</span>
            </div>
            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center"><Briefcase className="w-3.5 h-3.5" /></div>
              <span className="text-xs text-zinc-800 font-semibold">Real Estate</span>
            </div>
            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5" /></div>
              <span className="text-xs text-zinc-800 font-semibold">Commodities</span>
            </div>
            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 flex items-center gap-2 col-span-2">
              <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
              <span className="text-xs text-zinc-800 font-semibold">Cash</span>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mb-6 border-t border-zinc-100 pt-5">
          <div className="flex items-center justify-between mb-4 cursor-pointer group">
            <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Recent Activities</span>
            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-brand" />
          </div>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent">
            {customer.interactions?.slice(0, 3).map((act, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Clock className="w-3 h-3" />
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 px-3 py-2 bg-zinc-50 border border-zinc-100 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-zinc-800 block truncate">{act.type}</span>
                  <span className="text-[9px] font-medium text-zinc-500">{act.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="border-t border-zinc-100 pt-5">
          <div className="flex items-center justify-between mb-4 cursor-pointer group">
            <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Key Metrics</span>
            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-brand" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider mb-1">Cash</span>
              <span className="text-sm font-black text-zinc-900 block">MYR {(customer.aum * 0.07).toLocaleString()}</span>
            </div>
            <div>
              <span className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider mb-1">Equities</span>
              <span className="text-sm font-black text-zinc-900 block">38.83%</span>
            </div>
            <div>
              <span className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider mb-1">Real Estate</span>
              <span className="text-sm font-black text-zinc-900 block">138.39%</span>
            </div>
            <div>
              <span className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider mb-1">Commodities</span>
              <span className="text-sm font-black text-zinc-900 block">6.22%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
