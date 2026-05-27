import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockOpportunities, mockCustomersGGB } from '../data/mockData';
import Opportunity360 from './Opportunity360';
import Modal from '../components/Modal';
import { 
  TrendingUp, TrendingDown, Search, Download, Settings, Columns,
  PlusCircle, Grid, List, ChevronRight, SlidersHorizontal, CheckSquare
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function OpportunityHomepage() {
  const { 
    appMode, selectedOpportunityId, setSelectedOpportunityId, searchQuery, cardLayout 
  } = useTheme();

  const [leadFilter, setLeadFilter] = useState('All');
  const [activeLetter, setActiveLetter] = useState('All');
  const [actionModal, setActionModal] = useState(null);

  if (selectedOpportunityId) {
    return <Opportunity360 id={selectedOpportunityId} onBack={() => setSelectedOpportunityId(null)} />;
  }

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
      stage: deal.stage
    }))
  );

  const opportunitiesList = appMode === 'gcfs' ? mockOpportunities : corporateOpps;

  // Filter Opportunities
  const filteredOpps = opportunitiesList.filter(opp => {
    const matchesSearch = opp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.product.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLetter = activeLetter === 'All' || opp.customerName.toUpperCase().startsWith(activeLetter);
    const matchesStatus = leadFilter === 'All' || opp.statusCode === leadFilter;

    return matchesSearch && matchesLetter && matchesStatus;
  });

  // KPI Tile Values
  const kpis = [
    { title: "Total Leads Value", value: "MYR 5.50M", delta: "▲ 12.8%", positive: true },
    { title: "Converted Deals", value: "2 Active", delta: "▲ 40.0%", positive: true },
    { title: "Sanctioned Credit", value: "MYR 1.80M", delta: "▲ 5.5%", positive: true },
    { title: "Stale Leads Warning", value: "1 Lead", delta: "▼ 10.0%", positive: false },
    { title: "Number of Leads", value: "4 Leads", delta: "▲ 8.2%", positive: true },
    { title: "Rejected Pipelines", value: "0 Cases", delta: "— 0.0%", positive: true }
  ];

  const ggbKpis = [
    { title: "Total Deals Value", value: "MYR 1.32B", delta: "▲ 24.5%", positive: true },
    { title: "Active Syndicates", value: "3 Deals", delta: "▲ 50.0%", positive: true },
    { title: "Underwritten Credit", value: "MYR 980M", delta: "▲ 18.2%", positive: true },
    { title: "ESG Covenant Warning", value: "1 Warning", delta: "▼ 5.0%", positive: false },
    { title: "Mandated Volume", value: "3 Structures", delta: "▲ 15.0%", positive: true },
    { title: "Dropped Mandates", value: "0 Mandates", delta: "— 0.0%", positive: true }
  ];

  const activeKpis = appMode === 'gcfs' ? kpis : ggbKpis;

  // Pipeline funnel steps
  const funnelSteps = [
    { name: "New Leads / Inquire", count: 8, pct: 100, color: '#3DBFD4' },
    { name: "Docs Needed / Review", count: 5, pct: 62.5, color: '#F5A623' },
    { name: "Sanctioned / Credit Approve", count: 3, pct: 37.5, color: '#E6308A' },
    { name: "Won / Finalised", count: 2, pct: 25, color: '#2F4FE0' }
  ];

  const ggbFunnelSteps = [
    { name: "Deal Origination & Mandate", count: 5, pct: 100, color: '#3DBFD4' },
    { name: "Underwriting & Credit Committee", count: 3, pct: 60, color: '#F5A623' },
    { name: "Structuring & Syndication", count: 2, pct: 40, color: '#E6308A' },
    { name: "Mandate Signed / Bookrunner Closed", count: 1, pct: 20, color: '#2F4FE0' }
  ];

  const activeFunnelSteps = appMode === 'gcfs' ? funnelSteps : ggbFunnelSteps;

  // Source-wise leads bar chart data
  const sourceWiseData = [
    { source: 'Mae App', count: 5 },
    { source: 'Branch Walk-in', count: 3 },
    { source: 'RM Referral', count: 2 },
    { source: 'Etiqa Campaign', count: 1 }
  ];

  const ggbSourceWiseData = [
    { source: 'Desk Referral', count: 4 },
    { source: 'Bilateral Inquiry', count: 2 },
    { source: 'Bidding / RFP', count: 2 },
    { source: 'Green Mandate Desk', count: 1 }
  ];

  const activeSourceWiseData = appMode === 'gcfs' ? sourceWiseData : ggbSourceWiseData;

  // A-Z Alphabet bar
  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')];

  return (
    <div className="space-y-6">
      
      {/* 1. Six KPI Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {activeKpis.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-wider leading-tight">
              {kpi.title}
            </span>
            <div className="mt-2.5">
              <h4 className="text-sm font-black text-zinc-800 tracking-wide">{kpi.value}</h4>
              <span className={`text-[9px] font-extrabold flex items-center mt-1 ${
                kpi.positive ? 'text-green-600' : 'text-red-500'
              }`}>
                {kpi.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Visualizations Row: Funnel + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pipeline Funnel Analysis */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[300px]">
          <div className="pb-3 border-b border-zinc-100 select-none">
            <h3 className="text-xs font-black text-brand tracking-wider uppercase">
              Lead Pipeline Analysis Funnel
            </h3>
          </div>

          <div className="space-y-3 mt-4">
            {activeFunnelSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center h-10 px-4 rounded-xl overflow-hidden text-xs font-bold">
                {/* Background block bar representing funnel volume */}
                <div 
                  className="absolute inset-y-0 left-0 opacity-15" 
                  style={{ width: `${step.pct}%`, backgroundColor: step.color }} 
                />
                {/* Left indicator solid pill */}
                <div className="w-1.5 h-6 rounded-full mr-3" style={{ backgroundColor: step.color }} />
                
                <div className="flex-1 flex justify-between relative z-10 text-zinc-800">
                  <span>{step.name}</span>
                  <span className="font-black text-zinc-900">{step.count} ({step.pct}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source-wise leads bar chart */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[300px]">
          <div className="pb-3 border-b border-zinc-100 select-none">
            <h3 className="text-xs font-black text-brand tracking-wider uppercase">
              Source-Wise Leads Analysis
            </h3>
          </div>

          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activeSourceWiseData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="source" tick={{ fontSize: 9 }} />
                <YAxis tick={{ fontSize: 9 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#3DBFD4" radius={[6, 6, 0, 0]}>
                  {activeSourceWiseData.map((entry, index) => (
                    <Bar dataKey="count" fill={index % 2 === 0 ? '#E6308A' : '#3DBFD4'} key={index} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. Filter Actions toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 space-y-4">
        {/* Buttons: Add View / Export / Column options */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-100">
          <div className="flex gap-2">
            <button onClick={() => setActionModal('lead')} className="h-8 px-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow">
              <PlusCircle className="w-3.5 h-3.5 text-lime" />
              <span>{appMode === 'gcfs' ? 'Add Lead' : 'Originate Deal'}</span>
            </button>
            <button onClick={() => setActionModal('view')} className="h-8 px-3.5 border border-zinc-200 hover:bg-zinc-50 rounded-xl text-[10px] font-extrabold uppercase text-zinc-600 tracking-wider">
              Manage View
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setActionModal('export')} className="h-8 px-3 border border-zinc-200 rounded-xl text-[10px] font-bold text-zinc-600 flex items-center gap-1 hover:bg-zinc-50">
              <Download className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>
            <button onClick={() => setActionModal('columns')} className="h-8 px-3 border border-zinc-200 rounded-xl text-[10px] font-bold text-zinc-600 flex items-center gap-1 hover:bg-zinc-50">
              <Columns className="w-3.5 h-3.5" />
              <span>Column Option</span>
            </button>
          </div>
        </div>

        {/* Alphabet A-Z Bar navigator */}
        <div className="overflow-x-auto custom-scrollbar whitespace-nowrap py-1">
          <div className="flex items-center gap-1">
            {alphabet.map((letter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLetter(letter)}
                className={`w-6 h-6 rounded-lg text-[9px] font-extrabold flex items-center justify-center transition-all ${
                  activeLetter === letter 
                    ? 'bg-brand text-white shadow-sm' 
                    : 'hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Opportunity Listing Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200 text-[10px] text-zinc-400 font-black tracking-wider uppercase select-none">
                <th className="py-4 px-6">{appMode === 'gcfs' ? 'Lead ID' : 'Deal ID'}</th>
                <th className="py-4 px-6">{appMode === 'gcfs' ? 'Client Name' : 'Company Name'}</th>
                <th className="py-4 px-6">{appMode === 'gcfs' ? 'Mobile (Masked)' : 'BRN (Reg ID)'}</th>
                <th className="py-4 px-6">{appMode === 'gcfs' ? 'Email (Masked)' : 'Booking Hub'}</th>
                <th className="py-4 px-6">{appMode === 'gcfs' ? 'Product / Campaign' : 'Structured Facility'}</th>
                <th className="py-4 px-6 text-right">Probability</th>
                <th className="py-4 px-6 text-right">{appMode === 'gcfs' ? 'Lead Value' : 'Facility Value'}</th>
              </tr>
            </thead>
            <tbody className="text-xs text-zinc-700 font-semibold divide-y divide-zinc-150">
              {filteredOpps.map((opp, idx) => (
                <tr 
                  key={idx}
                  onClick={() => setSelectedOpportunityId(opp.id)}
                  className="hover:bg-zinc-50/80 cursor-pointer transition-all"
                >
                  <td className="py-4 px-6 text-zinc-500 font-bold">{opp.id}</td>
                  <td className="py-4 px-6 font-extrabold text-zinc-800 hover:text-brand transition-all">
                    {opp.customerName}
                  </td>
                  <td className="py-4 px-6 text-zinc-400">{opp.mobileMasked}</td>
                  <td className="py-4 px-6 text-zinc-400">{opp.emailMasked}</td>
                  <td className="py-4 px-6">
                    <span className="text-[10px] font-extrabold uppercase text-brand bg-brand/10 px-2.5 py-0.5 rounded-full inline-block">
                      {opp.product}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-black text-[#3DBFD4]">{opp.probability}%</td>
                  <td className="py-4 px-6 text-right text-zinc-900 font-black">
                    MYR {(opp.value).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOpps.length === 0 && (
          <div className="p-8 text-center text-xs text-zinc-400 font-medium select-none">
            No matching leads or opportunities found under this filter query.
          </div>
        )}
      </div>

      <Modal
        isOpen={!!actionModal}
        onClose={() => setActionModal(null)}
        title={
          actionModal === 'lead' ? 'Lead Capture & Assignment' :
          actionModal === 'view' ? 'Manage Pipeline View' :
          actionModal === 'columns' ? 'Column Configuration' : 'Export Pipeline'
        }
        subtitle="Opportunity and pipeline management"
        maxWidth="max-w-xl"
      >
        <div className="space-y-4 text-xs">
          {actionModal === 'lead' && (
            <div className="grid grid-cols-2 gap-3">
              {['Customer name', 'Lead source', 'Product interest', 'Assigned RM', 'Expected value', 'Next appointment'].map((field) => (
                <label key={field} className="space-y-1">
                  <span className="font-bold text-zinc-500">{field}</span>
                  <input className="w-full rounded-lg border border-zinc-200 p-2" defaultValue={field === 'Assigned RM' ? 'James May' : ''} />
                </label>
              ))}
            </div>
          )}
          {actionModal !== 'lead' && (
            <div className="grid grid-cols-1 gap-2">
              {['Save as RM view', 'Include source of lead', 'Include stage aging', 'Respect RBAC and masked fields', 'Schedule/export audit entry'].map((item) => (
                <label key={item} className="flex items-center gap-2 p-3 rounded-lg bg-zinc-50 border border-zinc-200 font-semibold">
                  <input type="checkbox" defaultChecked />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
          <div className="flex justify-end gap-2 pt-4 border-t border-zinc-100">
            <button onClick={() => setActionModal(null)} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
            <button onClick={() => setActionModal(null)} className="px-5 py-2 rounded-lg bg-brand text-white font-bold">Apply</button>
          </div>
        </div>
      </Modal>

    </div>
  );
}
