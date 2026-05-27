// Mock Analytics Engine to provide data for the Dashboards and Reports

export const generateTrendData = (months = 6, baseValue = 1000, variance = 200) => {
  const data = [];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const startMonth = new Date().getMonth() - months + 1;
  
  for (let i = 0; i < months; i++) {
    const monthIndex = (startMonth + i + 12) % 12;
    data.push({
      name: labels[monthIndex],
      value: Math.floor(baseValue + (Math.random() * variance * 2) - variance),
      target: baseValue + 50
    });
  }
  return data;
};

export const getExecutiveSummaryData = () => {
  return {
    kpis: [
      { id: 'kpi-1', title: 'Total Branch Revenue', value: 'MYR 12.4M', delta: '+5.2%', trend: 'up', status: 'success' },
      { id: 'kpi-2', title: 'Sales vs Target (YTD)', value: '88%', delta: '-2.1%', trend: 'down', status: 'warning' },
      { id: 'kpi-3', title: 'Total Deposits (AUM)', value: 'MYR 450M', delta: '+12%', trend: 'up', status: 'success' },
      { id: 'kpi-4', title: 'Active Complaints SLA', value: '94%', delta: '+1.5%', trend: 'up', status: 'success' }
    ],
    revenueTrend: generateTrendData(6, 2000000, 300000),
    segmentBreakdown: [
      { name: 'Premier Wealth', value: 45 },
      { name: 'Private Wealth', value: 25 },
      { name: 'Mass Retail', value: 20 },
      { name: 'SME', value: 10 }
    ]
  };
};

export const getComplaintManagementData = () => {
  return {
    kpis: [
      { id: 'kpi-c1', title: 'Total Complaints (MTD)', value: '142', delta: '-12', trend: 'down', status: 'success' },
      { id: 'kpi-c2', title: 'SLA Met %', value: '89%', delta: '-2%', trend: 'down', status: 'warning' },
      { id: 'kpi-c3', title: 'Avg Grievance Redressal', value: '4.2 Days', delta: '+0.5', trend: 'up', status: 'danger' },
      { id: 'kpi-c4', title: 'Escalations (MAS/CEM)', value: '8', delta: '+2', trend: 'up', status: 'danger' }
    ],
    themes: [
      { name: 'Transaction Disputes', count: 45 },
      { name: 'Service Quality', count: 32 },
      { name: 'System Outage', count: 28 },
      { name: 'Card Issues', count: 22 },
      { name: 'Fees & Charges', count: 15 }
    ],
    rootCause: [
      { name: 'Process Gap', value: 40 },
      { name: 'Staff Error', value: 25 },
      { name: 'IT System', value: 20 },
      { name: 'Policy Constraint', value: 15 }
    ]
  };
};

export const getSalesPipelineData = () => {
  return {
    kpis: [
      { id: 'kpi-s1', title: 'Total Pipeline Value', value: 'MYR 85M', delta: '+15M', trend: 'up', status: 'success' },
      { id: 'kpi-s2', title: 'Win/Loss Ratio', value: '68%', delta: '+5%', trend: 'up', status: 'success' },
      { id: 'kpi-s3', title: 'Stuck Deals (>30 Days)', value: '12', delta: '-3', trend: 'down', status: 'warning' },
      { id: 'kpi-s4', title: 'Conversion Rate', value: '24%', delta: '+1.2%', trend: 'up', status: 'success' }
    ],
    funnel: [
      { stage: 'Prospecting', value: 100 },
      { stage: 'Qualification', value: 75 },
      { stage: 'Proposal', value: 50 },
      { stage: 'Negotiation', value: 30 },
      { stage: 'Closed Won', value: 20 }
    ],
    revenueByProduct: [
      { name: 'Mortgage', value: 35 },
      { name: 'Personal Loan', value: 25 },
      { name: 'Credit Cards', value: 15 },
      { name: 'Wealth Products', value: 25 }
    ]
  };
};

export const getGGBExposureData = () => {
  return {
    kpis: [
      { id: 'kpi-g1', title: 'Total Group Limits', value: 'MYR 5.2B', delta: '+0', trend: 'flat', status: 'neutral' },
      { id: 'kpi-g2', title: 'Utilisation Rate', value: '78%', delta: '+4%', trend: 'up', status: 'success' },
      { id: 'kpi-g3', title: 'Total RRWA', value: 'MYR 3.8B', delta: '-120M', trend: 'down', status: 'success' },
      { id: 'kpi-g4', title: 'NII Revenue', value: 'MYR 85M', delta: '+12M', trend: 'up', status: 'success' }
    ],
    exposureBySector: [
      { name: 'Oil & Gas', value: 35 },
      { name: 'Plantation', value: 25 },
      { name: 'Manufacturing', value: 20 },
      { name: 'Real Estate', value: 10 },
      { name: 'Telecommunications', value: 10 }
    ]
  };
};

export const MockAnalyticsEngine = {
  getExecutiveSummaryData,
  getComplaintManagementData,
  getSalesPipelineData,
  getGGBExposureData
};
