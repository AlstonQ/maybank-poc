import { mockWealthProfileExt as mockCustomersWealth } from './mockWealthProfileExt';
import { mockCustomersIslamic } from './mockCustomersIslamic';
import { mockSMEProfileExt as mockCustomersSME } from './mockSMEProfileExt';

// Unified customer array across all segments
export const mockCustomers = [
  ...mockCustomersWealth,
  ...mockCustomersIslamic,
  ...mockCustomersSME
];

// For backwards compatibility during refactor
export const mockCustomersGCFS = [...mockCustomersWealth, ...mockCustomersIslamic, ...mockCustomersSME];
export const mockCustomersGGB = [];

export const mockOpportunities = [
  {
    id: "OPP-39201",
    name: "Tengku Adnan - Shariah wealth portfolio transfer",
    customerId: "C-W001",
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
    customerId: "C-W002",
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
  }
];

export const mockCases = [
  {
    id: "CASE-4921",
    customerName: "Tengku Adnan bin Tengku Zafrul",
    customerId: "C-W001",
    category: "Wealth Management > Transaction Blocked",
    channel: "M2U Mobile App",
    slaCountdownHours: 4,
    slaState: "Urgent",
    status: "In Investigation",
    escalationTag: "CEM",
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
    customerId: "C-W002",
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
  }
];

export const mockCasesGGB = [
  {
    id: "CASE-8021",
    customerName: "Synergy Logistics Sdn Bhd",
    customerId: "C-S001",
    category: "Trade Finance > Outward SWIFT Hold",
    channel: "Corporate SWIFT Portal",
    slaCountdownHours: 2,
    slaState: "Urgent",
    status: "In Investigation",
    escalationTag: "CEM",
    createdOn: "25 May 2026 11:00",
    rootCause: "Secondary sanction matching on recipient clearing node",
    linkedSr: "SR-PET-9912",
    resolutionPlan: "Expediting compliance override with Sanction Clearing desk",
    auditTrail: [
      "25 May 11:00: SWIFT transaction flagged auto-hold",
      "25 May 11:30: Escalated by RM to compliance desk"
    ]
  }
];

export const mockReports = [
  { id: "REP-001", name: "Monthly Wealth Portfolio Analysis", description: "Comprehensive breakdown of AUM and asset classes across Premier Wealth segment.", category: "Wealth", owner: "James May", createdDate: "01 May 2026", status: "Active" },
  { id: "REP-002", name: "SME Pipeline Conversion Rates", description: "Lead to deal conversion metrics for Q2 2026 SME banking sector.", category: "Pipeline", owner: "Azlan Shah", createdDate: "15 May 2026", status: "Active" }
];

export const mockDashboards = [
  { id: "DB-001", name: "Executive Summary", description: "High-level overview of portfolio growth, pipeline health, and top at-risk accounts.", isFavorite: true, lastViewed: "26 May 2026" },
  { id: "DB-002", name: "Wealth Management KPI", description: "Detailed charts tracking AUM growth, Islamic vs Conventional ratio, and cross-sell penetration.", isFavorite: false, lastViewed: "20 May 2026" },
  { id: "DB-003", name: "Corporate Banking Exposure", description: "Credit limit utilisations and syndication pipeline for GGB segment.", isFavorite: true, lastViewed: "25 May 2026" }
];
