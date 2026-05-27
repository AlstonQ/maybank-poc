import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-2xl" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className={`bg-white rounded-3xl shadow-2xl w-full ${maxWidth} overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/80">
          <div>
            <h2 className="text-base font-bold text-zinc-900">{title}</h2>
            {subtitle && <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-0.5">{subtitle}</p>}
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-zinc-200 rounded-lg text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
