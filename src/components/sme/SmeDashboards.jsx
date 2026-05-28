import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { PieChart as PieChartIcon, TrendingUp, AlertCircle, Users } from 'lucide-react';
import { mockCustomers } from '../../data/mockData';

const SmeDashboards = () => {
  // Aggregate data for SME customers
  const smeCustomers = mockCustomers.filter(c => c.segment === 'SME');
  
  // 1. Portfolio by Industry
  const industryCount = smeCustomers.reduce((acc, curr) => {
    acc[curr.industry] = (acc[curr.industry] || 0) + 1;
    return acc;
  }, {});
  const industryData = Object.keys(industryCount).map(key => ({ name: key, value: industryCount[key] }));
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  // 2. AUM vs Borrowings Tier (Top 5)
  const topCustomers = [...smeCustomers].sort((a, b) => (b.aum + b.totalBorrowings) - (a.aum + a.totalBorrowings)).slice(0, 5);
  const exposureData = topCustomers.map(c => ({
    name: c.tradingName || c.name.substring(0, 15),
    Deposits: c.aum / 1000000,
    Borrowings: (c.totalBorrowings || 0) / 1000000
  }));

  // 3. Risk Profile Distribution
  const riskCount = smeCustomers.reduce((acc, curr) => {
    const risk = curr.riskRating || 'Unknown';
    acc[risk] = (acc[risk] || 0) + 1;
    return acc;
  }, {});
  const riskData = Object.keys(riskCount).map(key => ({ name: key, value: riskCount[key] }));
  const RISK_COLORS = { 'Low Risk': '#10b981', 'Medium Risk': '#f59e0b', 'High Risk': '#ef4444', 'Unknown': '#94a3b8' };

  return (
    <div className="space-y-6">
      
      {/* Top Level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-zinc-500 font-medium">Total SME Clients</div>
            <div className="text-2xl font-bold text-zinc-900">{smeCustomers.length}</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-zinc-500 font-medium">Total SME Deposits</div>
            <div className="text-2xl font-bold text-zinc-900">
              RM {(smeCustomers.reduce((acc, c) => acc + (c.aum || 0), 0) / 1000000).toFixed(1)}M
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
            <PieChartIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-zinc-500 font-medium">Total SME Financing</div>
            <div className="text-2xl font-bold text-zinc-900">
              RM {(smeCustomers.reduce((acc, c) => acc + (c.totalBorrowings || 0), 0) / 1000000).toFixed(1)}M
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-zinc-500 font-medium">Watchlist Accounts</div>
            <div className="text-2xl font-bold text-rose-600">
              {smeCustomers.filter(c => c.risk?.watchlistStatus && c.risk.watchlistStatus !== 'Normal').length}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Industry Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="text-sm font-semibold text-zinc-900 mb-6 flex items-center gap-2">
            <PieChartIcon className="w-4 h-4 text-blue-600" />
            Portfolio by Industry
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={industryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="text-sm font-semibold text-zinc-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            Risk Rating Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f4f4f5" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} width={100} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={RISK_COLORS[entry.name] || '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Exposures */}
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm lg:col-span-2">
          <h3 className="text-sm font-semibold text-zinc-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            Top 5 SME Client Exposures (MYR Millions)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={exposureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#71717a' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                <Tooltip formatter={(value) => `${value}M`} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="Deposits" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Borrowings" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmeDashboards;
