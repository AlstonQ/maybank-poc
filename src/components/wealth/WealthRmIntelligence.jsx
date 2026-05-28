import React from 'react';
import { Sparkles, ArrowRight, Clock, Target, AlertTriangle, ShieldAlert, MoreVertical } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

export default function WealthRmIntelligence({ customer, role }) {
  if (!customer) return null;

  const nbAs = customer.nba || [];
  
  return (
    <div className="w-[320px] shrink-0 border-l border-zinc-200 bg-zinc-50 flex flex-col h-screen sticky top-0 z-20">
      <div className="p-4 border-b border-zinc-200 bg-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand" />
          <h2 className="font-bold text-sm text-zinc-900">AI RM Intelligence</h2>
        </div>
        <MoreVertical className="w-4 h-4 text-zinc-400" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        <div>
          <h3 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-4">Next Best Action</h3>
          {nbAs.length === 0 ? (
            <div className="text-center p-6 text-zinc-500 text-sm font-medium">
              No active recommendations for this profile.
            </div>
          ) : (
            <div className="space-y-4">
              {nbAs.map((nba, idx) => {
                const isSensitive = nba.complaintSensitive && !canViewSensitive(role);
                if (isSensitive) return null;

                const isUrgent = nba.priority === 'Urgent';
                const borderColor = isUrgent ? 'border-rose-200' : 'border-emerald-200';
                const bgColor = isUrgent ? 'bg-rose-50' : 'bg-emerald-50';
                const iconColor = isUrgent ? 'text-rose-600' : 'text-emerald-600';

                return (
                  <div key={idx} className={`rounded-xl border ${borderColor} ${bgColor} overflow-hidden shadow-sm`}>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className={`w-4 h-4 ${iconColor}`} />
                          <h4 className={`text-xs font-black ${isUrgent ? 'text-rose-900' : 'text-emerald-900'}`}>
                            {nba.recommendation}
                          </h4>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isUrgent ? 'text-rose-400' : 'text-emerald-400'}`} />
                      </div>
                      <p className={`text-[10px] font-medium mb-3 leading-relaxed ${isUrgent ? 'text-rose-700' : 'text-emerald-700'}`}>
                        Recommend {nba.reason.toLowerCase()} based on market trend.
                      </p>
                      
                      <button className={`text-[10px] font-bold underline transition-colors ${isUrgent ? 'text-rose-600 hover:text-rose-800' : 'text-emerald-600 hover:text-emerald-800'}`}>
                        Learn more
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Predictive Alerts */}
        <div>
          <h3 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-4">Predictive Alerts</h3>
          <div className="rounded-xl border border-amber-200 bg-amber-50 overflow-hidden shadow-sm">
            <div className="p-4 relative">
              <div className="absolute right-4 top-4">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              </div>
              <div className="flex items-start gap-2 mb-2 pr-4">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                <h4 className="text-xs font-bold text-amber-900 leading-snug">
                  Customer likely to rebalance based on market trend
                </h4>
              </div>
              <button className="text-[10px] font-bold text-amber-700 hover:text-amber-900 transition-colors ml-6 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 mt-1">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Client Needs Insights */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">Client Needs Insights</h3>
          </div>
          <div className="space-y-3 bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                <Sparkles className="w-3 h-3 text-brand" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-800">Customer boost</h4>
                <p className="text-[9px] font-medium text-zinc-500">Recommend idar to balance...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                <Sparkles className="w-3 h-3 text-brand" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-800">User Needs</h4>
                <p className="text-[9px] font-medium text-zinc-500">Recommend real needs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                <Sparkles className="w-3 h-3 text-brand" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-800">Customer activity</h4>
                <p className="text-[9px] font-medium text-zinc-500">Upwards mbis...</p>
              </div>
            </div>
            <button className="w-full mt-3 py-1.5 text-[10px] font-bold text-zinc-600 bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-200 transition-colors shadow-sm">
              See more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Ensure ChevronRight is defined
function ChevronRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
