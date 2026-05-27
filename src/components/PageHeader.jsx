import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Layers, X, Grid, List } from 'lucide-react';

export default function PageHeader({ title, breadcrumb }) {
  const { 
    cardLayout, setCardLayout, workNextOpen, setWorkNextOpen, appMode 
  } = useTheme();
  const openWorkNext = () => setWorkNextOpen(true);

  return (
    <div className="h-14 bg-white border-b border-zinc-200 px-6 flex items-center justify-between shadow-sm select-none">
      {/* Title & Breadcrumb */}
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-zinc-400 leading-tight">
          {breadcrumb || `Home > ${title || 'Summary'}`}
        </span>
        <h1 className="text-base font-extrabold text-[#E6308A] tracking-wide uppercase leading-tight">
          {title || 'Summary / Home'}
        </h1>
      </div>

      {/* Right control action tray */}
      <div className="flex items-center gap-3">
        {/* Pulse */}
        <button onClick={openWorkNext} className="h-8 px-4 rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-colors shadow-sm">
          Pulse
        </button>

        {/* Action Center */}
        <button onClick={openWorkNext} className="h-8 px-4 rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-colors shadow-sm">
          Action Center
        </button>

        {/* Lime-green Card/List Toggle */}
        <button 
          onClick={() => setCardLayout(!cardLayout)}
          className="h-8 px-3 rounded-full bg-[#C6E84F] text-black text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-sm"
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

        {/* Gradient WORKNEXT trigger */}
        <button 
          onClick={() => setWorkNextOpen(!workNextOpen)}
          className="h-8 px-4 rounded-full bg-gradient-to-r from-[#E6308A] to-[#9E005D] text-white text-xs font-extrabold flex items-center gap-1.5 hover:opacity-95 shadow-md transform hover:scale-[1.02] transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#C6E84F]" />
          <span>WORKNEXT</span>
        </button>

        {/* Sub-layers & Exit icon assets */}
        <button onClick={() => setCardLayout(!cardLayout)} className="p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 shadow-sm" title="Toggle layered view">
          <Layers className="w-3.5 h-3.5" />
        </button>

        <button 
          onClick={() => window.history.back()}
          className="p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-zinc-400 hover:text-red-500 shadow-sm"
          title="Close / Back"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
