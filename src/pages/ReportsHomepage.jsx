import React, { useState } from 'react';
import { Search, Filter, Plus, FileText, Download, MoreVertical, Eye, Copy, Clock, Settings, FileBarChart2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockReports } from '../data/mockData';
import ReportBuilderWizard from './ReportBuilderWizard';
import ReportViewer from './ReportViewer';
import Modal from '../components/Modal';

export default function ReportsHomepage() {
  const { appMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All Reports');
  const [viewMode, setViewMode] = useState('list'); // list, builder, viewer
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [reportAction, setReportAction] = useState(null);
  
  if (viewMode === 'builder') {
    return <ReportBuilderWizard onCancel={() => setViewMode('list')} onSave={() => setViewMode('list')} />;
  }

  if (viewMode === 'viewer') {
    return <ReportViewer reportId={selectedReportId} onBack={() => setViewMode('list')} />;
  }

  const corporateReportsList = [
    { id: "REP-001", name: "Corporate Sector Exposure Report", description: "Comprehensive breakdown of group exposures, utilizing limits, and risk sectors.", category: "Exposure", owner: "James May", createdDate: "01 May 2026", status: "Active", type: "Real-time" },
    { id: "REP-002", name: "Syndicated Finance Deal Forecast", description: "Deal pipeline valuation, probability, and bookrunner stages for Q2 2026.", category: "Deals", owner: "James May", createdDate: "15 May 2026", status: "Active", type: "Real-time" },
    { id: "REP-003", name: "Key Covenant Compliance Tracker", description: "Daily list of corporate covenants, ESG mandates, and auditor disclosures.", category: "Risk", owner: "System", createdDate: "25 May 2026", status: "Active", type: "Scheduled" },
    { id: "REP-004", name: "SWIFT Trade Finance SLA Breaches", description: "Historical view of outward SWIFT and Letter of Credit holds breaching SLA.", category: "Support", owner: "Support Desk", createdDate: "20 May 2026", status: "Active", type: "Batch" }
  ];

  const enhancedReports = appMode === 'gcfs' 
    ? [
        ...mockReports,
        { id: "REP-005", name: "SME Pipeline Forecast", description: "Month-end forecast for Q2 2026 SME banking sector.", category: "Sales", owner: "Azlan Shah", createdDate: "26 May 2026", status: "Active", type: "Real-time" },
        { id: "REP-006", name: "Daily Sales Performance", description: "RM-level daily performance tracking vs target.", category: "Sales", owner: "James May", createdDate: "26 May 2026", status: "Active", type: "Scheduled" },
        { id: "REP-007", name: "Complaint Lifecycle Report", description: "End-to-end aging and resolution stages for Q1.", category: "Support", owner: "Support Desk", createdDate: "15 May 2026", status: "Active", type: "Batch" },
        { id: "REP-008", name: "Vulnerable Client List", description: "AI-flagged customers requiring enhanced due diligence.", category: "Risk", owner: "System", createdDate: "26 May 2026", status: "Draft", type: "Real-time" }
      ]
    : corporateReportsList;

  const filteredReports = enhancedReports.filter(report => 
    (report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeTab === 'All Reports' || (activeTab === 'Scheduled' && report.type === 'Scheduled') || (activeTab === 'My Reports' && report.owner === 'James May'))
  );

  return (
    <div className="space-y-6">
      {/* Top Tabs */}
      <div className="border-b border-zinc-200">
        <nav className="-mb-px flex space-x-8">
          {['All Reports', 'Scheduled', 'Templates', 'My Reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-brand text-brand'
                  : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search reports by name or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6308A]/20 focus:border-brand"
            />
          </div>
          <button onClick={() => setReportAction('filter')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-brand transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setViewMode('builder')}
            className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:bg-[#D42B7D] transition-colors shadow-sm shadow-[#E6308A]/20"
          >
            <Plus className="w-4 h-4" />
            Create Report
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-50/50 text-zinc-500 font-medium border-b border-zinc-100">
              <tr>
                <th className="px-6 py-4">Report Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Last Refreshed</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredReports.map((report) => (
                <tr 
                  key={report.id} 
                  className="hover:bg-zinc-50/50 transition-colors group cursor-pointer"
                  onClick={() => { setSelectedReportId(report.id); setViewMode('viewer'); }}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                        <FileBarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-brand transition-colors">
                          {report.name}
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5 truncate max-w-xs">{report.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      {report.type === 'Scheduled' ? <Clock className="w-3.5 h-3.5 text-amber-500" /> : <Settings className="w-3.5 h-3.5 text-indigo-500" />}
                      <span className="text-xs font-medium">{report.type || 'Real-time'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
                        {report.owner.charAt(0)}
                      </div>
                      {report.owner}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{report.createdDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      report.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' 
                        : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        className="p-1.5 text-zinc-400 hover:text-brand hover:bg-brand/10 rounded" 
                        title="View"
                        onClick={(e) => { e.stopPropagation(); setSelectedReportId(report.id); setViewMode('viewer'); }}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded" 
                        title="Export"
                        onClick={(e) => { e.stopPropagation(); setSelectedReportId(report.id); setReportAction('export'); }}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded" 
                        title="More"
                        onClick={(e) => { e.stopPropagation(); setSelectedReportId(report.id); setReportAction('more'); }}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredReports.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-zinc-500">
                    No reports found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={!!reportAction}
        onClose={() => setReportAction(null)}
        title={reportAction === 'filter' ? 'Report Filters' : reportAction === 'export' ? 'Export Report' : 'Report Actions'}
        subtitle={selectedReportId || 'All reports'}
        maxWidth="max-w-lg"
      >
        <div className="space-y-3 text-xs">
          {(reportAction === 'export'
            ? ['PDF executive pack', 'Excel workbook', 'CSV raw data with RBAC masking', 'PowerPoint chart pack']
            : ['Schedule delivery', 'Duplicate as template', 'Share with branch/team', 'View audit history']
          ).map((item) => (
            <button key={item} onClick={() => setReportAction(null)} className="w-full flex justify-between items-center p-3 bg-zinc-50 border border-zinc-200 rounded-lg font-bold hover:border-brand">
              <span>{item}</span>
              <span className="text-brand">Apply</span>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
