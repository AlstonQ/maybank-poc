import React from 'react';
import { Sparkles, ArrowRight, Lightbulb, UserCheck, MessageCircle, AlertCircle, Clock, Calendar, CheckSquare } from 'lucide-react';

const SmeRmIntelligencePanel = ({ customer }) => {
  if (!customer) return null;

  const { rmIntelligence, queueTicket } = customer;

  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 rounded-xl shadow-lg border border-blue-800 text-white overflow-hidden sticky top-6">
      <div className="p-5 border-b border-blue-800/50 flex items-center justify-between">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-300" />
          RM Intelligence
        </h3>
        <span className="text-[10px] font-medium bg-blue-800/50 px-2 py-0.5 rounded-full text-blue-200 border border-blue-700/50">
          Powered by Maybank AI
        </span>
      </div>

      <div className="p-5 space-y-6">
        
        {/* Next Best Action */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" /> Next Best Action
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/10 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-blue-50">
              {rmIntelligence?.nextBestAction || 'No recommendations at this time.'}
            </p>
            {rmIntelligence?.nextBestOffer && (
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-medium text-blue-200">Suggested Product:</span>
                <button className="text-xs font-semibold bg-white text-blue-900 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors flex items-center">
                  Pitch {rmIntelligence.nextBestOffer} <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Meeting Prep */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" /> Meeting Prep Brief
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/5 space-y-3">
            <p className="text-sm leading-relaxed text-blue-100">
              {rmIntelligence?.meetingPrep || 'Review latest cashflow trends before contacting.'}
            </p>
            
            {rmIntelligence?.suggestedQuestions?.length > 0 && (
              <div className="mt-3 space-y-2">
                <div className="text-[11px] text-blue-300 font-medium">Suggested talking points:</div>
                <ul className="space-y-2">
                  {rmIntelligence.suggestedQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-blue-100">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>"{q}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Live Queue Ticket */}
        {queueTicket && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Live Branch Queue
            </div>
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 border border-amber-500/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-white">Ticket {queueTicket.ticketNo}</span>
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase bg-amber-500 text-white px-2 py-0.5 rounded">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  {queueTicket.status}
                </span>
              </div>
              <div className="text-xs text-amber-200 mb-1">{queueTicket.branch} - {queueTicket.service}</div>
              {queueTicket.purpose && <div className="text-xs font-medium text-white">Purpose: {queueTicket.purpose}</div>}
              
              <button className="w-full mt-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded transition-colors border border-white/20">
                Acknowledge Arrival
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="pt-4 border-t border-blue-800/50 grid grid-cols-2 gap-2">
          <button className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-lg bg-blue-800/30 hover:bg-blue-800/50 border border-blue-700/50 transition-colors">
            <Calendar className="w-4 h-4 text-blue-300" />
            <span className="text-[10px] font-medium text-blue-100">Schedule</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-lg bg-blue-800/30 hover:bg-blue-800/50 border border-blue-700/50 transition-colors">
            <CheckSquare className="w-4 h-4 text-blue-300" />
            <span className="text-[10px] font-medium text-blue-100">Add Task</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SmeRmIntelligencePanel;
