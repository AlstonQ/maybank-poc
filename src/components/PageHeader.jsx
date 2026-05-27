import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Layers, X, Grid, List } from 'lucide-react';

export default function PageHeader({ title, breadcrumb }) {
  const { 
    cardLayout, setCardLayout, workNextOpen, setWorkNextOpen, appMode 
  } = useTheme();
  const openWorkNext = () => setWorkNextOpen(true);

  return (
    <div className="h-14 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between shadow-sm select-none">
      {/* Title & Breadcrumb */}
      <div className="flex flex-col">
        <h1 className="text-base font-bold text-zinc-900 leading-tight">
          {title || 'Home'}
        </h1>
      </div>

      {/* Right control action tray */}
      <div className="flex items-center gap-2">
        {/* Pulse / Sync */}
        <button onClick={openWorkNext} className="h-8 px-3 rounded-lg border border-[#E5E7EB] bg-white text-xs font-semibold text-zinc-700 hover:bg-zinc-50 flex items-center gap-1 shadow-sm">
          <span>Pulse</span>
        </button>

        {/* Action Center */}
        <button onClick={openWorkNext} className="h-8 px-3 rounded-lg border border-[#E5E7EB] bg-white text-xs font-semibold text-zinc-700 hover:bg-zinc-50 flex items-center gap-1 shadow-sm">
          <span>Action Center</span>
        </button>

        {/* Card/List Toggle */}
        <button 
          onClick={() => setCardLayout(!cardLayout)}
          className="h-8 px-3 rounded-lg border border-[#E5E7EB] bg-white text-zinc-800 text-xs font-semibold flex items-center gap-1.5 hover:bg-zinc-50 shadow-sm"
          title="Toggle Grid/List Layout"
        >
          {cardLayout ? (
            <>
              <List className="w-3.5 h-3.5" />
              <span>List View</span>
            </>
          ) : (
            <>
              <Grid className="w-3.5 h-3.5" />
              <span>Card View</span>
            </>
          )}
        </button>

        {/* WORKNEXT trigger */}
        <button 
          onClick={() => setWorkNextOpen(!workNextOpen)}
          className="h-8 px-4 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>WORKNEXT</span>
        </button>
      </div>
    </div>
  );
}
