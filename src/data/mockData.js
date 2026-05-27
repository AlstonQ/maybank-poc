// Realistic Malaysian and ASEAN mock dataset for Maybank BUSINESSNEXT CRM

export const mockCustomersGCFS = [
  {
    id: "C-982310",
    name: "Tengku Adnan bin Tengku Zafrul",
    segment: "Premier Wealth",
    cif: "CIF-4028911",
    branch: "Maybank Tower KL (HQ)",
    branchLink: "#",
    aum: 4850000,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    mobile: "+60 12-388 9821",
    email: "tengku.adnan@outlook.my",
    nric: "780214-14-5231",
    dob: "14 Feb 1978",
    customerSince: "2012",
    occupation: "Managing Director, ASEAN Tech Holdings",
    bestTimeToCall: "10:00 AM - 12:00 PM",
    preferredLanguage: "English / Bahasa Melayu",
    ucic: "UCIC-882901",
    groupId: "G-10294",
    churnRisk: 96,
    churnValueBanner: "96% High Churn Risk (Avaloq Outflow Detected)",
    retentionSteps: [
      "Schedule Face-to-Face Meeting with RM",
      "Offer Premium Shariah Term Deposit (i-Holdings)",
      "Propose Elite Private Banking Suite"
    ],
    positiveFactors: [
      "Active Premier Cards spend (MYR 25k/mo)",
      "Regular salary credit of MYR 45k/mo",
      "Spouse holds Joint Private Account"
    ],
    negativeFactors: [
      "AUM declined by 35% in past 90 days",
      "No contact in past 4 months",
      "Competitor deposit inquiry logged via CTOS"
    ],
    nudgeOffer: "Eligible for Maybank Private Shariah Wealth Fund (i-Offer)",
    keepInTouch: {
      steps: 4,
      days: 12,
      completed: 3,
      progress: 75,
      timeline: [
        { type: "Email", date: "15 May 2026", subject: "Wealth Portfolio Review Invitation", status: "Sent" },
        { type: "Call", date: "20 May 2026", subject: "Follow-up Call: High Churn Alert", status: "Completed" },
        { type: "WhatsApp", date: "24 May 2026", subject: "Term Deposit Offer Details", status: "Read" },
        { type: "Visit", date: "28 May 2026", subject: "Private Wealth Advisory Session", status: "Pending" }
      ]
    },
    interactions: [
      { id: "INT-883", subject: "Annual Review Meeting", origin: "Face-to-Face", date: "20 May 2026", assignedTo: "James May" },
      { id: "INT-871", subject: "High Churn Advisory", origin: "Dialer", date: "14 May 2026", assignedTo: "James May" },
      { id: "INT-862", subject: "Shariah Product Query", origin: "WhatsApp", date: "02 May 2026", assignedTo: "Support Desk" }
    ],
    holdings: [
      { id: "H-1", type: "Deposits", name: "Maybank Premier Account", balance: 1250000, islamic: false, status: "Active", source: "HOST" },
      { id: "H-2", type: "Deposits", name: "Maybank i-Mudarabah Account", balance: 800000, islamic: true, status: "Active", source: "HOST" },
      { id: "H-3", type: "Investments", name: "Avanza Global Growth Fund", balance: 1800000, islamic: false, status: "Active", source: "Avaloq" },
      { id: "H-4", type: "Investments", name: "Maybank Shariah Equity Fund", balance: 1000000, islamic: true, status: "Active", source: "FINIQ" },
      { id: "H-5", type: "Cards", name: "Maybank Visa Infinite Card", balance: -45000, islamic: false, status: "Active", source: "MIAS" },
      { id: "H-6", type: "Liabilities", name: "Maybank Islamic Home Financing-i", balance: -2500000, islamic: true, status: "Active", source: "Etiqa" }
    ],
    suitability: {
      score: "Balanced - L3/5",
      ckaStatus: "Qualified",
      validity: "30 Nov 2027",
      vulnerable: false,
      assessmentHistory: [
        { date: "30 Nov 2025", channel: "M2U Web", score: "L3 Balanced" },
        { date: "15 Jan 2024", channel: "Branch", score: "L2 Conservative" }
      ]
    },
    financialPlanning: {
      healthScore: "Excellent (88/100)",
      goals: [
        { name: "Legacy & Faraid (Wasee)", target: 5000000, current: 4850000, type: "islamic", progress: 97 },
        { name: "Haj & Umrah Package", target: 150000, current: 150000, type: "islamic", progress: 100 },
        { name: "Global Wealth Diversification", target: 3000000, current: 1800000, type: "conventional", progress: 60 }
      ]
    },
    kyc: {
      cddStatus: "Approved",
      amlRating: "Low Risk",
      reKycDue: "14 Feb 2028",
      taxFatca: "Non-US",
      ctosCcris: "Excellent (795 CTOS)",
      pep: false,
      sanctions: "Cleared"
    }
  },
  {
    id: "C-410299",
    name: "Datin Nurul Izzah binti Anwar",
    segment: "Private Wealth",
    cif: "CIF-1192048",
    branch: "Damansara Heights Branch",
    branchLink: "#",
    aum: 12400000,
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    rating: 5,
    mobile: "+60 19-204 8831",
    email: "izzah.anwar@pj-holdings.com",
    nric: "691012-10-5884",
    dob: "12 Oct 1969",
    customerSince: "2008",
    occupation: "Director, PJ Property Ventures",
    bestTimeToCall: "2:00 PM - 4:00 PM",
    preferredLanguage: "Bahasa Melayu / English",
    ucic: "UCIC-110294",
    groupId: "G-41220",
    churnRisk: 14,
    churnValueBanner: "14% Low Churn Risk",
    retentionSteps: [
      "Propose Shariah Commercial Property Financing",
      "Annual Private Banking Gala Invitation"
    ],
    positiveFactors: [
      "Consistent net deposit inflow (+MYR 1.2M)",
      "High Etiqa Takaful Premium (MYR 120k/yr)",
      "Long tenure: 18 Years"
    ],
    negativeFactors: [
      "None identified"
    ],
    nudgeOffer: "Pre-Approved Premier Credit Line (MYR 2M)",
    keepInTouch: {
      steps: 3,
      days: 30,
      completed: 3,
      progress: 100,
      timeline: [
        { type: "Visit", date: "02 May 2026", subject: "Bespoke Portfolio Restructuring", status: "Completed" },
        { type: "Email", date: "10 May 2026", subject: "Etiqa Elite Savings Plan Proposal", status: "Sent" }
      ]
    },
    interactions: [
      { id: "INT-822", subject: "Bespoke Wealth Advisory", origin: "Face-to-Face", date: "02 May 2026", assignedTo: "James May" },
      { id: "INT-799", subject: "Takaful Coverage Discussion", origin: "Email", date: "24 Apr 2026", assignedTo: "Etiqa Specialist" }
    ],
    holdings: [
      { id: "H-201", type: "Deposits", name: "Maybank Private Wealth Account", balance: 5400000, islamic: false, status: "Active", source: "HOST" },
      { id: "H-202", type: "Deposits", name: "Maybank Islamic Premium Savings Account-i", balance: 4000000, islamic: true, status: "Active", source: "HOST" },
      { id: "H-203", type: "Investments", name: "FINIQ Shariah Fixed Income Fund", balance: 3000000, islamic: true, status: "Active", source: "FINIQ" }
    ],
    suitability: {
      score: "Conservative - L2/5",
      ckaStatus: "Qualified",
      validity: "15 Apr 2028",
      vulnerable: true,
      assessmentHistory: [
        { date: "15 Apr 2025", channel: "Branch", score: "L2 Conservative" }
      ]
    },
    financialPlanning: {
      healthScore: "Excellent (92/100)",
      goals: [
        { name: "Retirement Annuity Portfolio", target: 10000000, current: 9400000, type: "conventional", progress: 94 },
        { name: "Islamic Legacy Trust (Wasiat)", target: 3000000, current: 3000000, type: "islamic", progress: 100 }
      ]
    },
    kyc: {
      cddStatus: "Approved",
      amlRating: "Low Risk",
      reKycDue: "12 Oct 2029",
      taxFatca: "Non-US",
      ctosCcris: "Excellent (820 CTOS)",
      pep: true,
      sanctions: "Cleared"
    }
  },
  {
    id: "C-110292",
    name: "Dr. Rajesh Kumar a/l Subramaniam",
    segment: "Premier Wealth",
    cif: "CIF-9920194",
    branch: "Bangsar Baru Branch",
    branchLink: "#",
    aum: 2150000,
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150",
    rating: 4,
    mobile: "+60 16-399 2201",
    email: "rajesh.kumar@pantai.com.my",
    nric: "830509-08-6229",
    dob: "09 May 1983",
    customerSince: "2015",
    occupation: "Consultant Cardiologist, Pantai Hospital",
    bestTimeToCall: "6:00 PM - 8:00 PM",
    preferredLanguage: "English / Tamil",
    ucic: "UCIC-382901",
    groupId: "G-10294",
    churnRisk: 42,
    churnValueBanner: "42% Moderate Churn Risk (Inactive M2U Logins)",
    retentionSteps: [
      "Present Premium Private Hospital Merchant Card",
      "Offer Shariah Medical Equipment Financing-i"
    ],
    positiveFactors: [
      "Consistent professional consulting fees credited",
      "Mortgage with Maybank of MYR 1.8M"
    ],
    negativeFactors: [
      "Decreasing deposit balances in past 60 days",
      "Wealth investments active on competitor app (Luno)"
    ],
    nudgeOffer: "Eligible for Maybank Islamic Personal Financing-i",
    keepInTouch: {
      steps: 3,
      days: 15,
      completed: 1,
      progress: 33,
      timeline: [
        { type: "Call", date: "10 May 2026", subject: "Portfolio Rebalancing Call", status: "Completed" },
        { type: "Email", date: "25 May 2026", subject: "Shariah Medical Financing Proposal", status: "Sent" }
      ]
    },
    interactions: [
      { id: "INT-702", subject: "Financing Requirement Discussion", origin: "Dialer", date: "10 May 2026", assignedTo: "James May" }
    ],
    holdings: [
      { id: "H-301", type: "Deposits", name: "Maybank Savings Account", balance: 650000, islamic: false, status: "Active", source: "HOST" },
      { id: "H-302", type: "Investments", name: "PNB-ASNB Amanah Saham Malaysia", balance: 1500000, islamic: true, status: "Active", source: "PNB-ASNB" }
    ],
    suitability: {
      score: "Aggressive - L5/5",
      ckaStatus: "Qualified",
      validity: "09 May 2027",
      vulnerable: false,
      assessmentHistory: [
        { date: "09 May 2024", channel: "M2U Web", score: "L5 Aggressive" }
      ]
    },
    financialPlanning: {
      healthScore: "Good (75/100)",
      goals: [
        { name: "Children Education Fund (Oxford)", target: 2000000, current: 1500000, type: "conventional", progress: 75 }
      ]
    },
    kyc: {
      cddStatus: "Approved",
      amlRating: "Medium Risk",
      reKycDue: "09 May 2028",
      taxFatca: "Non-US",
      ctosCcris: "Good (710 CTOS)",
      pep: false,
      sanctions: "Cleared"
    }
  },
  {
    id: "C-293011",
    name: "Madam Chin Siew Lan",
    segment: "Mass",
    cif: "CIF-2038472",
    branch: "Penang Road Branch",
    branchLink: "#",
    aum: 95000,
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    rating: 3,
    mobile: "+60 14-663 8812",
    email: "siewlan.chin@gmail.com",
    nric: "551225-07-5120",
    dob: "25 Dec 1955",
    customerSince: "1994",
    occupation: "Retired Teacher",
    bestTimeToCall: "9:00 AM - 11:00 AM",
    preferredLanguage: "Mandarin / Hokkien / English",
    ucic: "UCIC-502811",
    groupId: "G-99210",
    churnRisk: 10,
    churnValueBanner: "10% Low Churn Risk",
    retentionSteps: [
      "Review Fixed Deposit Maturities",
      "Help Setup MAE Mobile App"
    ],
    positiveFactors: [
      "Over 30 years banking tenure",
      "Steady pension credit of MYR 4,200/mo"
    ],
    negativeFactors: [
      "High branch-dependency for manual withdrawals"
    ],
    nudgeOffer: "Eligible for Senior Citizen Fixed Deposit Promo",
    keepInTouch: {
      steps: 2,
      days: 45,
      completed: 2,
      progress: 100,
      timeline: [
        { type: "Visit", date: "04 May 2026", subject: "MAE App Assistance", status: "Completed" }
      ]
    },
    interactions: [
      { id: "INT-605", subject: "MAE Mobile Setup Assistance", origin: "Face-to-Face", date: "04 May 2026", assignedTo: "Penang Branch Desk" }
    ],
    holdings: [
      { id: "H-401", type: "Deposits", name: "Maybank Savings Account", balance: 25000, islamic: false, status: "Active", source: "HOST" },
      { id: "H-402", type: "Deposits", name: "Maybank Fixed Deposit", balance: 70000, islamic: false, status: "Active", source: "HOST" }
    ],
    suitability: {
      score: "Conservative - L1/5",
      ckaStatus: "Not Applicable",
      validity: "Expired",
      vulnerable: true,
      assessmentHistory: []
    },
    financialPlanning: {
      healthScore: "Fair (60/100)",
      goals: [
        { name: "Medical Reserve Fund", target: 100000, current: 95000, type: "conventional", progress: 95 }
      ]
    },
    kyc: {
      cddStatus: "Approved",
      amlRating: "Low Risk",
      reKycDue: "25 Dec 2028",
      taxFatca: "Non-US",
      ctosCcris: "Excellent (760 CTOS)",
      pep: false,
      sanctions: "Cleared"
    }
  },
  {
    id: "C-592810",
    name: "Farhan bin Mohammad Haq",
    segment: "Premier Wealth",
    cif: "CIF-3910291",
    branch: "Kuching Lintas Branch",
    branchLink: "#",
    aum: 1680000,
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 4,
    mobile: "+60 11-1049 8831",
    email: "farhan.haq@borneo-timber.com",
    nric: "880818-13-5883",
    dob: "18 Aug 1988",
    customerSince: "2018",
    occupation: "General Manager, Borneo Timber Corporation",
    bestTimeToCall: "3:00 PM - 5:00 PM",
    preferredLanguage: "Bahasa Melayu / English",
    ucic: "UCIC-293810",
    groupId: "G-10294",
    churnRisk: 68,
    churnValueBanner: "68% High Churn Risk (Outflow to CIMB)",
    retentionSteps: [
      "Offer Shariah Private Equity Fund",
      "Discuss Commercial Fleet Financing-i"
    ],
    positiveFactors: [
      "Large business deposits under Etiqa",
      "Regular monthly salary credit"
    ],
    negativeFactors: [
      "High balance transfer requests",
      "Inquired about loan consolidation at competitor"
    ],
    nudgeOffer: "Eligible for Maybank SME Shariah Cash Line",
    keepInTouch: {
      steps: 4,
      days: 8,
      completed: 2,
      progress: 50,
      timeline: [
        { type: "Email", date: "02 May 2026", subject: "SME Islamic Trade Financing Promo", status: "Completed" },
        { type: "Call", date: "15 May 2026", subject: "High Churn Follow-up Alert", status: "Completed" }
      ]
    },
    interactions: [
      { id: "INT-501", subject: "Trade Financing Discussions", origin: "Dialer", date: "15 May 2026", assignedTo: "James May" }
    ],
    holdings: [
      { id: "H-501", type: "Deposits", name: "Maybank Premier Account", balance: 680000, islamic: false, status: "Active", source: "HOST" },
      { id: "H-502", type: "Deposits", name: "Maybank i-Mudarabah Account", balance: 1000000, islamic: true, status: "Active", source: "HOST" }
    ],
    suitability: {
      score: "Balanced - L3/5",
      ckaStatus: "Qualified",
      validity: "18 Aug 2027",
      vulnerable: false,
      assessmentHistory: [
        { date: "18 Aug 2024", channel: "M2U Web", score: "L3 Balanced" }
      ]
    },
    financialPlanning: {
      healthScore: "Good (78/100)",
      goals: [
        { name: "Business Expansion Reserve", target: 3000000, current: 1680000, type: "islamic", progress: 56 }
      ]
    },
    kyc: {
      cddStatus: "Approved",
      amlRating: "Low Risk",
      reKycDue: "18 Aug 2029",
      taxFatca: "Non-US",
      ctosCcris: "Excellent (780 CTOS)",
      pep: false,
      sanctions: "Cleared"
    }
  }
];

