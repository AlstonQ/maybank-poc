import React, { useState } from 'react';
import { ArrowLeft, Save, CheckCircle2, ChevronRight, Database, Filter, LayoutTemplate, Play } from 'lucide-react';

export default function ReportBuilderWizard({ onCancel, onSave }) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Data Source', icon: Database, description: 'Select primary module' },
    { id: 2, title: 'Fields & Joins', icon: LayoutTemplate, description: 'Choose columns' },
    { id: 3, title: 'Filters & Grouping', icon: Filter, description: 'Refine data' },
    { id: 4, title: 'Preview & Run', icon: Play, description: 'Finalize report' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onCancel}
            className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Report Builder</h1>
            <p className="text-sm text-zinc-500">Create a new custom analytical report</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onSave}
            disabled={currentStep < 4}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
              currentStep === 4 
                ? 'bg-[#E6308A] text-white hover:bg-[#D42B7D] shadow-[#E6308A]/20' 
                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
            }`}
          >
            <Save className="w-4 h-4" />
            Save Report
          </button>
        </div>
      </div>

      {/* Stepper */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6">
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className={`relative pr-8 sm:pr-20 ${index === steps.length - 1 ? 'pr-0 sm:pr-0' : ''}`}>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className={`h-0.5 w-full ${currentStep > step.id ? 'bg-[#E6308A]' : 'bg-zinc-200'}`} />
                  </div>
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep > step.id
                        ? 'bg-[#E6308A] hover:bg-[#D42B7D]'
                        : currentStep === step.id
                        ? 'border-2 border-[#E6308A] bg-white'
                        : 'border-2 border-zinc-300 bg-white hover:border-zinc-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : (
                      <span className={`text-xs font-semibold ${currentStep === step.id ? 'text-[#E6308A]' : 'text-zinc-500'}`}>
                        {step.id}
                      </span>
                    )}
                  </button>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 text-center">
                     <p className={`text-xs font-semibold ${currentStep === step.id ? 'text-[#E6308A]' : 'text-zinc-500'}`}>{step.title}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Wizard Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 min-h-[400px] flex flex-col justify-between">
        
        <div className="flex-1 mt-8">
          {currentStep === 1 && (
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-lg font-medium text-zinc-900">Select Primary Data Source</h3>
              <p className="text-sm text-zinc-500 mb-6">Choose the main CRM module to base your report on.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Customers (CIF)', 'Opportunities / Deals', 'Service Requests (CARE)', 'Transactions', 'Campaigns', 'Audit Logs'].map((source, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${i === 1 ? 'border-[#E6308A] bg-pink-50/50' : 'border-zinc-200 hover:border-zinc-300 cursor-pointer'}`}>
                    <div className="font-medium text-zinc-900">{source}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
             <div className="max-w-2xl mx-auto text-center py-12">
               <LayoutTemplate className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
               <h3 className="text-lg font-medium text-zinc-900">Configure Fields & Joins</h3>
               <p className="text-sm text-zinc-500">Drag and drop columns from the data dictionary.</p>
             </div>
          )}

          {currentStep === 3 && (
             <div className="max-w-2xl mx-auto text-center py-12">
               <Filter className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
               <h3 className="text-lg font-medium text-zinc-900">Filters & Grouping</h3>
               <p className="text-sm text-zinc-500">Add date ranges, statuses, and multi-level groupings.</p>
             </div>
          )}

          {currentStep === 4 && (
             <div className="max-w-2xl mx-auto text-center py-12">
               <Play className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
               <h3 className="text-lg font-medium text-zinc-900">Preview Ready</h3>
               <p className="text-sm text-zinc-500">Your report has been successfully configured and is ready to run or schedule.</p>
             </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-zinc-100 mt-8">
          <button 
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button 
            disabled={currentStep === 4}
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
