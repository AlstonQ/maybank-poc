import React from 'react';
import ContextualDrawer from '../ContextualDrawer';
import Modal from '../Modal';
import { User, FileText, ShoppingBag, ShieldCheck, BookOpen, Clock, Users, ArrowRight, Calendar, Network, Landmark, Mail, CheckCircle2, Upload, MessageSquare } from 'lucide-react';

export function EditProfileDrawer({ isOpen, onClose, customer }) {
  if (!customer) return null;
  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title="Edit Customer Profile" width="w-[500px]" icon={User}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="space-y-1">
          <label className="text-zinc-500 font-medium">Full Name</label>
          <input type="text" defaultValue={customer.name} className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-500 font-medium">Occupation</label>
          <input type="text" defaultValue={customer.occupation} className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-500 font-medium">Best Time to Call</label>
          <input type="text" defaultValue={customer.bestTimeToCall} className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800" />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-500 font-medium">Preferred Language</label>
          <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 font-bold text-zinc-800">
            <option>English</option>
            <option>Malay</option>
            <option>Mandarin</option>
          </select>
        </div>
        <p className="text-[10px] text-zinc-400 mt-4">Note: PII fields like NRIC and CIF require a Maker-Checker service request to modify.</p>
      </div>
      <div className="p-4 border-t border-zinc-200 bg-white flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg">Cancel</button>
        <button onClick={onClose} className="px-5 py-2 text-xs font-bold text-white bg-zinc-900 hover:bg-black rounded-lg">Save Changes</button>
      </div>
    </ContextualDrawer>
  );
}

export function GenerateProposalDrawer({ isOpen, onClose, customer }) {
  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title="Generate Proposal" width="w-[500px]" icon={FileText}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-3">
          <h4 className="font-bold text-zinc-800">Proposal Configuration</h4>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded text-brand" />
            <span className="font-medium text-zinc-600">Include Next Best Offers (NBO)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded text-brand" />
            <span className="font-medium text-zinc-600">Include Current Holdings Summary</span>
          </label>
        </div>
      </div>
      <div className="p-4 border-t border-zinc-200 bg-white flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg">Cancel</button>
        <button onClick={onClose} className="px-5 py-2 text-xs font-bold text-black bg-lime hover:opacity-90 rounded-lg uppercase tracking-wider">Export PDF</button>
      </div>
    </ContextualDrawer>
  );
}

export function CrossSellDrawer({ isOpen, onClose, customer }) {
  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title="Cross-Sell Recommendations" width="w-[500px]" icon={ShoppingBag}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="p-4 bg-card-bg rounded-xl text-white space-y-2">
          <span className="text-[10px] text-lime font-bold uppercase tracking-wider block">AI Recommendation</span>
          <h4 className="font-bold text-sm">Maybank Islamic Zest-i</h4>
          <p className="text-zinc-400">High propensity to convert based on recent maturity of fixed deposits.</p>
          <button onClick={onClose} className="mt-3 px-4 py-2 bg-white text-black text-xs font-bold rounded-lg w-full hover:bg-zinc-200 transition-colors">
            Create Opportunity
          </button>
        </div>
      </div>
    </ContextualDrawer>
  );
}

export function ReKycModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Initiate Re-KYC Workflow" maxWidth="max-w-md">
      <div className="space-y-4 text-xs">
        <p className="text-zinc-600 font-medium">Select the components you wish to include in this Re-KYC cycle:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
            <input type="checkbox" defaultChecked className="rounded text-brand" />
            <span className="font-bold text-zinc-800">ID Verification (Biometric)</span>
          </label>
          <label className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
            <input type="checkbox" defaultChecked className="rounded text-brand" />
            <span className="font-bold text-zinc-800">Proof of Address Check</span>
          </label>
          <label className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
            <input type="checkbox" defaultChecked className="rounded text-brand" />
            <span className="font-bold text-zinc-800">AML / Sanctions Screening</span>
          </label>
        </div>
        <div className="flex justify-end gap-2 pt-4 border-t border-zinc-100 mt-6">
          <button onClick={onClose} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
          <button onClick={onClose} className="px-5 py-2 font-bold text-white bg-brand rounded-lg">Send to Maker</button>
        </div>
      </div>
    </Modal>
  );
}