export const mockCustomersGGB = [
  {
    id: "ACC-1002",
    name: "Petronas Trading Corporation Sdn Bhd",
    segment: "Global Banking",
    cif: "CIF-PET-9902",
    branch: "Corporate Banking Division HQ",
    aum: 1450000000, // MYR 1.45B
    rating: 5,
    brn: "BRN-19980102432",
    incorporationDate: "12 May 1998",
    churnRisk: 25,
    hqAddress: "Tower 1, PETRONAS Twin Towers, KLCC, Kuala Lumpur",
    groupProfile: {
      parent: "Petroliam Nasional Berhad (PETRONAS)",
      subsidiaries: [
        { name: "Petco Trading Labuan Company Ltd", relation: "100% Owned Subsidiary", jurisdiction: "Labuan IBFC" },
        { name: "Petronas LNG Ltd", relation: "Wholly Owned Subsidiary", jurisdiction: "Malaysia" }
      ],
      board: [
        "Tan Sri Mohd Bakke Salleh (Chairman)",
        "Datuk Muhammad Taufik (President & Group CEO)"
      ],
      bookingEntity: "Maybank Corporate Labuan Branch",
      servicingEntity: "Maybank Tower KLCC Suite"
    },
    relationshipExposure: {
      totalLimits: 2500000000, // 2.5B
      utilized: 1850000000, // 1.85B
      rwra: 1250000000,
      creditRating: "AAA (MARC) / A2 (Moody's)",
      revenueNII: 35400000, // 35.4M
      revenueNoII: 18200000, // 18.2M
      facilities: [
        { type: "Shariah Trade Finance Facility-i", limit: 1000000000, utilized: 750000000, status: "Active" },
        { type: "Conventional Revolving Credit", limit: 1000000000, utilized: 900000000, status: "Active" },
        { type: "Global Syndicate Treasury Line", limit: 500000000, utilized: 200000000, status: "Active" }
      ]
    },
    dealPipeline: [
      { id: "DEAL-501", name: "Green Hydrogen Plant Financing (Syndicated Takaful)", value: 850000000, probability: 80, stage: "Structuring", confidential: true },
      { id: "DEAL-502", name: "US Dollar Cross-Border Hedging Swap", value: 120000000, probability: 95, stage: "Documentation", confidential: false }
    ],
    transactions: [
      { date: "25 May 2026", type: "Outward SWIFT Transfer", amount: 45000000, currency: "USD", recipient: "Shell Trading Singapore", ref: "SWIFT-990281" },
      { date: "22 May 2026", type: "Islamic Treasury Placement Maturity", amount: 150000000, currency: "MYR", recipient: "Maybank Islamic Treasury", ref: "TR-88201" }
    ],
    risksAndNews: {
      redFlags: [
        { type: "ESG", severity: "Low", desc: "Carbon emission scrutiny on upstream subsidiary", action: "Engagement with Petronas Sustainability Unit initiated" }
      ],
      aiNews: [
        { headline: "PETRONAS expands green hydrogen collaboration with Japanese consortiums", sentiment: "Positive", relevance: "Direct relation to proposed DEAL-501" },
        { headline: "Global Brent crude pricing registers steady gain amidst OPEC production adjustments", sentiment: "Neutral", relevance: "Impacts general liquidity flows" }
      ]
    },
    termSheets: [
      { name: "Historical Carbon Syndicate Facility (Tenaga Nasional - 2024)", matches: "85% Structural Fit" },
      { name: "Labuan LNG Islamic Term Financing (Petco - 2023)", matches: "92% Structural Fit" }
    ],
    rmAssignment: {
      principalRm: "James May (Global Relationship Director)",
      secondaryRm: "Faridah binti Ismail (Local RM Malaysia)",
      globalSupportRm: "Hiroshi Nakamura (Tokyo Desk RM)"
    }
  },
  {
    id: "ACC-1004",
    name: "Sime Darby Plantation Berhad",
    segment: "Global Banking",
    cif: "CIF-SDP-4402",
    branch: "Corporate Banking Division HQ",
    aum: 890000000, // MYR 890M
    rating: 5,
    brn: "BRN-20040103822",
    incorporationDate: "24 Nov 2004",
    churnRisk: 14,
    hqAddress: "Main Block, Ara Damansara, Petaling Jaya, Selangor",
    groupProfile: {
      parent: "Sime Darby Berhad",
      subsidiaries: [
        { name: "Sime Darby Oils Sdn Bhd", relation: "Wholly Owned Subsidiary", jurisdiction: "Malaysia" },
        { name: "New Britain Palm Oil Ltd", relation: "98% Owned Subsidiary", jurisdiction: "Papua New Guinea" }
      ],
      board: [
        "Tan Sri Megat Najmuddin (Chairman)",
        "Mohamad Helmy Othman Basha (Group Managing Director)"
      ],
      bookingEntity: "Maybank Corporate Banking HQ",
      servicingEntity: "Corporate Banking Suite 2"
    },
    relationshipExposure: {
      totalLimits: 1500000000, // 1.5B
      utilized: 980000000, // 980M
      rwra: 720000000,
      creditRating: "AA1 (MARC) / Baa2 (Moody's)",
      revenueNII: 19400000,
      revenueNoII: 9200000,
      facilities: [
        { type: "Palm-i Takaful Commodity Facility", limit: 800000000, utilized: 580000000, status: "Active" },
        { type: "Corporate Term Financing-i", limit: 700000000, utilized: 400000000, status: "Active" }
      ]
    },
    dealPipeline: [
      { id: "DEAL-601", name: "ESG Palm Oil Sustainability Linked Loan", value: 350000000, probability: 90, stage: "Credit Committee Approved", confidential: false }
    ],
    transactions: [
      { date: "24 May 2026", type: "Inward SWIFT Transfer", amount: 12500000, currency: "EUR", recipient: "Nestle Corporate Finance", ref: "SWIFT-402911" }
    ],
    risksAndNews: {
      redFlags: [],
      aiNews: [
        { headline: "Sime Darby Plantation rebranding project outlines robust carbon neutrality goal", sentiment: "Positive", relevance: "Strong support for the ESG Deal" }
      ]
    },
    termSheets: [
      { name: "Sustainability Linked Financing (Kuala Lumpur Kepong - 2025)", matches: "90% Structural Fit" }
    ],
    rmAssignment: {
      principalRm: "James May (Global Relationship Director)",
      secondaryRm: "Azlan Shah (Corporate Banker)"
    }
  }
];

