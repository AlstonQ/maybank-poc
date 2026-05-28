import React, { useState } from 'react';
import { MessageCircle, PhoneCall, Users, FileText, AlertTriangle, Send, CheckCircle2, Shield } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

export default function WealthInteractionsService({ customer, role }) {
  if (!customer) return null;

  const [activeTab, setActiveTab] = useState('timeline');
  const [newComplaint, setNewComplaint] = useState(false);
  
  const interactions = customer.interactions || [];
  const cases = customer.cases || [];

  return (
    <div className="p-6">
      
      {/* Top Tabs */}
      <div className="flex border-b border-zinc-200 mb-6">
        <button 
          onClick={() => setActiveTab('timeline')}
          className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'timeline' ? 'border-brand text-brand' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
        >
          Interaction Timeline
        </button>
        <button 
          onClick={() => setActiveTab('cases')}
          className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'cases' ? 'border-brand text-brand' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
        >
          Service & Complaints {cases.length > 0 && <span className="bg-rose-100 text-rose-600 py-0.5 px-2 rounded-full text-[10px]">{cases.length}</span>}
        </button>
      </div>

      {activeTab === 'timeline' && (
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {interactions.map((interaction, index) => {
            const isConfidential = interaction.confidential && !canViewSensitive(role);

            return (
              <div key={interaction.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-zinc-500 group-hover:text-brand transition-colors">
                  {interaction.type === 'Meeting' ? <Users className="w-5 h-5" /> : 
                   interaction.type === 'Call' ? <PhoneCall className="w-5 h-5" /> :
                   interaction.type === 'Service' ? <FileText className="w-5 h-5" /> :
                   <AlertTriangle className="w-5 h-5 text-amber-500" />}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-500">{interaction.date} • {interaction.time}</span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      interaction.status === 'Closed' || interaction.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>{interaction.status}</span>
                  </div>
                  <h4 className={`font-bold text-sm mb-2 ${isConfidential ? 'text-zinc-500' : 'text-zinc-900'} flex items-center gap-1`}>
                    {isConfidential ? 'Confidential Interaction' : interaction.subject}
                    {isConfidential && <Shield className="w-3.5 h-3.5 text-zinc-400" />}
                  </h4>
                  
                  {!isConfidential && (
                    <div className="text-xs text-zinc-600 space-y-1">
                      <p><span className="font-semibold text-zinc-800">Channel:</span> {interaction.channel}</p>
                      <p><span className="font-semibold text-zinc-800">Owner:</span> {interaction.owner}</p>
                      <p><span className="font-semibold text-zinc-800">Next Action:</span> {interaction.nextAction}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {interactions.length === 0 && (
            <div className="text-center p-8 text-zinc-500 border border-dashed border-zinc-200 rounded-xl relative z-10 bg-white">
              No interactions recorded.
            </div>
          )}
        </div>
      )}

      {activeTab === 'cases' && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button 
              onClick={() => setNewComplaint(!newComplaint)}
              className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D42B7D] transition-colors shadow-sm"
            >
              {newComplaint ? 'Cancel' : 'Log New Complaint'}
            </button>
          </div>

          {newComplaint && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 shadow-sm animate-fadeIn">
              <h3 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Log Complaint / FRL
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-rose-800 mb-1">Product / Account</label>
                  <select className="w-full p-2 rounded border border-rose-200 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 bg-white">
                    <option>Select Product</option>
                    {customer.holdings.map(h => <option key={h.id}>{h.name}</option>)}
                    <option>General Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rose-800 mb-1">Category</label>
                  <select className="w-full p-2 rounded border border-rose-200 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 bg-white">
                    <option>Service Standard</option>
                    <option>System Issue (App/Web)</option>
                    <option>Product Mis-selling</option>
                    <option>Fraud / Scam Dispute</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rose-800 mb-1">Severity</label>
                  <select className="w-full p-2 rounded border border-rose-200 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 bg-white">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High (Financial Impact)</option>
                    <option>Critical (Media / VVIP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rose-800 mb-1">Regulatory Tag</label>
                  <select className="w-full p-2 rounded border border-rose-200 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 bg-white">
                    <option>None</option>
                    <option>BNM-Complaint</option>
                    <option>FIDReC</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-rose-800 mb-1">Description</label>
                  <textarea rows="3" className="w-full p-2 rounded border border-rose-200 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 bg-white" placeholder="Describe the issue..."></textarea>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button onClick={() => {
                  alert("Mock Complaint logged successfully. Case ID: CAS-NEW991");
                  setNewComplaint(false);
                }} className="bg-rose-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-rose-700 flex items-center gap-2">
                  <Send className="w-4 h-4" /> Submit to CARE Desk
                </button>
              </div>
            </div>
          )}

          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded bg-rose-100 text-rose-600`}>
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{c.id}</h4>
                    <span className="text-xs text-zinc-500">{c.category}</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-amber-100 text-amber-700 font-bold text-[10px] uppercase rounded">
                  {c.status}
                </span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="block text-xs text-zinc-500 mb-1">Severity</span>
                    <span className="font-semibold text-zinc-900">{c.severity}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 mb-1">Regulatory Tag</span>
                    <span className="font-semibold text-zinc-900">{c.regulatoryTag || 'None'}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 mb-1">Channel</span>
                    <span className="font-semibold text-zinc-900">{c.channel}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 mb-1">Impact</span>
                    <span className="font-semibold text-zinc-900">{c.impact}</span>
                  </div>
                </div>
                <div className="bg-zinc-50 p-3 rounded border border-zinc-100">
                  <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Description</span>
                  <p className="text-sm text-zinc-700">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {cases.length === 0 && !newComplaint && (
            <div className="p-8 text-center bg-white rounded-xl shadow-sm border border-zinc-200 flex flex-col items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-300 mb-3" />
              <h3 className="font-bold text-zinc-900 mb-1">No Active Complaints</h3>
              <p className="text-sm text-zinc-500">This customer has no service tickets or complaints in the last 90 days.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
