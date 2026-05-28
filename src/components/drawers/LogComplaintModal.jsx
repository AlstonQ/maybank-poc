import React, { useState } from 'react';
import Modal from '../Modal';

export default function LogComplaintModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Log Customer Complaint (CARE)"
      subtitle="Create a new service request and route to appropriate desk"
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Customer CIF / ID *</span>
            <input required className="w-full rounded-lg border border-zinc-200 p-2 font-semibold" placeholder="e.g. CIF-4028911" />
          </label>
          
          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Product Area *</span>
            <select required className="w-full rounded-lg border border-zinc-200 p-2 font-semibold bg-white">
              <option>Wealth Management / Investments</option>
              <option>Islamic Banking / Financing-i</option>
              <option>Corporate Trade Finance</option>
              <option>Cards / Retail Accounts</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Complaint Category *</span>
            <select required className="w-full rounded-lg border border-zinc-200 p-2 font-semibold bg-white">
              <option>Transaction Blocked / Failed</option>
              <option>SLA Breach / Delay</option>
              <option>Incorrect Fee / Dividend Discrepancy</option>
              <option>System Issue (M2U / SME Portal)</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Source Channel *</span>
            <select required className="w-full rounded-lg border border-zinc-200 p-2 font-semibold bg-white">
              <option>Branch Walk-in</option>
              <option>Contact Centre (Call)</option>
              <option>M2U Mobile App</option>
              <option>Relationship Manager Referral</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Severity / SLA Status *</span>
            <select required className="w-full rounded-lg border border-zinc-200 p-2 font-semibold bg-white">
              <option>Urgent (4h SLA)</option>
              <option>High (24h SLA)</option>
              <option>Normal (48h SLA)</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="font-bold text-zinc-500">Regulatory Escalation Tag</span>
            <select className="w-full rounded-lg border border-zinc-200 p-2 font-semibold bg-white">
              <option value="">None (Standard CARE)</option>
              <option value="CEM">CEM (Customer Experience Management)</option>
              <option value="MAS">MAS / BNM Guideline</option>
              <option value="FIDReC">FIDReC</option>
            </select>
          </label>

          <label className="space-y-1 col-span-2">
            <span className="font-bold text-zinc-500">Description / Root Cause Notes *</span>
            <textarea required rows="3" className="w-full rounded-lg border border-zinc-200 p-2 font-semibold resize-none" placeholder="Enter detailed complaint description..."></textarea>
          </label>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-zinc-100">
          <button type="button" onClick={onClose} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
          <button type="submit" disabled={loading} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors">
            {loading ? 'Submitting...' : 'Log Complaint Ticket'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