export const mockOpportunities = [
  {
    id: "OPP-39201",
    name: "Tengku Adnan - Shariah wealth portfolio transfer",
    customerId: "C-982310",
    customerName: "Tengku Adnan bin Tengku Zafrul",
    value: 1800000,
    probability: 80,
    stage: "Credit Structuring",
    rating: "Hot",
    statusCode: "IN_PROGRESS",
    product: "Shariah Private Wealth Fund (i-Offer)",
    assignedTo: "James May",
    createdOn: "12 May 2026",
    mobileMasked: "+60 12-*** **21",
    emailMasked: "te**********@outlook.my",
    expectedClose: "30 Jun 2026",
    activities: [
      "12 May 2026: RM James May generated proposal sheet for Elite Shariah Fund.",
      "18 May 2026: Client confirmed verbal interest during premium review."
    ],
    callLogs: [
      { date: "15 May 2026", duration: "12 mins", summary: "Discussed returns benchmark against conventional assets" }
    ]
  },
  {
    id: "OPP-41022",
    name: "Datin Nurul Izzah - Premium Takaful Plan",
    customerId: "C-410299",
    customerName: "Datin Nurul Izzah binti Anwar",
    value: 500000,
    probability: 95,
    stage: "Documentation",
    rating: "Hot",
    statusCode: "DOCS_PENDING",
    product: "Etiqa Wealth Takaful Elite",
    assignedTo: "James May",
    createdOn: "08 May 2026",
    mobileMasked: "+60 19-*** **31",
    emailMasked: "iz**********@pj-holdings.com",
    expectedClose: "10 Jun 2026",
    activities: [
      "08 May 2026: Drafted terms and sent for regulatory PDPA clearance."
    ],
    callLogs: []
  },
  {
    id: "OPP-22019",
    name: "Dr. Rajesh Kumar - Equipment Financing i",
    customerId: "C-110292",
    customerName: "Dr. Rajesh Kumar a/l Subramaniam",
    value: 1200000,
    probability: 50,
    stage: "Prospecting",
    rating: "Warm",
    statusCode: "LEAD_IN_DISCUSS",
    product: "Islamic Medical Equipment Financing-i",
    assignedTo: "James May",
    createdOn: "18 May 2026",
    mobileMasked: "+60 16-*** **01",
    emailMasked: "ra**********@pantai.com.my",
    expectedClose: "15 Jul 2026",
    activities: [],
    callLogs: []
  },
  {
    id: "OPP-11020",
    name: "Farhan Haq - Islamic Cash Line-i",
    customerId: "C-592810",
    customerName: "Farhan bin Mohammad Haq",
    value: 2000000,
    probability: 65,
    stage: "Stale / Review Needed",
    rating: "Warm",
    statusCode: "STALE",
    product: "SME Shariah Cash Line-i",
    assignedTo: "James May",
    createdOn: "20 Apr 2026",
    mobileMasked: "+60 11-**** **31",
    emailMasked: "fa**********@borneo-timber.com",
    expectedClose: "30 Aug 2026",
    activities: [],
    callLogs: []
  }
];

