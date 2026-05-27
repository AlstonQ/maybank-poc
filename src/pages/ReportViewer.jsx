import React, { useState } from 'react';
import { ArrowLeft, Download, Filter, Settings, Share2, Printer, Search } from 'lucide-react';

export default function ReportViewer({ onBack, reportId }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [notice, setNotice] = useState('');
  const runAction = (label) => {
    setNotice(`${label} completed. Audit log entry created for ${reportId || 'REP-005'}.`);
    setTimeout(() => setNotice(''), 2500);
  };
  
  // Hardcoded mock data for the viewer demonstration
  const columns = ['Opportunity ID', 'Client Name', 'Stage', 'Product', 'Value (MYR)', 'Probability', 'Expected Close'];
  const data = [
    { id: 'OPP-101', client: 'Tengku Adnan', stage: 'Credit Structuring', product: 'Private Wealth', value: '1,800,000', prob: '80%', close: '30 Jun 2026' },
    { id: 'OPP-102', client: 'Datin Nurul', stage: 'Documentation', product: 'Etiqa Takaful', value: '500,000', prob: '95%', close: '10 Jun 2026' },
    { id: 'OPP-103', client: 'Sime Darby', stage: 'Credit Approved', product: 'ESG Linked Loan', value: '350,000,000', prob: '90%', close: '15 Aug 2026' },
    { id: 'OPP-104', client: 'Petronas Trading', stage: 'Structuring', product: 'Syndicated Takaful', value: '850,000,000', prob: '80%', close: '01 Nov 2026' },
    { id: 'OPP-105', client: 'Dr. Rajesh Kumar', stage: 'Prospecting', product: 'Equipment Financing', value: '1,200,000', prob: '50%', close: '15 Jul 2026' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-zinc-900">Sales Pipeline Forecast Q2</h1>
              <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded font-medium">
                Confidential
              </span>
            </div>
            <p className="text-sm text-zinc-500">Report ID: {reportId || 'REP-005'} • Generated: {new Date().toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => runAction('Report settings opened')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Settings">
            <Settings className="w-4 h-4" />
          </button>
          <button onClick={() => runAction('Print package prepared')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Print">
            <Printer className="w-4 h-4" />
          </button>
          <button onClick={() => runAction('Share link generated')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Share">
            <Share2 className="w-4 h-4" />
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-white rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              Export Options
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-zinc-200 shadow-xl rounded-lg py-1 z-10 hidden group-hover:block">
              {['PDF', 'Excel (XLSX)', 'CSV', 'PowerPoint'].map(format => (
                <button key={format} onClick={() => runAction(`Export as ${format}`)} className="w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Export as {format}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {notice && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          {notice}
        </div>
      )}

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search within report..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6308A]/20 focus:border-[#E6308A]"
            />
          </div>
          <button onClick={() => runAction('Filter applied')} className="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50">
            <Filter className="w-4 h-4" /> Add Filter
          </button>
        </div>
        <div className="text-sm text-zinc-500">
          Showing {data.length} records
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-zinc-50/50 text-zinc-600 font-semibold border-b border-zinc-100">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} className="px-6 py-4">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-3 font-medium text-indigo-600">{row.id}</td>
                  <td className="px-6 py-3 text-zinc-900">{row.client}</td>
                  <td className="px-6 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                      {row.stage}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-zinc-500">{row.product}</td>
                  <td className="px-6 py-3 text-zinc-900 font-medium text-right">{row.value}</td>
                  <td className="px-6 py-3 text-zinc-500 text-center">{row.prob}</td>
                  <td className="px-6 py-3 text-zinc-500">{row.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer / Pagination */}
      <div className="flex items-center justify-between text-sm text-zinc-500 px-2">
        <div>Rows 1-5 of 124</div>
        <div className="flex items-center gap-2">
          <button onClick={() => runAction('Previous page loaded')} className="px-3 py-1 border border-zinc-200 rounded hover:bg-zinc-50 disabled:opacity-50">Previous</button>
          <button onClick={() => runAction('Next page loaded')} className="px-3 py-1 border border-zinc-200 rounded hover:bg-zinc-50">Next</button>
        </div>
      </div>
    </div>
  );
}
