import React, { useState } from 'react';
import ContextualDrawer from '../ContextualDrawer';
import { ShieldAlert, CheckCircle2, ChevronRight, AlertTriangle, FileCheck, CheckSquare } from 'lucide-react';

export default function SuitabilityAssessmentDrawer({ isOpen, onClose, customer }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notice, setNotice] = useState('');

  if (!customer) return null;

  const handleNext = () => setStep(prev => Math.min(prev + 1, 8));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = () => setIsSubmitted(true);
  const saveDraft = () => {
    setNotice('Suitability assessment draft saved with audit timestamp.');
    setTimeout(() => setNotice(''), 2500);
  };

  // Determine risk and mock checks
  const isVulnerable = customer.suitability?.vulnerable;
  const ckaStatus = customer.suitability?.ckaStatus;

  return (
    <ContextualDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="Suitability Assessment"
      subtitle={`Customer: ${customer.name} (${customer.id})`}
      width="w-[700px]"
      icon={FileCheck}
    >
      <div className="flex-1 p-6 space-y-6 bg-zinc-50/30">
        
        {/* Stepper Header */}
        <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-6 px-4">
          {[1,2,3,4,5,6,7,8].map(s => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step === s ? 'bg-brand text-white' : 
                step > s ? 'bg-lime text-black' : 'bg-zinc-200 text-zinc-500'
              }`}>
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
            </div>
          ))}
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Assessment Submitted to Checker</h3>
            <p className="text-sm text-zinc-600">The suitability assessment for {customer.name} has been locked and routed to the Branch Compliance Officer.</p>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider mt-4 hover:bg-black"
            >
              Close Workflow
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Contextual Warning */}
            {isVulnerable && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-red-800">Vulnerable Customer Policy Triggered</h4>
                  <p className="text-[11px] text-red-600 mt-1">This customer is marked as vulnerable. Strict joint-signature approvals from compliance are required before any premium product recommendations.</p>
                </div>
              </div>
            )}

            {/* Dynamic Step Content */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm min-h-[300px]">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">1. Customer Profile Confirmation</h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Customer Name</label>
                      <input type="text" disabled value={customer.name} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Segment</label>
                      <input type="text" disabled value={customer.segment} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Age</label>
                      <input type="text" disabled value="48" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Shariah Preference</label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800 focus:ring-2 focus:ring-[#E6308A]/20 focus:border-brand">
                        <option>Islamic Only</option>
                        <option>Conventional & Islamic</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">4. Risk Appetite & Knowledge</h3>
                  <div className="space-y-4 text-xs">
                     <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">CKA / K&E Status</label>
                      <div className="w-full bg-green-50 border border-green-200 rounded-lg p-2 font-bold text-green-700 flex items-center justify-between">
                        <span>{ckaStatus || 'Passed'}</span>
                        <span className="text-[10px] uppercase">Valid</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">Risk Tolerance</label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800">
                        <option>Aggressive</option>
                        <option>Moderate</option>
                        <option>Conservative</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 7 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">7. Recommendation Summary (AI Generated)</h3>
                  <div className="bg-card-bg rounded-xl p-4 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E6308A]/20 to-[#C6E84F]/20 blur-3xl rounded-full" />
                    <div className="relative z-10 space-y-3">
                      <h4 className="text-xs font-bold text-lime uppercase flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" /> WorkNext AI Assessment
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Based on the customer's moderate risk appetite, age (48), and existing concentration in Equities, the recommended product (Fixed Rate Bonds) is <strong className="text-green-400">Suitable</strong>. The customer has passed CKA and provided valid PDPA consent.
                      </p>
                      <div className="flex gap-4 pt-2 border-t border-card-border">
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase block">Calculated Score</span>
                          <span className="text-lg font-bold text-white">{customer.suitability?.score || '85'}/100</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase block">Product Risk Rating</span>
                          <span className="text-sm font-bold text-brand mt-1 block">Level 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 8 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">8. RM Justification & Submit</h3>
                  <div className="space-y-4 text-xs">
                     <div className="space-y-1">
                      <label className="text-zinc-500 font-medium">RM Justification Remarks (Mandatory)</label>
                      <textarea 
                        rows={4} 
                        placeholder="Provide rationale for product suitability..."
                        className="w-full bg-white border border-zinc-200 rounded-lg p-3 font-medium text-zinc-800 focus:ring-2 focus:ring-[#E6308A]/20 focus:border-brand"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder for other steps */}
              {![1, 4, 7, 8].includes(step) && (
                <div className="h-full flex flex-col items-center justify-center text-zinc-400 py-12">
                  <CheckSquare className="w-8 h-8 mb-2 opacity-50" />
                  <p className="text-xs font-medium">Step {step} form fields mapped from CRM schema.</p>
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
              onClick={saveDraft}
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
            {step < 8 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 px-5 py-2 text-xs font-bold text-white bg-card-bg hover:bg-black rounded-lg transition-colors shadow-sm"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="px-5 py-2 text-xs font-bold text-black bg-lime hover:opacity-90 rounded-lg transition-colors shadow-sm uppercase tracking-wider"
              >
                Submit to Checker
              </button>
            )}
          </div>
        </div>
      )}
    </ContextualDrawer>
  );
}