export const mockCases = [
  {
    id: "CASE-4921",
    customerName: "Tengku Adnan bin Tengku Zafrul",
    customerId: "C-982310",
    category: "Wealth Management > Transaction Blocked",
    channel: "M2U Mobile App",
    slaCountdownHours: 4, // SLA countdown (low = urgent, red if breached)
    slaState: "Urgent", // 'Urgent', 'Normal', 'Breached'
    status: "In Investigation",
    escalationTag: "CEM", // CEM, MAS, FIDReC
    createdOn: "25 May 2026 14:22",
    rootCause: "Secondary verification failed on Avaloq node for offshore trade",
    linkedSr: "SR-990218, SR-990220",
    resolutionPlan: "Requesting manual approval override from Private Banking Desk",
    auditTrail: [
      "25 May 14:22: Case logged by Tengku Adnan via MAE App.",
      "25 May 14:30: RM James May flagged case as CEM Priority."
    ]
  },
  {
    id: "CASE-1192",
    customerName: "Datin Nurul Izzah binti Anwar",
    customerId: "C-410299",
    category: "Investments > Shariah Dividend Discrepancy",
    channel: "Relationship Manager Hub",
    slaCountdownHours: 48,
    slaState: "Normal",
    status: "Pending Documentation",
    escalationTag: "FIDReC",
    createdOn: "24 May 2026 09:15",
    rootCause: "Pending manual recalculation of dividend distributions on Etiqa portfolios",
    linkedSr: "SR-10294",
    resolutionPlan: "Contacted Etiqa operations desk to expedite manual dividend reconciliation",
    auditTrail: [
      "24 May 09:15: Case escalated by RM James May after portfolio presentation."
    ]
  },
  {
    id: "CASE-9921",
    customerName: "Madam Chin Siew Lan",
    customerId: "C-293011",
    category: "Accounts > ATM Debit Card Renewal Fee",
    channel: "Penang Branch Front Desk",
    slaCountdownHours: -2, // Breached
    slaState: "Breached",
    status: "Escalated",
    escalationTag: "MAS",
    createdOn: "20 May 2026 10:00",
    rootCause: "System auto-charged MYR 15 fee despite Premier Senior exemption package",
    linkedSr: "SR-9920",
    resolutionPlan: "Reversing fee and issuing credit note",
    auditTrail: [
      "20 May 10:00: Mdm Chin Siew Lan complained at Penang Branch.",
      "24 May 12:00: SLA Breached due to backend ticketing system queue."
    ]
  }
];

