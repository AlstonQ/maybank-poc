import React from 'react';
import { X } from 'lucide-react';

export default function ContextualDrawer({ isOpen, onClose, title, subtitle, children, width = "w-[600px]", icon: Icon }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" onClick={onClose} />
      <div className={`fixed right-0 top-0 bottom-0 bg-white shadow-2xl z-[110] transform transition-transform duration-300 flex flex-col ${width} animate-slide-in-right`}>
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-100 flex items-start justify-between bg-zinc-50/50">
          <div className="flex gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#E6308A] shadow-sm flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 leading-tight">{title}</h2>
              {subtitle && <p className="text-xs text-zinc-500 font-medium mt-0.5">{subtitle}</p>}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-200 rounded-lg text-zinc-400 hover:text-zinc-600 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col relative">
          {children}
        </div>
      </div>
    </>
  );
}
