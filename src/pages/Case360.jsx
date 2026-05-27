import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockCases, mockCasesGGB } from '../data/mockData';
import { 
  ArrowLeft, AlertTriangle, Clock, HelpCircle, ShieldAlert,
  ClipboardList, CheckCircle2, History, Link, ArrowRight 
} from 'lucide-react';

export default function Case360({ id, onBack }) {
  const { appMode } = useTheme();
  
  const casesList = appMode === 'gcfs' ? mockCases : mockCasesGGB;
  const currentCase = casesList.find(c => c.id === id) || casesList[0];

  const isBreached = currentCase.slaCountdownHours < 0;

  return (
    <div className="space-y-6">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-brand transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Ticket Log</span>
      </button>

      {/* 1. Header Branded Info Banner */}
      <div className="bg-card-bg text-page-body p-6 rounded-3xl shadow-xl border border-card-border flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[9px] text-brand font-bold uppercase tracking-widest bg-zinc-900 border border-card-border px-3 py-1 rounded-full">
            CARE Complaint Docket
          </span>
          <h2 className="text-lg font-black mt-2 tracking-wide text-page-body">{currentCase.category}</h2>
          <p className="text-[11px] text-zinc-400 font-semibold mt-1">
            Ticket ID: {currentCase.id} · Client: <strong className="text-zinc-200">{currentCase.customerName}</strong>
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-zinc-900/60 border border-card-border p-3 rounded-2xl text-center min-w-[100px]">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">SLA Countdown</span>
            <span className={`text-sm font-black mt-0.5 block ${isBreached ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
              {isBreached ? `BREACHED` : `${currentCase.slaCountdownHours} Hrs`}
            </span>
          </div>
          <div className="bg-zinc-900/60 border border-card-border p-3 rounded-2xl text-center min-w-[100px]">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">Regulatory Esc</span>
            <span className="text-sm font-black text-brand mt-0.5 block">
              {currentCase.escalationTag}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Grid split content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Root Cause Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
            <div className="pb-3 border-b border-zinc-100 flex items-center justify-between">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider">
                CARE Investigation details
              </h3>
              <ShieldAlert className="w-4 h-4 text-red-500" />
            </div>

            <div className="text-xs font-semibold text-zinc-700 space-y-3">
              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Root Cause Analysis</span>
                <p className="text-zinc-800 mt-1 leading-relaxed">{currentCase.rootCause}</p>
              </div>

              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Planned Resolution Action</span>
                <p className="text-zinc-800 mt-1 leading-relaxed">{currentCase.resolutionPlan}</p>
              </div>

              <div className="flex gap-4 border-t border-zinc-50 pt-3">
                <div>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase block">Communication Channel</span>
                  <span className="text-zinc-800 mt-0.5 block">{currentCase.channel}</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase block">Linked System Requests</span>
                  <span className="text-zinc-800 mt-0.5 block flex items-center gap-1.5 text-[#3DBFD4]">
                    <Link className="w-3.5 h-3.5" />
                    <span>{currentCase.linkedSr}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Audit trail logs */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <div className="pb-3 border-b border-zinc-100 mb-4 select-none">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-4 h-4 text-zinc-400" />
                <span>Ticket Lifecycle Audit Trail</span>
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-zinc-600 font-medium">
              {currentCase.auditTrail?.map((trail, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-zinc-50 pb-3 last:border-b-0">
                  <div className="w-2 h-2 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                  <p>{trail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action guidelines */}
        <div className="space-y-6">
          {/* Regulatory Guideline advisory block */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
            <div className="pb-3 border-b border-zinc-100 flex items-center justify-between">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#F5A623]" />
                <span>Regulatory SLA Directive</span>
              </h3>
            </div>

            <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
              Under the **{currentCase.escalationTag}** regulatory classification, service delays affecting {appMode === 'gcfs' ? 'Premier wealth clients' : 'Global Banking corporate groups'} must be resolved within strict SLAs, or they will be logged in Bank Negara Malaysia's CARE database.
            </p>

            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl">
              <span className="text-[9px] font-black text-zinc-400 uppercase block">Next Mandatory step</span>
              <span className="text-[11px] font-extrabold text-zinc-800 mt-1 block">
                Flag to Group Executive Desk for auto-override.
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