export const mockCasesGGB = [
  {
    id: "CASE-8021",
    customerName: "Petronas Trading Corporation Sdn Bhd",
    customerId: "ACC-1002",
    category: "Trade Finance > Outward SWIFT Hold",
    channel: "Corporate SWIFT Portal",
    slaCountdownHours: 2,
    slaState: "Urgent",
    status: "In Investigation",
    escalationTag: "CEM",
    createdOn: "25 May 2026 11:00",
    rootCause: "Secondary sanction matching on recipient Shell Trading Singapore clearing node",
    linkedSr: "SR-PET-9912",
    resolutionPlan: "Expediting compliance override with Sanction Clearing desk",
    auditTrail: [
      "25 May 11:00: SWIFT transaction flagged auto-hold",
      "25 May 11:30: Escalated by RM James May to compliance desk"
    ]
  },
  {
    id: "CASE-8022",
    customerName: "Sime Darby Plantation Berhad",
    customerId: "ACC-1004",
    category: "Syndicated Loans > Covenant Waiver Request",
    channel: "Relationship Manager Hub",
    slaCountdownHours: 36,
    slaState: "Normal",
    status: "Pending Documentation",
    escalationTag: "FIDReC",
    createdOn: "24 May 2026 14:00",
    rootCause: "Rebranding documentation delaying carbon neutrality audit reporting",
    linkedSr: "SR-SDP-4491",
    resolutionPlan: "Awaiting signed auditor statement from Sime Darby Managing Director",
    auditTrail: [
      "24 May 14:00: Waiver request received from RM Azlan Shah"
    ]
  }
];

