import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockCustomers } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

import Wealth360 from './Wealth360';
import Islamic360 from './Islamic360';
import SME360 from './SME360';

import SuitabilityAssessmentDrawer from '../components/drawers/SuitabilityAssessmentDrawer';
import FinancialApplicationPlanDrawer from '../components/drawers/FinancialApplicationPlanDrawer';
import LogComplaintModal from '../components/drawers/LogComplaintModal';
import { 
  EditProfileDrawer, GenerateProposalDrawer, CrossSellDrawer, 
  ReKycModal, RetentionPlaybookModal, CkycPanel, KnowledgeDrawer, GenericActionDrawer
} from '../components/drawers/Customer360Modals';

export default function Customer360({ id, onBack }) {
  const { appMode } = useTheme();
  
  // Find customer
  const currentCustomer = mockCustomers.find(c => c.id === id) || mockCustomers[0];
  const [activeModal, setActiveModal] = useState(null);

  // Determine segment to render
  const segment = currentCustomer.segment || 'Private Wealth';

  return (
    <div className="space-y-6">
      {/* Back to List & Global Actions row */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {appMode === 'gcfs' ? 'Customer List' : 'Account Registry'}</span>
        </button>

        <button 
          onClick={() => setActiveModal('logComplaint')} 
          className="h-8 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-colors shadow"
        >
          Log Complaint
        </button>
      </div>

      {/* Render Specific Segment 360 View */}
      {(segment === 'Private Wealth' || segment === 'Premier Wealth') && (
        <Wealth360 currentCustomer={currentCustomer} setActiveModal={setActiveModal} />
      )}
      {segment === 'Islamic' && (
        <Islamic360 currentCustomer={currentCustomer} setActiveModal={setActiveModal} />
      )}
      {segment === 'SME' && (
        <SME360 currentCustomer={currentCustomer} setActiveModal={setActiveModal} />
      )}

      {/* Modals and Drawers */}
      <SuitabilityAssessmentDrawer 
        isOpen={activeModal === 'suitability'} 
        onClose={() => setActiveModal(null)} 
        customer={currentCustomer} 
      />
      <FinancialApplicationPlanDrawer 
        isOpen={activeModal === 'application'} 
        onClose={() => setActiveModal(null)} 
        customer={currentCustomer} 
      />
      
      {activeModal === 'editProfile' && <EditProfileDrawer onClose={() => setActiveModal(null)} customer={currentCustomer} />}
      {activeModal === 'generateProposal' && <GenerateProposalDrawer onClose={() => setActiveModal(null)} />}
      {activeModal === 'crossSell' && <CrossSellDrawer onClose={() => setActiveModal(null)} />}
      {activeModal === 'reKyc' && <ReKycModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'retention' && <RetentionPlaybookModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'ckyc' && <CkycPanel onClose={() => setActiveModal(null)} />}
      {activeModal === 'knowledge' && <KnowledgeDrawer onClose={() => setActiveModal(null)} />}
      {activeModal === 'generic' && <GenericActionDrawer onClose={() => setActiveModal(null)} />}
      <LogComplaintModal isOpen={activeModal === 'logComplaint'} onClose={() => setActiveModal(null)} />
    </div>
  );
}
