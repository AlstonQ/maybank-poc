import React from 'react';
import { FileText, Download, Lock, Eye, CheckCircle2, Clock } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

export default function WealthAccountsDocuments({ customer, role }) {
  if (!customer) return null;

  const docs = customer.statementsAndDocs || [];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
          <h3 className="font-bold text-zinc-900">Statements & Document Vault</h3>
          <span className="text-xs text-zinc-500">{docs.length} Documents</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-xs text-zinc-500 border-b border-zinc-200">
              <tr>
                <th className="px-5 py-3 font-semibold">Document Name</th>
                <th className="px-5 py-3 font-semibold">Account / Rel</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3 font-semibold">Date</th>
                <th className="px-5 py-3 font-semibold">Expiry</th>
                <th className="px-5 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {docs.map(doc => {
                const isRestricted = doc.confidential && !canViewSensitive(role);

                return (
                  <tr key={doc.id} className="hover:bg-zinc-50 transition-colors group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isRestricted ? 'bg-zinc-100 text-zinc-400' : 'bg-indigo-50 text-indigo-600'}`}>
                          {isRestricted ? <Lock className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className={`font-semibold ${isRestricted ? 'text-zinc-500' : 'text-zinc-900'}`}>
                            {isRestricted ? 'Confidential Document' : doc.type}
                          </div>
                          <div className="text-xs text-zinc-500 mt-0.5">Source: {isRestricted ? 'Restricted' : doc.source}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-zinc-600 font-mono text-xs">
                      {isRestricted ? '***' : doc.account}
                    </td>
                    <td className="px-5 py-4">
                      {doc.status === 'Available' || doc.status === 'Verified' || doc.status === 'Active' || doc.status === 'Valid' ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {doc.status}
                        </span>
                      ) : doc.status === 'Expired' ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-rose-600">
                          <Clock className="w-3.5 h-3.5" /> {doc.status}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-amber-600">{doc.status}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-zinc-600">{doc.date}</td>
                    <td className="px-5 py-4 text-zinc-600">{doc.expiry}</td>
                    <td className="px-5 py-4 text-right">
                      {isRestricted ? (
                        <span className="text-xs text-zinc-400 font-medium">Access Denied</span>
                      ) : (
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-zinc-400 hover:text-brand transition-colors" title="Preview">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-zinc-400 hover:text-brand transition-colors" title="Download">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {docs.length === 0 && (
            <div className="p-8 text-center text-zinc-500">
              No documents found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
