import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, Search, Home, TrendingUp, Briefcase, Ticket, ChevronLeft, LayoutDashboard, FileText, Shield
} from 'lucide-react';

export default function Sidebar() {
  const { activeModule, setActiveModule, appMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const modules = [
    { name: "Summary", icon: Home },
    { name: "Dashboards", icon: LayoutDashboard },
    { name: appMode === 'gcfs' ? "My Portfolio" : "Accounts", icon: Briefcase },
    { name: appMode === 'gcfs' ? "My Pipeline" : "Deals", icon: TrendingUp },
    { name: "Service Requests", icon: Ticket },
    { name: "Reports", icon: FileText },
    { name: "Audit Logs", icon: Shield }
  ];

  const filteredModules = modules.filter(m => 
    m.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div 
      className={`h-screen bg-[#0A0A0A] text-white flex flex-col transition-all-300 relative z-40 border-r border-zinc-900 ${
        expanded ? 'w-64' : 'w-[64px]'
      }`}
    >
      {/* Top Toggle Row */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-900">
        {expanded && (
          <span className="font-bold text-[#E6308A] text-xs tracking-widest uppercase">
            MODULE ECONOMY
          </span>
        )}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors mx-auto"
        >
          {expanded ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Expanded Object Search */}
      {expanded && (
        <div className="p-3 border-b border-zinc-900">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
            <input 
              type="text" 
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search object..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E6308A]"
            />
          </div>
        </div>
      )}

      {/* Modules List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-2 space-y-1">
        {filteredModules.map((mod, idx) => {
          const Icon = mod.icon;
          const isActive = activeModule === mod.name;

          return (
            <button
              key={idx}
              onClick={() => setActiveModule(mod.name)}
              className={`w-full flex items-center py-3.5 px-4 transition-colors relative hover:bg-zinc-900 group ${
                isActive ? 'text-[#C6E84F]' : 'text-zinc-400 hover:text-white'
              }`}
              title={mod.name}
            >
              {/* Highlight Pill */}
              {isActive && (
                <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#C6E84F] rounded-r-md" />
              )}
              
              <Icon className="w-5 h-5 flex-shrink-0" />
              
              {expanded && (
                <span className="ml-4 text-xs font-medium tracking-wide truncate transition-opacity duration-300">
                  {mod.name}
                </span>
              )}

              {/* Tooltip for collapsed state */}
              {!expanded && (
                <div className="absolute left-16 bg-[#0E0E10] text-xs font-semibold px-2 py-1.5 rounded shadow-xl border border-zinc-800 hidden group-hover:block whitespace-nowrap z-50">
                  {mod.name}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