export function RetentionPlaybookModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Execute Retention Playbook" maxWidth="max-w-lg">
      <div className="space-y-6 text-xs">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h4 className="font-bold text-red-800 flex items-center gap-2"><Clock className="w-4 h-4" /> Churn Risk Detected</h4>
          <p className="text-red-600 mt-1">Avaloq system shows a recent large outflow of funds.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Recommended Call Script</h4>
          <div className="bg-zinc-100 p-3 rounded-lg border border-zinc-200 text-zinc-700 italic">
            "Hello, I noticed some recent changes in your portfolio. I wanted to proactively offer you our latest preferential FD rates to ensure you're getting the best yield."
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4 border-t border-zinc-100">
          <button onClick={onClose} className="px-4 py-2 font-bold text-zinc-600">Cancel</button>
          <button onClick={onClose} className="px-5 py-2 font-bold text-white bg-zinc-900 rounded-lg flex items-center gap-2">Log Call Activity <ArrowRight className="w-3 h-3" /></button>
        </div>
      </div>
    </Modal>
  );
}

export function CkycPanel({ isOpen, onClose }) {
  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title="Central KYC (CKYC) Summary" width="w-[400px]" icon={ShieldCheck}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-2">
          <span className="text-[10px] text-zinc-400 font-bold uppercase block">CKYC Registry Status</span>
          <h4 className="font-bold text-green-600 text-sm">Active & Verified</h4>
          <p className="text-zinc-500">Last synced on 12-May-2025.</p>
        </div>
        <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-2">
          <span className="text-[10px] text-zinc-400 font-bold uppercase block">Missing Information</span>
          <p className="text-zinc-800 font-medium">None. All mandatory fields mapped.</p>
        </div>
      </div>
      <div className="p-4 border-t border-zinc-200 bg-white flex justify-end gap-2">
        <button onClick={onClose} className="px-5 py-2 text-xs font-bold text-black bg-lime hover:opacity-90 rounded-lg">Sync Registry</button>
      </div>
    </ContextualDrawer>
  );
}

export function KnowledgeDrawer({ isOpen, onClose }) {
  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title="Knowledge Base" width="w-[400px]" icon={BookOpen}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="space-y-3">
          <div className="p-3 bg-white border border-zinc-200 rounded-lg hover:border-brand cursor-pointer transition-colors">
            <h4 className="font-bold text-zinc-800">Wealth Planning Guidelines</h4>
            <p className="text-[10px] text-zinc-500 mt-1">Read the latest compliance requirements for High Net Worth individuals.</p>
          </div>
          <div className="p-3 bg-white border border-zinc-200 rounded-lg hover:border-brand cursor-pointer transition-colors">
            <h4 className="font-bold text-zinc-800">Vulnerable Customer Policy v2.4</h4>
            <p className="text-[10px] text-zinc-500 mt-1">Standard operating procedures for managing vulnerable segments.</p>
          </div>
        </div>
      </div>
    </ContextualDrawer>
  );
}

