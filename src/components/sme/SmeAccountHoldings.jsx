import React from 'react';
import { Wallet, FileText, ArrowRight, TrendingUp, AlertTriangle, FileBox, Crosshair } from 'lucide-react';

const SmeAccountHoldings = ({ customer }) => {
  if (!customer) return null;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val || 0);
  };

  const getStatusColor = (status) => {
    if (status === 'Active') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (status === 'Dormant') return 'bg-amber-50 text-amber-700 border-amber-200';
    if (status === 'Closed') return 'bg-zinc-100 text-zinc-600 border-zinc-200';
    return 'bg-blue-50 text-blue-700 border-blue-200';
  };

  return (
    <div className="space-y-6">
      {/* Holdings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="p-5 border-b border-zinc-200 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-blue-600" />
            Current Holdings & Facilities
          </h3>
          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
            {customer.holdings?.length || 0} Facilities
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-medium text-xs">
              <tr>
                <th className="px-5 py-3">Facility Name</th>
                <th className="px-5 py-3">Account No</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3 text-right">Balance (MYR)</th>
                <th className="px-5 py-3 text-right">Limit (MYR)</th>
                <th className="px-5 py-3">Rate/Tenure</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {customer.holdings?.map((holding) => (
                <tr key={holding.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-medium text-zinc-900 flex items-center gap-2">
                      {holding.name}
                      {holding.islamic && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">i</span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">Opened: {holding.openDate}</div>
                  </td>
                  <td className="px-5 py-4 font-mono text-zinc-600">{holding.accountNo}</td>
                  <td className="px-5 py-4 text-zinc-600">{holding.type}</td>
                  <td className={`px-5 py-4 text-right font-medium ${holding.type === 'Deposits' ? 'text-zinc-900' : 'text-rose-600'}`}>
                    {holding.balance !== undefined ? formatCurrency(holding.balance) : formatCurrency(holding.outstandingBalance)}
                  </td>
                  <td className="px-5 py-4 text-right text-zinc-600">
                    {holding.limit ? formatCurrency(holding.limit) : '-'}
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-zinc-900">{holding.profitRate || '-'}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{holding.maturityDate ? `Mat: ${holding.maturityDate}` : ''}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(holding.status)}`}>
                      {holding.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">View Details</button>
                  </td>
                </tr>
              ))}
              {(!customer.holdings || customer.holdings.length === 0) && (
                <tr>
                  <td colSpan="8" className="px-5 py-8 text-center text-zinc-500">
                    No active holdings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Latest Transactions
            </h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            {customer.recentTransactions?.map((tx, idx) => (
              <div key={idx} className="flex justify-between items-start pb-4 border-b border-zinc-100 last:border-0 last:pb-0">
                <div>
                  <div className="text-sm font-medium text-zinc-900">{tx.desc}</div>
                  <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                    <span>{tx.date}</span>
                    <span>•</span>
                    <span className="text-zinc-400">{tx.account}</span>
                  </div>
                </div>
                <div className={`text-sm font-medium whitespace-nowrap ${tx.type === 'Credit' ? 'text-emerald-600' : 'text-zinc-900'}`}>
                  {tx.type === 'Credit' ? '+' : ''}{formatCurrency(tx.amount)}
                </div>
              </div>
            ))}
            {(!customer.recentTransactions || customer.recentTransactions.length === 0) && (
              <div className="text-center py-6 text-zinc-500 text-sm">
                No recent transactions.
              </div>
            )}
          </div>
        </div>

        {/* Product Gaps & Opportunities */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-blue-600" />
            Wallet Share & Product Gaps
          </h3>
          
          <div className="space-y-4">
            {customer.productGaps?.map((gap, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-amber-50 border border-amber-100 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-amber-900">{gap.product}</div>
                  <div className="text-xs text-amber-700 mt-1">{gap.reason}</div>
                  <button className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center">
                    Create Lead <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
            {(!customer.productGaps || customer.productGaps.length === 0) && (
              <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100 text-center">
                <FileBox className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-zinc-900">High Wallet Share</div>
                <div className="text-xs text-zinc-500 mt-1">No obvious product gaps identified by analytics engine.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmeAccountHoldings;
