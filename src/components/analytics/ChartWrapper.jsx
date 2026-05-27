import React, { useState } from 'react';
import { MoreVertical, Download, Maximize2, Loader2 } from 'lucide-react';

export default function ChartWrapper({ title, subtitle, children, isLoading = false, onExport, fullWidth }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between relative">
        <div>
          <h3 className="font-semibold text-zinc-900">{title}</h3>
          {subtitle && <p className="text-xs text-zinc-500 mt-0.5">{subtitle}</p>}
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-1.5 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
            title="Expand"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <div className="relative">
            <button 
              className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-zinc-200 shadow-xl rounded-lg py-1 z-10">
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onExport && onExport('csv');
                  }}
                >
                  <Download className="w-4 h-4" /> Export to CSV
                </button>
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onExport && onExport('png');
                  }}
                >
                  <Download className="w-4 h-4" /> Export to PNG
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 relative min-h-[300px] flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-zinc-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-[#E6308A]" />
            <span className="text-sm font-medium">Generating visualization...</span>
          </div>
        ) : (
          <div className="w-full h-full min-h-[300px]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
