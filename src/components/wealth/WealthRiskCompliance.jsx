import React from 'react';
import { ShieldAlert, Fingerprint, Mail, MessageSquare, Phone, MapPin, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

export default function WealthRiskCompliance({ customer, role }) {
  if (!customer) return null;

  const { riskCompliance: rc, consent } = customer;
  const isComplianceView = canViewSensitive(role);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Risk & Compliance Flags */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-500" /> AML & Compliance Profile
        </h3>

        {!isComplianceView ? (
          <div className="bg-zinc-100 p-6 rounded-xl border border-zinc-200 text-center flex flex-col items-center">
            <LockIcon className="w-8 h-8 text-zinc-400 mb-2" />
            <span className="font-bold text-zinc-600">Restricted View</span>
            <p className="text-xs text-zinc-500 mt-1">Compliance Profile is restricted to Wealth RM and Compliance Officers.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
            <div className="p-5 grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <span className="block text-xs text-zinc-500 mb-1">AML Rating</span>
                <span className={`inline-flex px-2 py-1 text-xs font-bold rounded ${
                  rc.amlRating.includes('High') ? 'bg-rose-100 text-rose-700' :
                  rc.amlRating.includes('Medium') ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                }`}>{rc.amlRating}</span>
              </div>
              <div>
                <span className="block text-xs text-zinc-500 mb-1">CDD / EDD Status</span>
                <span className={`font-semibold ${rc.cddEddStatus.includes('EDD') ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {rc.cddEddStatus}
                </span>
              </div>

              <div>
                <span className="block text-xs text-zinc-500 mb-1">PEP Status</span>
                <span className={`font-semibold ${rc.pepStatus !== 'Clear' ? 'text-rose-600 flex items-center gap-1' : 'text-emerald-600 flex items-center gap-1'}`}>
                  {rc.pepStatus !== 'Clear' && <AlertOctagon className="w-3.5 h-3.5" />} {rc.pepStatus}
                </span>
              </div>
              <div>
                <span className="block text-xs text-zinc-500 mb-1">KYC Expiry</span>
                <span className="font-semibold text-zinc-900">{rc.kycExpiry}</span>
              </div>

              <div>
                <span className="block text-xs text-zinc-500 mb-1">Sanctions Screening</span>
                <span className="font-semibold text-emerald-600">{rc.sanctions}</span>
              </div>
              <div>
                <span className="block text-xs text-zinc-500 mb-1">Adverse Media</span>
                <span className="font-semibold text-emerald-600">{rc.adverseMedia}</span>
              </div>

              <div className="col-span-2 border-t border-zinc-100 pt-5">
                <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Missing / Pending Documents</span>
                <span className={`font-semibold ${rc.missingDocs !== 'None' ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {rc.missingDocs}
                </span>
              </div>
              
              <div className="col-span-2 border-t border-zinc-100 pt-5">
                <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-1">Fraud / Scam Warnings</span>
                <span className={`font-semibold ${rc.fraudWarnings.includes('Alert') ? 'text-rose-600' : 'text-zinc-600'}`}>
                  {rc.fraudWarnings}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Consent & Preferences */}
      <div className="space-y-6">
        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-brand" /> Privacy & Consent
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden p-5">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
            <div>
              <span className="block text-xs text-zinc-500 mb-1">PDPA Consent</span>
              <span className={`flex items-center gap-1 font-semibold ${consent.pdpa === 'Accepted' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {consent.pdpa === 'Accepted' && <CheckCircle2 className="w-4 h-4" />} {consent.pdpa}
              </span>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 mb-1">Marketing Consent</span>
              <span className={`flex items-center gap-1 font-semibold ${consent.marketing === 'Accepted' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {consent.marketing === 'Accepted' ? <CheckCircle2 className="w-4 h-4" /> : <AlertOctagon className="w-4 h-4" />} {consent.marketing}
              </span>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 mb-1">Do Not Call (DNC) Registry</span>
              <span className={`font-semibold ${consent.dnc ? 'text-rose-600' : 'text-emerald-600'}`}>
                {consent.dnc ? 'Registered (DO NOT CALL)' : 'Not Registered'}
              </span>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 mb-1">Data Sharing</span>
              <span className="font-semibold text-zinc-900">{consent.dataSharing}</span>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-5">
            <span className="block text-[10px] uppercase text-zinc-400 font-bold mb-3">Preferred Contact Channels</span>
            <div className="flex flex-wrap gap-3">
              {consent.channels.map(ch => (
                <div key={ch} className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center gap-2 text-sm font-medium text-zinc-700">
                  {ch.includes('Email') && <Mail className="w-4 h-4 text-zinc-400" />}
                  {ch.includes('WhatsApp') && <MessageSquare className="w-4 h-4 text-emerald-500" />}
                  {ch.includes('Phone') && <Phone className="w-4 h-4 text-indigo-400" />}
                  {ch.includes('Meeting') || ch.includes('Branch') && <MapPin className="w-4 h-4 text-rose-400" />}
                  {ch}
                </div>
              ))}
            </div>
            <div className="mt-4">
               <span className="text-xs text-zinc-500">Preferred Time: <span className="font-semibold text-zinc-800">{consent.preferredTime}</span></span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl shadow-sm border border-amber-200 p-5">
           <h4 className="text-sm font-bold text-amber-900 mb-1">Vulnerability & Sensitivity</h4>
           <div className="grid grid-cols-2 gap-4 mt-3">
             <div>
                <span className="block text-[10px] uppercase text-amber-700 font-bold mb-1">Vulnerable Customer</span>
                <span className="font-semibold text-amber-900">{rc.vulnerableFlag ? 'Yes - Require Extra Care' : 'No'}</span>
             </div>
             <div>
                <span className="block text-[10px] uppercase text-amber-700 font-bold mb-1">Complaint Sensitivity</span>
                <span className="font-semibold text-amber-900">{rc.complaintSensitivity}</span>
             </div>
           </div>
        </div>

      </div>

    </div>
  );
}

const LockIcon = (props) => <ShieldAlert {...props} />;
