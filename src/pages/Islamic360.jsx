import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { maskPII, canViewSensitive } from '../utils/securityUtils';
import { mockCases } from '../data/mockData';
import { 
  Lock, Edit3, Award, FileText, Calendar, ShieldAlert
} from 'lucide-react';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend
} from 'recharts';

export default function Islamic360({ currentCustomer, setActiveModal }) {
  const { isDataMaskingEnabled, currentUserRole } = useTheme();
  const tabs = ["Overview", "Islamic Holdings", "Shariah Advisory", "Interactions", "Statements"];
  const [activeSubTab, setActiveSubTab] = useState(tabs[0]);

  // Charts Mock Data
  const assetAllocationData = [
    { name: 'Mudarabah', value: 45, color: '#3DBFD4' },
    { name: 'Sukuk', value: 35, color: '#E6308A' },
    { name: 'Takaful', value: 20, color: '#F5A623' }
  ];

  return (
    <div className="space-y-6">
      {/* Primary Detail Tabs */}
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-4 flex gap-2 flex-wrap">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSubTab(tab)}
            className={`h-8 px-4 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${
              activeSubTab === tab 
                ? 'bg-green-600 text-white' 
                : 'bg-green-50 hover:bg-green-100 text-green-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {/* OVERVIEW SUBTAB */}
        {activeSubTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-green-600 tracking-wider uppercase">
                    Islamic Profile Info
                  </h3>
                  <Edit3 className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-green-600" />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-100">
                    <img src={currentCustomer.photoUrl} alt={currentCustomer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-800 leading-snug">{currentCustomer.name}</h4>
                    <span className="text-[10px] text-green-700 font-extrabold uppercase bg-green-100 px-2.5 py-0.5 rounded-full inline-block mt-1">
                      {currentCustomer.segment}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-600 font-semibold space-y-2.5 pt-2">
                  <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                    <span className="text-zinc-400">Date of Birth</span>
                    <span>{currentCustomer.dob}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-50 pb-1.5">
                    <span className="text-zinc-400">Income Band</span>
                    <span>{currentCustomer.incomeBand}</span>
                  </div>
                  <div className="flex justify-between pb-1.5">
                    <span className="text-zinc-400">Mobile Phone</span>
                    <span>{maskPII(currentCustomer.mobile, 'phone', isDataMaskingEnabled)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
                <div className="pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">Relationship Manager</h3>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-zinc-700">
                  <div>
                    <span className="font-extrabold text-zinc-900 block">{currentCustomer.pic.rmName}</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">{currentCustomer.pic.role}</span>
                  </div>
                  <div className="text-right">
                    <span className="block">{currentCustomer.pic.phone}</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">{currentCustomer.pic.branch}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <h3 className="text-xs font-black text-green-600 tracking-wider uppercase">Appointments</h3>
                <Calendar className="w-4 h-4 text-zinc-400" />
              </div>

              <div className="mt-4 space-y-3">
                {currentCustomer.appointments?.map((app, idx) => (
                  <div key={idx} className="p-3 border border-zinc-100 rounded-xl flex justify-between items-center">
                    <div>
                      <h4 className="text-[11px] font-extrabold text-zinc-800">{app.type}</h4>
                      <span className="text-[9px] text-zinc-400 font-semibold block mt-0.5">{app.date} • {app.time}</span>
                    </div>
                    <span className="text-[9px] bg-green-50 text-green-600 font-bold px-2 py-1 rounded">{app.status}</span>
                  </div>
                ))}
                {(!currentCustomer.appointments || currentCustomer.appointments.length === 0) && (
                  <p className="text-[10px] text-zinc-400 font-semibold text-center py-4">No upcoming appointments.</p>
                )}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-green-600 tracking-wider uppercase">Islamic Recommendations</h3>
                  <Award className="w-4 h-4 text-[#F5A623]" />
                </div>
                <div className="mt-4 space-y-3">
                  {currentCustomer.nba?.map((action, idx) => (
                    <div key={idx} className="p-3 rounded-2xl border bg-zinc-50 border-zinc-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black uppercase text-zinc-800">{action.product}</span>
                        <span className="text-[9px] font-bold text-zinc-500 bg-white px-1.5 rounded">{action.confidence}% Match</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-semibold">{action.reason}</p>
                    </div>
                  ))}
                  {(!currentCustomer.nba || currentCustomer.nba.length === 0) && (
                    <p className="text-[10px] text-zinc-400 font-semibold text-center py-4">No recommendations available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ISLAMIC HOLDINGS SUBTAB */}
        {activeSubTab === "Islamic Holdings" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200 h-[300px] flex flex-col justify-between">
                <div className="pb-2 border-b border-zinc-100">
                  <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase">Shariah Asset Allocation</h3>
                </div>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={assetAllocationData} innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                        {assetAllocationData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: 10 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
              <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase pb-3 border-b border-zinc-100">Shariah-Compliant Accounts</h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-xs divide-y divide-zinc-200">
                  <thead>
                    <tr className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">
                      <th className="py-2">Facility Name</th>
                      <th className="py-2">Islamic Concept</th>
                      <th className="py-2 text-right">Balance (MYR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-700 font-semibold">
                    {currentCustomer.holdings?.filter(h => h.islamic).map((h, idx) => (
                      <tr key={idx}>
                        <td className="py-3 font-extrabold text-zinc-800">{h.name}</td>
                        <td className="py-3">
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                            {h.type}
                          </span>
                        </td>
                        <td className={`py-3 text-right font-black ${h.balance < 0 ? 'text-red-500' : 'text-zinc-900'}`}>
                          MYR {h.balance.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SHARIAH ADVISORY */}
        {activeSubTab === "Shariah Advisory" && (
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase pb-3 border-b border-zinc-100">Zakat & Legacy Planning (Wasiyyah)</h3>
            <div className="p-4 bg-green-50 border border-green-100 rounded-xl mt-4">
              <h4 className="text-sm font-black text-green-800">Islamic Financial Health</h4>
              <p className="text-xs text-green-700 mt-2">Customer has expressed interest in Wasiyyah legacy planning. 100% of holdings are Shariah-compliant.</p>
            </div>
          </div>
        )}

        {/* INTERACTIONS SUBTAB */}
        {activeSubTab === "Interactions" && (
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase pb-3 border-b border-zinc-100">Unified Timeline</h3>
            <div className="mt-6 space-y-6 relative pl-6 border-l-2 border-zinc-100">
              {currentCustomer.interactions?.map((int, idx) => {
                const allowed = canViewSensitive(currentUserRole, int.confidential);
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-white bg-green-600 shadow-sm" />
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-black text-zinc-800">{int.subject}</h4>
                        <span className="text-[10px] text-zinc-400 font-semibold mt-1 block">
                          {int.date} • {int.type} • {int.channel}
                        </span>
                      </div>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${int.status === 'Closed' ? 'bg-zinc-100 text-zinc-500' : 'bg-red-50 text-red-600'}`}>
                        {int.status}
                      </span>
                    </div>
                    {!allowed && (
                      <div className="mt-2 text-[10px] font-bold text-red-500 flex items-center gap-1 bg-red-50 p-2 rounded-lg inline-flex">
                        <Lock className="w-3 h-3" /> Confidential Note Masked
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STATEMENTS SUBTAB */}
        {activeSubTab === "Statements" && (
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-200">
            <h3 className="text-xs font-black text-zinc-800 tracking-wider uppercase pb-3 border-b border-zinc-100">Document Vault</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCustomer.statements?.map((stmt, idx) => (
                <div key={idx} className="p-4 border border-zinc-200 rounded-2xl flex items-start gap-4 hover:border-green-600 cursor-pointer transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-400 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-800">{stmt.type}</h4>
                    <span className="text-[10px] text-zinc-400 font-semibold block mt-0.5">{stmt.date}</span>
                    <span className="text-[9px] font-black text-zinc-500 uppercase mt-2 block bg-zinc-100 px-2 py-0.5 rounded inline-block">
                      {stmt.accountMasked}
                    </span>
                  </div>
                </div>
              ))}
              {(!currentCustomer.statements || currentCustomer.statements.length === 0) && (
                <p className="text-[10px] text-zinc-400 font-semibold col-span-full py-4 text-center">No statements available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
