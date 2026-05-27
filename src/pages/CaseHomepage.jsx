import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockCases, mockCasesGGB } from '../data/mockData';
import Case360 from './Case360';
import Modal from '../components/Modal';
import { 
  Search, SlidersHorizontal, AlertTriangle, AlertCircle, CheckCircle, 
  HelpCircle, ChevronRight, Filter, Download
} from 'lucide-react';

export default function CaseHomepage() {
  const { 
    appMode, selectedCaseId, setSelectedCaseId, searchQuery 
  } = useTheme();

  const [activeFilter, setActiveFilter] = useState('All');
  const [caseAction, setCaseAction] = useState(null);

  if (selectedCaseId) {
    return <Case360 id={selectedCaseId} onBack={() => setSelectedCaseId(null)} />;
  }

  const casesList = appMode === 'gcfs' ? mockCases : mockCasesGGB;

  // Filter Cases
  const filteredCases = casesList.filter(c => {
    const matchesSearch = c.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = activeFilter === 'All' || c.status === activeFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. Header Filters Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status filters */}
        <div className="flex gap-2 flex-wrap">
          {["All", "In Investigation", "Pending Documentation", "Escalated"].map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(st)}
              className={`h-7 px-3.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors ${
                activeFilter === st 
                  ? 'bg-[#E6308A] text-white' 
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Counts indicators and Export */}
        <div className="flex items-center gap-3">
          <div className="text-[10px] font-bold text-zinc-400 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-xl">
            {filteredCases.length} Complaints Logged
          </div>
          <button onClick={() => setCaseAction('export')} className="h-8 px-3 border border-zinc-200 rounded-xl text-[10px] font-bold text-zinc-600 flex items-center gap-1 hover:bg-zinc-50">
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 2. Tickets Table Listing */}
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200 text-[10px] text-zinc-400 font-black tracking-wider uppercase select-none">
                <th className="py-4 px-6">Ticket ID</th>
                <th className="py-4 px-6">Customer Name</th>
                <th className="py-4 px-6">Complaints Category</th>
                <th className="py-4 px-6">Source Channel</th>
                <th className="py-4 px-6 text-center">SLA Status</th>
                <th className="py-4 px-6 text-center">Regulatory Tag</th>
                <th className="py-4 px-6 text-right">Case Status</th>
              </tr>
            </thead>
            <tbody className="text-xs text-zinc-700 font-semibold divide-y divide-zinc-150">
              {filteredCases.map((c, idx) => {
                const isBreached = c.slaCountdownHours < 0;

                return (
                  <tr 
                    key={idx}
                    onClick={() => setSelectedCaseId(c.id)}
                    className="hover:bg-zinc-50/80 cursor-pointer transition-all"
                  >
                    <td className="py-4 px-6 text-zinc-500 font-bold">{c.id}</td>
                    <td className="py-4 px-6 font-extrabold text-zinc-800 hover:text-[#E6308A] transition-all">
                      {c.customerName}
                    </td>
                    <td className="py-4 px-6 text-zinc-600 max-w-[200px] truncate">{c.category}</td>
                    <td className="py-4 px-6 text-zinc-400">{c.channel}</td>
                    
                    {/* SLA countdown indicator with warning flags */}
                    <td className="py-4 px-6 text-center">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                        isBreached 
                          ? 'bg-red-50 text-red-500 border border-red-200' 
                          : c.slaCountdownHours < 12 
                            ? 'bg-amber-50 text-amber-600' 
                            : 'bg-green-50 text-green-600'
                      }`}>
                        {isBreached ? `BREACHED (${c.slaCountdownHours}h)` : `${c.slaCountdownHours} Hrs left`}
                      </span>
                    </td>

                    {/* Regulatory Escalations tags (MAS/FIDReC/CEM) */}
                    <td className="py-4 px-6 text-center">
                      <span className="text-[9px] font-black bg-[#E6308A]/10 text-[#E6308A] px-2 py-0.5 rounded-full">
                        {c.escalationTag}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <span className={`text-[10px] font-black ${
                        c.status === 'Escalated' ? 'text-red-500' : 'text-zinc-600'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredCases.length === 0 && (
          <div className="p-8 text-center text-xs text-zinc-400 font-medium select-none">
            No service request tickets found matching your query filters.
          </div>
        )}
      </div>

      <Modal
        isOpen={!!caseAction}
        onClose={() => setCaseAction(null)}
        title="Service Request Export"
        subtitle="Case management, SLA and routing"
        maxWidth="max-w-lg"
      >
        <div className="space-y-3 text-xs">
          {['Case-level CSV', 'Supervisor SLA aging PDF', 'Complaint raw data with masked CIF/IRN', 'Include export audit log'].map((item) => (
            <label key={item} className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg font-semibold">
              <input type="checkbox" defaultChecked />
              <span>{item}</span>
            </label>
          ))}
          <div className="flex justify-end gap-2 pt-4">
            <button onClick={() => setCaseAction(null)} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
            <button onClick={() => setCaseAction(null)} className="px-5 py-2 bg-zinc-900 text-white rounded-lg font-bold">Generate Export</button>
          </div>
        </div>
      </Modal>

    </div>
  );
}
