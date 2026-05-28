export const mockCustomersWealth = [
  {
    id: "C-W001",
    name: "Tengku Adnan bin Tengku Zafrul",
    segment: "Private Wealth",
    cif: "CIF-W-4028911",
    homeBranch: "001 - Maybank Tower KL",
    aum: 4850000,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    mobile: "+60 12-388 9821",
    email: "tengku.adnan@outlook.my",
    nric: "780214-14-5231",
    dob: "14 Feb 1978",
    customerSince: "2012",
    occupation: "Managing Director, ASEAN Tech Holdings",
    nationality: "Malaysian",
    ethnicity: "Malay",
    incomeBand: "MYR > 500k/yr",
    residentialAddress: "12, Jalan Duta, Kenny Hills, 50480 Kuala Lumpur",
    preferredLanguage: "English / Bahasa Melayu",
    pic: {
      rmName: "James May",
      staffId: "S-88219",
      role: "Senior Private Wealth RM",
      branch: "Maybank Tower KL",
      phone: "+60 19-338 2911"
    },
    churnRisk: 96,
    nba: [
      { id: "NBA-1", product: "Private Wealth Account", reason: "Current AUM tier upgrade eligibility", confidence: 95, owner: "RM", complaintSensitive: false },
      { id: "NBA-2", product: "Goodwill Reversal", reason: "Recent SLA breach on CARE ticket", confidence: 100, owner: "Care Desk", complaintSensitive: true, compensation: 250 }
    ],
    interactions: [
      { id: "INT-883", date: "25 May 2026", type: "Complaint", channel: "M2U App", status: "Open", subject: "Avaloq Secondary Verification Failed", owner: "CARE Team", confidential: false },
      { id: "INT-882", date: "20 May 2026", type: "Branch Visit", channel: "KL Main", status: "Closed", subject: "Annual Review Meeting", owner: "James May", confidential: true },
      { id: "INT-881", date: "14 May 2026", type: "Call", channel: "Contact Centre", status: "Closed", subject: "General Enquiry on Funds", owner: "Support Agent", confidential: false }
    ],
    statements: [
      { id: "STMT-1", date: "30 Apr 2026", type: "Portfolio Statement", accountMasked: "PWA-****8821" },
      { id: "STMT-2", date: "30 Apr 2026", type: "Visa Infinite", accountMasked: "4283-****-****-9912" }
    ],
    appointments: [
      { id: "APP-1", date: "30 May 2026", time: "14:00", type: "Portfolio Review", branch: "KL Main", status: "Upcoming", staff: "James May" }
    ],
    queueTicket: { ticketNo: "V-012", branch: "KL Main", service: "Wealth Teller", status: "Waiting", estimatedWait: "5 mins" },
    hierarchy: {
      groupId: "HH-001",
      groupName: "Zafrul Dynasty",
      rollUpAum: 8680000,
      members: [
        { name: "Sharifah Aminah", role: "Spouse", relation: "Joint Account Holder", aum: 2000000, confidential: true },
        { name: "Tengku Zafrul Jr", role: "Son", relation: "Dependent", aum: 1830000, confidential: false }
      ]
    },
    holdings: [
      { id: "H-1", type: "Deposits", name: "Maybank Private Wealth Account", balance: 1250000, islamic: false, status: "Active", openDate: "12 Mar 2018" },
      { id: "H-2", type: "Investments", name: "Avanza Global Growth Fund", balance: 1800000, islamic: false, status: "Active", openDate: "05 Jun 2020" },
      { id: "H-3", type: "Investments", name: "Maybank Shariah Equity Fund", balance: 1000000, islamic: true, status: "Active", openDate: "15 Sep 2022" },
      { id: "H-4", type: "Cards", name: "Maybank Visa Infinite Card", balance: -45000, islamic: false, status: "Active", openDate: "10 Jan 2015" }
    ],
    suitability: { score: "Aggressive", ckaStatus: "Qualified", validity: "30 Nov 2027", vulnerable: false }
  },
  {
    id: "C-W002",
    name: "Datin Nurul Izzah binti Anwar",
    segment: "Premier Wealth",
    cif: "CIF-W-1192048",
    homeBranch: "011 - Damansara Utama",
    aum: 2400000,
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    rating: 5,
    mobile: "+60 19-204 8831",
    email: "izzah.anwar@pj-holdings.com",
    nric: "691012-10-5884",
    dob: "12 Oct 1969",
    customerSince: "2008",
    occupation: "Director, PJ Property",
    nationality: "Malaysian",
    ethnicity: "Malay",
    incomeBand: "MYR 250k - 500k/yr",
    residentialAddress: "88, Tropicana Golf & Country Resort, 47410 PJ",
    preferredLanguage: "Bahasa Melayu / English",
    pic: { rmName: "Sarah Lim", staffId: "S-99212", role: "Premier RM", branch: "Damansara Utama", phone: "+60 12-441 9922" },
    churnRisk: 14,
    nba: [
      { id: "NBA-3", product: "Etiqa Elite Savings Plan", reason: "Life event: approaching retirement", confidence: 85, owner: "RM", complaintSensitive: false }
    ],
    interactions: [
      { id: "INT-822", date: "02 May 2026", type: "Branch Visit", channel: "Damansara Utama", status: "Closed", subject: "Bespoke Wealth Advisory", owner: "Sarah Lim", confidential: true },
      { id: "INT-821", date: "24 Apr 2026", type: "Email", channel: "Direct Email", status: "Closed", subject: "Takaful Coverage Discussion", owner: "Etiqa Specialist", confidential: false }
    ],
    statements: [
      { id: "STMT-3", date: "30 Apr 2026", type: "Portfolio Statement", accountMasked: "PWA-****1122" }
    ],
    appointments: [],
    hierarchy: { groupId: "HH-002", groupName: "Izzah Household", rollUpAum: 2400000, members: [] },
    holdings: [
      { id: "H-201", type: "Deposits", name: "Maybank Premier 1 Account", balance: 400000, islamic: false, status: "Active", openDate: "10 Feb 2010" },
      { id: "H-202", type: "Investments", name: "ASNB Amanah Saham Bumiputera", balance: 2000000, islamic: true, status: "Active", openDate: "01 Jan 2015" }
    ],
    suitability: { score: "Conservative", ckaStatus: "Qualified", validity: "15 Apr 2028", vulnerable: true }
  },
  {
    id: "C-W003",
    name: "Dr. Rajesh Kumar a/l Subramaniam",
    segment: "Premier Wealth",
    cif: "CIF-W-9920194",
    homeBranch: "028 - Penang Road",
    aum: 2150000,
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150",
    rating: 4,
    mobile: "+60 16-399 2201",
    email: "rajesh.kumar@pantai.com.my",
    nric: "830509-08-6229",
    dob: "09 May 1983",
    customerSince: "2015",
    occupation: "Cardiologist",
    nationality: "Malaysian",
    ethnicity: "Indian",
    incomeBand: "MYR 250k - 500k/yr",
    residentialAddress: "5, Jalan Kelawai, 10250 Georgetown, Penang",
    preferredLanguage: "English / Tamil",
    pic: { rmName: "David Ooi", staffId: "S-11294", role: "Premier RM", branch: "Penang Road", phone: "+60 14-223 9901" },
    churnRisk: 42,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-003", groupName: "Rajesh Family", rollUpAum: 2150000, members: [] },
    holdings: [
      { id: "H-301", type: "Deposits", name: "Maybank Premier 1 Account", balance: 650000, islamic: false, status: "Active", openDate: "15 Aug 2015" },
      { id: "H-302", type: "Investments", name: "Structured Deposit M-Series", balance: 1500000, islamic: false, status: "Active", openDate: "12 Dec 2023" }
    ],
    suitability: { score: "Aggressive", ckaStatus: "Qualified", validity: "09 May 2027", vulnerable: false }
  },
  {
    id: "C-W004",
    name: "Madam Chin Siew Lan",
    segment: "Private Wealth",
    cif: "CIF-W-2038472",
    homeBranch: "089 - Kuching Main",
    aum: 5200000,
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    rating: 5,
    mobile: "+60 14-663 8812",
    email: "siewlan.chin@gmail.com",
    nric: "551225-07-5120",
    dob: "25 Dec 1955",
    customerSince: "1994",
    occupation: "Retired Tycoon",
    nationality: "Malaysian",
    ethnicity: "Chinese",
    incomeBand: "MYR > 500k/yr",
    residentialAddress: "32, Jalan Tun Jugah, 93350 Kuching, Sarawak",
    preferredLanguage: "Mandarin / Hokkien / English",
    pic: { rmName: "Wong Li Lin", staffId: "S-77291", role: "Private Wealth RM", branch: "Kuching Main", phone: "+60 12-882 1102" },
    churnRisk: 10,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-004", groupName: "Chin Trust", rollUpAum: 5200000, members: [] },
    holdings: [
      { id: "H-401", type: "Deposits", name: "Maybank Private Wealth Account", balance: 1200000, islamic: false, status: "Active", openDate: "20 May 1994" },
      { id: "H-402", type: "Investments", name: "Maybank Global Mixed Asset Fund", balance: 4000000, islamic: false, status: "Active", openDate: "15 Oct 2018" }
    ],
    suitability: { score: "Conservative", ckaStatus: "Qualified", validity: "Expired", vulnerable: true }
  },
  {
    id: "C-W005",
    name: "Datuk Seri Jeffrey Cheah",
    segment: "Private Wealth",
    cif: "CIF-W-5591029",
    homeBranch: "011 - Damansara Utama",
    aum: 18500000,
    photoUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150",
    rating: 5,
    mobile: "+60 12-229 8811",
    email: "jc.office@sunway-group.my",
    nric: "450512-10-5221",
    dob: "12 May 1945",
    customerSince: "1985",
    occupation: "Chairman",
    nationality: "Malaysian",
    ethnicity: "Chinese",
    incomeBand: "MYR > 1M/yr",
    residentialAddress: "Sunway South Quay, Bandar Sunway, 47500",
    preferredLanguage: "English / Cantonese",
    pic: { rmName: "James May", staffId: "S-88219", role: "Senior Private Wealth RM", branch: "Maybank Tower KL", phone: "+60 19-338 2911" },
    churnRisk: 5,
    nba: [],
    interactions: [],
    statements: [],
    appointments: [],
    hierarchy: { groupId: "HH-005", groupName: "Cheah Family Office", rollUpAum: 35000000, members: [] },
    holdings: [
      { id: "H-501", type: "Deposits", name: "Private Wealth Account", balance: 8500000, islamic: false, status: "Active", openDate: "01 Jan 1985" },
      { id: "H-502", type: "Investments", name: "Bespoke Lombard Loan", balance: -10000000, islamic: false, status: "Active", openDate: "15 Mar 2020" }
    ],
    suitability: { score: "Aggressive", ckaStatus: "Qualified", validity: "30 Dec 2028", vulnerable: false }
  }
];
