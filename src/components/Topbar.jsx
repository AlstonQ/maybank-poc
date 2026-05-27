import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, Grid, Network, HelpCircle, LayoutGrid, LogOut } from 'lucide-react';

export default function Topbar() {
  const { 
    appMode, setAppMode, searchQuery, setSearchQuery, activeModule, setActiveModule,
    currentUserRole, setCurrentUserRole, isDataMaskingEnabled, setIsDataMaskingEnabled
  } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [securityPanelOpen, setSecurityPanelOpen] = useState(false);
  const [activePopover, setActivePopover] = useState(null);

  const togglePopover = (name) => {
    setActivePopover(activePopover === name ? null : name);
    setSecurityPanelOpen(false);
    setDropdownOpen(false);
  };

  // Dropdown list based on GCFS vs GGB
  const retailOptions = ["Summary", "My Portfolio", "My Pipeline", "Service Requests"];
  const corporateOptions = ["Summary", "Accounts", "Deals", "Service Requests"];
  const options = appMode === 'gcfs' ? retailOptions : corporateOptions;

  const handleDropdownSelect = (opt) => {
    setActiveModule(opt);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className="h-16 bg-header-bg text-white flex items-center justify-between px-6 border-b border-[#464848] z-30 relative shadow-md">
      {/* Left Branded Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand to-white flex items-center justify-center font-bold text-black text-sm tracking-wider shadow">
          M
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xs tracking-widest text-brand leading-none uppercase">
            BUSINESS<span className="text-white">NEXT</span>
          </span>
          <span className="text-[10px] text-zinc-400 font-semibold tracking-wider">Maybank CRM POC</span>
        </div>
      </div>

      {/* Centered Context Pill + Advanced Search */}
      <div className="flex items-center gap-3 max-w-xl flex-1 justify-center">
        {/* Dynamic Context Pill Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="h-10 px-4 bg-[#292A2A] border border-[#464848] rounded-full flex items-center gap-2 text-xs font-semibold hover:border-zinc-700 hover:bg-[#464848] transition-all shadow-inner"
          >
            <span className="text-white uppercase tracking-wide">
              {activeModule === 'Summary' ? 'Summary' : activeModule} ▾
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-12 left-0 w-48 bg-header-bg border border-[#464848] rounded-xl shadow-2xl z-50 py-2 py-1.5 text-xs text-zinc-300">
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDropdownSelect(opt)}
                  className="w-full text-left px-4 py-2 hover:bg-[#292A2A] hover:text-white transition-colors font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Advanced Search Input */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-3.5 h-3.5 w-3.5 text-zinc-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Advanced search object..."
            className="w-full h-10 bg-[#292A2A] border border-[#464848] rounded-full pl-10 pr-4 py-1.5 text-xs text-white placeholder-[#C6C8C8] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Right-aligned Action Clusters */}
      <div className="flex items-center gap-4 relative">
        {/* Bell */}
        <div className="relative">
          <button onClick={() => togglePopover('notifications')} className={`p-2 rounded-full relative transition-all shadow ${activePopover === 'notifications' ? 'bg-brand text-white' : 'bg-[#292A2A] text-zinc-400 hover:text-white hover:bg-[#464848]'}`}>
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </button>
          {activePopover === 'notifications' && (
            <div className="absolute top-12 right-0 w-64 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-2 z-50 text-white">
              <div className="px-4 py-2 border-b border-[#464848]"><h4 className="text-xs font-bold">Notifications (2)</h4></div>
              <div className="px-4 py-3 border-b border-[#464848] hover:bg-[#292A2A] cursor-pointer">
                <span className="text-[10px] text-red-500 font-bold block">SLA Alert</span>
                <span className="text-xs">CARE Complaint escalated</span>
              </div>
              <div className="px-4 py-3 hover:bg-[#292A2A] cursor-pointer">
                <span className="text-[10px] text-green-500 font-bold block">Success</span>
                <span className="text-xs">Deal won: Group Corporate</span>
              </div>
            </div>
          )}
        </div>

        {/* App grid */}
        <div className="relative">
          <button onClick={() => togglePopover('apps')} className={`p-2 rounded-full transition-all shadow ${activePopover === 'apps' ? 'bg-brand text-white' : 'bg-[#292A2A] text-zinc-400 hover:text-white hover:bg-[#464848]'}`}>
            <Grid className="w-4 h-4" />
          </button>
          {activePopover === 'apps' && (
            <div className="absolute top-12 right-0 w-48 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-2 z-50 text-white grid grid-cols-2 gap-2 p-2">
              <div className="p-3 bg-[#292A2A] hover:bg-[#464848] rounded-lg text-center cursor-pointer">
                <span className="text-[10px] font-bold">Avaloq Core</span>
              </div>
              <div className="p-3 bg-[#292A2A] hover:bg-[#464848] rounded-lg text-center cursor-pointer">
                <span className="text-[10px] font-bold">e-KYC Hub</span>
              </div>
            </div>
          )}
        </div>

        {/* Hierarchy */}
        <div className="relative">
          <button onClick={() => togglePopover('hierarchy')} className={`p-2 rounded-full transition-all shadow ${activePopover === 'hierarchy' ? 'bg-brand text-white' : 'bg-[#292A2A] text-zinc-400 hover:text-white hover:bg-[#464848]'}`}>
            <Network className="w-4 h-4" />
          </button>
          {activePopover === 'hierarchy' && (
            <div className="absolute top-12 right-0 w-64 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-3 z-50 text-white">
              <div className="px-4 pb-2 border-b border-[#464848]"><h4 className="text-xs font-bold">Relationship Hierarchy</h4></div>
              <div className="p-4 text-xs text-zinc-400 text-center">
                Select a customer profile to view hierarchy.
              </div>
            </div>
          )}
        </div>

        {/* Help */}
        <div className="relative">
          <button onClick={() => togglePopover('help')} className={`p-2 rounded-full transition-all shadow ${activePopover === 'help' ? 'bg-brand text-white' : 'bg-[#292A2A] text-zinc-400 hover:text-white hover:bg-[#464848]'}`}>
            <HelpCircle className="w-4 h-4" />
          </button>
          {activePopover === 'help' && (
            <div className="absolute top-12 right-0 w-64 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-3 z-50 text-white">
               <div className="px-4 pb-2 border-b border-[#464848]"><h4 className="text-xs font-bold">Knowledge Center</h4></div>
               <div className="px-4 py-2 hover:bg-[#292A2A] cursor-pointer text-xs">Platform Guide</div>
               <div className="px-4 py-2 hover:bg-[#292A2A] cursor-pointer text-xs">Contact IT Support</div>
            </div>
          )}
        </div>

        {/* App layout toggler */}
        <div className="relative">
          <button onClick={() => togglePopover('layout')} className={`p-2 rounded-full transition-all shadow ${activePopover === 'layout' ? 'bg-brand text-white' : 'bg-[#292A2A] text-zinc-400 hover:text-white hover:bg-[#464848]'}`}>
            <LayoutGrid className="w-4 h-4" />
          </button>
          {activePopover === 'layout' && (
            <div className="absolute top-12 right-0 w-48 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-3 z-50 text-white px-4">
              <h4 className="text-xs font-bold mb-3 border-b border-[#464848] pb-2">Layout Mode</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input type="radio" name="layout" defaultChecked className="text-brand" /> Grid View
                </label>
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input type="radio" name="layout" className="text-brand" /> List View
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Logout */}
        <button 
          onClick={handleLogout}
          className="p-2 bg-[#292A2A] hover:bg-[#464848] rounded-full text-zinc-400 hover:text-red-400 transition-all shadow"
          title="Sign Out"
        >
          <LogOut className="w-4 h-4" />
        </button>

        {/* User avatar profile & Security Panel */}
        <div className="relative flex items-center pl-2 border-l border-[#464848]">
          <button 
            onClick={() => { setSecurityPanelOpen(!securityPanelOpen); setActivePopover(null); }}
            className="flex items-center gap-2 hover:bg-[#292A2A] rounded-full p-1 pr-3 transition-colors"
          >
            <div className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">
              {currentUserRole === 'Executive' ? 'EX' : currentUserRole === 'Branch Manager' ? 'BM' : 'AG'}
            </div>
            <div className="flex flex-col text-left hidden sm:flex">
              <span className="text-xs font-semibold text-white leading-tight">James May</span>
              <span className="text-[10px] text-brand font-bold">{currentUserRole}</span>
            </div>
          </button>
          
          {securityPanelOpen && (
            <div className="absolute top-14 right-0 w-64 bg-header-bg border border-[#464848] rounded-xl shadow-2xl py-3 z-50">
              <div className="px-4 pb-3 border-b border-[#464848] mb-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Security Demo Panel</h4>
                <p className="text-[10px] text-zinc-500 leading-snug">Toggle roles to demonstrate RBAC and data masking rules dynamically.</p>
              </div>
              
              <div className="px-4 py-2">
                <label className="text-xs font-semibold text-zinc-300 block mb-2">Active Role</label>
                <div className="space-y-1">
                  {['Executive', 'Branch Manager', 'Agent / RM'].map(role => (
                    <button
                      key={role}
                      onClick={() => { setCurrentUserRole(role); setSecurityPanelOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${currentUserRole === role ? 'bg-brand/20 text-brand' : 'text-zinc-400 hover:bg-[#292A2A] hover:text-white'}`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="px-4 py-3 mt-2 border-t border-[#464848]">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block">Data Masking (PII)</label>
                    <span className="text-[10px] text-zinc-500">Obfuscate sensitive fields</span>
                  </div>
                  <button 
                    onClick={() => setIsDataMaskingEnabled(!isDataMaskingEnabled)}
                    className={`w-10 h-5 rounded-full relative transition-colors ${isDataMaskingEnabled ? 'bg-brand' : 'bg-zinc-700'}`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${isDataMaskingEnabled ? 'left-5.5 translate-x-5' : 'left-0.5 translate-x-0'}`} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