export const mockReports = [
  { id: "REP-001", name: "Monthly Wealth Portfolio Analysis", description: "Comprehensive breakdown of AUM and asset classes across Premier Wealth segment.", category: "Wealth", owner: "James May", createdDate: "01 May 2026", status: "Active" },
  { id: "REP-002", name: "SME Pipeline Conversion Rates", description: "Lead to deal conversion metrics for Q2 2026 SME banking sector.", category: "Pipeline", owner: "Azlan Shah", createdDate: "15 May 2026", status: "Active" },
  { id: "REP-003", name: "High Churn Risk Customers", description: "Daily list of customers with churn probability > 70%.", category: "Risk", owner: "System", createdDate: "25 May 2026", status: "Active" },
  { id: "REP-004", name: "SLA Breaches - Service Requests", description: "Historical view of support tickets breaching SLA in the last 30 days.", category: "Support", owner: "Support Desk", createdDate: "20 May 2026", status: "Draft" }
];

export const mockDashboards = [
  { id: "DB-001", name: "Executive Summary", description: "High-level overview of portfolio growth, pipeline health, and top at-risk accounts.", isFavorite: true, lastViewed: "26 May 2026" },
  { id: "DB-002", name: "Wealth Management KPI", description: "Detailed charts tracking AUM growth, Islamic vs Conventional ratio, and cross-sell penetration.", isFavorite: false, lastViewed: "20 May 2026" },
  { id: "DB-003", name: "Corporate Banking Exposure", description: "Credit limit utilisations and syndication pipeline for GGB segment.", isFavorite: true, lastViewed: "25 May 2026" }
];
