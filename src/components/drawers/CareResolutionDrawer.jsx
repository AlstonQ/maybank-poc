import React, { useState } from 'react';
import ContextualDrawer from '../ContextualDrawer';
import { ShieldAlert, CheckCircle2, ChevronRight, FileText, Upload, AlertCircle, Banknote, ShieldCheck } from 'lucide-react';

export default function CareResolutionDrawer({ isOpen, onClose, currentCase }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notice, setNotice] = useState('');

  if (!currentCase) return null;

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = () => setIsSubmitted(true);
  
  const runAction = (label) => {
    setNotice(`${label} registered successfully.`);
    setTimeout(() => setNotice(''), 2500);
  };

  const isBreached = currentCase.slaCountdownHours < 0;

  return (
    <ContextualDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="CARE Ticket Resolution & OFS Assessment"
      subtitle={`Ticket: ${currentCase.id} · Client: ${currentCase.customerName}`}
      width="w-[700px]"
      icon={ShieldAlert}
    >
      <div className="flex-1 p-6 space-y-6 bg-app-bg">
        
        {/* Stepper Header */}
        <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-6 px-4">
          {[1,2,3,4].map(s => (
            <div key={s} className="flex flex-col items-center gap-1.5 flex-1 relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 relative shadow-sm ${
                step === s ? 'bg-brand text-white' : 
                step > s ? 'bg-zinc-100 text-zinc-800 border border-zinc-200' : 'bg-white border border-zinc-200 text-zinc-400'
              }`}>
                {step > s ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : s}
              </div>
              <span className={`text-[9px] uppercase tracking-wider mt-1 text-center font-black ${
                step === s ? 'text-brand' : step > s ? 'text-zinc-600' : 'text-zinc-400'
              }`}>
                {s === 1 ? 'BNM / OFS' : s === 2 ? 'Root Cause' : s === 3 ? 'GCX Escalate' : 'Resolution'}
              </span>
              {s !== 4 && (
                <div className={`absolute top-4 left-[60%] right-[-40%] h-[2px] ${
                  step > s ? 'bg-green-500' : 'bg-zinc-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-white border border-green-200 rounded-full flex items-center justify-center text-green-600 mb-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-zinc-900">Ticket Resolution Submitted</h3>
            <p className="text-sm text-zinc-600 font-medium">The Final Resolution Letter (FRL) has been drafted and routed to the Group Customer Experience (GCX) desk for final Maker-Checker validation before OFS submission.</p>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-zinc-100 text-zinc-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
              >
                Close Drawer
              </button>
              <button onClick={() => runAction('FRL PDF Export')} className="flex items-center gap-2 px-6 py-2 bg-brand text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-sm transition-opacity">
                <FileText className="w-4 h-4" /> Download FRL
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm min-h-[350px]">
              
              {step === 1 && (
                 <div className="space-y-6 animate-fadeIn">
                   <div className="pb-3 border-b border-zinc-100 flex items-center gap-2">
                     <AlertCircle className="w-5 h-5 text-brand" />
                     <h3 className="text-sm font-black text-zinc-900 uppercase tracking-wide">1. BNM SLA & OFS Assessment</h3>
                   </div>
                   
                   <div className={`flex gap-4 p-4 rounded-xl border ${isBreached ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
                     <div className="flex-1">
                       <span className={`text-[10px] font-black uppercase tracking-wider block ${isBreached ? 'text-red-500' : 'text-amber-600'}`}>
                         BNM 14-Day Mandatory SLA
                       </span>
                       <span className={`text-xl font-black block mt-1 ${isBreached ? 'text-red-600' : 'text-amber-700'}`}>
                         {isBreached ? `BREACHED (${Math.abs(currentCase.slaCountdownHours)}h ago)` : `${currentCase.slaCountdownHours} Hours Remaining`}
                       </span>
                     </div>
                     <div className={`flex-1 border-l pl-4 ${isBreached ? 'border-red-200' : 'border-amber-200'}`}>
                       <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Regulatory Classification</span>
                       <span className="text-sm font-black text-zinc-800 block mt-1">{currentCase.escalationTag || 'BNM Standard'}</span>
                     </div>
                   </div>

                   <div className="space-y-4 mt-6">
                     <label className="flex items-start gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl cursor-pointer hover:border-brand transition-colors">
                       <input type="checkbox" className="mt-1 w-4 h-4 text-brand rounded border-zinc-300 focus:ring-brand" />
                       <div>
                         <span className="text-xs font-bold text-zinc-800 block">Customer threatened OFS (Ombudsman) escalation</span>
                         <span className="text-[10px] font-medium text-zinc-500">Check this if the client explicitly mentioned OFS, BNM telelink, or legal action.</span>
                       </div>
                     </label>

                     <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">OFS Dispute Category</label>
                       <select className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-xs font-semibold focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all">
                         <option>Unauthorized Transaction / Fraud</option>
                         <option>Mis-selling of Financial Products</option>
                         <option>Service Quality / Staff Behavior</option>
                         <option>System Downtime / Technical Glitch</option>
                       </select>
                     </div>
                   </div>
                 </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="pb-3 border-b border-zinc-100 flex items-center gap-2">
                     <ShieldCheck className="w-5 h-5 text-brand" />
                     <h3 className="text-sm font-black text-zinc-900 uppercase tracking-wide">2. Root Cause & Remediation</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">CARE Root Cause Analysis</label>
                      <textarea 
                        rows={3}
                        defaultValue={currentCase.rootCause}
                        className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                          <Banknote className="w-3.5 h-3.5 text-green-500" /> Proposed Goodwill (MYR)
                        </label>
                        <input 
                          type="number" 
                          placeholder="0.00"
                          className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-xs font-bold focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Fee Waiver Code</label>
                        <select className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-xs font-semibold focus:border-brand outline-none">
                          <option>None Required</option>
                          <option>WAV-LATE-FEE (Late Payment)</option>
                          <option>WAV-ANNUAL (Annual Fee)</option>
                          <option>WAV-SVC (Service Charge)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl border-dashed">
                      <div className="flex flex-col items-center justify-center text-center gap-2">
                        <Upload className="w-6 h-6 text-zinc-400" />
                        <span className="text-xs font-bold text-zinc-700">Attach Remediation Proof (Optional)</span>
                        <span className="text-[10px] font-medium text-zinc-500">Upload system screenshots or reversal receipts for the checker.</span>
                        <button className="mt-2 px-4 py-1.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-[10px] font-bold rounded-lg transition-colors">
                          Browse Files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="pb-3 border-b border-zinc-100 flex items-center gap-2">
                     <AlertCircle className="w-5 h-5 text-brand" />
                     <h3 className="text-sm font-black text-zinc-900 uppercase tracking-wide">3. Group Executive (GCX) Escalation</h3>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 space-y-3">
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                      This ticket requires mandatory Maker-Checker validation by the Group Customer Experience (GCX) desk due to its <strong className="text-zinc-900">Regulatory Tag: {currentCase.escalationTag || 'BNM Standard'}</strong>.
                    </p>
                    
                    <div className="space-y-1.5 mt-4">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">GCX Escalation Justification</label>
                      <textarea 
                        rows={4} 
                        placeholder="Detail why this resolution strategy is appropriate and complies with BNM / OFS guidelines..."
                        className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="pb-3 border-b border-zinc-100 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-brand" />
                     <h3 className="text-sm font-black text-zinc-900 uppercase tracking-wide">4. Final Verification & FRL</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-green-900 block">SLA & OFS Checks Complete</span>
                        <span className="text-[10px] font-medium text-green-700">Root cause and goodwill mapping are valid.</span>
                      </div>
                    </div>

                    <div className="p-4 border border-zinc-200 rounded-xl bg-white shadow-sm space-y-3">
                      <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                         <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Auto-Generated</span>
                         <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Final Resolution Letter</span>
                      </div>
                      <p className="text-[10px] font-medium text-zinc-600 leading-relaxed font-mono">
                        Dear {currentCase.customerName},<br/><br/>
                        We refer to your complaint registered on {new Date().toLocaleDateString()} regarding {currentCase.category}.<br/><br/>
                        After a thorough investigation by Maybank's Group Customer Experience, we found that... [Auto-filled].<br/>
                        If you are not satisfied with this resolution, you may refer your dispute to the Ombudsman for Financial Services (OFS) within 6 months.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      {notice && (
        <div className="mx-6 mb-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-xs font-bold text-green-700 shadow-sm animate-fadeIn">
          {notice}
        </div>
      )}

      {/* Footer Actions */}
      {!isSubmitted && (
        <div className="p-4 border-t border-zinc-200 bg-white flex justify-between items-center shrink-0 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors"
          >
            Cancel
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => runAction('Draft saved')}
              className="px-5 py-2.5 text-xs font-bold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-xl transition-colors shadow-sm"
            >
              Save Draft
            </button>
            {step > 1 && (
              <button 
                onClick={handlePrev}
                className="px-5 py-2.5 text-xs font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors shadow-sm"
              >
                Previous
              </button>
            )}
            {step < 4 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-zinc-900 hover:bg-black rounded-xl transition-colors shadow-sm"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-brand hover:opacity-90 rounded-xl transition-opacity shadow-sm uppercase tracking-wider"
              >
                <CheckCircle2 className="w-4 h-4" /> Submit to GCX Checker
              </button>
            )}
          </div>
        </div>
      )}
    </ContextualDrawer>
  );
}
