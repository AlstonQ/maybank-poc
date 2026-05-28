import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import SmeSnapshotPanel from '../components/sme/SmeSnapshotPanel';
import SmeBusinessProfile from '../components/sme/SmeBusinessProfile';
import SmeAccountHoldings from '../components/sme/SmeAccountHoldings';
import SmeCashflowRisk from '../components/sme/SmeCashflowRisk';
import SmePipelineService from '../components/sme/SmePipelineService';
import SmeRelationshipMap from '../components/sme/SmeRelationshipMap';
import SmeDocumentVault from '../components/sme/SmeDocumentVault';
import SmeRmIntelligencePanel from '../components/sme/SmeRmIntelligencePanel';
import SmeDashboards from '../components/sme/SmeDashboards';

export default function SME360({ currentCustomer, setActiveModal }) {
  const { currentUserRole } = useTheme();
  
  const tabs = [
    "Business Profile", 
    "Accounts & Holdings", 
    "Cashflow & Risk", 
    "Pipeline & Service", 
    "Relationship Map", 
    "Document Vault",
    "SME Analytics"
  ];
  const [activeSubTab, setActiveSubTab] = useState(tabs[0]);

  if (!currentCustomer) return null;

  return (
    <div className="space-y-6">
      
      {/* Top Snapshot Strip (Always visible) */}
      <SmeSnapshotPanel customer={currentCustomer} />
      
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-6 min-w-0">
          
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-2 flex gap-2 flex-wrap">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSubTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeSubTab === tab 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Content */}
          <div className="min-h-[500px]">
            {activeSubTab === "Business Profile" && <SmeBusinessProfile customer={currentCustomer} />}
            {activeSubTab === "Accounts & Holdings" && <SmeAccountHoldings customer={currentCustomer} />}
            {activeSubTab === "Cashflow & Risk" && <SmeCashflowRisk customer={currentCustomer} />}
            {activeSubTab === "Pipeline & Service" && <SmePipelineService customer={currentCustomer} />}
            {activeSubTab === "Relationship Map" && <SmeRelationshipMap customer={currentCustomer} />}
            {activeSubTab === "Document Vault" && <SmeDocumentVault customer={currentCustomer} userRole={currentUserRole} />}
            {activeSubTab === "SME Analytics" && <SmeDashboards />}
          </div>
          
        </div>

        {/* Right Sidebar: Sticky RM Intelligence Panel */}
        <div className="xl:w-[320px] shrink-0">
          <SmeRmIntelligencePanel customer={currentCustomer} />
        </div>
        
      </div>
    </div>
  );
}
