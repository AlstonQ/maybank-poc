import React, { useState } from 'react';
import { Search, Plus, LayoutDashboard, Star, MoreHorizontal, Clock, ChevronRight } from 'lucide-react';
import DashboardViewer from './DashboardViewer';
import GGBPlacematViewer from './GGBPlacematViewer';
import { useTheme } from '../context/ThemeContext';
import Modal from '../components/Modal';

export default function DashboardsHomepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDashboardId, setSelectedDashboardId] = useState(null);
  const [activeTab, setActiveTab] = useState('Analytics Studio');
  const [dashboardAction, setDashboardAction] = useState(null);
  const { appMode } = useTheme();
  
  if (selectedDashboardId) {
    if (selectedDashboardId === 'DB-GGB-001' && appMode === 'ggb') {
      return <GGBPlacematViewer onBack={() => setSelectedDashboardId(null)} dashboardId={selectedDashboardId} />;
    }
    return <DashboardViewer onBack={() => setSelectedDashboardId(null)} dashboardId={selectedDashboardId} />;
  }

  // Enhanced mock dashboards specifically for the new requirements
  const enhancedDashboards = [
    { id: "DB-001", name: "Executive Summary", description: "High-level overview of portfolio growth, pipeline health, and top at-risk accounts.", isFavorite: true, lastViewed: "26 May 2026", category: "Management" },
    { id: "DB-002", name: "Complaint Management Dashboard", description: "Trends, SLA tracking, root causes and escalation aging.", isFavorite: false, lastViewed: "20 May 2026", category: "Support" },
    { id: "DB-003", name: "Sales Pipeline Dashboard", description: "Revenue projections, conversion rates, and stuck deals.", isFavorite: true, lastViewed: "25 May 2026", category: "Sales" },
    { id: "DB-004", name: "RM Portfolio Dashboard", description: "Individual relationship manager performance metrics and product penetration.", isFavorite: false, lastViewed: "18 May 2026", category: "Sales" },
    ...(appMode === 'ggb' ? [
      { id: "DB-GGB-001", name: "Account Planning / Placemat", description: "Corporate exposure, parent-subsidiary hierarchy and cross-border limits.", isFavorite: true, lastViewed: "26 May 2026", category: "Corporate" },
      { id: "DB-GGB-002", name: "Regional Customer 360", description: "Consolidated pipeline view and multi-product opportunity tracking.", isFavorite: false, lastViewed: "24 May 2026", category: "Corporate" }
    ] : [])
  ];

  const filteredDashboards = enhancedDashboards.filter(db => 
    db.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Tabs as requested: Analytics Studio, Analytics Explorer, Dashboard */}
      <div className="border-b border-zinc-200">
        <nav className="-mb-px flex space-x-8">
          {['Analytics Studio', 'Analytics Explorer'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-brand text-brand'
                  : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search dashboards..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6308A]/20 focus:border-brand"
          />
        </div>
        
        <button onClick={() => setDashboardAction('new')} className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:bg-[#D42B7D] transition-colors shadow-sm shadow-[#E6308A]/20">
          <Plus className="w-4 h-4" />
          New Dashboard
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDashboards.map(dashboard => (
          <div 
            key={dashboard.id} 
            onClick={() => setSelectedDashboardId(dashboard.id)}
            className="bg-white rounded-xl shadow-sm border border-zinc-100 p-5 hover:shadow-md hover:border-brand/30 transition-all group cursor-pointer flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={(e) => { e.stopPropagation(); setDashboardAction('favorite'); }}
                  className="p-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  <Star className={`w-4 h-4 ${dashboard.isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setDashboardAction('more'); }}
                  className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 className="font-semibold text-zinc-900 group-hover:text-brand transition-colors mb-2">
              {dashboard.name}
            </h3>
            
            <p className="text-sm text-zinc-500 mb-6 line-clamp-2 flex-1">
              {dashboard.description}
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Viewed {dashboard.lastViewed}</span>
              </div>
              <div className="flex items-center text-xs font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                View <ChevronRight className="w-3 h-3 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDashboards.length === 0 && (
        <div className="py-12 text-center text-zinc-500 bg-white rounded-xl border border-dashed border-zinc-200">
          No dashboards found matching your criteria.
        </div>
      )}

      <Modal
        isOpen={!!dashboardAction}
        onClose={() => setDashboardAction(null)}
        title={dashboardAction === 'new' ? 'Create Custom Dashboard' : dashboardAction === 'favorite' ? 'Quick Link Updated' : 'Dashboard Actions'}
        subtitle="Analytics Studio"
        maxWidth="max-w-lg"
      >
        <div className="space-y-3 text-xs">
          {['Choose source report', 'Set refresh frequency', 'Select KPI cards', 'Apply role visibility', 'Add to quick links'].map((item) => (
            <label key={item} className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg font-semibold">
              <input type="checkbox" defaultChecked />
              <span>{item}</span>
            </label>
          ))}
          <div className="flex justify-end gap-2 pt-4">
            <button onClick={() => setDashboardAction(null)} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
            <button onClick={() => setDashboardAction(null)} className="px-5 py-2 rounded-lg bg-brand text-white font-bold">Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
