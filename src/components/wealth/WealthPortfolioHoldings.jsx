import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis } from 'recharts';
import { Briefcase, ChevronDown, MoreVertical } from 'lucide-react';

export default function WealthPortfolioHoldings({ customer }) {
  if (!customer) return null;

  // Colors matching the brand theme
  const COLORS = ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EF4444'];
  
  const data = useMemo(() => {
    const alloc = customer.portfolioAnalytics.assetAllocation;
    return [
      { name: 'Global Equities', value: alloc.equities },
      { name: 'Fixed Income', value: alloc.fixedIncome },
      { name: 'Real Estate', value: alloc.alternatives },
      { name: 'Commodities', value: alloc.protection },
      { name: 'Cash', value: alloc.cash }
    ].filter(d => d.value > 0);
  }, [customer]);

  const activeHoldings = customer.holdings.filter(h => h.status === 'Active');
  const formatRM = (val) => new Intl.NumberFormat('en-MY', { minimumFractionDigits: 0 }).format(val);

  // Mock performance data for line charts
  const perfData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 3.2 },
    { month: 'Mar', value: -1.5 },
    { month: 'Apr', value: 4.5 },
    { month: 'May', value: 8.1 }
  ];

  return (
    <div className="p-6 space-y-6">
      
      {/* Top Row: Donut Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-zinc-900 flex items-center gap-2">
            Asset Allocation Donut Chart
          </h3>
          <button className="text-xs font-bold text-zinc-500 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200 flex items-center gap-1 transition-colors">
            Port Chart <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Legend */}
          <div className="space-y-4 text-right pr-6">
            <div className="flex flex-col items-end">
              <span className="text-zinc-800 text-xs font-bold">Cash</span>
              <span className="text-zinc-500 text-[10px] font-bold">7%</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-zinc-800 text-xs font-bold">Commodities</span>
              <span className="text-zinc-500 text-[10px] font-bold">12%</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-zinc-800 text-xs font-bold">Real Estate</span>
              <span className="text-zinc-500 text-[10px] font-bold">18%</span>
            </div>
          </div>
          
          {/* Donut Chart */}
          <div className="h-56 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-zinc-900">
                MYR {(customer.aum / 1000000).toFixed(1)}M
              </span>
              <span className="text-[10px] text-zinc-400 font-bold uppercase mt-1">Total Assets</span>
            </div>
          </div>
          
          {/* Right Legend */}
          <div className="space-y-3 pl-6">
            {data.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                <div className="flex flex-col">
                  <span className="text-zinc-800 font-bold">{entry.name}</span>
                  <span className="text-zinc-500 text-[10px] font-bold">{entry.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Row: Holding Table */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
          <h3 className="font-bold text-zinc-900">Holding Table</h3>
          <button className="text-xs font-bold text-zinc-500 bg-white hover:bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200 flex items-center gap-1 transition-colors">
            All Next Holding <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-zinc-50 text-[10px] font-extrabold text-zinc-400 border-b border-zinc-200 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3 font-semibold">Holding</th>
                <th className="px-5 py-3 font-semibold text-right">Total Assets</th>
                <th className="px-5 py-3 font-semibold text-right">MYR Recent</th>
                <th className="px-5 py-3 font-semibold text-right">$ Details</th>
                <th className="px-5 py-3 font-semibold text-right">% Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {activeHoldings.map((holding, idx) => {
                const color = COLORS[idx % COLORS.length];
                const pctChange = holding.returnPct || 12.6;
                return (
                  <tr key={holding.id} className="hover:bg-zinc-50 transition-colors cursor-pointer">
                    <td className="px-5 py-3">
                      <div className="font-bold text-zinc-900">{holding.assetClass}</div>
                      <div className="text-[10px] font-medium text-zinc-500">Myr {holding.accountNo.slice(-6)}</div>
                    </td>
                    <td className="px-5 py-3 text-right font-bold text-zinc-700">
                      {formatRM(holding.marketValue)}
                    </td>
                    <td className="px-5 py-3 text-right text-zinc-500 font-medium text-xs">
                      ${formatRM(holding.cost)}
                    </td>
                    <td className="px-5 py-3 text-right text-xs font-bold" style={{ color: color }}>
                      {((holding.marketValue / customer.aum) * 100).toFixed(2)}%
                    </td>
                    <td className="px-5 py-3 text-right text-xs font-bold" style={{ color: color }}>
                      {pctChange}%
                    </td>
                  </tr>
                );
              })}
              {/* Total Row */}
              <tr className="bg-zinc-50">
                <td className="px-5 py-4 font-black text-zinc-900 text-xs">Total</td>
                <td className="px-5 py-4 text-right font-black text-zinc-900 text-xs">{formatRM(customer.aum)}</td>
                <td className="px-5 py-4 text-right font-black text-zinc-500 text-xs">$1,345,950</td>
                <td className="px-5 py-4 text-right font-black text-zinc-900 text-xs">100.00%</td>
                <td className="px-5 py-4 text-right font-black text-zinc-900 text-xs">12.62%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row: Performance Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Performance Ret */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-zinc-500 text-xs uppercase tracking-wider">Performance Reti</h3>
            <MoreVertical className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-emerald-600 text-2xl font-black mb-4">
            {customer.portfolioAnalytics.ytdReturn}% YTD
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={perfData}>
                <XAxis dataKey="month" hide />
                <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time-Weighted Return */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-zinc-500 text-xs uppercase tracking-wider">Time-Weighted Return</h3>
            <MoreVertical className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-brand text-2xl font-black mb-4">
            {customer.portfolioAnalytics.ytdReturn}% YTD
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={perfData}>
                <XAxis dataKey="month" hide />
                <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ffb81c" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
}
