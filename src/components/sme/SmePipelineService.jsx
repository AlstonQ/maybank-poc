import React from 'react';
import { Target, Clock, CheckCircle2, AlertCircle, Calendar, Phone, MessageSquare, Briefcase, FileText } from 'lucide-react';

const SmePipelineService = ({ customer }) => {
  if (!customer) return null;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
    }).format(val || 0);
  };

  const getStageColor = (stage) => {
    if (stage?.includes('Closed') || stage?.includes('Won')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (stage?.includes('Credit') || stage?.includes('Assessment')) return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-blue-50 text-blue-700 border-blue-200';
  };

  const getIconForInteraction = (type) => {
    if (type?.includes('Meeting') || type?.includes('Visit')) return <Calendar className="w-4 h-4" />;
    if (type?.includes('Call')) return <Phone className="w-4 h-4" />;
    if (type?.includes('Complaint')) return <AlertCircle className="w-4 h-4" />;
    if (type?.includes('Service')) return <FileText className="w-4 h-4" />;
    return <MessageSquare className="w-4 h-4" />;
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === 'Positive') return 'bg-emerald-100 text-emerald-700';
    if (sentiment === 'Negative') return 'bg-rose-100 text-rose-700';
    return 'bg-zinc-100 text-zinc-700';
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      
      {/* Opportunities / Sales Pipeline */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-zinc-200 flex justify-between items-center bg-zinc-50/50">
          <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" />
            Sales4U Pipeline
          </h3>
          <button className="text-xs font-medium bg-white text-zinc-700 px-3 py-1.5 rounded-md border border-zinc-200 hover:bg-zinc-50">
            + New Deal
          </button>
        </div>
        
        <div className="p-5 flex-1 flex flex-col gap-4">
          {customer.opportunities?.map((opp) => (
            <div key={opp.id} className="p-4 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-sm transition-all group">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-blue-700 transition-colors">{opp.name}</h4>
                  <div className="text-xs text-zinc-500 mt-0.5">{opp.product} • Owned by {opp.owner}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-zinc-900">{formatCurrency(opp.expectedValue)}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{opp.probability}% Prob.</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-zinc-100">
                <span className={`inline-flex px-2 py-1 rounded text-[11px] font-medium border ${getStageColor(opp.stage)}`}>
                  {opp.stage}
                </span>
                <div className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Due {opp.dueDate}
                </div>
              </div>
              <div className="mt-3 bg-zinc-50 p-2 rounded text-xs text-zinc-600 flex items-start gap-2">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400 mt-0.5" />
                <span className="flex-1"><strong>Next Step:</strong> {opp.nextAction}</span>
              </div>
            </div>
          ))}
          
          {(!customer.opportunities || customer.opportunities.length === 0) && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-zinc-200 rounded-xl">
              <Target className="w-8 h-8 text-zinc-300 mb-2" />
              <div className="text-sm font-medium text-zinc-900">No active opportunities</div>
              <div className="text-xs text-zinc-500 mt-1 max-w-xs">There are no open deals in the pipeline. Check the Insight Panel for next best offers.</div>
            </div>
          )}
        </div>
      </div>

      {/* Interactions & Cases */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-zinc-200 flex justify-between items-center bg-zinc-50/50">
          <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            Interactions & Cases Timeline
          </h3>
          <span className="text-xs font-medium text-zinc-500">
            Unified across Branch, M2U Biz, & CRM
          </span>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto max-h-[500px]">
          <div className="relative border-l-2 border-zinc-100 ml-3 space-y-6">
            {customer.interactions?.map((interaction, idx) => (
              <div key={interaction.id || idx} className="relative pl-6">
                <div className="absolute -left-[9px] top-1 bg-white p-0.5 rounded-full border-2 border-zinc-200">
                  <div className={`w-2.5 h-2.5 rounded-full ${interaction.type === 'Complaint' ? 'bg-rose-500' : 'bg-blue-500'}`} />
                </div>
                
                <div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-zinc-100 rounded-md text-zinc-600">
                        {getIconForInteraction(interaction.type)}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900">{interaction.subject}</div>
                        <div className="text-xs text-zinc-500">{interaction.type} via {interaction.channel}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-medium text-zinc-500">{interaction.date}</div>
                      <div className="mt-1 flex justify-end gap-1">
                        {interaction.status === 'Resolved' || interaction.status === 'Closed' ? (
                          <span className="inline-flex items-center text-[10px] font-bold text-emerald-600">
                            <CheckCircle2 className="w-3 h-3 mr-0.5" /> {interaction.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[10px] font-bold text-amber-600">
                            <Clock className="w-3 h-3 mr-0.5" /> {interaction.status}
                          </span>
                        )}
                        {interaction.sentiment && (
                          <span className={`inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold ${getSentimentColor(interaction.sentiment)}`}>
                            {interaction.sentiment}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-zinc-100 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase font-semibold">Owner</div>
                      <div className="text-xs text-zinc-700">{interaction.owner}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase font-semibold">Source</div>
                      <div className="text-xs text-zinc-700">{interaction.sourceSystem}</div>
                    </div>
                  </div>
                  {interaction.followUp && (
                    <div className="mt-2 bg-blue-50/50 p-2 rounded text-xs text-blue-800 border border-blue-100">
                      <strong>Follow Up:</strong> {interaction.followUp}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {(!customer.interactions || customer.interactions.length === 0) && (
              <div className="pl-6 text-center py-8">
                <div className="text-sm font-medium text-zinc-900">No recent interactions</div>
                <div className="text-xs text-zinc-500 mt-1">There is no recorded history for this customer in the last 12 months.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SmePipelineService;
