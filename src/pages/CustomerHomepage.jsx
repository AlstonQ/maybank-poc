import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { maskPII } from '../utils/securityUtils';
import { mockCustomersGCFS, mockCustomersGGB } from '../data/mockData';
import Customer360 from './Customer360';
import Modal from '../components/Modal';
import { 
  Users, DollarSign, AlertCircle, Layers, Star, ArrowUpRight, 
  Search, ShieldAlert, BadgePercent, ChevronRight, UserPlus
} from 'lucide-react';

export default function CustomerHomepage() {
  const { 
    appMode, cardLayout, selectedCustomerId, setSelectedCustomerId, searchQuery,
    isDataMaskingEnabled, currentUserRole
  } = useTheme();

  const [segmentFilter, setSegmentFilter] = useState('All');
  const [createOpen, setCreateOpen] = useState(false);

  // If a customer is selected, render their 360-degree record page directly!
  if (selectedCustomerId) {
    return <Customer360 id={selectedCustomerId} onBack={() => setSelectedCustomerId(null)} />;
  }

  const customers = appMode === 'gcfs' ? mockCustomersGCFS : mockCustomersGGB;

  // Global advanced search query integration + Local segment filters
  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.cif.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSegment = segmentFilter === 'All' || c.segment === segmentFilter;

    return matchesSearch && matchesSegment;
  });

  const totalAUM = filteredCustomers.reduce((acc, curr) => acc + (curr.aum || 0), 0);
  const avgChurn = filteredCustomers.length > 0 
    ? (filteredCustomers.reduce((acc, curr) => acc + (curr.churnRisk || 0), 0) / filteredCustomers.length).toFixed(0)
    : '0';

  const formatAUM = (value) => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(2)}B`;
    if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
    return value.toLocaleString();
  };

  // Available segments based on App Mode
  const segments = appMode === 'gcfs' 
    ? ["All", "Mass", "Privilege", "Premier Wealth", "Private Wealth"]
    : ["All", "Global Banking"];

  return (
    <div className="space-y-6">
      
      {/* Dynamic KPI Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Customers */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide">
              {appMode === 'gcfs' ? 'Total Clients' : 'Total Accounts'}
            </span>
            <h3 className="text-xl font-black text-zinc-800 mt-1">
              {filteredCustomers.length}
            </h3>
            <span className="text-[9px] text-green-600 font-bold flex items-center mt-1">
              ▲ 12% QTD Growth
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* Total AUM */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide">
              Portfolio AUM
            </span>
            <h3 className="text-xl font-black text-brand mt-1">
              MYR {(totalAUM / 1000000).toFixed(2)}M
            </h3>
            <span className="text-[9px] text-green-600 font-bold flex items-center mt-1">
              ▲ 4.5% vs Last Mo
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-lime/20 text-zinc-800 flex items-center justify-center font-bold">
            RM
          </div>
        </div>

        {/* Avg Churn Risk */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide">
              Portfolio Churn Index
            </span>
            <h3 className="text-xl font-black text-red-600 mt-1">
              {avgChurn}%
            </h3>
            <span className="text-[9px] text-red-600 font-bold flex items-center mt-1">
              ▼ 2.4% Risk Delta
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-550/10 text-red-600 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
        </div>

        {/* KYC Compliance Status */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide">
              KYC Status Code
            </span>
            <h3 className="text-xl font-black text-green-600 mt-1">
              100% Cleared
            </h3>
            <span className="text-[9px] text-zinc-400 font-semibold mt-1 block">
              Next Review: Q3 2026
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <BadgePercent className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter and Command Strip */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Segment Tabs */}
        <div className="flex gap-2 flex-wrap">
          {segments.map((seg, idx) => (
            <button
              key={idx}
              onClick={() => setSegmentFilter(seg)}
              className={`h-7 px-3.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors ${
                segmentFilter === seg 
                  ? 'bg-brand text-white' 
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>

        {/* Quick Search and Create button */}
        <div className="flex items-center gap-3">
          <div className="text-[10px] font-bold text-zinc-400 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-xl">
            {filteredCustomers.length} Records Found
          </div>
          <button onClick={() => setCreateOpen(true)} className="h-8 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 transition-colors shadow">
            <UserPlus className="w-3.5 h-3.5" />
            <span>+ Add {appMode === 'gcfs' ? 'Client' : 'Account'}</span>
          </button>
        </div>
      </div>

      {/* Main Listing Canvas */}
      {cardLayout ? (
        /* Visual Card Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((cust, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedCustomerId(cust.id)}
              className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 hover:border-brand cursor-pointer hover:shadow-lg transition-all flex flex-col justify-between h-[230px] group relative overflow-hidden"
            >
              {/* Top Row: photo, name, segment */}
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 flex-shrink-0 flex items-center justify-center">
                  {appMode === 'gcfs' ? (
                    <img src={cust.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"} alt={cust.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center font-black text-xs text-lime border border-zinc-700">
                      {cust.name.split(' ')[0][0]}{cust.name.split(' ')[1]?.[0] || ''}
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-extrabold text-brand uppercase bg-brand/10 px-2 py-0.5 rounded-full inline-block">
                    {cust.segment}
                  </span>
                  <h4 className="text-sm font-extrabold text-zinc-800 leading-snug mt-1 truncate group-hover:text-brand transition-colors">
                    {cust.name}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-semibold block mt-0.5">
                    CIF: {maskPII(cust.cif, 'cif', isDataMaskingEnabled)} · ID: {cust.id}
                  </span>
                </div>
              </div>

              {/* Middle Row: AUM and Churn Gauge */}
              <div className="mt-4 flex items-center justify-between border-t border-b border-zinc-100 py-3">
                <div>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block">Total AUM</span>
                  <span className="text-sm font-black text-zinc-800 mt-0.5 block">
                    MYR {formatAUM(cust.aum)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block">Churn Risk</span>
                  <span className={`text-xs font-black mt-0.5 block ${
                    cust.churnRisk > 50 ? 'text-red-500' : 'text-green-600'
                  }`}>
                    {cust.churnRisk}% {cust.churnRisk > 50 ? 'High' : 'Low'}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Branch Details and Gold Rating */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-zinc-500 truncate max-w-[60%]">
                  {cust.branch}
                </span>
                
                <div className="flex gap-0.5 text-[#F5A623]">
                  {Array.from({ length: cust.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Hover Indicator Icon */}
              <ChevronRight className="w-5 h-5 text-zinc-300 absolute right-4 top-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      ) : (
        /* Professional Data Table Layout */
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200 text-[10px] text-zinc-400 font-black tracking-wider uppercase select-none">
                  <th className="py-4 px-6">Customer ID</th>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Segment</th>
                  <th className="py-4 px-6">CIF Code</th>
                  <th className="py-4 px-6">Branch Assignment</th>
                  <th className="py-4 px-6 text-right">AUM Balance</th>
                  <th className="py-4 px-6 text-right">Churn index</th>
                </tr>
              </thead>
              <tbody className="text-xs text-zinc-700 font-semibold divide-y divide-zinc-150">
                {filteredCustomers.map((cust, idx) => (
                  <tr 
                    key={idx}
                    onClick={() => setSelectedCustomerId(cust.id)}
                    className="hover:bg-zinc-50/80 cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-6 text-zinc-500 font-bold">{cust.id}</td>
                    <td className="py-4 px-6 font-extrabold text-zinc-800 hover:text-brand transition-colors">
                      {cust.name}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[9px] font-extrabold text-brand uppercase bg-brand/10 px-2.5 py-0.5 rounded-full">
                        {cust.segment}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400">{maskPII(cust.cif, 'cif', isDataMaskingEnabled)}</td>
                    <td className="py-4 px-6 text-zinc-500">{cust.branch}</td>
                    <td className="py-4 px-6 text-right text-zinc-900 font-black">
                      MYR {formatAUM(cust.aum)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className={`text-[10px] font-black ${
                        cust.churnRisk > 50 ? 'text-red-500 bg-red-50 px-2 py-0.5 rounded' : 'text-green-600 bg-green-50 px-2 py-0.5 rounded'
                      }`}>
                        {cust.churnRisk}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCustomers.length === 0 && (
            <div className="p-8 text-center text-xs text-zinc-400 font-medium select-none">
              No matching records found in this context. Try adjusting filters or searching.
            </div>
          )}
        </div>
      )}

      <Modal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title={appMode === 'gcfs' ? 'Lead Capture & Assignment' : 'Corporate Account Onboarding'}
        subtitle={appMode === 'gcfs' ? 'NTB/ETB customer engagement' : 'Regional customer 360 seed record'}
        maxWidth="max-w-2xl"
      >
        <div className="grid grid-cols-2 gap-4 text-xs">
          {[
            ['Customer / Entity Name', appMode === 'gcfs' ? 'New Premier Prospect' : 'New ASEAN Corporate Group'],
            ['Source of Lead', 'Branch Walk-in / M2U / RM Referral'],
            ['Assigned Branch', 'Maybank Tower KL'],
            ['Assigned RM', 'James May'],
            ['Initial Product Interest', appMode === 'gcfs' ? 'Wealth Portfolio Review' : 'Syndicated Facility'],
            ['Next Step', 'Create lead and schedule call memo']
          ].map(([label, value]) => (
            <label key={label} className="space-y-1">
              <span className="font-bold text-zinc-500">{label}</span>
              <input defaultValue={value} className="w-full rounded-lg border border-zinc-200 p-2 font-semibold" />
            </label>
          ))}
          <div className="col-span-2 flex justify-end gap-2 pt-4 border-t border-zinc-100">
            <button onClick={() => setCreateOpen(false)} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
            <button onClick={() => setCreateOpen(false)} className="px-5 py-2 rounded-lg bg-zinc-900 text-white font-bold">Create & Assign</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
