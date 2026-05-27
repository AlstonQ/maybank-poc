import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { maskPII } from '../utils/securityUtils';
import { mockCustomersGCFS, mockCustomersGGB, mockOpportunities, mockCases } from '../data/mockData';
import { 
  ArrowLeft, Edit3, Award, TrendingUp, HelpCircle, ShieldAlert, Sparkles,
  BookOpen, Compass, ClipboardList, Lock, FileText, CheckSquare, 
  MapPin, Phone, Mail, FileCheck, CheckCircle2, AlertTriangle, AlertCircle, HelpCircle as HelpIcon
} from 'lucide-react';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, 
  Tooltip, Legend, BarChart, Bar, CartesianGrid 
} from 'recharts';
import SuitabilityAssessmentDrawer from '../components/drawers/SuitabilityAssessmentDrawer';
import FinancialApplicationPlanDrawer from '../components/drawers/FinancialApplicationPlanDrawer';
import { 
  EditProfileDrawer, GenerateProposalDrawer, CrossSellDrawer, 
  ReKycModal, RetentionPlaybookModal, CkycPanel, KnowledgeDrawer, GenericActionDrawer
} from '../components/drawers/Customer360Modals';

export default function Customer360({ id, onBack }) {
  const { appMode, shariahCompliant, setShariahCompliant, isDataMaskingEnabled, currentUserRole } = useTheme();
  
  // Find customer based on appMode
  const customers = appMode === 'gcfs' ? mockCustomersGCFS : mockCustomersGGB;
  const currentCustomer = customers.find(c => c.id === id) || customers[0];

  // GCFS Wealth Tabs
  const gcfsTabs = [
    "Overview", "Relationship & Holdings", "Wealth & Portfolio", 
    "Suitability & Risk", "Financial Planning", "Engagement & Service", "KYC & Compliance"
  ];

  // GGB Corporate Tabs
  const ggbTabs = [
    "Group Profile & Hierarchy", "Relationship & Exposure", "Deal Pipeline", 
    "Transactions & GM/FI", "Risk & News", "Term Sheets"
  ];

  const tabs = appMode === 'gcfs' ? gcfsTabs : ggbTabs;
  const [activeSubTab, setActiveSubTab] = useState(tabs[0]);
  const [recommendationFilter, setRecommendationFilter] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  // filter holdings based on Conventional/Islamic Toggle
  const holdingsToRender = currentCustomer.holdings?.filter(h => {
    if (shariahCompliant) return h.islamic === true;
    return true;
  }) || [];

  // filter planning goals based on Conventional/Islamic Toggle
  const goalsToRender = currentCustomer.financialPlanning?.goals?.filter(g => {
    if (shariahCompliant) return g.type === 'islamic';
    return true;
  }) || [];

  // Charts Mock Data
  const assetAllocationData = [
    { name: 'Deposits', value: 35, color: '#3DBFD4' },
    { name: 'Investments', value: 45, color: '#E6308A' },
    { name: 'Takaful/Etiqa', value: 20, color: '#F5A623' }
  ];

  const performanceData = [
    { month: 'Jan', Portfolio: 100, Benchmark: 100 },
    { month: 'Feb', Portfolio: 104, Benchmark: 102 },
    { month: 'Mar', Portfolio: 108, Benchmark: 103 },
    { month: 'Apr', Portfolio: 112, Benchmark: 105 },
    { month: 'May', Portfolio: 115, Benchmark: 106 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Back to List row */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-brand transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to {appMode === 'gcfs' ? 'Customer List' : 'Account Registry'}</span>
      </button>

      {/* 1. Global Info Strip */}
      <div className="bg-card-bg text-page-body p-5 rounded-3xl shadow-lg border border-card-border grid grid-cols-2 md:grid-cols-6 gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        <div className="pt-2 md:pt-0">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">Customer ID</span>
          <span className="text-xs font-black text-lime mt-1 block">{currentCustomer.id}</span>
        </div>
        <div className="pt-2 md:pt-0 md:pl-4">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">Full Name</span>
          <span className="text-xs font-black truncate block mt-1">{currentCustomer.name}</span>
        </div>
        <div className="pt-2 md:pt-0 md:pl-4">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">Segment</span>
          <span className="text-xs font-black text-brand mt-1 block">{currentCustomer.segment}</span>
        </div>
        <div className="pt-2 md:pt-0 md:pl-4">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">CIF Code</span>
          <span className="text-xs font-black mt-1 block">{maskPII(currentCustomer.cif || "CIF-GGB-02", 'cif', isDataMaskingEnabled)}</span>
        </div>
        <div className="pt-2 md:pt-0 md:pl-4">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">Customer Since</span>
          <span className="text-xs font-black text-[#3DBFD4] mt-1 block">{currentCustomer.customerSince || currentCustomer.incorporationDate}</span>
        </div>
        <div className="pt-2 md:pt-0 md:pl-4">
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">UCIC ID</span>
          <span className="text-xs font-black mt-1 block">{currentCustomer.ucic || currentCustomer.brn}</span>
        </div>
      </div>

      {/* 2. Primary Detail Tabs with Islamic Shariah Toggle */}
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Navigation Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubTab(tab)}
              className={`h-8 px-4 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${
                activeSubTab === tab 
                  ? 'bg-zinc-900 text-white' 
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Conventional / Islamic Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Shariah Filter
          </span>
          <label className="relative inline-flex items-center cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={shariahCompliant}
              onChange={(e) => setShariahCompliant(e.target.checked)}
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:height-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            <span className="ml-2 text-xs font-extrabold text-zinc-700 uppercase">
              {shariahCompliant ? 'Islamic Only' : 'Conventional'}
            </span>
          </label>
        </div>
      </div>

      {/* 3. Render Subtab Content */}
      <div className="min-h-[400px]">
        {appMode === 'gcfs' ? (
          // ================= RETAIL (GCFS) CONTENT =================
          <>
            {/* OVERVIEW SUBTAB */}
            {activeSubTab === "Overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Col 1: Customer Information Card */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-brand tracking-wider uppercase">
                      Customer Profile Info
                    </h3>
                    <Edit3 onClick={() => setActiveModal('editProfile')} className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-brand" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-100">
                      <img src={currentCustomer.photoUrl} alt={currentCustomer.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 leading-snug">{currentCustomer.name}</h4>
                      <span className="text-[10px] text-brand font-extrabold uppercase bg-brand/10 px-2.5 py-0.5 rounded-full inline-block mt-1">
                        {currentCustomer.segment}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-zinc-600 font-semibold space-y-2.5 pt-2">
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Preferred Language</span>
                      <span>{currentCustomer.preferredLanguage}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Mobile Phone</span>
                      <span>{maskPII(currentCustomer.mobile, 'phone', isDataMaskingEnabled)}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">NRIC / ID Number</span>
                      <span>{maskPII(currentCustomer.nric, 'nric', isDataMaskingEnabled)}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Occupation</span>
                      <span>{currentCustomer.occupation}</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span className="text-zinc-400">Best Time to Call</span>
                      <span className="text-green-600 font-extrabold">{currentCustomer.bestTimeToCall}</span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Churn & Retention & Recommendations */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-brand tracking-wider uppercase">
                        Churn Advisory Hub
                      </h3>
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    </div>

                    <div className="mt-4 flex items-center justify-between bg-red-550/10 border border-red-200/50 p-3 rounded-2xl">
                      <div>
                        <span className="text-[9px] text-red-600 font-extrabold uppercase tracking-wide block">
                          Avaloq System Outflow Warning
                        </span>
                        <span className="text-xs font-bold text-zinc-800 mt-1 block">
                          {currentCustomer.churnValueBanner}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent animate-spin flex items-center justify-center font-bold text-xs text-red-600">
                        {currentCustomer.churnRisk}
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">
                        👍 POSITIVE FACTORS
                      </span>
                      <ul className="list-disc pl-4 text-[10px] text-zinc-600 font-semibold space-y-1">
                        {currentCustomer.positiveFactors.map((f, idx) => <li key={idx}>{f}</li>)}
                      </ul>
                    </div>

                    <div className="mt-4 space-y-2">
                      <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">
                        👎 NEGATIVE FACTORS
                      </span>
                      <ul className="list-disc pl-4 text-[10px] text-red-500 font-semibold space-y-1">
                        {currentCustomer.negativeFactors.map((f, idx) => <li key={idx}>{f}</li>)}
                      </ul>
                    </div>
                  </div>

                  <button onClick={() => setActiveModal('retention')} className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-850 rounded-xl text-[10px] font-extrabold text-white uppercase tracking-widest mt-4 transition-colors">
                    Execute Retention Playbook
                  </button>
                </div>

                {/* Col 3: Keep-in-Touch Timeline */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-brand tracking-wider uppercase">
                        Keep-in-Touch Tracker
                      </h3>
                      <span className="text-[10px] font-extrabold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        {currentCustomer.keepInTouch?.progress}% Done
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[10px] font-extrabold text-zinc-500 uppercase pb-2 border-b border-zinc-100">
                      <span>Steps: {currentCustomer.keepInTouch?.completed}/{currentCustomer.keepInTouch?.steps}</span>
                      <span>Next Due: in {currentCustomer.keepInTouch?.days} Days</span>
                    </div>

                    {/* Dotted Timeline */}
                    <div className="mt-4 space-y-4 relative pl-4 border-l border-dashed border-zinc-200">
                      {currentCustomer.keepInTouch?.timeline.map((tm, idx) => (
                        <div key={idx} className="relative">
                          <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 ${
                            tm.status === 'Completed' ? 'bg-lime border-black' : 'bg-white border-zinc-300'
                          }`} />
                          <div className="flex justify-between items-center text-[10px] leading-tight">
                            <span className="font-extrabold text-zinc-800">{tm.subject}</span>
                            <span className="text-zinc-400 font-semibold">{tm.date}</span>
                          </div>
                          <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block mt-0.5">
                            Channel: {tm.type} · Status: {tm.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button onClick={() => setActiveModal('appointment')} className="w-full text-center py-2 bg-zinc-100 hover:bg-zinc-250 border border-zinc-200 rounded-xl text-[10px] font-extrabold text-zinc-700 uppercase tracking-widest mt-4 transition-colors">
                    Outlook Schedule Sync
                  </button>
                </div>
              </div>
            )}

            {/* RELATIONSHIP & HOLDINGS SUBTAB */}
            {activeSubTab === "Relationship & Holdings" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Col 1 & 2: Holdings Lists */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Assets Table */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-100 select-none">
                      <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                        Portfolio Assets & Holdings
                      </h3>
                      <span className="text-[10px] font-bold text-zinc-400">
                        Host Avaloq Realtime as of: 26-May-2026
                      </span>
                    </div>

                    <div className="overflow-x-auto custom-scrollbar mt-4">
                      <table className="w-full text-left text-xs divide-y divide-zinc-200">
                        <thead>
                          <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                            <th className="py-2.5">Holdings Name</th>
                            <th className="py-2.5">Platform Node</th>
                            <th className="py-2.5">Compliance Type</th>
                            <th className="py-2.5 text-right">Balance (MYR)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-150 text-zinc-700 font-semibold">
                          {holdingsToRender.filter(h => h.balance > 0).map((h, idx) => (
                            <tr key={idx}>
                              <td className="py-3 font-extrabold text-zinc-800">{h.name}</td>
                              <td className="py-3">
                                <span className="text-[9px] font-bold bg-zinc-100 text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded uppercase">
                                  {h.source}
                                </span>
                              </td>
                              <td className="py-3">
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                  h.islamic ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                }`}>
                                  {h.islamic ? 'Shariah compliant' : 'Conventional'}
                                </span>
                              </td>
                              <td className="py-3 text-right text-zinc-900 font-black">
                                MYR {(h.balance).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Liabilities Table */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                    <div className="pb-3 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-red-600 tracking-wider uppercase">
                        Portfolio Liabilities & Financing
                      </h3>
                    </div>

                    <div className="overflow-x-auto custom-scrollbar mt-4">
                      <table className="w-full text-left text-xs divide-y divide-zinc-200">
                        <thead>
                          <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                            <th className="py-2.5">Financing Name</th>
                            <th className="py-2.5">Platform Node</th>
                            <th className="py-2.5">Compliance Type</th>
                            <th className="py-2.5 text-right">Balance (MYR)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-150 text-zinc-700 font-semibold">
                          {holdingsToRender.filter(h => h.balance < 0).map((h, idx) => (
                            <tr key={idx}>
                              <td className="py-3 font-extrabold text-zinc-800">{h.name}</td>
                              <td className="py-3">
                                <span className="text-[9px] font-bold bg-zinc-100 text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded uppercase">
                                  {h.source}
                                </span>
                              </td>
                              <td className="py-3">
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                  h.islamic ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                }`}>
                                  {h.islamic ? 'Shariah compliant' : 'Conventional'}
                                </span>
                              </td>
                              <td className="py-3 text-right text-red-500 font-black">
                                MYR {(h.balance).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Col 3: ARC-Style Relationship Hierarchy Map */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="pb-3 border-b border-zinc-100 flex items-center justify-between select-none">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Household Hierarchy
                    </h3>
                    <Lock className="w-3.5 h-3.5 text-zinc-400" />
                  </div>

                  <p className="text-[10px] text-zinc-400 font-semibold mt-2 leading-relaxed">
                    Corporate audit compliance flags sensitive nodes. Private identifiers are masked.
                  </p>

                  <div className="mt-4 border border-zinc-100 p-4 rounded-2xl bg-zinc-50 space-y-3.5 text-xs">
                    {/* Household Wealth Roll-up Node */}
                    <div className="border border-zinc-350 p-2.5 rounded-xl bg-white shadow-sm">
                      <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-400 uppercase">
                        <span>Group Node (Household)</span>
                        <span className="text-brand">G-10294</span>
                      </div>
                      <div className="font-extrabold text-zinc-800 mt-1">
                        Zafrul Dynasty Holdings
                      </div>
                      <div className="text-[10px] text-[#3DBFD4] font-black mt-0.5">
                        Combined Portfolio: MYR 8.68M
                      </div>
                    </div>

                    {/* Children nodes */}
                    <div className="pl-6 space-y-2 border-l-2 border-zinc-200 relative">
                      <div className="p-2 rounded-xl bg-white border border-zinc-150">
                        <div className="font-extrabold text-zinc-800 text-[11px]">
                          Tengku Zafrul Jr (Son)
                        </div>
                        <span className="text-[9px] text-zinc-400 block mt-0.5">
                          AUM: MYR 1,650,000 · {maskPII("CIF-1124102", 'cif', isDataMaskingEnabled)}
                        </span>
                      </div>
                      
                      <div className="p-2 rounded-xl bg-white border border-zinc-150 flex justify-between items-center">
                        <div>
                          <div className="font-extrabold text-zinc-800 text-[11px]">
                            Sharifah Aminah (Spouse - Joint Account)
                          </div>
                          <span className="text-[9px] text-zinc-400 block mt-0.5">
                            AUM: Sensitive Node Masked
                          </span>
                        </div>
                        <Lock className="w-3 h-3 text-zinc-400 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WEALTH & PORTFOLIO SUBTAB */}
            {activeSubTab === "Wealth & Portfolio" && (
              <div className="space-y-6">
                {/* Row 1: charts container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Chart 1: Donut allocation */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 h-[280px] flex flex-col justify-between">
                    <div className="pb-2 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">
                        Asset Allocation Profile
                      </h3>
                    </div>
                    <div className="h-44 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={assetAllocationData}
                            innerRadius={45}
                            outerRadius={65}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {assetAllocationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                          <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: 10 }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Chart 2: Performance chart */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 h-[280px] flex flex-col justify-between">
                    <div className="pb-2 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">
                        Portfolio Performance vs Benchmark
                      </h3>
                    </div>
                    <div className="h-44">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                          <XAxis dataKey="month" tick={{ fontSize: 9 }} />
                          <YAxis domain={['dataMin - 10', 'dataMax + 10']} tick={{ fontSize: 9 }} />
                          <Tooltip />
                          <Legend wrapperStyle={{ fontSize: 10 }} />
                          <Line type="monotone" dataKey="Portfolio" stroke="#E6308A" strokeWidth={3} activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="Benchmark" stroke="#3DBFD4" strokeWidth={2} strokeDasharray="3 3" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Chart 3: Target Achievement horizontal stacked bars */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 h-[280px] flex flex-col justify-between">
                    <div className="pb-2 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">
                        Target-vs-Achieved allocation
                      </h3>
                    </div>
                    <div className="space-y-4 my-auto">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-600 uppercase">
                          <span>Investment Target</span>
                          <span className="text-brand">MYR 5.00M / 10.00M</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                          <div className="w-1/2 h-full bg-brand" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-600 uppercase">
                          <span>Deposits Target</span>
                          <span className="text-[#3DBFD4]">MYR 2.05M / 3.00M</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                          <div className="w-[68%] h-full bg-[#3DBFD4]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-600 uppercase">
                          <span>Etiqa Takaful Target</span>
                          <span className="text-[#F5A623]">MYR 1.20M / 1.50M</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                          <div className="w-[80%] h-full bg-[#F5A623]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUITABILITY & RISK SUBTAB */}
            {activeSubTab === "Suitability & Risk" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Suitability stats */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="pb-3 border-b border-zinc-100 flex justify-between items-center select-none">
                    <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">
                      Client Suitability Index
                    </h3>
                    <Award className="w-4 h-4 text-[#F5A623]" />
                  </div>

                  <div className="flex justify-center py-4">
                    <div className="text-center">
                      <div className="text-2xl font-black text-brand">
                        {currentCustomer.suitability?.score}
                      </div>
                      <span className="text-[10px] text-zinc-400 font-extrabold uppercase mt-1 block">
                        Customer Risk Profile (CRP)
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-zinc-600 font-semibold space-y-2.5 pt-2">
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">CKA / K&E Status</span>
                      <span className="text-green-600 font-extrabold">{currentCustomer.suitability?.ckaStatus}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Validity Horizon Date</span>
                      <span>{currentCustomer.suitability?.validity}</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span className="text-zinc-400">Vulnerable Client Flag</span>
                      <span className={currentCustomer.suitability?.vulnerable ? 'text-red-500 font-black' : 'text-zinc-500 font-black'}>
                        {currentCustomer.suitability?.vulnerable ? 'YES (Senior citizen/High asset risk)' : 'NO'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Workflow steps */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="pb-3 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">
                        Vulnerable Client Approval Workflow Step
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-500 font-semibold mt-3 leading-relaxed">
                      Due to the **Vulnerable Customer Flag**, all premium product recommendations require strict joint-signature approvals from the Branch Compliance Officer.
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="border border-green-200 bg-green-50 p-3 rounded-2xl">
                        <span className="text-[9px] font-black text-green-600 uppercase block">Step 1</span>
                        <h4 className="text-xs font-extrabold text-zinc-800 mt-1">M2U Assessment</h4>
                        <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Completed 15-Jan-2025</span>
                      </div>
                      
                      <div className="border border-green-200 bg-green-50 p-3 rounded-2xl">
                        <span className="text-[9px] font-black text-green-600 uppercase block">Step 2</span>
                        <h4 className="text-xs font-extrabold text-zinc-800 mt-1">Branch Interview</h4>
                        <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Completed by Desk Lead</span>
                      </div>

                      <div className="border border-dashed border-zinc-300 p-3 rounded-2xl">
                        <span className="text-[9px] font-black text-zinc-400 uppercase block">Step 3</span>
                        <h4 className="text-xs font-extrabold text-zinc-500 mt-1">Compliance Sign-off</h4>
                        <span className="text-[9px] text-red-500 font-black block mt-0.5">Awaiting Audit Review</span>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => setActiveModal('suitability')} className="w-full text-center py-2.5 bg-lime hover:opacity-90 rounded-xl text-[10px] font-black text-black uppercase tracking-widest mt-4 transition-all">
                    Initiate Suitability Assessment Workflow
                  </button>
                </div>
              </div>
            )}

            {/* FINANCIAL PLANNING SUBTAB */}
            {activeSubTab === "Financial Planning" && (
              <div className="space-y-6">
                {/* Goal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {goalsToRender.map((goal, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[180px]"
                    >
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-black text-brand uppercase tracking-widest bg-brand/10 px-2 py-0.5 rounded">
                            {goal.type}
                          </span>
                          <span className="text-xs font-black text-zinc-800">{goal.progress}% Achieved</span>
                        </div>
                        <h4 className="text-xs font-extrabold text-zinc-800 mt-2">{goal.name}</h4>
                        <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-500 mt-2">
                          <span>Current: MYR {(goal.current).toLocaleString()}</span>
                          <span>Target: MYR {(goal.target).toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Goal progress ring indicator */}
                      <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-lime" style={{ width: `${goal.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-black text-zinc-800 uppercase tracking-wide">
                      MyWealth Financial Health Index
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-semibold mt-1">
                      Zafrul Dynasty group has a financial planning compliance score of <strong className="text-brand">88/100 (Excellent)</strong>.
                    </p>
                  </div>
                  <button onClick={() => setActiveModal('application')} className="h-10 px-6 rounded-xl bg-gradient-to-r from-[#E6308A] to-[#9E005D] text-white text-[10px] font-extrabold uppercase tracking-widest shadow hover:opacity-95 transition-opacity">
                    Create Application from Plan
                  </button>
                </div>
              </div>
            )}

            {/* ENGAGEMENT & SERVICE SUBTAB */}
            {activeSubTab === "Engagement & Service" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left panel: interactions summary */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Service Complaints under CARE */}
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                    <div className="pb-3 border-b border-zinc-100 flex justify-between items-center">
                      <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                        CARE Service Tickets & Complaints
                      </h3>
                      <span className="text-[10px] font-extrabold text-red-500 uppercase">
                        Strict SLA Escalated
                      </span>
                    </div>

                    <div className="mt-4 space-y-3.5">
                      {mockCases.filter(c => c.customerId === currentCustomer.id).map((c, idx) => (
                        <div 
                          key={idx}
                          className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col justify-between"
                        >
                          <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-400 uppercase">
                            <span>ID: {c.id}</span>
                            <span className={`text-[10px] ${
                              c.slaCountdownHours < 0 ? 'text-red-600 bg-red-150 p-1.5' : 'text-zinc-600'
                            }`}>
                              SLA: {c.slaCountdownHours} Hrs ({c.slaState})
                            </span>
                          </div>
                          <h4 className="text-xs font-black text-zinc-800 mt-2">{c.category}</h4>
                          <span className="text-[9px] text-zinc-400 font-bold uppercase block mt-1">
                            Origin channel: {c.channel} · Case Status: {c.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Consent & Preferences */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Consent & Preferences
                    </h3>
                  </div>

                  <div className="text-[11px] text-zinc-600 font-semibold space-y-3 pt-2">
                    <div className="flex justify-between items-center border-b border-zinc-50 pb-2">
                      <span className="text-zinc-400">Marketing Hold (DNC)</span>
                      <span className="text-green-600 font-bold uppercase bg-green-50 px-2 py-0.5 rounded">Active Hold</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-50 pb-2">
                      <span className="text-zinc-400">PDPA Consent Date</span>
                      <span>Approved 12-May-2024</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-50 pb-2">
                      <span className="text-zinc-400">WhatsApp Opt-In</span>
                      <span className="text-green-600 font-bold uppercase">YES</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-zinc-400">Email Marketing Opt-In</span>
                      <span className="text-red-500 font-bold uppercase">NO</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KYC & COMPLIANCE SUBTAB */}
            {activeSubTab === "KYC & Compliance" && (
              <div className="space-y-6">
                {/* Tile Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border border-zinc-200 bg-white p-4 rounded-2xl">
                    <span className="text-[9px] text-zinc-400 font-black uppercase block">CDD Status</span>
                    <span className="text-sm font-black text-green-600 mt-1 block">Approved</span>
                  </div>
                  
                  <div className="border border-zinc-200 bg-white p-4 rounded-2xl">
                    <span className="text-[9px] text-zinc-400 font-black uppercase block">AML Rating</span>
                    <span className="text-sm font-black text-zinc-800 mt-1 block">Low Risk</span>
                  </div>

                  <div className="border border-zinc-200 bg-white p-4 rounded-2xl">
                    <span className="text-[9px] text-zinc-400 font-black uppercase block">Re-KYC Due Horizon</span>
                    <span className="text-sm font-black text-brand mt-1 block">14 Feb 2028</span>
                  </div>

                  <div className="border border-zinc-200 bg-white p-4 rounded-2xl">
                    <span className="text-[9px] text-zinc-400 font-black uppercase block">Connected Parties Map</span>
                    <span className="text-sm font-black text-[#3DBFD4] mt-1 block">3 Active Nodes</span>
                  </div>
                </div>

                {/* Details Checklists */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                  <div className="pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Compliance Audit details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-semibold text-zinc-700">
                    <div>
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-50 mb-2">
                        TAX & FOREIGN CLASSIFICATION
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>FATCA Classification</span>
                          <span>Non-US Person</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CRS Status</span>
                          <span>MY Resident</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-50 mb-2">
                        CREDIT BUREAU CHECKS
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>CTOS Rating</span>
                          <span className="text-green-600 font-bold">Excellent (795)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CCRIS Accounts</span>
                          <span>0 Outstanding Defaults</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-50 mb-2">
                        POLITICAL EXPOSURE & SANCTIONS
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>PEP Flag</span>
                          <span>Cleared (No Match)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sanctions list Match</span>
                          <span className="text-green-600">Cleared</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          // ================= CORPORATE (GGB) CONTENT =================
          <>
            {/* GROUP PROFILE & HIERARCHY SUBTAB */}
            {activeSubTab === "Group Profile & Hierarchy" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Col 1: Group Profile */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="pb-3 border-b border-zinc-100 flex justify-between items-center select-none">
                    <h3 className="text-xs font-black text-brand tracking-wider uppercase">
                      Corporate Identity
                    </h3>
                  </div>

                  <div className="text-[11px] text-zinc-600 font-semibold space-y-2.5">
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Parent Conglomerate</span>
                      <span className="font-extrabold text-zinc-800">{currentCustomer.groupProfile?.parent}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Registration ID (BRN)</span>
                      <span>{currentCustomer.brn}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Incorporation Horizon</span>
                      <span>{currentCustomer.incorporationDate}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                      <span className="text-zinc-400">Booking Entity Node</span>
                      <span>{currentCustomer.groupProfile?.bookingEntity}</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span className="text-zinc-400">Servicing RM Suite</span>
                      <span>{currentCustomer.groupProfile?.servicingEntity}</span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Subsidiary Holdings Map */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                  <div className="pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Subsidiary & Cross-border entities
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    {currentCustomer.groupProfile?.subsidiaries.map((sub, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-black text-zinc-400 uppercase">
                            {sub.jurisdiction}
                          </span>
                          <span className="text-[10px] font-extrabold text-brand">
                            {sub.relation}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-zinc-800 mt-1">{sub.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Col 3: Board Members & RM Mapping */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <div className="pb-3 border-b border-zinc-100">
                      <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                        Relationship mapping
                      </h3>
                    </div>

                    <div className="mt-4 text-xs font-semibold text-zinc-700 space-y-3">
                      <div>
                        <span className="text-[9px] text-zinc-400 font-black uppercase block">Principal director RM</span>
                        <span className="text-zinc-850 font-bold">{currentCustomer.rmAssignment?.principalRm}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-400 font-black uppercase block">Secondary local RM</span>
                        <span className="text-zinc-850 font-bold">{currentCustomer.rmAssignment?.secondaryRm}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => setActiveModal('board')} className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-850 rounded-xl text-[10px] font-extrabold text-white uppercase tracking-widest mt-4 transition-colors">
                    Edit Board Directory
                  </button>
                </div>
              </div>
            )}

            {/* RELATIONSHIP & EXPOSURE SUBTAB */}
            {activeSubTab === "Relationship & Exposure" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Exposure KPI summary */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                  <div className="pb-3 border-b border-zinc-100 flex justify-between items-center select-none">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Exposure Summary
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[9px] text-zinc-400 font-black uppercase block">Total Facilities limits</span>
                      <span className="text-lg font-black text-brand mt-0.5 block">
                        MYR {(currentCustomer.relationshipExposure?.totalLimits / 1000000).toFixed(2)}M
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-400 font-black uppercase block">Credit Rating index</span>
                      <span className="text-sm font-black text-[#3DBFD4] mt-0.5 block">
                        {currentCustomer.relationshipExposure?.creditRating}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-400 font-black uppercase block">Utilised Balances</span>
                      <span className="text-sm font-black text-zinc-800 mt-0.5 block">
                        MYR {(currentCustomer.relationshipExposure?.utilized / 1000000).toFixed(2)}M
                      </span>
                    </div>
                  </div>
                </div>

                {/* Active Facilities Table */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 lg:col-span-2">
                  <div className="pb-3 border-b border-zinc-100 flex justify-between items-center select-none">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Active Debt & Syndicate Facilities
                    </h3>
                  </div>

                  <div className="overflow-x-auto custom-scrollbar mt-4">
                    <table className="w-full text-left text-xs divide-y divide-zinc-200">
                      <thead>
                        <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                          <th className="py-2.5">Facility Type</th>
                          <th className="py-2.5 text-right">Limit Horizon (MYR)</th>
                          <th className="py-2.5 text-right">Utilised Facility (MYR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-150 text-zinc-700 font-semibold">
                        {currentCustomer.relationshipExposure?.facilities.map((fac, idx) => (
                          <tr key={idx}>
                            <td className="py-3 font-extrabold text-zinc-800">{fac.type}</td>
                            <td className="py-3 text-right text-zinc-500 font-black">
                              MYR {(fac.limit).toLocaleString()}
                            </td>
                            <td className="py-3 text-right text-zinc-900 font-black">
                              MYR {(fac.utilized).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* DEAL PIPELINE SUBTAB */}
            {activeSubTab === "Deal Pipeline" && (
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                <div className="pb-3 border-b border-zinc-100 flex justify-between items-center">
                  <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                    Active Deals & Syndicates
                  </h3>
                </div>

                <div className="overflow-x-auto custom-scrollbar mt-4">
                  <table className="w-full text-left text-xs divide-y divide-zinc-200">
                    <thead>
                      <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                        <th className="py-2.5">Deal ID</th>
                        <th className="py-2.5">Opportunity Structure</th>
                        <th className="py-2.5">Credit Stage</th>
                        <th className="py-2.5 text-right">Probability</th>
                        <th className="py-2.5 text-right">Value (MYR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-150 text-zinc-700 font-semibold">
                      {currentCustomer.dealPipeline?.map((deal, idx) => (
                        <tr key={idx}>
                          <td className="py-3 font-bold text-zinc-400">{deal.id}</td>
                          <td className="py-3 font-extrabold text-zinc-800">
                            {deal.confidential ? (
                              <span className="flex items-center gap-1.5 text-zinc-400 italic">
                                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                                <span>Restricted Node Masked</span>
                              </span>
                            ) : (
                              deal.name
                            )}
                          </td>
                          <td className="py-3 text-zinc-500">{deal.stage}</td>
                          <td className="py-3 text-right text-[#3DBFD4] font-black">{deal.probability}%</td>
                          <td className="py-3 text-right text-zinc-900 font-black">
                            MYR {(deal.value).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TRANSACTIONS & GM/FI SUBTAB */}
            {activeSubTab === "Transactions & GM/FI" && (
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                <div className="pb-3 border-b border-zinc-100 flex justify-between items-center select-none">
                  <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                    Realtime SWIFT Transaction Logs
                  </h3>
                </div>

                <div className="overflow-x-auto custom-scrollbar mt-4">
                  <table className="w-full text-left text-xs divide-y divide-zinc-200">
                    <thead>
                      <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                        <th className="py-2.5">Date</th>
                        <th className="py-2.5">Transaction Type</th>
                        <th className="py-2.5">Reference ID</th>
                        <th className="py-2.5 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-150 text-zinc-700 font-semibold">
                      {currentCustomer.transactions?.map((tx, idx) => (
                        <tr key={idx}>
                          <td className="py-3 text-zinc-500">{tx.date}</td>
                          <td className="py-3 font-bold text-zinc-850">{tx.type}</td>
                          <td className="py-3 text-zinc-400">{tx.ref}</td>
                          <td className="py-3 text-right text-zinc-900 font-black">
                            {tx.currency} {(tx.amount).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* RISK & NEWS SUBTAB */}
            {activeSubTab === "Risk & News" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Red flags */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                  <div className="pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-red-600 tracking-wider uppercase">
                      ESG / Financial Red Flags
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    {currentCustomer.risksAndNews?.redFlags.map((flag, idx) => (
                      <div key={idx} className="p-3.5 bg-red-50 border border-red-100 rounded-2xl">
                        <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-red-600">
                          <span>{flag.type} Warning</span>
                          <span>Severity: {flag.severity}</span>
                        </div>
                        <h4 className="text-xs font-bold text-zinc-800 mt-1">{flag.desc}</h4>
                        <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                          Action: {flag.action}
                        </p>
                      </div>
                    ))}
                    {currentCustomer.risksAndNews?.redFlags.length === 0 && (
                      <span className="text-zinc-400 text-xs font-medium block">
                        No active red flags logged for this account.
                      </span>
                    )}
                  </div>
                </div>

                {/* News lists */}
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 lg:col-span-2">
                  <div className="pb-3 border-b border-zinc-100">
                    <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                      Client-Relevant Industry News
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    {currentCustomer.risksAndNews?.aiNews.map((news, idx) => (
                      <div key={idx} className="border-b border-zinc-100 pb-3 last:border-b-0">
                        <div className="flex justify-between items-center text-[9px] font-extrabold text-[#3DBFD4] uppercase">
                          <span>Sentiment: {news.sentiment}</span>
                        </div>
                        <h4 className="text-xs font-black text-zinc-800 mt-1 leading-tight">
                          {news.headline}
                        </h4>
                        <p className="text-[10px] text-zinc-400 font-semibold mt-1">
                          Relevance: {news.relevance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TERM SHEETS SUBTAB */}
            {activeSubTab === "Term Sheets" && (
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                <div className="pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-zinc-850 tracking-wider uppercase">
                    Historical Term Sheet Matches
                  </h3>
                </div>

                <div className="mt-4 space-y-3">
                  {currentCustomer.termSheets?.map((sheet, idx) => (
                    <div key={idx} className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl flex justify-between items-center hover:border-brand transition-colors cursor-pointer">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-800">{sheet.name}</h4>
                        <span className="text-[9px] text-[#3DBFD4] font-black uppercase block mt-1">
                          Platform matches: {sheet.matches}
                        </span>
                      </div>
                      <button onClick={() => setActiveModal('term-template')} className="h-7 px-3 bg-zinc-900 text-white rounded-xl text-[9px] font-extrabold uppercase tracking-wider">
                        Use Template
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* 4. Bottom Action Bar */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-white border border-zinc-200 shadow-2xl rounded-full px-5 py-2.5 z-30 flex items-center gap-3 select-none">
        <button onClick={() => setActiveModal('editProfile')} className="h-8 px-4 rounded-full bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
          Edit Profile
        </button>
        <button onClick={() => setActiveModal(appMode === 'ggb' ? 'placemat' : 'proposal')} className="h-8 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-widest transition-colors">
          {appMode === 'ggb' ? 'Account Placemat' : 'Generate Proposal'}
        </button>
        <button onClick={() => setActiveModal('crossSell')} className="h-8 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-widest transition-colors">
          Cross Sell
        </button>
        <button onClick={() => setActiveModal('reKyc')} className="h-8 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-widest transition-colors">
          Initiate Re-KYC
        </button>
        <button onClick={() => setActiveModal('ckyc')} className="h-8 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-widest transition-colors">
          CKYC
        </button>
        <button onClick={() => setActiveModal('knowledge')} className="h-8 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-widest transition-colors">
          Knowledge
        </button>
        <div className="w-px h-5 bg-zinc-200" />
        <button 
          onClick={onBack}
          className="h-8 px-4 rounded-full bg-red-100 hover:bg-red-200 text-red-700 text-[10px] font-black uppercase tracking-widest transition-colors"
        >
          Close Detail
        </button>
      </div>

      {/* Render Modals/Drawers */}
      <SuitabilityAssessmentDrawer isOpen={activeModal === 'suitability'} onClose={() => setActiveModal(null)} customer={currentCustomer} />
      <FinancialApplicationPlanDrawer isOpen={activeModal === 'application'} onClose={() => setActiveModal(null)} customer={currentCustomer} />
      <EditProfileDrawer isOpen={activeModal === 'editProfile'} onClose={() => setActiveModal(null)} customer={currentCustomer} />
      <GenerateProposalDrawer isOpen={activeModal === 'proposal'} onClose={() => setActiveModal(null)} customer={currentCustomer} />
      <CrossSellDrawer isOpen={activeModal === 'crossSell'} onClose={() => setActiveModal(null)} customer={currentCustomer} />
      <ReKycModal isOpen={activeModal === 'reKyc'} onClose={() => setActiveModal(null)} />
      <RetentionPlaybookModal isOpen={activeModal === 'retention'} onClose={() => setActiveModal(null)} />
      <CkycPanel isOpen={activeModal === 'ckyc'} onClose={() => setActiveModal(null)} />
      <KnowledgeDrawer isOpen={activeModal === 'knowledge'} onClose={() => setActiveModal(null)} />
      <GenericActionDrawer
        isOpen={['appointment', 'board', 'term-template', 'placemat'].includes(activeModal)}
        onClose={() => setActiveModal(null)}
        action={activeModal}
        customer={currentCustomer}
        activeSubTab={activeSubTab}
      />

    </div>
  );
}
