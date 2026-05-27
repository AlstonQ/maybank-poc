import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockCustomersGCFS, mockCustomersGGB, mockOpportunities, mockCases } from '../data/mockData';
import { 
  Sparkles, Calendar, Award, AlertTriangle, TrendingUp, ArrowRight,
  TrendingDown, CheckCircle2, ShoppingBag, Plus, BellRing
} from 'lucide-react';
import Modal from '../components/Modal';

export default function Summary() {
  const { appMode, setActiveModule, setSelectedCustomerId } = useTheme();
  const [activeTab, setActiveTab] = useState('Day Plan');
  const [summaryAction, setSummaryAction] = useState(null);

  const customers = appMode === 'gcfs' ? mockCustomersGCFS : mockCustomersGGB;

  const corporateOpps = mockCustomersGGB.flatMap(cust => 
    cust.dealPipeline.map(deal => ({
      id: deal.id,
      name: deal.name,
      customerId: cust.id,
      customerName: cust.name,
      value: deal.value,
      probability: deal.probability,
      rating: deal.probability >= 90 ? 'Hot' : 'Warm'
    }))
  );

  const opportunities = appMode === 'gcfs' ? mockOpportunities : corporateOpps;

  // Custom Malaysian dates
  const todayDateStr = "26 May 2026";

  const tabs = [
    "Day Plan", "QTD Engagements", "QTD Sales KPI", "QTD Service KPI", 
    "Chat Analytics", "Month Plan", "Quick Actions"
  ];

  // Quick navigate to customer details
  const viewCustomer = (id) => {
    setSelectedCustomerId(id);
    setActiveModule(appMode === 'gcfs' ? 'My Portfolio' : 'Accounts');
  };

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 rounded-3xl p-6 shadow-xl border border-zinc-800 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E6308A]/10 via-[#C6E84F]/5 to-transparent pointer-events-none" />
        <div>
          <span className="text-[10px] text-[#C6E84F] font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full shadow-inner">
            ACTIVE PORTFOLIO CONSOLE
          </span>
          <h2 className="text-xl font-black mt-2 tracking-wide">
            Welcome, Mr. James May
          </h2>
          <p className="text-[11px] text-zinc-400 font-semibold mt-1">
            Global Relationship Director · Maybank Tower HQ · <span className="text-zinc-300">{todayDateStr}</span>
          </p>
        </div>
        <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-2xl">
          <div className="text-center border-r border-zinc-800 pr-4">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Portfolio AUM</span>
            <span className="text-base font-black text-[#C6E84F] mt-0.5 block">
              MYR {appMode === 'gcfs' ? '21.18M' : '2.34B'}
            </span>
          </div>
          <div className="text-center">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Churn Warning</span>
            <span className="text-xs font-black text-red-400 flex items-center gap-1 mt-0.5 justify-center">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
              <span>{appMode === 'gcfs' ? '2 Alerts' : '1 Alert'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Tab Pills */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`h-8 px-4 rounded-full text-xs font-bold transition-all shadow-sm ${
              activeTab === tab 
                ? 'bg-zinc-900 text-white' 
                : 'bg-white hover:bg-zinc-50 text-zinc-600 border border-zinc-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>      {/* Row content conditionally rendered based on activeTab */}
      {activeTab === 'Day Plan' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Row 1: 3-Column Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Birthdays / Anniversaries */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    {appMode === 'gcfs' ? 'Birthdays & Anniversaries' : 'Incorporation Anniversaries'}
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full uppercase">
                    This Week
                  </span>
                </div>
                
                <div className="mt-4 space-y-3">
                  {customers.slice(0, 3).map((cust, idx) => (
                    <div 
                      key={idx}
                      onClick={() => viewCustomer(cust.id)}
                      className="flex items-center gap-3 p-2 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 cursor-pointer transition-all"
                    >
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-zinc-100 flex-shrink-0 flex items-center justify-center">
                        {appMode === 'gcfs' ? (
                          <img src={cust.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"} alt={cust.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center font-black text-[9px] text-[#C6E84F] border border-zinc-700">
                            {cust.name.split(' ')[0][0]}{cust.name.split(' ')[1]?.[0] || ''}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-zinc-800 truncate">{cust.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[9px] text-[#E6308A] font-extrabold uppercase bg-[#E6308A]/10 px-2 py-0.5 rounded-full leading-none">
                            {cust.segment}
                          </span>
                          <span className="text-[9px] text-zinc-400 font-semibold">
                            {appMode === 'gcfs' ? cust.dob : `Inc: ${cust.incorporationDate}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setActiveModule(appMode === 'gcfs' ? 'My Portfolio' : 'Accounts')}
                className="w-full text-center py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-extrabold text-zinc-600 uppercase tracking-widest mt-4 transition-colors"
              >
                Manage Client Calendar
              </button>
            </div>

            {/* Column 2: Client Nudges */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    Active Client Nudges
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </div>

                <div className="mt-4 space-y-3.5">
                  {customers.slice(0, 2).map((cust, idx) => (
                    <div 
                      key={idx}
                      onClick={() => viewCustomer(cust.id)}
                      className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-blue-600 uppercase tracking-wider">
                          {cust.segment} Nudge
                        </span>
                        <BellRing className="w-3.5 h-3.5 text-blue-500 animate-bounce" />
                      </div>
                      <h4 className="text-xs font-extrabold text-zinc-800 mt-1.5 truncate">
                        {cust.name}
                      </h4>
                      <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                        {appMode === 'gcfs' 
                          ? (cust.nudgeOffer || "Pre-Approved Credit Limit Top-Up Available")
                          : `Finalize ESG syndicate financing term sheet (Potential MYR ${((cust.aum)/100000000).toFixed(0)}00M facility)`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setActiveModule(appMode === 'gcfs' ? 'My Pipeline' : 'Deals')}
                className="w-full text-center py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-extrabold text-zinc-600 uppercase tracking-widest mt-4 transition-colors"
              >
                Launch Campaign Hub
              </button>
            </div>

            {/* Column 3: Progress Tracker & Churn Warning */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    Progress Tracker
                  </h3>
                  <Award className="w-4 h-4 text-[#F5A623]" />
                </div>

                <div className="mt-4 space-y-4">
                  {/* Meeting Progress */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-600 uppercase tracking-wide">
                      <span>QTD Meeting Target</span>
                      <span className="text-green-600">5 of 10 Met</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                      <div className="w-1/2 h-full bg-[#C6E84F]" />
                    </div>
                  </div>

                  {/* Churn Warning Indicators */}
                  <div className="p-3 bg-red-50 border border-red-100 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-extrabold text-red-600 uppercase tracking-widest">
                        Churn Alert
                      </span>
                      <span className="text-xs font-black text-red-700">
                        {appMode === 'gcfs' ? '96%' : 'Petronas'}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-semibold mt-1.5 leading-relaxed">
                      {appMode === 'gcfs'
                        ? "Tengku Adnan classified as High Churn Risk. Avaloq balance outflows detected."
                        : "Petronas ESG red flags on subsidiary logged. Action required."}
                    </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => viewCustomer(customers[0].id)}
                className="w-full text-center py-2 bg-red-100 hover:bg-red-200 border border-red-200 rounded-xl text-[10px] font-extrabold text-red-700 uppercase tracking-widest mt-4 transition-colors"
              >
                Review Churn Portfolios
              </button>
            </div>
          </div>

          {/* Row 2: Insights, New Leads/Cases, Appointments */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Insight / Cross-sell Cards */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    AI Cross-Sell Insights
                  </h3>
                </div>

                <div className="mt-4 space-y-3.5">
                  {appMode === 'gcfs' ? (
                    <>
                      {/* Insight 1: Grow Loan Portfolio */}
                      <div className="p-3.5 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl relative">
                        <h4 className="text-xs font-extrabold text-zinc-800 uppercase tracking-wide">
                          Grow Loan Portfolio
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                          Increase wealth assets under management. Propose the **Shariah Wealth Diversification Plan** to leverage recent market rate cycles.
                        </p>
                        <div className="absolute right-3 bottom-3 flex items-center justify-center bg-white w-6 h-6 rounded-full border border-pink-200 shadow-sm cursor-pointer hover:bg-pink-100 transition-colors">
                          <ArrowRight className="w-3 h-3 text-[#E6308A]" />
                        </div>
                      </div>

                      {/* Insight 2: Takaful Upsell */}
                      <div className="p-3.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl relative">
                        <h4 className="text-xs font-extrabold text-zinc-800 uppercase tracking-wide">
                          Etiqa Takaful Campaign
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                          4 wealth accounts are matching eligibility filters for the high-yield Etiqa Takaful protection plan.
                        </p>
                        <div className="absolute right-3 bottom-3 flex items-center justify-center bg-white w-6 h-6 rounded-full border border-blue-200 shadow-sm cursor-pointer hover:bg-blue-100 transition-colors">
                          <ArrowRight className="w-3 h-3 text-blue-600" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Corporate Insight 1: ESG Trade Finance */}
                      <div className="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl relative">
                        <h4 className="text-xs font-extrabold text-zinc-800 uppercase tracking-wide">
                          Green Trade Financing
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                          Propose **ESG Sustainability Linked Trade Financing-i** to Petronas Trading to match green energy growth.
                        </p>
                        <div className="absolute right-3 bottom-3 flex items-center justify-center bg-white w-6 h-6 rounded-full border border-emerald-200 shadow-sm cursor-pointer hover:bg-emerald-100 transition-colors">
                          <ArrowRight className="w-3 h-3 text-emerald-600" />
                        </div>
                      </div>

                      {/* Corporate Insight 2: USD Cross-Border Swap */}
                      <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl relative">
                        <h4 className="text-xs font-extrabold text-zinc-800 uppercase tracking-wide">
                          Cross-Border FX Hedging
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-semibold mt-1 leading-relaxed">
                          Execute **US Dollar Cross-Border Hedging Swap** for Sime Darby to hedge currency volatility in Papua New Guinea exports.
                        </p>
                        <div className="absolute right-3 bottom-3 flex items-center justify-center bg-white w-6 h-6 rounded-full border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-100 transition-colors">
                          <ArrowRight className="w-3 h-3 text-amber-600" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <button onClick={() => setSummaryAction('insights')} className="w-full text-center py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-extrabold text-zinc-600 uppercase tracking-widest mt-4 transition-colors">
                View All AI Insights
              </button>
            </div>

            {/* Column 2: New Leads / New Cases */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    {appMode === 'gcfs' ? 'Hot Opportunities' : 'Syndicates / Deals'}
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded uppercase">
                    {opportunities.length} Active
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {opportunities.slice(0, 3).map((opp, idx) => (
                    <div 
                      key={idx}
                      onClick={() => {
                        setSelectedCustomerId(opp.customerId);
                        setActiveModule(appMode === 'gcfs' ? 'My Pipeline' : 'Deals');
                      }}
                      className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-[#E6308A] transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-extrabold text-zinc-500 uppercase tracking-wide">
                          {opp.id}
                        </span>
                        <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                          opp.rating === 'Hot' ? 'bg-[#E6308A]/10 text-[#E6308A]' : 'bg-[#F5A623]/10 text-[#F5A623]'
                        }`}>
                          {opp.rating}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-zinc-800 truncate mt-1">{opp.name}</h4>
                      <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold mt-1">
                        <span>MYR {(opp.value).toLocaleString()}</span>
                        <span className="text-[#3DBFD4]">{opp.probability}% Prob</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setActiveModule(appMode === 'gcfs' ? 'My Pipeline' : 'Deals')}
                className="w-full text-center py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-extrabold text-zinc-600 uppercase tracking-widest mt-4 transition-colors"
              >
                Browse Opportunity Pipeline
              </button>
            </div>

            {/* Column 3: Appointments / To-Do */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-[#E6308A] tracking-wider uppercase">
                    Appointments & To-Do
                  </h3>
                  <span className="text-[10px] font-black text-zinc-600 bg-[#C6E84F] px-2 py-0.5 rounded uppercase">
                    Today
                  </span>
                </div>

                {/* Empty-state Illustration */}
                <div className="mt-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300 border border-dashed border-zinc-200">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-extrabold text-zinc-800 mt-4 uppercase tracking-wide">
                    All Cleaned Up
                  </h4>
                  <p className="text-[10px] text-zinc-400 font-semibold mt-1 max-w-xs leading-relaxed">
                    No outstanding customer meetings or appointments logged for the remainder of today. Enjoy the clear slate!
                  </p>
                </div>
              </div>
              <button onClick={() => setSummaryAction('appointment')} className="w-full text-center py-2 bg-[#C6E84F] hover:opacity-90 rounded-xl text-[10px] font-extrabold text-black uppercase tracking-widest mt-4 transition-all">
                + Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'QTD Engagements' && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 space-y-6 animate-fadeIn">
          <div className="border-b border-zinc-100 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-black text-zinc-800 uppercase tracking-wide">
                Quarter-to-Date Interaction Registry
              </h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">Immutable record of client meetings, calls, and email touchpoints</p>
            </div>
            <button className="h-8 px-4 rounded-xl bg-zinc-900 text-[#C6E84F] text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
              + Log New Interaction
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs divide-y divide-zinc-200">
              <thead>
                <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                  <th className="py-3">Client / Entity</th>
                  <th className="py-3">Touchpoint Channel</th>
                  <th className="py-3">Discussion Subject</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Owner / RM</th>
                  <th className="py-3 text-right">Action Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-150 font-semibold text-zinc-700">
                {appMode === 'gcfs' ? (
                  <>
                    <tr>
                      <td className="py-4 font-extrabold text-zinc-900">Tengku Adnan bin Tengku Zafrul</td>
                      <td className="py-4"><span className="px-2 py-0.5 bg-zinc-100 rounded text-[9px] uppercase">Face-to-Face</span></td>
                      <td className="py-4">Annual Shariah Wealth Portfolio Review</td>
                      <td className="py-4 text-zinc-400">20 May 2026</td>
                      <td className="py-4">James May</td>
                      <td className="py-4 text-right text-green-600 uppercase font-bold">Completed</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-extrabold text-zinc-900">Datin Nurul Izzah binti Anwar</td>
                      <td className="py-4"><span className="px-2 py-0.5 bg-zinc-100 rounded text-[9px] uppercase">Email Outreach</span></td>
                      <td className="py-4">Etiqa Savings Plan Takaful Discussion</td>
                      <td className="py-4 text-zinc-400">10 May 2026</td>
                      <td className="py-4">James May</td>
                      <td className="py-4 text-right text-amber-500 uppercase font-bold">Sent</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-extrabold text-zinc-900">Dr. Rajesh Kumar a/l Subramaniam</td>
                      <td className="py-4"><span className="px-2 py-0.5 bg-zinc-100 rounded text-[9px] uppercase">Dialer Call</span></td>
                      <td className="py-4">Equipment Financing Rate Restructuring</td>
                      <td className="py-4 text-zinc-400">10 May 2026</td>
                      <td className="py-4">James May</td>
                      <td className="py-4 text-right text-green-600 uppercase font-bold">Completed</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="py-4 font-extrabold text-zinc-900">Petronas Trading Corporation Sdn Bhd</td>
                      <td className="py-4"><span className="px-2 py-0.5 bg-zinc-100 rounded text-[9px] uppercase">Corporate SWIFT</span></td>
                      <td className="py-4">Outward SWIFT settlement compliance override review</td>
                      <td className="py-4 text-zinc-400">25 May 2026</td>
                      <td className="py-4">James May</td>
                      <td className="py-4 text-right text-green-600 uppercase font-bold">Completed</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-extrabold text-zinc-900">Sime Darby Plantation Berhad</td>
                      <td className="py-4"><span className="px-2 py-0.5 bg-zinc-100 rounded text-[9px] uppercase">RM Meeting Suite</span></td>
                      <td className="py-4">ESG Palm Oil Sustainability linked loan covenants</td>
                      <td className="py-4 text-zinc-400">24 May 2026</td>
                      <td className="py-4">James May</td>
                      <td className="py-4 text-right text-amber-500 uppercase font-bold">Pending Review</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'QTD Sales KPI' && (
        <div className="space-y-6 animate-fadeIn">
          {/* KPI scorecards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block tracking-wider">Closed Won Volume</span>
              <h3 className="text-xl font-black text-[#E6308A] mt-2">
                {appMode === 'gcfs' ? 'MYR 4.85M' : 'MYR 850M'}
              </h3>
              <span className="text-[9px] text-green-600 mt-1 block">97% of Quarter Target achieved</span>
            </div>
            
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block tracking-wider">Active Pipeline Weighted</span>
              <h3 className="text-xl font-black text-zinc-800 mt-2">
                {appMode === 'gcfs' ? 'MYR 5.50M' : 'MYR 1.32B'}
              </h3>
              <span className="text-[9px] text-zinc-400 mt-1 block">Q2 conversion velocity: +12.5%</span>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block tracking-wider">Cross-Sell Ratio</span>
              <h3 className="text-xl font-black text-green-600 mt-2">
                {appMode === 'gcfs' ? '65%' : '80%'}
              </h3>
              <span className="text-[9px] text-green-600 mt-1 block">▲ 4.8% delta vs previous QTD</span>
            </div>
          </div>

          {/* Detailed Scoreboard Progress */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 space-y-4">
            <h3 className="text-xs font-black text-zinc-850 uppercase tracking-wider">Target vs Accomplished score</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-500 uppercase">
                  <span>Islamic Financing Target</span>
                  <span className="text-[#E6308A]">{appMode === 'gcfs' ? 'MYR 1.8M / 2.0M' : 'MYR 750M / 1.0B'}</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-[#E6308A]" style={{ width: appMode === 'gcfs' ? '90%' : '75%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center text-[10px] font-extrabold text-zinc-500 uppercase">
                  <span>Deposits Target</span>
                  <span className="text-[#C6E84F]">{appMode === 'gcfs' ? 'MYR 2.05M / 2.50M' : 'MYR 1.45B / 1.50B'}</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-[#C6E84F]" style={{ width: appMode === 'gcfs' ? '82%' : '96%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'QTD Service KPI' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Score cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block">Outstanding Tickets</span>
              <h3 className="text-xl font-black text-zinc-850 mt-1">
                {appMode === 'gcfs' ? '3 Active' : '2 Active'}
              </h3>
            </div>
            
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block">SLA Breached Log</span>
              <h3 className="text-xl font-black text-red-500 mt-1">
                {appMode === 'gcfs' ? '1 Violation' : '0 Violations'}
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase block">Average Resolution Speed</span>
              <h3 className="text-xl font-black text-zinc-800 mt-1">
                {appMode === 'gcfs' ? '4.5 Hours' : '12 Hours'}
              </h3>
            </div>
          </div>

          {/* Active complaints checklist */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
            <div className="pb-3 border-b border-zinc-100">
              <h3 className="text-xs font-black text-zinc-800 uppercase tracking-wider">
                CARE Service Desk Monitor
              </h3>
            </div>
            <div className="space-y-3">
              {appMode === 'gcfs' ? (
                <>
                  <div className="p-3 bg-red-50 border border-red-150 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-extrabold text-zinc-800">Accounts &gt; ATM Debit Card Renewal Fee Dispute</h4>
                      <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Mdm Chin Siew Lan · Breach warning: -2 Hours</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-150 text-red-600 rounded text-[9px] uppercase font-black">Breached</span>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-extrabold text-zinc-800">Wealth Management &gt; Transaction Blocked</h4>
                      <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Tengku Adnan · SLA countdown: 4 Hours</span>
                    </div>
                    <span className="px-2 py-0.5 bg-zinc-100 text-zinc-505 rounded text-[9px] uppercase font-black">Investigation</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-extrabold text-zinc-800">Trade Finance &gt; Outward SWIFT Hold</h4>
                      <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Petronas Trading · SLA countdown: 2 Hours</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[9px] uppercase font-black">Urgent</span>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-extrabold text-zinc-800">Syndicated Loans &gt; Covenant Waiver Request</h4>
                      <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">Sime Darby · SLA countdown: 36 Hours</span>
                    </div>
                    <span className="px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded text-[9px] uppercase font-black">Normal</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Chat Analytics' && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 space-y-6 animate-fadeIn">
          <div className="border-b border-zinc-100 pb-3">
            <h3 className="text-sm font-black text-zinc-800 uppercase tracking-wide">
              Conversational Chat Analytics & Outreach Tracker
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Automated campaigns outreach performance and AI inquiry drivers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-4 border border-zinc-200 rounded-2xl bg-zinc-50">
              <span className="text-[9px] text-zinc-400 font-bold block">Total Outreaches</span>
              <span className="text-base font-black text-zinc-900 mt-1 block">42 Contacts</span>
            </div>
            
            <div className="p-4 border border-zinc-200 rounded-2xl bg-zinc-50">
              <span className="text-[9px] text-zinc-400 font-bold block">WhatsApp Read Rate</span>
              <span className="text-base font-black text-green-600 mt-1 block">92.4%</span>
            </div>

            <div className="p-4 border border-zinc-200 rounded-2xl bg-zinc-50">
              <span className="text-[9px] text-zinc-400 font-bold block">Top RM Action</span>
              <span className="text-base font-black text-zinc-800 mt-1 block truncate">Shariah Diversification</span>
            </div>

            <div className="p-4 border border-zinc-200 rounded-2xl bg-zinc-50">
              <span className="text-[9px] text-zinc-400 font-bold block">Top Client Inquiry</span>
              <span className="text-base font-black text-[#E6308A] mt-1 block">
                {appMode === 'gcfs' ? 'AUM Declines' : 'ESG Disclosures'}
              </span>
            </div>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider">Top Conversation Topics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl">
                <span className="font-extrabold text-zinc-800 block">Topic: Shariah Placement Queries</span>
                <span className="text-[10px] text-zinc-400 font-semibold block mt-0.5">8 Interactions · Active in Q2</span>
              </div>
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl">
                <span className="font-extrabold text-zinc-800 block">
                  {appMode === 'gcfs' ? 'Topic: Competitor Deposit CTOS Queries' : 'Topic: Cross-border Currency Hedging'}
                </span>
                <span className="text-[10px] text-zinc-400 font-semibold block mt-0.5">5 Interactions · Active in Q2</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Month Plan' && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 space-y-6 animate-fadeIn">
          <div className="border-b border-zinc-100 pb-3">
            <h3 className="text-sm font-black text-zinc-800 uppercase tracking-wide">
              RM Monthly Priorities Planner
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Scheduled reviews, audits, and compliance milestones for June 2026</p>
          </div>

          <div className="space-y-4">
            {[
              ['Re-KYC checklists due review', 'Review all outstanding files for client records.'],
              ['Review high deposit maturity rates', 'Outreach to clients with expiring term deposits.'],
              [appMode === 'gcfs' ? 'Schedule Private Wealth portfolio alignments' : 'Validate ESG structural covenants for corporate groups', 'Conduct mandatory quarterly audits.'],
              ['Outlook schedule sync with calendars', 'Sync upcoming customer interaction logs.']
            ].map(([title, desc], idx) => (
              <label key={idx} className="flex gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-2xl items-start cursor-pointer hover:border-zinc-300 transition-colors">
                <input type="checkbox" defaultChecked={idx === 3} className="mt-1" />
                <div>
                  <h4 className="text-xs font-extrabold text-zinc-800">{title}</h4>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Quick Actions' && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 space-y-6 animate-fadeIn">
          <div className="border-b border-zinc-100 pb-3">
            <h3 className="text-sm font-black text-zinc-800 uppercase tracking-wide">
              Quick Workspace Actions
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Trigger common customer workflows or check audit histories in one click</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button 
              onClick={() => setActiveModule(appMode === 'gcfs' ? 'My Portfolio' : 'Accounts')}
              className="p-4 bg-gradient-to-br from-zinc-850 to-zinc-950 text-white rounded-2xl hover:opacity-95 transition-opacity text-left shadow border border-zinc-800"
            >
              <Briefcase className="w-5 h-5 text-[#C6E84F] mb-3" />
              <h4 className="text-xs font-black uppercase tracking-wider">{appMode === 'gcfs' ? 'My Portfolio' : 'Accounts Registry'}</h4>
              <p className="text-[9px] text-zinc-400 mt-1 leading-snug">Browse all active client CIF cards and profiles.</p>
            </button>

            <button 
              onClick={() => setActiveModule(appMode === 'gcfs' ? 'My Pipeline' : 'Deals')}
              className="p-4 bg-gradient-to-br from-[#E6308A]/10 to-pink-50 border border-pink-100 text-zinc-800 rounded-2xl hover:opacity-95 transition-opacity text-left shadow"
            >
              <TrendingUp className="w-5 h-5 text-[#E6308A] mb-3" />
              <h4 className="text-xs font-black uppercase tracking-wider">{appMode === 'gcfs' ? 'Lead Pipeline' : 'Deal Structures'}</h4>
              <p className="text-[9px] text-zinc-500 mt-1 leading-snug">Track hot lead conversion rates and expected facilities.</p>
            </button>

            <button 
              onClick={() => setActiveModule('Reports')}
              className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-zinc-800 rounded-2xl hover:opacity-95 transition-opacity text-left shadow"
            >
              <FileText className="w-5 h-5 text-blue-600 mb-3" />
              <h4 className="text-xs font-black uppercase tracking-wider">Reports Center</h4>
              <p className="text-[9px] text-zinc-500 mt-1 leading-snug">Create or schedule compliance audits and exposure charts.</p>
            </button>

            <button 
              onClick={() => setActiveModule('Audit Logs')}
              className="p-4 bg-zinc-50 border border-zinc-200 text-zinc-800 rounded-2xl hover:bg-zinc-100 transition-colors text-left shadow"
            >
              <Sparkles className="w-5 h-5 text-indigo-500 mb-3" />
              <h4 className="text-xs font-black uppercase tracking-wider">Security Audits</h4>
              <p className="text-[9px] text-zinc-500 mt-1 leading-snug">Check logs of data access and failed auth overrides.</p>
            </button>
          </div>
        </div>
      )}
      <Modal
        isOpen={!!summaryAction}
        onClose={() => setSummaryAction(null)}
        title={summaryAction === 'appointment' ? 'Schedule Appointment' : 'AI Insights Workbench'}
        subtitle="RM day plan"
        maxWidth="max-w-lg"
      >
        <div className="space-y-3 text-xs">
          {(summaryAction === 'appointment'
            ? ['Select customer', 'Choose branch/video/phone channel', 'Attach lead or financial goal', 'Send calendar invite']
            : ['Churn risk insight', 'Cross-sell product fit', 'Eligibility pre-screening', 'Draft outreach message']
          ).map((item) => (
            <button key={item} onClick={() => setSummaryAction(null)} className="w-full p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-left font-bold hover:border-[#E6308A]">
              {item}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
