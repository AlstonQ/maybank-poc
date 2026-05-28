import React from 'react';
import { CheckSquare, Clock, ArrowRight, UserCheck, Activity, Database } from 'lucide-react';

export default function WealthTasksAudit({ customer }) {
  if (!customer) return null;

  const tasks = customer.tasks || [];
  const audit = customer.audit || {};

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* RM Action Tasks */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-brand" /> Task & Action Plans
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="divide-y divide-zinc-100">
            {tasks.map(task => (
              <div key={task.id} className="p-5 hover:bg-zinc-50 transition-colors flex items-start gap-4">
                <div className={`p-2 rounded-lg mt-0.5 ${
                  task.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' :
                  task.status === 'In Progress' ? 'bg-amber-100 text-amber-600' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-zinc-900">{task.type}</h4>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                      task.status === 'In Progress' ? 'bg-amber-50 text-amber-600' : 'bg-zinc-100 text-zinc-600'
                    }`}>{task.status}</span>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">{task.desc}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1"><UserCheck className="w-3 h-3" /> {task.owner}</span>
                    <span className="font-semibold text-rose-600">Due: {task.due}</span>
                  </div>
                </div>
              </div>
            ))}
            {tasks.length === 0 && (
              <div className="p-8 text-center text-zinc-500">
                No active tasks.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Audit & Data Lineage */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-500" /> Audit & Data Lineage
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 space-y-5">
          <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            <div>
              <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Recently Viewed By</span>
              <p className="text-sm font-semibold text-zinc-900">{audit.viewedBy}</p>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Exported By</span>
              <p className="text-sm font-semibold text-zinc-900">{audit.exportedBy}</p>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Last System Update</span>
              <p className="text-sm font-semibold text-zinc-900">{audit.lastUpdated}</p>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Data Completeness</span>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-zinc-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${audit.dataCompleteness}%` }}></div>
                </div>
                <span className="text-xs font-bold text-zinc-700">{audit.dataCompleteness}%</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-5 space-y-4">
            <div className="flex items-start gap-3">
              <Database className="w-4 h-4 text-zinc-400 mt-0.5" />
              <div>
                <span className="block text-sm font-bold text-zinc-900">Source Lineage</span>
                <p className="text-xs text-zinc-500">{audit.sourceLineage}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Golden Record Matched</span>
              <span className="font-semibold text-emerald-600">{audit.goldenRecord}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Duplicate Check</span>
              <span className="font-semibold text-zinc-700">{audit.duplicateWarning}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Core Sync Status</span>
              <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-semibold">{audit.syncTimestamp}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
