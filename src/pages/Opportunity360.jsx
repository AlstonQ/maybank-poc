import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockOpportunities, mockCustomersGGB } from '../data/mockData';
import { 
  ArrowLeft, Calendar, FileText, HelpCircle, PhoneCall, Play, Sparkles, 
  User, CheckCircle2, History, ChevronRight, MessageSquare 
} from 'lucide-react';

export default function Opportunity360({ id, onBack }) {
  const { appMode } = useTheme();
  const [notice, setNotice] = useState('');
  const runAction = (label) => {
    setNotice(`${label} logged against ${currentOpp.id}.`);
    setTimeout(() => setNotice(''), 2500);
  };
  
  const corporateOpps = mockCustomersGGB.flatMap(cust => 
    cust.dealPipeline.map(deal => ({
      id: deal.id,
      name: deal.name,
      customerName: cust.name,
      mobileMasked: cust.brn,
      emailMasked: "Maybank Corporate Labuan",
      product: deal.name,
      probability: deal.probability,
      value: deal.value,
      statusCode: deal.stage === 'Credit Committee Approved' ? 'DOCS_PENDING' : 'IN_PROGRESS',
      stage: deal.stage,
      assignedTo: "James May",
      expectedClose: "31 Dec 2026",
      createdOn: cust.incorporationDate,
      activities: [
        `Originated green financing structural details for ${cust.name}.`,
        `Presented ESG compliance term sheets to Tan Sri Megat Chairman.`
      ],
      callLogs: [
        { date: "24 May 2026", duration: "25 mins", summary: "Discussed corporate governance covenants and board changes." }
      ]
    }))
  );

  const opportunitiesList = appMode === 'gcfs' ? mockOpportunities : corporateOpps;
  const currentOpp = opportunitiesList.find(o => o.id === id) || opportunitiesList[0];

  const stages = ["Prospecting", "Lead In Discussion", "Documentation", "Credit Structuring", "Won / Finalised"];

  return (
    <div className="space-y-6">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-brand transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Pipeline List</span>
      </button>

      {/* 1. Header Card Info */}
      <div className="bg-card-bg text-page-body p-6 rounded-3xl shadow-xl border border-card-border flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[9px] text-lime font-bold uppercase tracking-widest bg-zinc-900 border border-card-border px-3 py-1 rounded-full">
            Pipeline Detail
          </span>
          <h2 className="text-lg font-black mt-2 tracking-wide text-page-body">{currentOpp.name}</h2>
          <p className="text-[11px] text-zinc-400 font-semibold mt-1">
            Lead ID: {currentOpp.id} · Assigned Owner: <strong className="text-zinc-200">{currentOpp.assignedTo}</strong>
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-zinc-900/60 border border-card-border p-3 rounded-2xl text-center min-w-[100px]">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">Estimated Value</span>
            <span className="text-sm font-black text-lime mt-0.5 block">
              MYR {(currentOpp.value).toLocaleString()}
            </span>
          </div>
          <div className="bg-zinc-900/60 border border-card-border p-3 rounded-2xl text-center min-w-[100px]">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">Probability Ratio</span>
            <span className="text-sm font-black text-[#3DBFD4] mt-0.5 block">
              {currentOpp.probability}%
            </span>
          </div>
        </div>
      </div>

      {notice && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          {notice}
        </div>
      )}

      {/* 2. Visual Deal Progress Stage Pipeline */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
        <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider mb-4">
          Opportunity Lifecycle Stage
        </h3>
        
        <div className="grid grid-cols-5 gap-2 select-none">
          {stages.map((stg, idx) => {
            const isCompleted = idx < stages.indexOf(currentOpp.stage) || currentOpp.stage === "Stale / Review Needed";
            const isActive = stg === currentOpp.stage;

            return (
              <div 
                key={idx} 
                className={`p-3 rounded-xl border text-center transition-all ${
                  isActive 
                    ? 'border-brand bg-brand/5 shadow-sm scale-[1.02]' 
                    : isCompleted 
                      ? 'border-green-300 bg-green-50 text-green-700' 
                      : 'border-zinc-200 text-zinc-400 bg-zinc-50'
                }`}
              >
                <div className="text-[9px] font-black uppercase">Stage {idx + 1}</div>
                <h4 className="text-[10px] font-extrabold mt-1 truncate">{stg}</h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Deal details and timelines */}
        <div className="lg:col-span-2 space-y-6">
          {/* Detailed Info Cards */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <div className="pb-3 border-b border-zinc-100 mb-4 select-none">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider">
                Deal Parameters Info
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-zinc-600">
              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Target Product Campaign</span>
                <span className="text-zinc-850 font-extrabold mt-0.5 block">{currentOpp.product}</span>
              </div>
              
              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Expected Close horizon</span>
                <span className="text-zinc-850 font-extrabold mt-0.5 block">{currentOpp.expectedClose}</span>
              </div>

              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Client Name</span>
                <span className="text-zinc-850 font-extrabold mt-0.5 block">{currentOpp.customerName}</span>
              </div>

              <div>
                <span className="text-[9px] text-zinc-400 font-bold uppercase block">Created On</span>
                <span className="text-zinc-850 font-extrabold mt-0.5 block">{currentOpp.createdOn}</span>
              </div>
            </div>
          </div>

          {/* Activities log */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <div className="pb-3 border-b border-zinc-100 mb-4">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-4 h-4 text-zinc-400" />
                <span>Client Interaction Activities Trail</span>
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-zinc-600 font-medium">
              {currentOpp.activities?.map((act, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-zinc-50 pb-3 last:border-b-0">
                  <div className="w-2 h-2 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                  <p>{act}</p>
                </div>
              ))}
              {(!currentOpp.activities || currentOpp.activities.length === 0) && (
                <span className="text-zinc-400 font-semibold block">No activities logged yet.</span>
              )}
            </div>
          </div>
        </div>

        {/* Call Dial logs and Product Recommender */}
        <div className="space-y-6">
          {/* CTI phone call log */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <div className="pb-3 border-b border-zinc-100 mb-4 flex justify-between items-center">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-[#3DBFD4]" />
                <span>CTI Dialer call Logs</span>
              </h3>
              <span className="text-[9px] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="space-y-3.5">
              {currentOpp.callLogs?.map((log, idx) => (
                <div key={idx} className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  <div className="flex justify-between items-center text-[9px] font-extrabold text-zinc-400">
                    <span>Duration: {log.duration}</span>
                    <span>{log.date}</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 font-semibold mt-1.5">
                    {log.summary}
                  </p>
                </div>
              ))}
              {(!currentOpp.callLogs || currentOpp.callLogs.length === 0) && (
                <div className="text-center py-4">
                  <span className="text-[10px] text-zinc-400 font-bold block">No call history recorded.</span>
                  <button onClick={() => runAction('Outbound call memo')} className="h-7 px-3 bg-lime text-black font-extrabold text-[9px] uppercase tracking-wider rounded-xl mt-3 flex items-center gap-1 mx-auto">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Dial customer</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* AI Product Recommender */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
            <div className="pb-3 border-b border-zinc-100 flex items-center justify-between">
              <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand animate-pulse" />
                <span>AI Next Best Product</span>
              </h3>
            </div>

            <div className="p-3.5 bg-gradient-to-tr from-[#E6308A]/10 to-[#C6E84F]/10 border border-zinc-200 rounded-2xl">
              <span className="text-[9px] font-black text-brand uppercase block">Cross-sell match</span>
              <h4 className="text-xs font-extrabold text-zinc-800 mt-1">
                {appMode === 'gcfs' ? 'Maybank Premier i-Takaful protection' : 'Green syndicated Shariah Trade Credit Line'}
              </h4>
              <p className="text-[10px] text-zinc-500 font-semibold mt-1.5 leading-relaxed">
                {appMode === 'gcfs' 
                  ? "Matches the client's family legacy goal perfectly, offering high protection yields of 4.5% p.a."
                  : "Provides off-balance sheet export credit guarantee aligned with regional ESG trade compliance standards."}
              </p>
              <button onClick={() => runAction('Offer email and WhatsApp message')} className="h-7 px-3 bg-brand hover:bg-[#C92276] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-xl mt-3 flex items-center gap-1">
                <span>Send Offer Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
