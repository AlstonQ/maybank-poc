import React, { useState, useEffect } from 'react';
import { ArrowLeft, Building2, Network, Globe2, AlertCircle, FileText, Download } from 'lucide-react';
import KPICard from '../components/analytics/KPICard';
import ChartWrapper from '../components/analytics/ChartWrapper';
import DashboardGrid from '../components/analytics/DashboardGrid';
import { MockAnalyticsEngine } from '../services/MockAnalyticsEngine';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function GGBPlacematViewer({ onBack, dashboardId }) {
  const [data, setData] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('Internal PPT');

  useEffect(() => {
    setData(MockAnalyticsEngine.getGGBExposureData());
  }, []);

  if (!data) return null;

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
              <h1 className="text-2xl font-bold text-zinc-900">Account Planning / Placemat</h1>
              <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded font-medium">
                GGB Corporate
              </span>
            </div>
            <p className="text-sm text-zinc-500">Group-level exposure and hierarchy map</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={() => setShowExportModal(true)} className="flex items-center gap-2 px-4 py-2 bg-card-bg text-page-body rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Generate PPT Placemat
          </button>
        </div>
      </div>

      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 shadow-xl w-full max-w-md animate-fade-in-up">
            <h3 className="text-base font-bold text-zinc-900 mb-4">Export Account Placemat</h3>
            <div className="space-y-3 text-xs">
              <label className="text-zinc-600 font-bold block mb-2">Export Format</label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Internal PPT', 'Client PPT', 'PDF'].map((format) => (
                  <button
                    key={format}
                    onClick={() => setExportFormat(format)}
                    className={`py-2 border rounded-lg font-bold ${exportFormat === format ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                  >
                    {format}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span className="font-medium text-zinc-700">Include Sensitive Metrics</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span className="font-medium text-zinc-700">Include Deal Pipeline</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-indigo-600" />
                  <span className="font-medium text-zinc-700">Include Risk & ESG News</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2 justify-end mt-6">
              <button onClick={() => setShowExportModal(false)} className="px-4 py-2 text-xs font-bold text-zinc-600">Cancel</button>
              <button onClick={() => setShowExportModal(false)} className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">Generate</button>
            </div>
          </div>
        </div>
      )}

      <DashboardGrid 
        kpiCards={data.kpis.map(kpi => <KPICard key={kpi.id} {...kpi} />)}
        charts={[
          <ChartWrapper key="ggb-1" title="Exposure by Sector" subtitle="Limit distribution across group entities" fullWidth={true}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.exposureBySector} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={150} />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        ]}
      />
    </div>
  );
}
