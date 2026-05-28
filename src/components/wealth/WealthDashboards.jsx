import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area, Legend } from 'recharts';
import { TrendingUp, PieChart as PieChartIcon, Activity, Target, Shield, Clock, Users } from 'lucide-react';

export default function WealthDashboards() {
  const aumTrendData = [
    { month: 'Jan', aum: 120, target: 110 },
    { month: 'Feb', aum: 125, target: 115 },
    { month: 'Mar', aum: 122, target: 118 },
    { month: 'Apr', aum: 130, target: 120 },
    { month: 'May', aum: 135, target: 125 },
    { month: 'Jun', aum: 142, target: 130 },
  ];

  const productPenetrationData = [
    { name: 'Deposits', pct: 95 },
    { name: 'Unit Trust', pct: 65 },
    { name: 'Credit Cards', pct: 85 },
    { name: 'ASNB', pct: 45 },
    { name: 'Financing', pct: 30 },
    { name: 'Takaful/Ins', pct: 25 },
    { name: 'DPM / SI', pct: 15 },
  ];

  const formatRM = (val) => `${val}M`;

  return (
    <div className="space-y-6">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Total Wealth AUM</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-zinc-900">RM 45.2B</span>
            <span className="text-sm font-bold text-emerald-600">+8.5% YoY</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Activity className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Islamic Wealth Penetration</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-zinc-900">38%</span>
            <span className="text-sm font-bold text-emerald-600">+12% YoY</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Protection Gap</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-rose-600">62%</span>
            <span className="text-sm font-semibold text-zinc-500">Uninsured Clients</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">KYC Refresh Overdue</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-amber-600">145</span>
            <span className="text-sm font-semibold text-zinc-500">Profiles</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AUM Growth Chart */}
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand" /> AUM Growth vs Target (MYR Billions)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={aumTrendData}>
                <defs>
                  <linearGradient id="colorAum" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E6308A" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#E6308A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={formatRM} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`RM ${value}B`, '']}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Area type="monotone" name="Actual AUM" dataKey="aum" stroke="#E6308A" strokeWidth={3} fillOpacity={1} fill="url(#colorAum)" />
                <Line type="monotone" name="Target" dataKey="target" stroke="#9CA3AF" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Penetration */}
        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-indigo-500" /> Product Penetration (%)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productPenetrationData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#374151', fontWeight: 500 }} width={80} />
                <RechartsTooltip 
                  cursor={{fill: '#F3F4F6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`${value}%`, 'Penetration']}
                />
                <Bar dataKey="pct" fill="#6366F1" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
}
