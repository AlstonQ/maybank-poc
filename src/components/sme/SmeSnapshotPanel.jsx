import React from 'react';
import { Briefcase, Building2, TrendingUp, AlertTriangle, CheckCircle2, DollarSign, Activity, Users, ShieldAlert, Award } from 'lucide-react';

const SmeSnapshotPanel = ({ customer }) => {
  if (!customer) return null;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  const getRiskColor = (rating) => {
    if (rating === 'Low Risk') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (rating === 'Medium Risk') return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden mb-6">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Profile Section */}
        <div className="p-6 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-100 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-zinc-100 border border-zinc-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
              {customer.photoUrl ? (
                <img src={customer.photoUrl} alt="Company Logo" className="w-full h-full object-cover" />
              ) : (
                <Building2 className="w-8 h-8 text-zinc-400" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 tracking-tight leading-tight">{customer.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  {customer.segment} {customer.smeSegment && `- ${customer.smeSegment}`}
                </span>
                <span className="text-xs text-zinc-500">CIF: {customer.cif}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">RM Coverage</span>
              <span className="font-medium text-zinc-900">{customer.hierarchy?.coverageTeam?.[0]?.name || 'N/A'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Industry</span>
              <span className="font-medium text-zinc-900">{customer.industry}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Customer Since</span>
              <span className="font-medium text-zinc-900">{customer.customerSince}</span>
            </div>
          </div>
        </div>

        {/* Right Metrics Grid */}
        <div className="p-6 lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* AUM & Deposits */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total AUM</span>
              <DollarSign className="w-4 h-4 text-zinc-400" />
            </div>
            <div>
              <div className="text-xl font-semibold text-zinc-900">{formatCurrency(customer.aum)}</div>
              <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Active Deposits
              </div>
            </div>
          </div>

          {/* Borrowings & Limits */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Borrowings</span>
              <Briefcase className="w-4 h-4 text-zinc-400" />
            </div>
            <div>
              <div className="text-xl font-semibold text-zinc-900">{formatCurrency(customer.totalBorrowings)}</div>
              <div className="text-xs text-zinc-500 mt-1">
                Limit: {formatCurrency(customer.totalLimits)}
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-1.5 mt-2">
                <div 
                  className={`bg-blue-600 h-1.5 rounded-full ${customer.utilisationPercent > 85 ? 'bg-amber-500' : ''}`}
                  style={{ width: `${customer.utilisationPercent || 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Digital Adoption */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Digital Score</span>
              <Activity className="w-4 h-4 text-zinc-400" />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-semibold text-zinc-900 leading-none">{customer.digitalAdoptionScore || 0}</span>
                <span className="text-sm text-zinc-500 mb-0.5">/100</span>
              </div>
              <div className="text-xs text-zinc-500 mt-2 line-clamp-1">
                Active on {customer.sourceSystems?.filter(s => s !== 'HOST').join(', ') || 'N/A'}
              </div>
            </div>
          </div>

          {/* Risk Rating */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Risk Profile</span>
              <ShieldAlert className="w-4 h-4 text-zinc-400" />
            </div>
            <div>
              <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getRiskColor(customer.riskRating)}`}>
                {customer.riskRating === 'Low Risk' ? <CheckCircle2 className="w-3 h-3 mr-1.5" /> : <AlertTriangle className="w-3 h-3 mr-1.5" />}
                {customer.riskRating || 'N/A'}
              </div>
              <div className="text-xs font-medium text-zinc-600 mt-2">
                Grade: {customer.internalCreditGrade || 'N/A'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmeSnapshotPanel;
