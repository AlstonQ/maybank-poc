import React, { useState } from 'react';
import { FileText, Download, Eye, Lock, ShieldCheck, CheckCircle2, Clock, Filter, AlertTriangle } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

const SmeDocumentVault = ({ customer, userRole }) => {
  if (!customer) return null;

  const [filter, setFilter] = useState('All');

  const getStatusColor = (status) => {
    if (status === 'Verified') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (status === 'Available') return 'bg-blue-50 text-blue-700 border-blue-200';
    if (status === 'Pending') return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-zinc-100 text-zinc-700 border-zinc-200';
  };

  const getStatusIcon = (status) => {
    if (status === 'Verified') return <ShieldCheck className="w-3 h-3 mr-1" />;
    if (status === 'Available') return <CheckCircle2 className="w-3 h-3 mr-1" />;
    if (status === 'Pending') return <Clock className="w-3 h-3 mr-1" />;
    return <FileText className="w-3 h-3 mr-1" />;
  };

  const filteredDocs = customer.statements?.filter(doc => {
    if (filter === 'All') return true;
    if (filter === 'Financials') return doc.type.includes('Financials') || doc.type.includes('Statement');
    if (filter === 'Corporate') return doc.type.includes('SSM') || doc.type.includes('Resolution');
    return true;
  }) || [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col h-[500px]">
      <div className="p-5 border-b border-zinc-200 flex justify-between items-center bg-zinc-50/50">
        <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600" />
          Document Vault
        </h3>
        
        <div className="flex gap-2">
          {['All', 'Financials', 'Corporate'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                filter === f 
                  ? 'bg-blue-50 text-blue-700 border-blue-200' 
                  : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-5">
        <div className="space-y-3">
          {filteredDocs.map((doc) => {
            const isConfidential = doc.visibility === 'Credit/Compliance Only';
            const hasAccess = !isConfidential || canViewSensitive(userRole);
            
            return (
              <div key={doc.id} className="p-4 rounded-xl border border-zinc-200 flex items-center justify-between hover:border-blue-300 transition-colors bg-white">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${hasAccess ? 'bg-blue-50 text-blue-600' : 'bg-zinc-100 text-zinc-400'}`}>
                    {hasAccess ? <FileText className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${hasAccess ? 'text-zinc-900' : 'text-zinc-500'}`}>
                      {doc.type}
                    </h4>
                    <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.source}</span>
                      {doc.accountMasked !== 'General' && (
                        <>
                          <span>•</span>
                          <span className="font-mono">{doc.accountMasked}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${getStatusColor(doc.status)}`}>
                    {getStatusIcon(doc.status)} {doc.status}
                  </span>
                  
                  {hasAccess ? (
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Preview">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 flex items-center">
                      <Lock className="w-3 h-3 mr-1" /> Restricted Access
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {filteredDocs.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
              <div className="text-sm font-medium text-zinc-900">No documents found</div>
              <div className="text-xs text-zinc-500 mt-1">Try changing the filter or request missing documents from the customer.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmeDocumentVault;
