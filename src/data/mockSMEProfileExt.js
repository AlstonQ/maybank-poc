export const mockSMEProfileExt = [
  {
    id: "C-S001",
    name: "Nasi Kandar Pelita Maju Sdn Bhd",
    tradingName: "Pelita Maju Penang",
    segment: "SME",
    smeSegment: "Medium",
    cif: "CIF-S-9910291",
    brn: "20100101992",
    sstRegistration: "W10-1808-32000101",
    homeBranch: "028 - Penang Road",
    region: "Northern",
    customerSince: "2010",
    incorporationDate: "15 Jan 2010",
    businessType: "Sdn Bhd",
    industry: "F&B / Retail",
    subIndustry: "Restaurant Chain",
    mccCode: "5812 - Eating Places",
    yearsInBusiness: 16,
    registeredAddress: "Level 14, Menara Symphony, Petaling Jaya, Selangor",
    operatingAddress: "18, Penang Road, 10000 Georgetown, Penang",
    outletsCount: 12,
    employeesCount: 150,
    revenueBand: "MYR 10M - 25M",
    monthlySalesEst: 1200000,
    payrollSize: 350000,
    lifecycleStage: "Expansion",
    primaryStates: ["Penang", "Selangor", "Kuala Lumpur"],
    website: "www.pelitamaju.com.my",
    ecommerceChannels: ["Foodpanda", "GrabFood", "ShopeeFood"],
    keySuppliers: ["Ayamas Fresh Sdn Bhd", "Beras Jati Supplier", "Nestle Commercial"],
    keyBuyers: ["Retail Consumers", "Catering Contracts"],
    importExportCountries: ["India (Spices import)", "Thailand"],
    sourceSystems: ["HOST", "M2U Biz", "Sales4U", "Merchant Acquiring"],
    photoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150",
    
    // High-level financial KPIs
    aum: 2800000, 
    totalBorrowings: 1500000,
    totalLimits: 2000000,
    utilisationPercent: 75,
    monthlyAvgBalance: 2100000,
    monthlyInflow: 1800000,
    monthlyOutflow: 1750000,
    merchantGmv: 850000,
    payrollVolume: 350000,
    digitalAdoptionScore: 82,
    customerStatus: "Active",
    riskRating: "Low Risk",
    internalCreditGrade: "CR-3 (Strong)",
    shariahPreference: "Strict (Islamic Only)",
    
    // Ownership & Key People
    hierarchy: {
      groupId: "HH-S1",
      groupName: "Pelita Maju Group",
      rollUpAum: 2800000,
      members: [
        { name: "Datuk Ali bin Hassan", role: "Managing Director", relation: "Beneficial Owner (60%)", accessLevel: "Maker & Approver", mandate: "Joint Signatory", aum: 0, confidential: true, cif: "CIF-I-10291", pepStatus: "None" },
        { name: "Siti Zubaidah", role: "Finance Director", relation: "Shareholder (40%)", accessLevel: "Approver", mandate: "Joint Signatory", aum: 0, confidential: false, cif: "CIF-I-10292", pepStatus: "None" },
        { name: "Lim Hock Seng", role: "Accountant", relation: "Authorised User", accessLevel: "Maker (Payroll)", mandate: "View Only", aum: 0, confidential: false, cif: "CIF-I-10293", pepStatus: "None" }
      ],
      relationshipStrengthScore: 85,
      coverageTeam: [
        { name: "Ahmad Zaki", role: "SME RM", branch: "Penang Road", email: "zaki@maybank.com.my", phone: "+60 13-882 1104" },
        { name: "Wong Li Lin", role: "Merchant Specialist", branch: "Northern Region Hub", email: "lilin@maybank.com.my", phone: "+60 12-882 1102" }
      ],
      lastContactDate: "20 May 2026",
      momentum: "Warming"
    },
    
    // Accounts & Holdings
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account-i", accountNo: "BCA-****9912", balance: 1200000, islamic: true, status: "Active", openDate: "15 Jan 2010", availableBalance: 1200000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Ahmad Zaki" },
      { id: "H-S2", type: "Deposits", name: "Term Deposit-i", accountNo: "TDI-****8821", balance: 1600000, islamic: true, status: "Active", openDate: "20 Mar 2024", profitRate: "3.10% p.a.", maturityDate: "20 Mar 2027", availableBalance: 1600000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Ahmad Zaki" },
      { id: "H-S3", type: "Financing", name: "SME Digital Financing-i", accountNo: "SDF-****1102", outstandingBalance: -800000, limit: 1000000, utilisation: 80, islamic: true, status: "Active", openDate: "10 Jun 2022", profitRate: "5.50% p.a.", maturityDate: "10 Jun 2027", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Ahmad Zaki" },
      { id: "H-S4", type: "Trade", name: "Bank Guarantee-i", accountNo: "BG-****3301", outstandingBalance: -200000, limit: 500000, utilisation: 40, islamic: true, status: "Active", openDate: "15 Jan 2025", maturityDate: "15 Jan 2028", statementDate: "30 Apr 2026", sourceSystem: "Trade Finance", productOwner: "Trade Desk" },
      { id: "H-S5", type: "Services", name: "Merchant QRPay & POS", accountNo: "MID-****9911", outstandingBalance: 0, limit: 0, utilisation: 0, islamic: true, status: "Active", openDate: "01 Mar 2018", statementDate: "30 Apr 2026", sourceSystem: "Merchant Acquiring", productOwner: "Wong Li Lin" },
      { id: "H-S6", type: "Services", name: "Maybank AutoCredit Payroll", accountNo: "PAY-****1122", outstandingBalance: 0, limit: 0, utilisation: 0, islamic: true, status: "Active", openDate: "10 Jan 2012", statementDate: "30 Apr 2026", sourceSystem: "M2U Biz", productOwner: "Ahmad Zaki" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "INWARD IBG: FOODPANDA SETTLEMENT", amount: 45000, type: "Credit", account: "Business Current Account-i" },
      { date: "25 May 2026", desc: "PAYROLL DEBIT: AUTOCREDIT", amount: -350000, type: "Debit", account: "Business Current Account-i" },
      { date: "24 May 2026", desc: "SUPPLIER PAYMENT: AYAMAS FRESH", amount: -85000, type: "Debit", account: "Business Current Account-i" },
      { date: "24 May 2026", desc: "MERCHANT SETTLEMENT: QRPAY", amount: 18500, type: "Credit", account: "Business Current Account-i" },
      { date: "23 May 2026", desc: "FINANCING INSTALMENT: SDF-i", amount: -15000, type: "Debit", account: "Business Current Account-i" }
    ],
    
    cashflow: {
      sixMonthInflow: [1700000, 1750000, 1680000, 1850000, 1800000, 1800000],
      sixMonthOutflow: [1650000, 1700000, 1600000, 1800000, 1780000, 1750000],
      avgDailyBalance: 2100000,
      peakBalance: 2800000,
      lowBalance: 1500000,
      returnedChequeCount: 0,
      digitalVolumePercent: 85,
      supplierConcentration: "Medium (Ayamas Fresh 30%)",
      buyerConcentration: "Low (Retail)",
      seasonality: "High (Ramadan/Festive peaks)",
      wcCycleDays: 15,
      dso: 5,
      dpo: 30,
      stressIndicator: "Healthy",
      insightText: "Strong cash buffer maintained. Operating inflows fully cover financing obligations with 2.5x DSCR."
    },
    
    risk: {
      ccrisStatus: "Clean (0 arrears)",
      ctosStatus: "Clean",
      conductOfAccount: "Satisfactory",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "Commercial Shop Lot (Georgetown)",
      guarantorSummary: "Datuk Ali bin Hassan",
      dscr: 2.5,
      gearing: 0.8,
      facilityUtilisation: "75%",
      earlyWarningSignals: "None",
      watchlistStatus: "Normal",
      amlRisk: "Low",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Medium (F&B waste management)",
      fraudExposure: "Low",
      creditAction: "Maintain Facility. Eligible for RM500k Top-up."
    },
    
    opportunities: [
      { id: "OPP-S101", name: "Working Capital Top-up for 3 New Outlets", stage: "Credit Assessment", probability: 80, expectedValue: 500000, owner: "Ahmad Zaki", dueDate: "15 Jun 2026", product: "SME Digital Financing-i", complaintSensitive: false, nextAction: "Await CCRIS refresh" },
      { id: "OPP-S102", name: "Director Keyman Takaful", stage: "Quotation", probability: 60, expectedValue: 25000, owner: "Ahmad Zaki", dueDate: "30 Jun 2026", product: "SME Takaful", complaintSensitive: false, nextAction: "Present quotation to Datuk Ali" }
    ],
    
    productGaps: [
      { product: "Corporate Credit Card", reason: "Directors using personal cards for company expenses." },
      { product: "FX Forward Line", reason: "Regular spice imports from India subject to FX volatility." }
    ],
    
    interactions: [
      { id: "INT-1", date: "26 May 2026 10:30", type: "RM Meeting", channel: "In-Person (Branch)", subject: "Annual Review & Outlet Expansion", owner: "Ahmad Zaki", status: "Closed", sentiment: "Positive", sourceSystem: "Sales4U", confidential: true, followUp: "Prepare working capital proposal" },
      { id: "INT-2", date: "20 May 2026 14:15", type: "Service Request", channel: "M2U Biz", subject: "Request new POS terminal for Outlet 11", owner: "Merchant Support", status: "Resolved", sentiment: "Neutral", sourceSystem: "Host", confidential: false, followUp: "Terminal delivered" },
      { id: "INT-3", date: "15 May 2026 09:00", type: "Complaint", channel: "Contact Centre", subject: "Delayed GrabFood Settlement", owner: "Merchant Support", status: "Resolved", sentiment: "Negative", sourceSystem: "CARE", confidential: false, followUp: "Manual reconciliation processed" }
    ],
    
    statements: [
      { id: "DOC-1", type: "Business Current Account-i Statement", date: "30 Apr 2026", accountMasked: "BCA-****9912", status: "Available", visibility: "All", source: "HOST" },
      { id: "DOC-2", type: "SSM Form 49", date: "15 Jan 2010", accountMasked: "General", status: "Verified", visibility: "All", source: "eKYC Hub" },
      { id: "DOC-3", type: "Board Resolution for Trade Line", date: "10 Jun 2022", accountMasked: "BG-****3301", status: "Verified", visibility: "All", source: "Trade Finance" },
      { id: "DOC-4", type: "Audited Financials 2025", date: "28 Feb 2026", accountMasked: "General", status: "Verified", visibility: "Credit/Compliance Only", source: "Sales4U" }
    ],
    
    queueTicket: { ticketNo: "C-011", branch: "Penang Road", service: "Corporate Teller", status: "Serving", estimatedWait: "0 mins", purpose: "Large Cash Deposit > RM50k" },
    
    rmIntelligence: {
      nextBestAction: "Propose RM500k Working Capital top-up for upcoming 3 outlets expansion. Customer has 2.5x DSCR and excellent repayment history.",
      nextBestOffer: "SME Digital Financing-i Top-up",
      creditWatch: "Healthy",
      serviceRecovery: "Check if GrabFood settlements are running smoothly after last week's manual reconciliation.",
      meetingPrep: "Datuk Ali visiting branch today for cash deposit. Walk over to teller counter to greet him and hand over the Takaful quotation.",
      suggestedQuestions: [
        "How is the renovation for the 3 new outlets progressing?",
        "Are you hedging your spice import costs from India currently?"
      ]
    }
  },
  {
    id: "C-S002",
    name: "Klinik Pergigian Senyuman Sdn Bhd",
    tradingName: "Senyuman Dental",
    segment: "SME",
    smeSegment: "Small",
    cif: "CIF-S-8821992",
    brn: "20150102211",
    sstRegistration: "N/A (Exempt)",
    homeBranch: "011 - Damansara Utama",
    region: "Central",
    customerSince: "2015",
    incorporationDate: "10 Feb 2015",
    businessType: "Sdn Bhd",
    industry: "Healthcare",
    subIndustry: "Dental Clinics",
    mccCode: "8021 - Dentists",
    yearsInBusiness: 11,
    registeredAddress: "45, SS21/37, Damansara Utama, 47400 PJ",
    operatingAddress: "45, SS21/37, Damansara Utama, 47400 PJ",
    outletsCount: 3,
    employeesCount: 15,
    revenueBand: "MYR 1M - 5M",
    monthlySalesEst: 250000,
    payrollSize: 60000,
    lifecycleStage: "Growth",
    primaryStates: ["Selangor", "Kuala Lumpur"],
    website: "www.senyumandental.com.my",
    ecommerceChannels: ["Company Website Booking"],
    keySuppliers: ["Dental Supply Co.", "Pharmaniaga"],
    keyBuyers: ["Retail Consumers", "Panel Insurance"],
    importExportCountries: ["None"],
    sourceSystems: ["HOST", "Merchant Acquiring", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150",
    
    aum: 450000, 
    totalBorrowings: 850000,
    totalLimits: 1000000,
    utilisationPercent: 85,
    monthlyAvgBalance: 120000,
    monthlyInflow: 250000,
    monthlyOutflow: 230000,
    merchantGmv: 180000,
    payrollVolume: 60000,
    digitalAdoptionScore: 60,
    customerStatus: "Active",
    riskRating: "Medium Risk",
    internalCreditGrade: "CR-4 (Satisfactory)",
    shariahPreference: "Conventional & Islamic",
    
    hierarchy: {
      groupId: "HH-S2",
      groupName: "Senyuman Dental Group",
      rollUpAum: 450000,
      members: [
        { name: "Dr. Hassan Ali", role: "Chief Dental Surgeon", relation: "Director (80%)", accessLevel: "Maker & Approver", mandate: "Single Signatory", aum: 0, confidential: false, cif: "CIF-I-20111", pepStatus: "None" },
        { name: "Aisyah Tan", role: "Clinic Manager", relation: "Employee", accessLevel: "Maker", mandate: "View Only", aum: 0, confidential: false, cif: "CIF-I-20112", pepStatus: "None" }
      ],
      relationshipStrengthScore: 65,
      coverageTeam: [
        { name: "Sarah Lim", role: "Branch Manager", branch: "Damansara Utama", email: "sarah@maybank.com.my", phone: "+60 12-441 9922" }
      ],
      lastContactDate: "15 Apr 2026",
      momentum: "Stable"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****4431", balance: 150000, islamic: false, status: "Active", openDate: "10 Feb 2015", availableBalance: 150000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Sarah Lim" },
      { id: "H-S2", type: "Deposits", name: "Term Deposit", accountNo: "TD-****8811", balance: 300000, islamic: false, status: "Active", openDate: "20 Mar 2022", profitRate: "2.80% p.a.", maturityDate: "20 Mar 2027", availableBalance: 300000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Sarah Lim" },
      { id: "H-S3", type: "Financing", name: "Commercial Property Loan", accountNo: "CPL-****1102", outstandingBalance: -850000, limit: 1000000, utilisation: 85, islamic: false, status: "Active", openDate: "10 Jun 2018", profitRate: "4.50% p.a.", maturityDate: "10 Jun 2038", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Sarah Lim" },
      { id: "H-S5", type: "Services", name: "Merchant POS Terminal", accountNo: "MID-****5522", outstandingBalance: 0, limit: 0, utilisation: 0, islamic: false, status: "Active", openDate: "01 Mar 2016", statementDate: "30 Apr 2026", sourceSystem: "Merchant Acquiring", productOwner: "Merchant Desk" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "MERCHANT SETTLEMENT: POS", amount: 8500, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "PAYROLL DEBIT: STAFF SALARY", amount: -60000, type: "Debit", account: "Business Current Account" },
      { date: "24 May 2026", desc: "SUPPLIER PAYMENT: PHARMANIAGA", amount: -12000, type: "Debit", account: "Business Current Account" },
      { date: "20 May 2026", desc: "LOAN INSTALMENT: CPL", amount: -6500, type: "Debit", account: "Business Current Account" }
    ],
    
    cashflow: {
      sixMonthInflow: [240000, 250000, 245000, 260000, 250000, 255000],
      sixMonthOutflow: [220000, 230000, 230000, 240000, 225000, 235000],
      avgDailyBalance: 120000,
      peakBalance: 180000,
      lowBalance: 80000,
      returnedChequeCount: 0,
      digitalVolumePercent: 40,
      supplierConcentration: "High (Pharmaniaga 60%)",
      buyerConcentration: "Low (Retail/Panel)",
      seasonality: "Low",
      wcCycleDays: 30,
      dso: 15,
      dpo: 45,
      stressIndicator: "Watch",
      insightText: "Tight cash buffer. Significant portion of inflows used to service commercial property loan. Highly reliant on panel insurance payouts."
    },
    
    risk: {
      ccrisStatus: "Clean (0 arrears)",
      ctosStatus: "Clean",
      conductOfAccount: "Satisfactory",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "Clinic Shop Lot",
      guarantorSummary: "Dr. Hassan Ali",
      dscr: 1.2,
      gearing: 1.5,
      facilityUtilisation: "85%",
      earlyWarningSignals: "Declining DSCR trend over 3 months",
      watchlistStatus: "Normal",
      amlRisk: "Low",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Low (Medical waste properly handled)",
      fraudExposure: "Low",
      creditAction: "Monitor cashflow closely. Not recommended for new facilities."
    },
    
    opportunities: [
      { id: "OPP-S201", name: "Maybank AutoCredit Payroll Conversion", stage: "Pitching", probability: 50, expectedValue: 5000, owner: "Sarah Lim", dueDate: "30 May 2026", product: "SME Payroll", complaintSensitive: false, nextAction: "Follow up with Clinic Manager" }
    ],
    
    productGaps: [
      { product: "SME AutoCredit Payroll", reason: "Customer currently doing manual IBG transfers for 15 staff." },
      { product: "Medical Equipment Financing", reason: "Potential for upgrading dental chairs." }
    ],
    
    interactions: [
      { id: "INT-4", date: "15 Apr 2026 10:30", type: "Branch Visit", channel: "In-Person (Branch)", subject: "Account Signatory Update", owner: "Sarah Lim", status: "Closed", sentiment: "Neutral", sourceSystem: "HOST", confidential: false, followUp: "None" }
    ],
    
    statements: [
      { id: "DOC-5", type: "Business Current Account Statement", date: "30 Apr 2026", accountMasked: "BCA-****4431", status: "Available", visibility: "All", source: "HOST" }
    ],
    
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Pitch AutoCredit Payroll to save manual processing time for their 15 staff.",
      nextBestOffer: "SME Payroll Package",
      creditWatch: "Watch - Tight DSCR",
      serviceRecovery: "No complaints.",
      meetingPrep: "Review their panel insurance claim cycle. If delayed, they might face short-term cash crunches.",
      suggestedQuestions: [
        "Are you planning to upgrade any clinic equipment this year?",
        "How much time does your manager spend on manual payroll every month?"
      ]
    }
  },
  {
    id: "C-S003",
    name: "Halal Frozen Foods Sdn Bhd",
    tradingName: "HFF Manufacturing",
    segment: "SME",
    smeSegment: "Medium",
    cif: "CIF-S-3310291",
    brn: "20120108811",
    sstRegistration: "B10-1808-44000211",
    homeBranch: "055 - Shah Alam Main",
    region: "Central",
    customerSince: "2012",
    incorporationDate: "20 Mar 2012",
    businessType: "Sdn Bhd",
    industry: "Manufacturing",
    subIndustry: "Food & Beverage",
    mccCode: "5422 - Freezer and Locker Meat Provisioners",
    yearsInBusiness: 14,
    registeredAddress: "Lot 88, Section 15, Shah Alam, Selangor",
    operatingAddress: "Lot 88, Section 15, Shah Alam, Selangor",
    outletsCount: 1,
    employeesCount: 250,
    revenueBand: "MYR 25M - 50M",
    monthlySalesEst: 2800000,
    payrollSize: 600000,
    lifecycleStage: "Mature",
    primaryStates: ["Selangor", "Johor", "Penang"],
    website: "www.halalfrozen.com.my",
    ecommerceChannels: ["B2B Portal"],
    keySuppliers: ["Local Poultry Farms", "Packaging Suppliers Bhd"],
    keyBuyers: ["Hypermarkets (Mydin, Lotus)", "Restaurants"],
    importExportCountries: ["Singapore (Export)"],
    sourceSystems: ["HOST", "Trade Finance", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=150",
    
    aum: 1200000, 
    totalBorrowings: 4500000,
    totalLimits: 6000000,
    utilisationPercent: 75,
    monthlyAvgBalance: 1500000,
    monthlyInflow: 2900000,
    monthlyOutflow: 2850000,
    merchantGmv: 0,
    payrollVolume: 600000,
    digitalAdoptionScore: 90,
    customerStatus: "Active",
    riskRating: "Low Risk",
    internalCreditGrade: "CR-2 (Very Strong)",
    shariahPreference: "Strict (Islamic Only)",
    
    hierarchy: {
      groupId: "HH-S3",
      groupName: "HFF Group",
      rollUpAum: 1200000,
      members: [
        { name: "Faizal Ramli", role: "CEO", relation: "Director (50%)", accessLevel: "Approver", mandate: "Joint Signatory", aum: 0, confidential: true, cif: "CIF-I-30111", pepStatus: "None" },
        { name: "Noraini Mat", role: "COO", relation: "Director (50%)", accessLevel: "Approver", mandate: "Joint Signatory", aum: 0, confidential: false, cif: "CIF-I-30112", pepStatus: "None" }
      ],
      relationshipStrengthScore: 92,
      coverageTeam: [
        { name: "Kamal Effendi", role: "SME RM", branch: "Shah Alam Main", email: "kamal@maybank.com.my", phone: "+60 19-331 8812" },
        { name: "Raja Azman", role: "Trade Specialist", branch: "Trade Finance Centre", email: "raja@maybank.com.my", phone: "+60 12-882 1102" }
      ],
      lastContactDate: "25 May 2026",
      momentum: "Stable"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account-i", accountNo: "BCA-****5522", balance: 1200000, islamic: true, status: "Active", openDate: "20 Mar 2012", availableBalance: 1200000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Kamal Effendi" },
      { id: "H-S3", type: "Trade", name: "Letter of Credit-i", accountNo: "LC-****1122", outstandingBalance: -1500000, limit: 2000000, utilisation: 75, islamic: true, status: "Active", openDate: "10 Jun 2015", profitRate: "Trade Rates", maturityDate: "Revolving", statementDate: "30 Apr 2026", sourceSystem: "Trade Finance", productOwner: "Raja Azman" },
      { id: "H-S4", type: "Financing", name: "Term Financing-i (Factory)", accountNo: "TF-****8833", outstandingBalance: -3000000, limit: 4000000, utilisation: 75, islamic: true, status: "Active", openDate: "15 Jan 2018", maturityDate: "15 Jan 2038", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Kamal Effendi" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "INWARD TT: SINGAPORE EXPORT", amount: 150000, type: "Credit", account: "Business Current Account-i" },
      { date: "25 May 2026", desc: "PAYROLL DEBIT: AUTOCREDIT", amount: -600000, type: "Debit", account: "Business Current Account-i" },
      { date: "24 May 2026", desc: "TRADE SETTLEMENT: LC DRAWDOWN", amount: -250000, type: "Debit", account: "Business Current Account-i" }
    ],
    
    cashflow: {
      sixMonthInflow: [2800000, 2900000, 2750000, 3100000, 2950000, 2900000],
      sixMonthOutflow: [2750000, 2800000, 2700000, 3000000, 2900000, 2850000],
      avgDailyBalance: 1500000,
      peakBalance: 2200000,
      lowBalance: 800000,
      returnedChequeCount: 0,
      digitalVolumePercent: 95,
      supplierConcentration: "Medium",
      buyerConcentration: "High (Mydin 40%)",
      seasonality: "Medium",
      wcCycleDays: 45,
      dso: 30,
      dpo: 60,
      stressIndicator: "Healthy",
      insightText: "Strong export proceeds from Singapore bolstering cashflow. LC utilisation remains efficient."
    },
    
    risk: {
      ccrisStatus: "Clean (0 arrears)",
      ctosStatus: "Clean",
      conductOfAccount: "Excellent",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "Factory Land & Building",
      guarantorSummary: "Faizal & Noraini",
      dscr: 3.5,
      gearing: 1.2,
      facilityUtilisation: "75%",
      earlyWarningSignals: "None",
      watchlistStatus: "Normal",
      amlRisk: "Medium (Cross-border trade)",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Medium (Factory emissions/halal compliance)",
      fraudExposure: "Low",
      creditAction: "Maintain Facility. Prime for Trade Line Increase."
    },
    
    opportunities: [
      { id: "OPP-S301", name: "Increase Export LC-i Limit", stage: "Proposal", probability: 90, expectedValue: 1000000, owner: "Raja Azman", dueDate: "15 Jun 2026", product: "Trade Finance", complaintSensitive: false, nextAction: "Submit credit paper" }
    ],
    
    productGaps: [
      { product: "Corporate Credit Card", reason: "Not utilizing company cards." }
    ],
    
    interactions: [
      { id: "INT-5", date: "25 May 2026 14:00", type: "RM Meeting", channel: "Virtual (Teams)", subject: "Singapore Export Volume Growth", owner: "Kamal Effendi", status: "Closed", sentiment: "Positive", sourceSystem: "Sales4U", confidential: true, followUp: "Propose trade line increase" }
    ],
    
    statements: [
      { id: "DOC-6", type: "Audited Financials 2025", date: "30 Mar 2026", accountMasked: "General", status: "Verified", visibility: "Credit/Compliance Only", source: "Sales4U" }
    ],
    
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Increase Export Trade line to support growing Singapore volumes.",
      nextBestOffer: "Trade Line-i Top-up",
      creditWatch: "Healthy",
      serviceRecovery: "No issues.",
      meetingPrep: "Congratulate them on the new Singapore distributor contract.",
      suggestedQuestions: [
        "Do you need FX hedging for the SGD receivables?"
      ]
    }
  },
  {
    id: "C-S004",
    name: "Borneo Fast Logistics Sdn Bhd",
    tradingName: "BFL Transport",
    segment: "SME",
    smeSegment: "Medium",
    cif: "CIF-S-4491023",
    brn: "20050109921",
    sstRegistration: "W10-1808-11000332",
    homeBranch: "089 - Kuching Main",
    region: "East Malaysia",
    customerSince: "2005",
    incorporationDate: "12 Aug 2005",
    businessType: "Sdn Bhd",
    industry: "Logistics",
    subIndustry: "Freight Transport",
    mccCode: "4214 - Motor Freight Carriers",
    yearsInBusiness: 21,
    registeredAddress: "Lot 88, Demak Laut Industrial Park, 93050 Kuching, Sarawak",
    operatingAddress: "Lot 88, Demak Laut Industrial Park, 93050 Kuching, Sarawak",
    outletsCount: 4,
    employeesCount: 120,
    revenueBand: "MYR 10M - 25M",
    monthlySalesEst: 1500000,
    payrollSize: 300000,
    lifecycleStage: "Mature",
    primaryStates: ["Sarawak", "Sabah"],
    website: "www.borneofast.com.my",
    ecommerceChannels: ["None"],
    keySuppliers: ["Petronas (Fuel)", "Scania Malaysia"],
    keyBuyers: ["Timber Exporters", "Manufacturing Hubs"],
    importExportCountries: ["Indonesia (Cross-border trucking)"],
    sourceSystems: ["HOST", "M2U Biz", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?w=150",
    
    aum: 1500000, 
    totalBorrowings: 3500000,
    totalLimits: 4000000,
    utilisationPercent: 88,
    monthlyAvgBalance: 800000,
    monthlyInflow: 1550000,
    monthlyOutflow: 1500000,
    merchantGmv: 0,
    payrollVolume: 300000,
    digitalAdoptionScore: 50,
    customerStatus: "Active",
    riskRating: "Medium Risk",
    internalCreditGrade: "CR-4 (Satisfactory)",
    shariahPreference: "Conventional",
    
    hierarchy: {
      groupId: "HH-S4",
      groupName: "Borneo Logistics",
      rollUpAum: 1500000,
      members: [
        { name: "Wong Keng Boon", role: "Managing Director", relation: "Director (100%)", accessLevel: "Maker & Approver", mandate: "Single Signatory", aum: 0, confidential: true, cif: "CIF-I-40111", pepStatus: "None" }
      ],
      relationshipStrengthScore: 70,
      coverageTeam: [
        { name: "Wong Li Lin", role: "SME RM", branch: "Kuching Main", email: "lilin.w@maybank.com.my", phone: "+60 12-882 1102" }
      ],
      lastContactDate: "10 May 2026",
      momentum: "Stable"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****2211", balance: 1500000, islamic: false, status: "Active", openDate: "12 Aug 2005", availableBalance: 1500000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Wong Li Lin" },
      { id: "H-S2", type: "Financing", name: "Commercial Hire Purchase (Trucks)", accountNo: "HP-****4433", outstandingBalance: -3500000, limit: 4000000, utilisation: 88, islamic: false, status: "Active", openDate: "15 Oct 2022", profitRate: "3.50% p.a. flat", maturityDate: "15 Oct 2027", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Wong Li Lin" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "INWARD IBG: CLIENT PAYMENT", amount: 125000, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "HIRE PURCHASE INSTALMENT", amount: -85000, type: "Debit", account: "Business Current Account" },
      { date: "22 May 2026", desc: "PETRONAS FLEET CARD PAYMENT", amount: -120000, type: "Debit", account: "Business Current Account" }
    ],
    
    cashflow: {
      sixMonthInflow: [1500000, 1550000, 1450000, 1600000, 1500000, 1550000],
      sixMonthOutflow: [1450000, 1500000, 1550000, 1450000, 1500000, 1480000],
      avgDailyBalance: 800000,
      peakBalance: 1500000,
      lowBalance: 300000,
      returnedChequeCount: 1,
      digitalVolumePercent: 60,
      supplierConcentration: "High (Fuel & Maintenance)",
      buyerConcentration: "Medium",
      seasonality: "Low",
      wcCycleDays: 60,
      dso: 75,
      dpo: 30,
      stressIndicator: "Watch",
      insightText: "High DSO (75 days) leading to occasional cashflow tightness. Recent returned cheque noted."
    },
    
    risk: {
      ccrisStatus: "1 month in arrears (HP)",
      ctosStatus: "Clean",
      conductOfAccount: "Sub-optimal",
      excessEvents: 1,
      missedPayments: 1,
      restructuringFlag: "No",
      collateralSummary: "Commercial Fleet (50 Scania Trucks)",
      guarantorSummary: "Wong Keng Boon",
      dscr: 1.1,
      gearing: 2.5,
      facilityUtilisation: "88%",
      earlyWarningSignals: "CCRIS arrears, High Gearing, 1 Returned Cheque",
      watchlistStatus: "Watchlist - Level 1",
      amlRisk: "Low",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "High (Carbon emissions)",
      fraudExposure: "Low",
      creditAction: "Do not increase exposure. Monitor collections closely."
    },
    
    opportunities: [],
    
    productGaps: [
      { product: "Invoice Financing", reason: "High DSO (75 days) could be mitigated with invoice factoring." }
    ],
    
    interactions: [
      { id: "INT-6", date: "10 May 2026 11:00", type: "RM Meeting", channel: "Phone Call", subject: "Overdue HP Instalment Follow-up", owner: "Wong Li Lin", status: "Closed", sentiment: "Negative", sourceSystem: "Sales4U", confidential: true, followUp: "Client promised payment by 15th." }
    ],
    
    statements: [],
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Discuss Invoice Financing to bridge the 75-day collection gap and avoid future arrears.",
      nextBestOffer: "SME Invoice Financing",
      creditWatch: "Alert - 1 Month Arrears",
      serviceRecovery: "No issues.",
      meetingPrep: "Focus on collections and cashflow management. Avoid pitching new term loans.",
      suggestedQuestions: [
        "Are your clients delaying payments more than usual?",
        "Would invoice financing help smooth out your cashflow?"
      ]
    }
  },
  {
    id: "C-S005",
    name: "Maju Jaya Hardware Trading",
    tradingName: "Maju Jaya Hardware",
    segment: "SME",
    smeSegment: "Small",
    cif: "CIF-S-5591024",
    brn: "20120108821",
    sstRegistration: "N/A",
    homeBranch: "045 - Johor Bahru Main",
    region: "Southern",
    customerSince: "2012",
    incorporationDate: "05 Nov 2012",
    businessType: "Sole Proprietor",
    industry: "Wholesale / Retail Trade",
    subIndustry: "Hardware Store",
    mccCode: "5251 - Hardware Stores",
    yearsInBusiness: 14,
    registeredAddress: "12, Jalan Tebrau, 80250 Johor Bahru, Johor",
    operatingAddress: "12, Jalan Tebrau, 80250 Johor Bahru, Johor",
    outletsCount: 2,
    employeesCount: 8,
    revenueBand: "MYR < 1M",
    monthlySalesEst: 80000,
    payrollSize: 20000,
    lifecycleStage: "Stable",
    primaryStates: ["Johor"],
    website: "None",
    ecommerceChannels: ["None"],
    keySuppliers: ["Nippon Paint", "Hardware Distributors Bhd"],
    keyBuyers: ["Local Contractors", "Walk-in Retail"],
    importExportCountries: ["None"],
    sourceSystems: ["HOST", "M2U Biz"],
    photoUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=150",
    
    aum: 850000, 
    totalBorrowings: 0,
    totalLimits: 0,
    utilisationPercent: 0,
    monthlyAvgBalance: 800000,
    monthlyInflow: 85000,
    monthlyOutflow: 75000,
    merchantGmv: 45000,
    payrollVolume: 0, 
    digitalAdoptionScore: 20,
    customerStatus: "Active",
    riskRating: "Low Risk",
    internalCreditGrade: "CR-3 (Strong)",
    shariahPreference: "Conventional",
    
    hierarchy: {
      groupId: "HH-S5",
      groupName: "Maju Jaya",
      rollUpAum: 850000,
      members: [
        { name: "Tan Ah Kow", role: "Owner", relation: "Sole Proprietor", accessLevel: "Maker & Approver", mandate: "Single Signatory", aum: 200000, confidential: false, cif: "CIF-I-50111", pepStatus: "None" }
      ],
      relationshipStrengthScore: 40, 
      coverageTeam: [
        { name: "Siti Nurhaliza", role: "Branch Manager", branch: "Johor Bahru Main", email: "siti.n@maybank.com.my", phone: "+60 17-229 1882" }
      ],
      lastContactDate: "10 Jan 2025",
      momentum: "Cooling"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****1122", balance: 850000, islamic: false, status: "Active", openDate: "05 Nov 2012", availableBalance: 850000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Siti Nurhaliza" },
      { id: "H-S5", type: "Services", name: "Merchant QRPay", accountNo: "MID-****3311", outstandingBalance: 0, limit: 0, utilisation: 0, islamic: false, status: "Active", openDate: "01 Mar 2020", statementDate: "30 Apr 2026", sourceSystem: "Merchant Acquiring", productOwner: "Merchant Desk" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "CASH DEPOSIT: BRANCH", amount: 15000, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "MERCHANT SETTLEMENT: QRPAY", amount: 1200, type: "Credit", account: "Business Current Account" },
      { date: "24 May 2026", desc: "CHEQUE DEPOSIT", amount: 5000, type: "Credit", account: "Business Current Account" },
      { date: "20 May 2026", desc: "CHEQUE CLEARING: NIPPON PAINT", amount: -18000, type: "Debit", account: "Business Current Account" }
    ],
    
    cashflow: {
      sixMonthInflow: [80000, 85000, 82000, 90000, 85000, 88000],
      sixMonthOutflow: [75000, 78000, 70000, 85000, 75000, 72000],
      avgDailyBalance: 800000,
      peakBalance: 850000,
      lowBalance: 750000,
      returnedChequeCount: 0,
      digitalVolumePercent: 15,
      supplierConcentration: "Low",
      buyerConcentration: "Low (Walk-in)",
      seasonality: "Low",
      wcCycleDays: 30,
      dso: 5,
      dpo: 30,
      stressIndicator: "Healthy",
      insightText: "Cash-rich business. High reliance on physical cash and cheques."
    },
    
    risk: {
      ccrisStatus: "Clean",
      ctosStatus: "Clean",
      conductOfAccount: "Excellent",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "None",
      guarantorSummary: "None",
      dscr: 999, 
      gearing: 0,
      facilityUtilisation: "0%",
      earlyWarningSignals: "None",
      watchlistStatus: "Normal",
      amlRisk: "Medium (High Cash Deposits)",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Low",
      fraudExposure: "Low",
      creditAction: "Prime for lending. Cross-sell wealth products to owner."
    },
    
    opportunities: [
      { id: "OPP-S501", name: "SME Digital Financing Promo", stage: "Lead", probability: 20, expectedValue: 100000, owner: "Siti Nurhaliza", dueDate: "30 Jun 2026", product: "SME Digital Financing", complaintSensitive: false, nextAction: "Call customer" }
    ],
    
    productGaps: [
      { product: "Term Deposit", reason: "Excess cash of RM850k sitting in current account." },
      { product: "SME AutoCredit Payroll", reason: "Currently paying 8 staff manually/by cash." }
    ],
    
    interactions: [],
    statements: [],
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Customer has RM850k idle cash. Pitch Term Deposit or Premier Wealth products for the owner.",
      nextBestOffer: "Fixed Deposit",
      creditWatch: "Healthy",
      serviceRecovery: "No issues.",
      meetingPrep: "Customer rarely visits. Call them to arrange a coffee meeting.",
      suggestedQuestions: [
        "Your current account has high idle balances, would you be interested in fixed deposits?"
      ]
    }
  },
  {
    id: "C-S006",
    name: "Langkawi Sea View Hotel Sdn Bhd",
    tradingName: "Sea View Resort Langkawi",
    segment: "SME",
    smeSegment: "Medium",
    cif: "CIF-S-6610291",
    brn: "20180109911",
    sstRegistration: "K10-1808-55000122",
    homeBranch: "066 - Langkawi Main",
    region: "Northern",
    customerSince: "2018",
    incorporationDate: "10 Mar 2018",
    businessType: "Sdn Bhd",
    industry: "Hospitality & Tourism",
    subIndustry: "Boutique Hotel",
    mccCode: "7011 - Hotels and Motels",
    yearsInBusiness: 8,
    registeredAddress: "Pantai Cenang, 07000 Langkawi, Kedah",
    operatingAddress: "Pantai Cenang, 07000 Langkawi, Kedah",
    outletsCount: 1,
    employeesCount: 45,
    revenueBand: "MYR 5M - 10M",
    monthlySalesEst: 500000,
    payrollSize: 120000,
    lifecycleStage: "Growth",
    primaryStates: ["Kedah"],
    website: "www.seaviewlangkawi.com.my",
    ecommerceChannels: ["Agoda", "Booking.com", "Traveloka"],
    keySuppliers: ["Local F&B Suppliers", "Laundry Services"],
    keyBuyers: ["Tourists"],
    importExportCountries: ["None"],
    sourceSystems: ["HOST", "Merchant Acquiring", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=150",
    
    aum: 600000, 
    totalBorrowings: 2000000,
    totalLimits: 2500000,
    utilisationPercent: 80,
    monthlyAvgBalance: 500000,
    monthlyInflow: 500000,
    monthlyOutflow: 480000,
    merchantGmv: 450000,
    payrollVolume: 120000,
    digitalAdoptionScore: 85,
    customerStatus: "Active",
    riskRating: "Low Risk",
    internalCreditGrade: "CR-4 (Satisfactory)",
    shariahPreference: "Conventional",
    
    hierarchy: {
      groupId: "HH-S6",
      groupName: "Sea View Resort",
      rollUpAum: 600000,
      members: [
        { name: "Ahmad Faris", role: "Managing Director", relation: "Director (100%)", accessLevel: "Maker & Approver", mandate: "Single Signatory", aum: 0, confidential: true, cif: "CIF-I-60111", pepStatus: "None" }
      ],
      relationshipStrengthScore: 80, 
      coverageTeam: [
        { name: "Roslan Aziz", role: "SME RM", branch: "Alor Setar Hub", email: "roslan@maybank.com.my", phone: "+60 19-442 1102" }
      ],
      lastContactDate: "15 May 2026",
      momentum: "Warming"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****6611", balance: 600000, islamic: false, status: "Active", openDate: "10 Mar 2018", availableBalance: 600000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Roslan Aziz" },
      { id: "H-S2", type: "Financing", name: "SME Property Loan", accountNo: "SPL-****8822", outstandingBalance: -2000000, limit: 2500000, utilisation: 80, islamic: false, status: "Active", openDate: "20 Apr 2019", profitRate: "5.00% p.a.", maturityDate: "20 Apr 2039", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Roslan Aziz" },
      { id: "H-S3", type: "Services", name: "Merchant Payment Gateway", accountNo: "MID-****7711", outstandingBalance: 0, limit: 0, utilisation: 0, islamic: false, status: "Active", openDate: "01 May 2018", statementDate: "30 Apr 2026", sourceSystem: "Merchant Acquiring", productOwner: "Merchant Desk" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "MERCHANT SETTLEMENT: AGODA", amount: 45000, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "PAYROLL DEBIT", amount: -120000, type: "Debit", account: "Business Current Account" },
      { date: "20 May 2026", desc: "LOAN INSTALMENT: SPL", amount: -18000, type: "Debit", account: "Business Current Account" }
    ],
    
    cashflow: {
      sixMonthInflow: [600000, 550000, 400000, 450000, 500000, 500000], 
      sixMonthOutflow: [480000, 480000, 450000, 480000, 480000, 480000],
      avgDailyBalance: 500000,
      peakBalance: 800000,
      lowBalance: 300000,
      returnedChequeCount: 0,
      digitalVolumePercent: 95,
      supplierConcentration: "Low",
      buyerConcentration: "High (OTAs - Agoda/Booking)",
      seasonality: "High (School Holidays/LIMA)",
      wcCycleDays: -5,
      dso: 10,
      dpo: 30,
      stressIndicator: "Healthy",
      insightText: "Strong seasonality. High inflows during holidays."
    },
    
    risk: {
      ccrisStatus: "Clean",
      ctosStatus: "Clean",
      conductOfAccount: "Satisfactory",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "Yes (During Covid 2021, fully regularised)",
      collateralSummary: "Hotel Property",
      guarantorSummary: "Ahmad Faris",
      dscr: 2.0,
      gearing: 1.5,
      facilityUtilisation: "80%",
      earlyWarningSignals: "None",
      watchlistStatus: "Normal",
      amlRisk: "Low",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Low",
      fraudExposure: "Low",
      creditAction: "Maintain. Good track record post-Covid."
    },
    
    opportunities: [],
    
    productGaps: [
      { product: "Term Deposit", reason: "Surplus cash during peak seasons could be placed in short term FDs." }
    ],
    
    interactions: [
      { id: "INT-7", date: "15 May 2026 14:00", type: "RM Meeting", channel: "In-Person", subject: "Annual Review", owner: "Roslan Aziz", status: "Closed", sentiment: "Positive", sourceSystem: "Sales4U", confidential: true, followUp: "None" }
    ],
    
    statements: [],
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Propose short-term Fixed Deposits to maximize yields on surplus cash during peak holiday seasons.",
      nextBestOffer: "1-Month Term Deposit",
      creditWatch: "Healthy",
      serviceRecovery: "No issues.",
      meetingPrep: "Check if they need any facility upgrades before the next LIMA exhibition.",
      suggestedQuestions: [
        "Do you expect a surge in bookings for the upcoming school holidays?"
      ]
    }
  },
  {
    id: "C-S007",
    name: "Mega Build Construction Sdn Bhd",
    tradingName: "Mega Build",
    segment: "SME",
    smeSegment: "Medium",
    cif: "CIF-S-7710291",
    brn: "20080109911",
    sstRegistration: "W10-1808-66000122",
    homeBranch: "001 - Maybank Tower KL",
    region: "Central",
    customerSince: "2008",
    incorporationDate: "22 May 2008",
    businessType: "Sdn Bhd",
    industry: "Construction",
    subIndustry: "Specialised Subcontractor",
    mccCode: "1520 - General Contractors",
    yearsInBusiness: 18,
    registeredAddress: "Level 8, Menara KL, 50250 Kuala Lumpur",
    operatingAddress: "Level 8, Menara KL, 50250 Kuala Lumpur",
    outletsCount: 1,
    employeesCount: 80,
    revenueBand: "MYR 25M - 50M",
    monthlySalesEst: 3000000,
    payrollSize: 400000,
    lifecycleStage: "Mature",
    primaryStates: ["Kuala Lumpur", "Selangor"],
    website: "www.megabuild.com.my",
    ecommerceChannels: ["None"],
    keySuppliers: ["YTL Cement", "Steel Distributors Bhd"],
    keyBuyers: ["Top Tier Developers (Sunway, SP Setia)"],
    importExportCountries: ["None"],
    sourceSystems: ["HOST", "Trade Finance", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1541888087425-ce81dfae8677?w=150",
    
    aum: 3500000, 
    totalBorrowings: 8000000,
    totalLimits: 10000000,
    utilisationPercent: 80,
    monthlyAvgBalance: 2500000,
    monthlyInflow: 3200000,
    monthlyOutflow: 3000000,
    merchantGmv: 0,
    payrollVolume: 400000,
    digitalAdoptionScore: 60,
    customerStatus: "Active",
    riskRating: "Medium Risk",
    internalCreditGrade: "CR-4 (Satisfactory)",
    shariahPreference: "Conventional",
    
    hierarchy: {
      groupId: "HH-S7",
      groupName: "Mega Build Group",
      rollUpAum: 3500000,
      members: [
        { name: "Chong Wei Keat", role: "Managing Director", relation: "Director (70%)", accessLevel: "Maker & Approver", mandate: "Joint Signatory", aum: 0, confidential: true, cif: "CIF-I-70111", pepStatus: "None" },
        { name: "Suresh Kumar", role: "Project Director", relation: "Director (30%)", accessLevel: "Approver", mandate: "Joint Signatory", aum: 0, confidential: false, cif: "CIF-I-70112", pepStatus: "None" }
      ],
      relationshipStrengthScore: 75, 
      coverageTeam: [
        { name: "Ahmad Zaki", role: "SME RM", branch: "Maybank Tower KL", email: "zaki@maybank.com.my", phone: "+60 13-882 1104" }
      ],
      lastContactDate: "20 Apr 2026",
      momentum: "Stable"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****7711", balance: 3500000, islamic: false, status: "Active", openDate: "22 May 2008", availableBalance: 3500000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Ahmad Zaki" },
      { id: "H-S2", type: "Trade", name: "Bank Guarantee (Performance Bonds)", accountNo: "BG-****9922", outstandingBalance: -5000000, limit: 6000000, utilisation: 83, islamic: false, status: "Active", openDate: "15 Jan 2012", maturityDate: "Revolving", statementDate: "30 Apr 2026", sourceSystem: "Trade Finance", productOwner: "Trade Desk" },
      { id: "H-S3", type: "Financing", name: "Project Financing", accountNo: "PF-****1144", outstandingBalance: -3000000, limit: 4000000, utilisation: 75, islamic: false, status: "Active", openDate: "10 Mar 2024", profitRate: "Cost of Funds + 2%", maturityDate: "10 Mar 2027", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Ahmad Zaki" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "INWARD IBG: SUNWAY PROGRESS CLAIM", amount: 850000, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "SUPPLIER PAYMENT: YTL CEMENT", amount: -450000, type: "Debit", account: "Business Current Account" },
      { date: "24 May 2026", desc: "PAYROLL DEBIT", amount: -400000, type: "Debit", account: "Business Current Account" }
    ],
    
    cashflow: {
      sixMonthInflow: [3000000, 2500000, 3500000, 2000000, 4000000, 3200000], 
      sixMonthOutflow: [2800000, 2800000, 2900000, 3000000, 3100000, 3000000],
      avgDailyBalance: 2500000,
      peakBalance: 4500000,
      lowBalance: 800000,
      returnedChequeCount: 0,
      digitalVolumePercent: 70,
      supplierConcentration: "Medium",
      buyerConcentration: "High (Top Developers)",
      seasonality: "Low",
      wcCycleDays: 90,
      dso: 120, 
      dpo: 60,
      stressIndicator: "Watch",
      insightText: "Lumpy cashflow due to delayed progress claims (DSO 120 days). Heavy reliance on overdrafts to bridge payments."
    },
    
    risk: {
      ccrisStatus: "Clean",
      ctosStatus: "Clean",
      conductOfAccount: "Satisfactory",
      excessEvents: 2, 
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "Directors Guarantee & Project Proceeds Assignment",
      guarantorSummary: "Chong Wei Keat, Suresh Kumar",
      dscr: 1.5,
      gearing: 2.0,
      facilityUtilisation: "80%",
      earlyWarningSignals: "2 Excess Events in 6 months",
      watchlistStatus: "Watchlist - Level 1",
      amlRisk: "Medium",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Medium (Construction safety)",
      fraudExposure: "Low",
      creditAction: "Monitor project milestones strictly. No new limits."
    },
    
    opportunities: [],
    
    productGaps: [
      { product: "Overdraft", reason: "Frequent excess events indicate need for formal overdraft buffer." }
    ],
    
    interactions: [
      { id: "INT-8", date: "20 Apr 2026 10:00", type: "RM Meeting", channel: "In-Person (Site Visit)", subject: "Project Progress Update", owner: "Ahmad Zaki", status: "Closed", sentiment: "Neutral", sourceSystem: "Sales4U", confidential: true, followUp: "Collect latest progress claim certs." }
    ],
    
    statements: [],
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Discuss converting their frequent unauthorised excesses into a formal Overdraft facility.",
      nextBestOffer: "SME Overdraft",
      creditWatch: "Alert - 2 Excess Events",
      serviceRecovery: "No issues.",
      meetingPrep: "Ensure they bring the latest architect progress certification for the Sunway project.",
      suggestedQuestions: [
        "Are the progress claims from main contractors still being delayed to 120 days?"
      ]
    }
  },
  {
    id: "C-S008",
    name: "Glow Cosmetics E-Commerce Sdn Bhd",
    tradingName: "Glow Beauty",
    segment: "SME",
    smeSegment: "Small",
    cif: "CIF-S-8810291",
    brn: "20200109911",
    sstRegistration: "N/A",
    homeBranch: "011 - Damansara Utama",
    region: "Central",
    customerSince: "2020",
    incorporationDate: "15 Sep 2020",
    businessType: "Sdn Bhd",
    industry: "Retail Trade",
    subIndustry: "E-Commerce Beauty",
    mccCode: "5977 - Cosmetic Stores",
    yearsInBusiness: 6,
    registeredAddress: "Level 3, Uptown 1, Damansara Uptown, 47400 PJ",
    operatingAddress: "Warehouse 2, Shah Alam, Selangor",
    outletsCount: 0, 
    employeesCount: 12,
    revenueBand: "MYR 5M - 10M",
    monthlySalesEst: 600000,
    payrollSize: 60000,
    lifecycleStage: "High Growth",
    primaryStates: ["Selangor"],
    website: "www.glowbeauty.my",
    ecommerceChannels: ["Shopee", "Lazada", "TikTok Shop", "Shopify"],
    keySuppliers: ["OEM Manufacturers (Korea)", "Packaging (China)"],
    keyBuyers: ["Retail Consumers"],
    importExportCountries: ["South Korea (Import)", "China (Import)"],
    sourceSystems: ["HOST", "M2U Biz", "Sales4U"],
    photoUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150",
    
    aum: 1800000, 
    totalBorrowings: 500000,
    totalLimits: 500000,
    utilisationPercent: 100,
    monthlyAvgBalance: 1500000,
    monthlyInflow: 650000,
    monthlyOutflow: 500000,
    merchantGmv: 0, 
    payrollVolume: 60000,
    digitalAdoptionScore: 100,
    customerStatus: "Active",
    riskRating: "Low Risk",
    internalCreditGrade: "CR-2 (Very Strong)",
    shariahPreference: "Conventional",
    
    hierarchy: {
      groupId: "HH-S8",
      groupName: "Glow Beauty",
      rollUpAum: 1800000,
      members: [
        { name: "Nurul Huda", role: "Founder & CEO", relation: "Director (100%)", accessLevel: "Maker & Approver", mandate: "Single Signatory", aum: 500000, confidential: true, cif: "CIF-I-80111", pepStatus: "None" }
      ],
      relationshipStrengthScore: 90, 
      coverageTeam: [
        { name: "Sarah Lim", role: "SME RM", branch: "Damansara Utama", email: "sarah@maybank.com.my", phone: "+60 12-441 9922" }
      ],
      lastContactDate: "26 May 2026",
      momentum: "Hot"
    },
    
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", accountNo: "BCA-****8811", balance: 1800000, islamic: false, status: "Active", openDate: "15 Sep 2020", availableBalance: 1800000, statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Sarah Lim" },
      { id: "H-S2", type: "Financing", name: "SME Digital Financing", accountNo: "SDF-****2233", outstandingBalance: -500000, limit: 500000, utilisation: 100, islamic: false, status: "Active", openDate: "10 Jan 2024", profitRate: "6.00% p.a.", maturityDate: "10 Jan 2029", statementDate: "30 Apr 2026", sourceSystem: "Sales4U", productOwner: "Sarah Lim" },
      { id: "H-S3", type: "Cards", name: "Corporate Credit Card", accountNo: "CC-****9922", outstandingBalance: -45000, limit: 50000, utilisation: 90, islamic: false, status: "Active", openDate: "20 Feb 2023", statementDate: "30 Apr 2026", sourceSystem: "HOST", productOwner: "Sarah Lim" }
    ],
    
    recentTransactions: [
      { date: "26 May 2026", desc: "INWARD IBG: SHOPEE SETTLEMENT", amount: 45000, type: "Credit", account: "Business Current Account" },
      { date: "26 May 2026", desc: "INWARD IBG: TIKTOK SHOP", amount: 32000, type: "Credit", account: "Business Current Account" },
      { date: "25 May 2026", desc: "OUTWARD TT: KOREA OEM", amount: -150000, type: "Debit", account: "Business Current Account" },
      { date: "24 May 2026", desc: "META ADS PAYMENT", amount: -25000, type: "Debit", account: "Corporate Credit Card" }
    ],
    
    cashflow: {
      sixMonthInflow: [500000, 550000, 600000, 620000, 650000, 680000], 
      sixMonthOutflow: [450000, 480000, 500000, 520000, 550000, 580000],
      avgDailyBalance: 1500000,
      peakBalance: 2000000,
      lowBalance: 1000000,
      returnedChequeCount: 0,
      digitalVolumePercent: 100,
      supplierConcentration: "Medium (Korean OEMs)",
      buyerConcentration: "Low (Retail)",
      seasonality: "Medium (Double digit sales 11.11, etc)",
      wcCycleDays: 15,
      dso: 5, 
      dpo: 30,
      stressIndicator: "Healthy",
      insightText: "Rapid sales growth leading to strong cash accumulation. Heavy digital marketing spend on corporate cards."
    },
    
    risk: {
      ccrisStatus: "Clean",
      ctosStatus: "Clean",
      conductOfAccount: "Excellent",
      excessEvents: 0,
      missedPayments: 0,
      restructuringFlag: "No",
      collateralSummary: "Clean (Unsecured SDF)",
      guarantorSummary: "Nurul Huda",
      dscr: 5.0,
      gearing: 0.5,
      facilityUtilisation: "100%", 
      earlyWarningSignals: "Corporate card near limit (90%)",
      watchlistStatus: "Normal",
      amlRisk: "Medium (Frequent cross border TTs)",
      sanctionsScreening: "Cleared",
      pepExposure: "None",
      adverseMedia: "None",
      esgRisk: "Low",
      fraudExposure: "Medium (Cyber/E-commerce)",
      creditAction: "Increase limits. High potential for Wealth Management cross-sell."
    },
    
    opportunities: [
      { id: "OPP-S801", name: "Corporate Card Limit Increase", stage: "Lead", probability: 95, expectedValue: 100000, owner: "Sarah Lim", dueDate: "10 Jun 2026", product: "Corporate Card", complaintSensitive: false, nextAction: "Call founder to propose limit increase for Ads spend." },
      { id: "OPP-S802", name: "Premier Wealth Onboarding for Founder", stage: "Pitching", probability: 70, expectedValue: 500000, owner: "Wealth Team", dueDate: "30 Jun 2026", product: "Premier Wealth", complaintSensitive: false, nextAction: "Joint meeting with Wealth RM" }
    ],
    
    productGaps: [
      { product: "FX Forward Line", reason: "Frequent large TTs to Korea and China exposed to spot rates." }
    ],
    
    interactions: [
      { id: "INT-9", date: "26 May 2026 09:00", type: "Email", channel: "Email", subject: "Inquiry on Corporate Card Limit", owner: "Sarah Lim", status: "Closed", sentiment: "Neutral", sourceSystem: "Outlook", confidential: false, followUp: "Create opportunity for limit increase." }
    ],
    
    statements: [],
    queueTicket: null,
    
    rmIntelligence: {
      nextBestAction: "Founder enquired about increasing Corporate Card limit to pay for higher TikTok/Meta ads. Proceed with limit increase.",
      nextBestOffer: "Corporate Card Limit Increase",
      creditWatch: "Healthy",
      serviceRecovery: "No issues.",
      meetingPrep: "Pitch Premier Wealth for her personal AUM (RM500k). Bring Wealth RM along.",
      suggestedQuestions: [
        "Do you want to lock in your exchange rates for your Korean suppliers to protect your margins?"
      ]
    }
  }
];
