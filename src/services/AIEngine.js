// Mock AI Engine for predictive analytics and natural language insights

export const AIEngine = {
  getComplaintDrivers: () => {
    return [
      { driver: "Avaloq System Timeout", impactScore: 85, recommendation: "Escalate to Level 3 IT Support immediately. 15 related cases in past 24h." },
      { driver: "Unclear Fee Structure on i-Mudarabah", impactScore: 72, recommendation: "Deploy automated SMS clarification campaign to affected segment." },
      { driver: "Long Branch Wait Times (Penang)", impactScore: 65, recommendation: "Re-route mass segment to MAE app via targeted push notifications." }
    ];
  },

  getVulnerableClients: () => {
    return [
      { id: "C-293011", name: "Madam Chin Siew Lan", risk: "High", reason: "Senior citizen, high branch dependency, recent suspected fraud flag." },
      { id: "C-410299", name: "Datin Nurul Izzah", risk: "Medium", reason: "PEP status, recent high-value cross-border transfer." }
    ];
  },

  getDealStallPredictions: () => {
    return [
      { dealId: "DEAL-501", client: "Petronas Trading", stallProbability: "High", reason: "Syndication committee pending review for > 14 days." },
      { dealId: "OPP-11020", client: "Farhan Haq", stallProbability: "Medium", reason: "No client response to proposal sent 3 weeks ago." }
    ];
  },

  getNextBestActions: (customerId) => {
    const actions = {
      "C-982310": [
        "Schedule Face-to-Face Meeting with RM",
        "Offer Premium Shariah Term Deposit (i-Holdings)"
      ],
      "default": [
        "Review upcoming fixed deposit maturities",
        "Invite to Wealth Management webinar"
      ]
    };
    return actions[customerId] || actions["default"];
  },
  
  getRegulatoryEscalationRisk: () => {
    return [
      { caseId: "CASE-9921", riskLevel: "Critical - 95%", reason: "SLA breached by 2 hours, client mentioned 'BNM' and 'Ombudsman' in latest correspondence." },
      { caseId: "CASE-1192", riskLevel: "High - 78%", reason: "Shariah non-compliance keyword detected in email." }
    ];
  }
};
