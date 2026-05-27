import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw, Share2, Download, Filter, Save, AlertCircle } from 'lucide-react';
import KPICard from '../components/analytics/KPICard';
import ChartWrapper from '../components/analytics/ChartWrapper';
import DashboardGrid from '../components/analytics/DashboardGrid';
import { MockAnalyticsEngine } from '../services/MockAnalyticsEngine';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardViewer({ onBack, dashboardId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [notice, setNotice] = useState('');
  const runAction = (label) => {
    setNotice(`${label} completed. Dashboard configuration audit recorded.`);
    setTimeout(() => setNotice(''), 2500);
  };

  useEffect(() => {
    // Simulate API fetch delay
    setIsLoading(true);
    setTimeout(() => {
      let fetchedData;
      switch(dashboardId) {
        case 'DB-001':
          fetchedData = MockAnalyticsEngine.getExecutiveSummaryData();
          break;
        case 'DB-002':
          fetchedData = MockAnalyticsEngine.getComplaintManagementData();
          break;
        case 'DB-003':
          fetchedData = MockAnalyticsEngine.getSalesPipelineData();
          break;
        default:
          fetchedData = MockAnalyticsEngine.getExecutiveSummaryData();
      }
      setData(fetchedData);
      setIsLoading(false);
    }, 800);
  }, [dashboardId]);

  const COLORS = ['#E6308A', '#C6E84F', '#0A0A0A', '#4F46E5', '#10B981'];

  const renderExecutiveSummary = () => (
    <DashboardGrid 
      kpiCards={data.kpis.map(kpi => <KPICard key={kpi.id} {...kpi} />)}
      charts={[
        <ChartWrapper key="chart-1" title="Revenue Trend vs Target" subtitle="Monthly tracking for current year" fullWidth={true}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.revenueTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `M${(val/1000000).toFixed(1)}`} />
              <Tooltip formatter={(value) => `MYR ${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#E6308A" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Actual Revenue" />
              <Line type="monotone" dataKey="target" stroke="#9CA3AF" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>,
        <ChartWrapper key="chart-2" title="AUM by Segment" subtitle="Distribution of Assets Under Management">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.segmentBreakdown} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.segmentBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
      ]}
    />
  );

  const renderComplaintManagement = () => (
    <DashboardGrid 
      kpiCards={data.kpis.map(kpi => <KPICard key={kpi.id} {...kpi} />)}
      charts={[
        <ChartWrapper key="chart-3" title="Complaint Themes (MAS/ABS)" subtitle="Top recurring themes by volume" fullWidth={true}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.themes} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={120} />
              <Tooltip />
              <Bar dataKey="count" fill="#E6308A" radius={[0, 4, 4, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>,
        <ChartWrapper key="chart-4" title="Root Cause Analysis">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.rootCause} innerRadius={0} outerRadius={80} dataKey="value">
                {data.rootCause.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
      ]}
    />
  );

  const renderSalesPipeline = () => (
    <DashboardGrid 
      kpiCards={data.kpis.map(kpi => <KPICard key={kpi.id} {...kpi} />)}
      charts={[
        <ChartWrapper key="chart-5" title="Pipeline Funnel" subtitle="Deal progression stages">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.funnel} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="stage" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>,
        <ChartWrapper key="chart-6" title="Projected Revenue by Product">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.revenueByProduct} innerRadius={50} outerRadius={80} dataKey="value">
                {data.revenueByProduct.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
      ]}
    />
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-zinc-900">
                {dashboardId === 'DB-001' ? 'Executive Summary' : 
                 dashboardId === 'DB-002' ? 'Complaint Management Dashboard' : 
                 'Sales Pipeline Dashboard'}
              </h1>
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
              </span>
            </div>
            <p className="text-sm text-zinc-500">Last refreshed: Today, {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 mr-4 text-xs font-medium bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg border border-rose-100">
            <AlertCircle className="w-4 h-4" />
            2 SLA Breaches Detected
          </div>
          <button onClick={() => runAction('Dashboard filter')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Filters">
            <Filter className="w-4 h-4" />
          </button>
          <button onClick={() => runAction('Dashboard share')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Share">
            <Share2 className="w-4 h-4" />
          </button>
          <button onClick={() => runAction('Dashboard export')} className="p-2 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors" title="Export">
            <Download className="w-4 h-4" />
          </button>
          <button onClick={() => runAction('Saved view')} className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-white rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save View
          </button>
        </div>
      </div>

      {notice && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          {notice}
        </div>
      )}

      {/* Render Dynamic Content */}
      {isLoading ? (
        <div className="h-96 flex flex-col items-center justify-center text-zinc-400 gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-[#E6308A]" />
          <p>Loading dataset for dashboard...</p>
        </div>
      ) : (
        <>
          {dashboardId === 'DB-001' && renderExecutiveSummary()}
          {dashboardId === 'DB-002' && renderComplaintManagement()}
          {dashboardId === 'DB-003' && renderSalesPipeline()}
        </>
      )}
    </div>
  );
}
