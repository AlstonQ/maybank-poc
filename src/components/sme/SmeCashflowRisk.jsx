import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Activity, AlertTriangle, ShieldCheck, PieChart, Info, DollarSign } from 'lucide-react';

const SmeCashflowRisk = ({ customer }) => {
  if (!customer) return null;

  const { cashflow, risk } = customer;

  // Prepare chart data
  const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const chartData = months.map((month, idx) => ({
    name: month,
    Inflow: cashflow?.sixMonthInflow?.[idx] || 0,
    Outflow: cashflow?.sixMonthOutflow?.[idx] || 0,
    Net: (cashflow?.sixMonthInflow?.[idx] || 0) - (cashflow?.sixMonthOutflow?.[idx] || 0)
  }));

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-MY', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1
    }).format(val || 0);
  };

  const getRiskColor = (status) => {
    if (status?.includes('Clean') || status?.includes('Normal') || status?.includes('Satisfactory') || status?.includes('Excellent') || status?.includes('Healthy')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (status?.includes('Medium') || status?.includes('Watch') || status?.includes('1 month')) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  return (
    <div className="space-y-6">
      
      {/* Top Section: Charts & Cashflow KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              6-Month Cashflow Trend
            </h3>
            <div className="text-xs text-zinc-500 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              Data sourced from HOST & Open Banking
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => formatCurrency(value)} tick={{ fontSize: 12, fill: '#71717a' }} />
                <Tooltip formatter={(value) => `MYR ${formatCurrency(value)}`} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                <Line type="monotone" dataKey="Inflow" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="Outflow" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-blue-50/50 border border-blue-100 flex items-start gap-3">
            <PieChart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-blue-900">AI Cashflow Insight</div>
              <div className="text-xs text-blue-800 mt-1">{cashflow?.insightText || 'No insights available.'}</div>
            </div>
          </div>
        </div>

        {/* Working Capital Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Working Capital Cycle
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-zinc-100 pb-3">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Days Sales Outstanding (DSO)</div>
                  <div className={`text-xl font-semibold ${(cashflow?.dso || 0) > 60 ? 'text-rose-600' : 'text-zinc-900'}`}>
                    {cashflow?.dso || 0} <span className="text-sm font-normal text-zinc-500">days</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-100 pb-3">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Days Payable Outstanding (DPO)</div>
                  <div className="text-xl font-semibold text-zinc-900">
                    {cashflow?.dpo || 0} <span className="text-sm font-normal text-zinc-500">days</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Working Capital Cycle</div>
                  <div className={`text-xl font-semibold ${(cashflow?.wcCycleDays || 0) > 45 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {cashflow?.wcCycleDays || 0} <span className="text-sm font-normal text-zinc-500">days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-zinc-500 mb-1">Supplier Conc.</div>
              <div className="text-sm font-medium text-zinc-900 line-clamp-2">{cashflow?.supplierConcentration || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Buyer Conc.</div>
              <div className="text-sm font-medium text-zinc-900 line-clamp-2">{cashflow?.buyerConcentration || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Credit & Risk Flags */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-semibold text-zinc-900 mb-6 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          Credit, Risk & Compliance View
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Credit Bureau */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-100 pb-2">Credit Bureau</h4>
            <div>
              <div className="text-xs text-zinc-500 mb-1">CCRIS Status</div>
              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(risk?.ccrisStatus)}`}>{risk?.ccrisStatus || 'N/A'}</span>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">CTOS Status</div>
              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(risk?.ctosStatus)}`}>{risk?.ctosStatus || 'N/A'}</span>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Internal Watchlist</div>
              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(risk?.watchlistStatus)}`}>{risk?.watchlistStatus || 'Normal'}</span>
            </div>
          </div>

          {/* Account Conduct */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-100 pb-2">Account Conduct</h4>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Conduct of Account</div>
              <div className="text-sm font-medium text-zinc-900">{risk?.conductOfAccount || 'N/A'}</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-xs text-zinc-500 mb-1">Excess Events</div>
                <div className={`text-sm font-medium ${(risk?.excessEvents || 0) > 0 ? 'text-rose-600' : 'text-zinc-900'}`}>{risk?.excessEvents || 0}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-1">Returned Chq</div>
                <div className={`text-sm font-medium ${(cashflow?.returnedChequeCount || 0) > 0 ? 'text-rose-600' : 'text-zinc-900'}`}>{cashflow?.returnedChequeCount || 0}</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">DSCR / Gearing</div>
              <div className="text-sm font-medium text-zinc-900">{risk?.dscr || 'N/A'}x / {risk?.gearing || 'N/A'}x</div>
            </div>
          </div>

          {/* Compliance & AML */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-100 pb-2">Compliance / AML</h4>
            <div>
              <div className="text-xs text-zinc-500 mb-1">AML Risk Rating</div>
              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(risk?.amlRisk)}`}>{risk?.amlRisk || 'Low'}</span>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Sanctions / PEP</div>
              <div className="text-sm font-medium text-zinc-900">{risk?.sanctionsScreening || 'Cleared'} / {risk?.pepExposure || 'None'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Adverse Media</div>
              <div className="text-sm font-medium text-zinc-900">{risk?.adverseMedia || 'None'}</div>
            </div>
          </div>
          
          {/* Collateral & Action */}
          <div className="space-y-4 bg-zinc-50 -m-6 p-6 border-l border-zinc-200">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-200 pb-2">Securities & Action</h4>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Primary Collateral</div>
              <div className="text-sm font-medium text-zinc-900">{risk?.collateralSummary || 'Clean / Unsecured'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Guarantors</div>
              <div className="text-sm font-medium text-zinc-900 line-clamp-2">{risk?.guarantorSummary || 'None'}</div>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-200">
              <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3 text-amber-500" /> Credit Action Strategy
              </div>
              <div className="text-sm font-medium text-zinc-900 italic">"{risk?.creditAction || 'Maintain Facilities'}"</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmeCashflowRisk;
