import React from 'react';
import { ChevronUp, PhoneCall, FileText, Settings, History, ClipboardCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const logFooterAction = (label) => {
    window.dispatchEvent(new CustomEvent('maybank-crm-action', { detail: label }));
    scrollToTop();
  };

  return (
    <div className="relative mt-8 select-none">
      {/* Bottom Floating White Action Pills */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur border border-zinc-200 shadow-2xl rounded-full px-5 py-2 z-30 flex items-center gap-4 transition-all duration-300 hover:shadow-[#E6308A]/10">
        <button onClick={() => logFooterAction('CTI call log opened')} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 hover:text-[#E6308A] transition-colors">
          <PhoneCall className="w-3.5 h-3.5 text-[#3DBFD4]" />
          <span>CTI Log</span>
        </button>
        <div className="w-px h-3 bg-zinc-200" />
        
        <button onClick={() => logFooterAction('Notes drawer opened')} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 hover:text-[#E6308A] transition-colors">
          <FileText className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>Notes (2)</span>
        </button>
        <div className="w-px h-3 bg-zinc-200" />
        
        <button onClick={() => logFooterAction('Task planner opened')} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 hover:text-[#E6308A] transition-colors">
          <ClipboardCheck className="w-3.5 h-3.5 text-[#C6E84F] bg-black rounded p-[1px]" />
          <span>Task Planner</span>
        </button>
        <div className="w-px h-3 bg-zinc-200" />
        
        <button onClick={() => logFooterAction('Audit logs shortcut used')} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 hover:text-[#E6308A] transition-colors">
          <History className="w-3.5 h-3.5 text-[#2F4FE0]" />
          <span>Audit Logs</span>
        </button>
        <div className="w-px h-3 bg-zinc-200" />
        
        <button onClick={() => logFooterAction('Console opened')} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 hover:text-[#E6308A] transition-colors">
          <Settings className="w-3.5 h-3.5 text-zinc-400" />
          <span>Console</span>
        </button>
      </div>

      {/* Static Footer metadata text */}
      <footer className="w-full bg-[#0E0E10] border-t border-zinc-900 py-6 px-8 flex items-center justify-between text-[11px] text-zinc-500 font-semibold tracking-wide">
        <div className="flex items-center gap-4">
          <span>Created By: <strong className="text-zinc-300">RM James May</strong></span>
          <span className="text-zinc-800">|</span>
          <span>Last Modified By: <strong className="text-zinc-300">RM James May (26-May-2026)</strong></span>
        </div>

        <div className="flex items-center gap-4">
          <span>© Copyright 2026 Maybank Berhad</span>
          <span className="text-zinc-800">|</span>
          <span>powered by <strong className="text-[#E6308A]">BUSINESS<span className="text-[#C6E84F]">NEXT</span></strong></span>
          
          <button 
            onClick={scrollToTop}
            className="p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg hover:border-zinc-700 transition-colors shadow flex items-center justify-center ml-2"
            title="Scroll to Top"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
