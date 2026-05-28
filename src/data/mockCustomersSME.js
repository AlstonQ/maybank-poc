export const mockCustomersSME = [
  {
    id: "C-S001",
    name: "Synergy Logistics Sdn Bhd",
    segment: "SME",
    cif: "CIF-S-9910291",
    homeBranch: "001 - Maybank Tower KL",
    aum: 2800000,
    photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?w=150",
    rating: 5,
    mobile: "+60 3-228 1992",
    email: "finance@synergylogistics.com.my",
    brn: "BRN-20100101992",
    incorporationDate: "15 Jan 2010",
    customerSince: "2010",
    industry: "Transportation & Logistics",
    revenueBand: "MYR 10M - 25M",
    registeredAddress: "Level 14, Menara Symphony, Petaling Jaya",
    preferredLanguage: "English",
    pic: { rmName: "Ahmad Zaki", staffId: "S-55102", role: "SME Account Manager", branch: "Maybank Tower KL", phone: "+60 13-882 1104", sourceSystem: "Sales4U" },
    churnRisk: 10,
    nba: [
      { id: "NBA-S1", product: "SME Digital Financing", reason: "Consistent revenue growth, eligible for working capital expansion", confidence: 95, owner: "Sales4U Exec", complaintSensitive: false }
    ],
    interactions: [
      { id: "INT-S1", date: "20 May 2026", type: "Branch Visit", channel: "KL Main", status: "Closed", subject: "Trade Facility Review", owner: "Ahmad Zaki", confidential: true },
      { id: "INT-S2", date: "10 May 2026", type: "Complaint", channel: "Email", status: "Closed", subject: "M2E Payroll File Upload Error", owner: "Support Desk", confidential: false }
    ],
    statements: [
      { id: "STMT-S1", date: "30 Apr 2026", type: "Business Current Account", accountMasked: "BCA-****9912" }
    ],
    appointments: [
      { id: "APP-S1", date: "02 Jun 2026", time: "11:00", type: "Facility Renewal", branch: "KL Main", status: "Upcoming", staff: "Ahmad Zaki" }
    ],
    queueTicket: null,
    hierarchy: {
      groupId: "HH-S1",
      groupName: "Synergy Group",
      rollUpAum: 2800000,
      members: [
        { name: "Tan Wei Ming", role: "Managing Director", relation: "Beneficial Owner & Signatory", aum: 0, confidential: true },
        { name: "Lim Siew Leng", role: "Finance Director", relation: "Authorised Signatory", aum: 0, confidential: false }
      ]
    },
    holdings: [
      { id: "H-S1", type: "Deposits", name: "Business Current Account", balance: 1200000, islamic: false, status: "Active", openDate: "15 Jan 2010" },
      { id: "H-S2", type: "Financing", name: "Working Capital Financing", balance: -800000, islamic: false, status: "Active", openDate: "20 Mar 2024" },
      { id: "H-S3", type: "Trade", name: "Bank Guarantee Line", balance: -500000, islamic: false, status: "Active", openDate: "10 Jun 2022" }
    ],
    suitability: { score: "Corporate Not Applicable", ckaStatus: "N/A", validity: "N/A", vulnerable: false }
  },
  {
    id: "C-S002",
    name: "Klinik Mediviron Utama",
    segment: "SME",
    cif: "CIF-S-8821992",
    homeBranch: "011 - Damansara Utama",
    aum: 450000,
    photoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150",
    rating: 4,
    mobile: "+60 3-772 9918",
    email: "admin@klinikmediviron.com.my",
    brn: "BRN-20150102211",
    incorporationDate: "10 Feb 2015",
    customerSince: "2015",
    industry: "Healthcare / Medical",
    revenueBand: "MYR 1M - 5M",
    registeredAddress: "45, SS21/37, Damansara Utama, 47400 PJ",
    preferredLanguage: "English / Bahasa Melayu",
    pic: { rmName: "Sarah Lim", staffId: "S-99212", role: "SME Account Manager", branch: "Damansara Utama", phone: "+60 12-441 9922", sourceSystem: "Sales4U" },
    churnRisk: 30,
    nba: [
      { id: "NBA-S2", product: "Merchant QRPay / POS", reason: "High volume of cash deposits detected, digitize collections", confidence: 85, owner: "RM", complaintSensitive: false }
    ],
    interactions: [],
    statements: [],
    appointments: [],
    queueTicket: { ticketNo: "C-045", branch: "Damansara Utama", service: "Corporate Teller", status: "Serving", estimatedWait: "0 mins" },
    hierarchy: {
      groupId: "HH-S2",
      groupName: "Mediviron Clinics",
      rollUpAum: 450000,
      members: [
        { name: "Dr. Hassan Ali", role: "Clinic Owner", relation: "Sole Proprietor & Signatory", aum: 0, confidential: false }
      ]
    },
    holdings: [
      { id: "H-S4", type: "Deposits", name: "Business Current Account-i", balance: 450000, islamic: true, status: "Active", openDate: "10 Feb 2015" },
      { id: "H-S5", type: "Services", name: "Maybank AutoCredit Payroll", balance: 0, islamic: false, status: "Active", openDate: "01 Mar 2015" }
    ],
    suitability: { score: "Corporate Not Applicable", ckaStatus: "N/A", validity: "N/A", vulnerable: false }
  },
  {
    id: "C-S003",
    name: "Taste of Penang Restaurant",
    segment: "SME",
    cif: "CIF-S-2291038",
    homeBranch: "028 - Penang Road",
    aum: 120000,
    photoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150",
    rating: 3,
    mobile: "+60 4-228 1192",
    email: "hello@tasteofpenang.com.my",
    brn: "BRN-20180103381",
    incorporationDate: "20 May 2018",
    customerSince: "2018",
    industry: "F&B / Retail",
    revenueBand: "MYR < 1M",
    registeredAddress: "18, Penang Road, 10000 Georgetown, Penang",
    preferredLanguage: "Mandarin / English",
    pic: { rmName: "David Ooi", staffId: "S-11294", role: "SME Account Manager", branch: "Penang Road", phone: "+60 14-223 9901", sourceSystem: "Sales4U" },
    churnRisk: 15,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-S3", groupName: "Taste of Penang", rollUpAum: 120000, members: [] },
    holdings: [
      { id: "H-S6", type: "Deposits", name: "Business Current Account", balance: 120000, islamic: false, status: "Active", openDate: "20 May 2018" },
      { id: "H-S7", type: "Services", name: "Merchant QRPay", balance: 0, islamic: false, status: "Active", openDate: "01 Jun 2018" }
    ],
    suitability: { score: "Corporate Not Applicable", ckaStatus: "N/A", validity: "N/A", vulnerable: false }
  },
  {
    id: "C-S004",
    name: "Borneo Timber Manufacturing",
    segment: "SME",
    cif: "CIF-S-4491023",
    homeBranch: "089 - Kuching Main",
    aum: 1500000,
    photoUrl: "https://images.unsplash.com/photo-1504307651254-35680f356f12?w=150",
    rating: 4,
    mobile: "+60 82-221 9912",
    email: "admin@borneotimber.com",
    brn: "BRN-20050109921",
    incorporationDate: "12 Aug 2005",
    customerSince: "2005",
    industry: "Manufacturing",
    revenueBand: "MYR 5M - 10M",
    registeredAddress: "Lot 88, Demak Laut Industrial Park, 93050 Kuching",
    preferredLanguage: "English / Bahasa Melayu",
    pic: { rmName: "Wong Li Lin", staffId: "S-77291", role: "SME Account Manager", branch: "Kuching Main", phone: "+60 12-882 1102", sourceSystem: "Sales4U" },
    churnRisk: 5,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-S4", groupName: "Borneo Timber", rollUpAum: 1500000, members: [] },
    holdings: [
      { id: "H-S8", type: "Deposits", name: "Business Current Account", balance: 1500000, islamic: false, status: "Active", openDate: "12 Aug 2005" },
      { id: "H-S9", type: "Financing", name: "SME Equipment Financing", balance: -500000, islamic: false, status: "Active", openDate: "15 Oct 2020" }
    ],
    suitability: { score: "Corporate Not Applicable", ckaStatus: "N/A", validity: "N/A", vulnerable: false }
  },
  {
    id: "C-S005",
    name: "Maju Jaya Hardware Sdn Bhd",
    segment: "SME",
    cif: "CIF-S-5591024",
    homeBranch: "045 - Johor Bahru Main",
    aum: 850000,
    photoUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=150",
    rating: 3,
    mobile: "+60 7-332 1192",
    email: "sales@majujaya.com.my",
    brn: "BRN-20120108821",
    incorporationDate: "05 Nov 2012",
    customerSince: "2012",
    industry: "Wholesale / Retail Trade",
    revenueBand: "MYR 1M - 5M",
    registeredAddress: "12, Jalan Tebrau, 80250 Johor Bahru",
    preferredLanguage: "English / Mandarin",
    pic: { rmName: "Siti Nurhaliza", staffId: "S-11928", role: "Branch Manager", branch: "Johor Bahru Main", phone: "+60 17-229 1882", sourceSystem: "Sales4U" },
    churnRisk: 18,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-S5", groupName: "Maju Jaya", rollUpAum: 850000, members: [] },
    holdings: [
      { id: "H-S10", type: "Deposits", name: "Business Current Account", balance: 850000, islamic: false, status: "Active", openDate: "05 Nov 2012" }
    ],
    suitability: { score: "Corporate Not Applicable", ckaStatus: "N/A", validity: "N/A", vulnerable: false }
  }
];