export function GenericActionDrawer({ isOpen, onClose, action, customer, activeSubTab }) {
  const configs = {
    appointment: {
      title: 'Appointment & Follow-up Manager',
      icon: Calendar,
      eyebrow: 'Lead warming and RM activity',
      body: [
        ['Next best slot', customer?.bestTimeToCall || '10:00 AM - 12:00 PM'],
        ['Preferred channel', 'Phone, WhatsApp, Branch appointment'],
        ['Linked CRM context', activeSubTab || 'Customer 360']
      ],
      actions: ['Create appointment', 'Send calendar invite', 'Log call memo']
    },
    board: {
      title: 'Board & Management Directory',
      icon: Users,
      eyebrow: 'GGB relationship intelligence',
      body: [
        ['Primary contact', customer?.groupProfile?.executiveManagement?.[0] || 'CFO / Treasury Head'],
        ['Relationship role', 'Authorized signatory / decision maker'],
        ['Visibility', 'Masked by role and region']
      ],
      actions: ['Add director', 'Update role', 'Request approval']
    },
    'term-template': {
      title: 'Term Sheet Template Builder',
      icon: FileText,
      eyebrow: 'Reusable deal structures',
      body: [
        ['Template', 'Syndicated loan / Islamic treasury placement'],
        ['Mandatory artifacts', 'Pricing, tenor, covenants, approvals'],
        ['Checker status', 'Ready for maker-checker submission']
      ],
      actions: ['Use template', 'Attach to deal', 'Submit for review']
    },
    placemat: {
      title: 'Create Account Placemat',
      icon: Landmark,
      eyebrow: 'GGB Account Planning',
      body: [
        ['Account', customer?.name || 'Selected corporate account'],
        ['Version', 'Internal placemat with sanitized client-ready option'],
        ['Included sections', 'Group hierarchy, exposure, limits, pipeline, news, red flags']
      ],
      actions: ['Generate preview', 'Export PPT', 'Export sanitized PDF']
    },
    newsletter: {
      title: 'Personalized Newsletter Composer',
      icon: Mail,
      eyebrow: 'Private & Premier content team',
      body: [
        ['Audience', customer?.segment || 'Premier / Private Wealth'],
        ['Topics', 'Market trend, product insight, investment note'],
        ['AI message', 'Personalized for customer holdings and risk profile']
      ],
      actions: ['Generate message', 'Preview newsletter', 'Send campaign']
    },
    instantResolution: {
      title: 'Instant Resolution Console',
      icon: CheckCircle2,
      eyebrow: 'Service contact centre',
      body: [
        ['Case automation', 'Auto-created from IVR/CTI interaction'],
        ['Suggested fix', 'Fee reversal / card unblock / document resend'],
        ['Post resolution', 'Cross-sell and satisfaction capture']
      ],
      actions: ['Resolve now', 'Send response', 'Create cross-sell lead']
    }
  };

  const cfg = configs[action] || {
    title: 'CRM Action',
    icon: MessageSquare,
    eyebrow: 'Contextual action',
    body: [['Customer', customer?.name || 'Selected record'], ['Status', 'Ready']],
    actions: ['Save', 'Submit', 'Close']
  };
  const Icon = cfg.icon;

  return (
    <ContextualDrawer isOpen={isOpen} onClose={onClose} title={cfg.title} subtitle={cfg.eyebrow} width="w-[520px]" icon={Icon}>
      <div className="p-6 space-y-4 text-xs bg-zinc-50 flex-1">
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 space-y-3">
          {cfg.body.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 border-b border-zinc-50 pb-2 last:border-b-0">
              <span className="text-zinc-400 font-bold uppercase text-[9px] tracking-wider">{label}</span>
              <span className="font-bold text-zinc-800 text-right">{value}</span>
            </div>
          ))}
        </div>

        <div className="bg-card-bg text-page-body rounded-2xl p-4">
          <span className="text-[10px] text-lime font-black uppercase tracking-wider">Workflow actions</span>
          <div className="grid grid-cols-1 gap-2 mt-3">
            {cfg.actions.map((item) => (
              <button
                key={item}
                onClick={onClose}
                className="flex items-center justify-between rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-card-border px-3 py-2 text-[11px] font-bold transition-colors"
              >
                <span>{item}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-dashed border-zinc-300 rounded-2xl p-4 flex items-center gap-3 text-zinc-500">
          <Upload className="w-4 h-4 text-brand" />
          <span className="font-semibold">Mock audit log will capture create, edit, export, and approval actions.</span>
        </div>
      </div>
    </ContextualDrawer>
  );
}
