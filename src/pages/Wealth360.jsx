import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import WealthSidebarProfile from '../components/wealth/WealthSidebarProfile';
import WealthProfileSuitability from '../components/wealth/WealthProfileSuitability';
import WealthPortfolioHoldings from '../components/wealth/WealthPortfolioHoldings';
import WealthAccountsDocuments from '../components/wealth/WealthAccountsDocuments';
import WealthHouseholdMap from '../components/wealth/WealthHouseholdMap';
import WealthRmIntelligence from '../components/wealth/WealthRmIntelligence';
import WealthInteractionsService from '../components/wealth/WealthInteractionsService';
import WealthGoalsPlanning from '../components/wealth/WealthGoalsPlanning';
import WealthRiskCompliance from '../components/wealth/WealthRiskCompliance';
import WealthTasksAudit from '../components/wealth/WealthTasksAudit';
import WealthDashboards from '../components/wealth/WealthDashboards';

export default function Wealth360({ currentCustomer }) {
  const { currentUserRole } = useTheme();
  
  const tabs = [
    "Profile & Suitability", 
    "Portfolio & Holdings", 
    "Statements & Docs", 
    "Household & Map", 
    "Interactions & Service", 
    "Goals & Protection", 
    "Risk & Compliance", 
    "Tasks & Audit",
    "Portfolio Dashboards"
  ];
  
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Scroll to top on customer change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(tabs[0]);
  }, [currentCustomer]);

  if (!currentCustomer) return null;

  return (
    <div className="flex bg-zinc-50/50 min-h-screen text-zinc-900">
      
      {/* Col 1: Left Sidebar Profile */}
      <WealthSidebarProfile customer={currentCustomer} />

      {/* Col 2 & 3: Main Area and RM Intelligence */}
      <div className="flex flex-1 min-w-0 h-full">
        
        {/* Col 2: Main Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Navigation Tabs */}
          <div className="bg-white border-b border-zinc-200 overflow-x-auto hide-scrollbar shadow-sm">
            <nav className="flex px-6 min-w-max space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab 
                      ? 'border-brand text-brand' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px] bg-zinc-50/50">
            {activeTab === "Profile & Suitability" && <WealthProfileSuitability customer={currentCustomer} />}
            {activeTab === "Portfolio & Holdings" && <WealthPortfolioHoldings customer={currentCustomer} />}
            {activeTab === "Statements & Docs" && <WealthAccountsDocuments customer={currentCustomer} role={currentUserRole} />}
            {activeTab === "Household & Map" && <WealthHouseholdMap customer={currentCustomer} role={currentUserRole} />}
            {activeTab === "Interactions & Service" && <WealthInteractionsService customer={currentCustomer} role={currentUserRole} />}
            {activeTab === "Goals & Protection" && <WealthGoalsPlanning customer={currentCustomer} />}
            {activeTab === "Risk & Compliance" && <WealthRiskCompliance customer={currentCustomer} role={currentUserRole} />}
            {activeTab === "Tasks & Audit" && <WealthTasksAudit customer={currentCustomer} />}
            {activeTab === "Portfolio Dashboards" && (
              <div className="p-6">
                <WealthDashboards />
              </div>
            )}
          </div>
          
        </div>

        {/* Col 3: Right Sticky Sidebar: RM Intelligence */}
        <WealthRmIntelligence customer={currentCustomer} role={currentUserRole} />
        
      </div>
    </div>
  );
}
