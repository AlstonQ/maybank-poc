import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, MoreVertical } from 'lucide-react';

export default function KPICard({ title, value, delta, trend, status }) {
  const handleMenu = () => {
    window.dispatchEvent(new CustomEvent('maybank-crm-action', { detail: `KPI drilldown opened: ${title}` }));
  };
  const getTrendIcon = () => {
    if (trend === 'up') return <ArrowUpRight className="w-4 h-4" />;
    if (trend === 'down') return <ArrowDownRight className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getStatusColor = () => {
    if (status === 'success') return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
    if (status === 'danger') return 'text-rose-600 bg-rose-50 border border-rose-100';
    if (status === 'warning') return 'text-amber-600 bg-amber-50 border border-amber-100';
    return 'text-zinc-600 bg-zinc-50 border border-zinc-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative group">
      <button onClick={handleMenu} className="absolute top-4 right-4 p-1 text-zinc-300 hover:text-zinc-600 hover:bg-zinc-100 rounded opacity-0 group-hover:opacity-100 transition-opacity" title="Open KPI drilldown">
        <MoreVertical className="w-4 h-4" />
      </button>
      
      <div className="text-sm font-medium text-zinc-500 mb-2">{title}</div>
      <div className="text-2xl font-bold text-zinc-900 mb-4">{value}</div>
      
      <div className="flex items-center gap-2">
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${getStatusColor()}`}>
          {getTrendIcon()}
          {delta}
        </div>
        <span className="text-xs text-zinc-400">vs last month</span>
      </div>
    </div>
  );
}
