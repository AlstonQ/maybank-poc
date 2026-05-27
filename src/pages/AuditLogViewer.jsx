import React, { useState } from 'react';
import { Shield, Search, Filter, Download, Activity, FileText, UserCheck, AlertTriangle } from 'lucide-react';

export default function AuditLogViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [notice, setNotice] = useState('');
  const runAction = (label) => {
    setNotice(`${label} completed with immutable audit evidence.`);
    setTimeout(() => setNotice(''), 2500);
  };

  // Mock Audit Log Data
  const auditLogs = [
    { id: 'LOG-88291', time: 'Today, 10:45 AM', user: 'James May', role: 'Executive', action: 'Data Masking Toggled', details: 'Disabled PII masking globally', ip: '10.24.1.55', status: 'Warning', type: 'Security' },
    { id: 'LOG-88290', time: 'Today, 10:15 AM', user: 'Azlan Shah', role: 'Branch Manager', action: 'Report Exported', details: 'Exported "Sales Pipeline Forecast" (PDF)', ip: '10.24.2.11', status: 'Success', type: 'Export' },
    { id: 'LOG-88289', time: 'Today, 09:30 AM', user: 'System', role: 'Automated', action: 'Maker-Checker Approved', details: 'Approved limit override for CIF-9921', ip: 'Internal', status: 'Success', type: 'Workflow' },
    { id: 'LOG-88288', time: 'Yesterday, 04:20 PM', user: 'Sarah Tan', role: 'Agent / RM', action: 'Record Viewed', details: 'Accessed Sensitive Profile: Tengku Adnan', ip: '10.24.5.99', status: 'Success', type: 'Access' },
    { id: 'LOG-88287', time: 'Yesterday, 02:10 PM', user: 'John Doe', role: 'Unknown', action: 'Failed Login', details: 'Invalid credentials (3 attempts)', ip: '192.168.1.4', status: 'Failed', type: 'Security' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-zinc-900">Security & Audit Logs</h1>
            <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded font-medium flex items-center gap-1">
              <Shield className="w-3 h-3" /> Immutable
            </span>
          </div>
          <p className="text-sm text-zinc-500">System-wide ledger of user activity, exports, and maker-checker approvals</p>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => runAction('Compliance export')} className="flex items-center gap-2 px-4 py-2 bg-card-bg text-page-body rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export Compliance Report
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by user, action, or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6308A]/20 focus:border-brand"
            />
          </div>
          <button onClick={() => runAction('Audit filter')} className="flex items-center gap-2 px-3 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      {notice && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          {notice}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-50/50 text-zinc-500 font-medium border-b border-zinc-100">
              <tr>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">User Identity</th>
                <th className="px-6 py-4">Event Action</th>
                <th className="px-6 py-4">Details</th>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-4 text-zinc-600 whitespace-nowrap">
                    <span className="font-medium">{log.time}</span>
                    <span className="block text-[10px] text-zinc-400 mt-0.5">{log.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
                        {log.user.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900">{log.user}</div>
                        <div className="text-[10px] text-zinc-500">{log.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 font-medium text-zinc-800">
                      {log.type === 'Security' && <Shield className="w-3.5 h-3.5 text-rose-500" />}
                      {log.type === 'Export' && <FileText className="w-3.5 h-3.5 text-indigo-500" />}
                      {log.type === 'Workflow' && <UserCheck className="w-3.5 h-3.5 text-emerald-500" />}
                      {log.type === 'Access' && <Activity className="w-3.5 h-3.5 text-sky-500" />}
                      {log.action}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-600 text-xs">{log.details}</td>
                  <td className="px-6 py-4 text-zinc-500 font-mono text-[10px]">{log.ip}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      log.status === 'Success' ? 'bg-emerald-50 text-emerald-700' :
                      log.status === 'Warning' ? 'bg-amber-50 text-amber-700' :
                      'bg-rose-50 text-rose-700'
                    }`}>
                      {log.status === 'Warning' && <AlertTriangle className="w-3 h-3" />}
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
