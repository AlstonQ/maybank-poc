import React, { useState } from 'react';
import ContextualDrawer from '../ContextualDrawer';
import { Target, CheckCircle2, ChevronRight, Download, Link, Activity } from 'lucide-react';

export default function FinancialApplicationPlanDrawer({ isOpen, onClose, customer }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notice, setNotice] = useState('');

  if (!customer) return null;

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = () => setIsSubmitted(true);
  const runAction = (label) => {
    setNotice(`${label} completed for the linked application plan.`);
    setTimeout(() => setNotice(''), 2500);
  };

  // Take the first goal or fallback
  const goal = customer.financialPlanning?.goals?.[0] || {
    name: 'Wealth Accumulation',
    target: 1000000,
    current: 450000,
    type: 'conventional'
  };

  const fundingGap = goal.target - goal.current;

  return (
    <ContextualDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="Financial Application Plan"
      subtitle={`Customer: ${customer.name} (${customer.id})`}
      width="w-[700px]"
      icon={Target}
    >
      <div className="flex-1 p-6 space-y-6 bg-zinc-50/30">
        
        {/* Stepper Header */}
        <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-6 px-12">
          {[1,2,3,4].map(s => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === s ? 'bg-[#E6308A] text-white' : 
                step > s ? 'bg-[#C6E84F] text-black' : 'bg-zinc-200 text-zinc-500'
              }`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              <span className="text-[9px] uppercase tracking-wider mt-1 text-center w-20">
                {s === 1 ? 'Customer & Goal' : s === 2 ? 'Product & Gap' : s === 3 ? 'Suitability' : 'Final Submit'}
              </span>
            </div>
          ))}
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Application Submitted</h3>
            <p className="text-sm text-zinc-600">The financial plan application for {customer.name} has been routed to the checker. A mock Audit Log has been generated.</p>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black"
              >
                Close Drawer
              </button>
              <button onClick={() => runAction('PDF export')} className="flex items-center gap-2 px-6 py-2 bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-200">
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm min-h-[300px]">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">1. Linked Customer & Goal Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Customer Name</label>
                      <input type="text" disabled value={customer.name} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Customer Segment</label>
                      <input type="text" disabled value={customer.segment} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Linked Goal</label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-[#E6308A]">
                        <option>{goal.name}</option>
                        <option>Retirement Planning</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Goal Target Amount</label>
                      <input type="text" disabled value={`MYR ${goal.target.toLocaleString()}`} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">2. Product Recommendation & Funding Gap</h3>
                  
                  <div className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <div className="flex-1">
                      <span className="text-[10px] text-red-500 font-bold uppercase block">Current Funding Gap</span>
                      <span className="text-xl font-black text-red-600 block mt-1">MYR {fundingGap.toLocaleString()}</span>
                    </div>
                    <div className="flex-1 border-l border-red-200 pl-4">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Goal Progress</span>
                      <span className="text-xl font-black text-zinc-800 block mt-1">{Math.round((goal.current/goal.target)*100)}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs mt-4">
                    <div className="space-y-1 col-span-2">
                      <label className="text-zinc-500 font-medium">Recommended Product to bridge gap</label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800">
                        <option>Maybank Absolute Return Trust Fund</option>
                        <option>Structured Deposit M-Series</option>
                        <option>Islamic Fixed Deposit-i</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Application Amount</label>
                      <input type="text" defaultValue={fundingGap} className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Expected Tenure</label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800">
                        <option>5 Years</option>
                        <option>10 Years</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">3. Suitability & Affordability Linkage</h3>
                  
                  <div className="bg-[#0A0A0A] rounded-xl p-4 text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-3">
                      <h4 className="text-xs font-bold text-[#3DBFD4] uppercase flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Live Assessment Link
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        To proceed with this premium product application, the customer must have a valid and matching Suitability Assessment score.
                      </p>
                      
                      <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg mt-2 border border-zinc-800">
                        <div>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase block">Current SA Status</span>
                          <span className="text-sm font-black text-green-400 block mt-0.5">Valid & Suitable</span>
                        </div>
                        <button onClick={() => runAction('Suitability re-run')} className="text-[10px] font-bold bg-white text-black px-3 py-1.5 rounded uppercase hover:bg-zinc-200">
                          Re-Run Assessment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">4. Final Verification & Submission</h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" />
                      <div>
                        <span className="font-bold block">All Requirements Met</span>
                        <span className="text-[10px]">KYC, Affordability, and Suitability are valid.</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">RM Submission Notes</label>
                      <textarea 
                        rows={4} 
                        placeholder="Add internal notes for the branch manager / checker..."
                        className="w-full bg-white border border-zinc-200 rounded-lg p-3 font-medium text-zinc-800 focus:ring-2 focus:ring-[#E6308A]/20 focus:border-[#E6308A]"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      {notice && (
        <div className="mx-6 mb-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-xs font-semibold text-green-700">
          {notice}
        </div>
      )}

      {/* Footer Actions */}
      {!isSubmitted && (
        <div className="p-4 border-t border-zinc-200 bg-white flex justify-between items-center shrink-0">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => runAction('Draft save')}
              className="px-4 py-2 text-xs font-bold text-zinc-600 border border-zinc-200 hover:bg-zinc-50 rounded-lg transition-colors"
            >
              Save Draft
            </button>
            {step > 1 && (
              <button 
                onClick={handlePrev}
                className="px-4 py-2 text-xs font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
              >
                Previous
              </button>
            )}
            {step < 4 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 px-5 py-2 text-xs font-bold text-white bg-[#0A0A0A] hover:bg-black rounded-lg transition-colors shadow-sm"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-black bg-[#C6E84F] hover:opacity-90 rounded-lg transition-colors shadow-sm uppercase tracking-wider"
              >
                <Link className="w-4 h-4" /> Submit to Checker
              </button>
            )}
          </div>
        </div>
      )}
    </ContextualDrawer>
  );
}
