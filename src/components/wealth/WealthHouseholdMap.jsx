import React from 'react';
import { Users, Shield, Link2, ExternalLink, Network, Building2 } from 'lucide-react';
import { canViewSensitive } from '../../utils/securityUtils';

export default function WealthHouseholdMap({ customer, role }) {
  if (!customer || !customer.hierarchy) return null;

  const { hierarchy } = customer;
  const formatRM = (val) => new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR', minimumFractionDigits: 0 }).format(val);

  return (
    <div className="p-6 space-y-6">
      {/* Group Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-xl p-5 text-white flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-2 text-indigo-200 mb-2">
            <Users className="w-5 h-5 shrink-0" />
            <span className="font-semibold truncate">{hierarchy.groupName}</span>
          </div>
          <span className="text-2xl lg:text-3xl font-bold truncate">{formatRM(hierarchy.rollUpAum)}</span>
          <span className="text-xs text-indigo-300 mt-1 uppercase tracking-wider truncate">Total Group AUM</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 flex flex-col justify-center min-w-0">
          <span className="text-xs text-zinc-500 mb-1 truncate">Total Assets (Dep + Inv)</span>
          <span className="text-lg lg:text-xl font-bold text-emerald-600 truncate">
            {formatRM(hierarchy.totalDeposits + hierarchy.totalInvestments)}
          </span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 flex flex-col justify-center min-w-0">
          <span className="text-xs text-zinc-500 mb-1 truncate">Total Liabilities</span>
          <span className="text-lg lg:text-xl font-bold text-rose-600 truncate">
            {formatRM(hierarchy.totalLiabilities)}
          </span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 flex flex-col justify-center">
          <span className="text-xs text-zinc-500 mb-1">Relationship Strength</span>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-zinc-900">{hierarchy.relationshipStrength}/100</span>
          </div>
        </div>
      </div>

      {/* Household Members */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-zinc-500" />
            <h3 className="font-bold text-zinc-900">Household & Related Parties</h3>
          </div>
          <span className="text-xs font-semibold text-zinc-500">{hierarchy.members.length + 1} Nodes</span>
        </div>
        
        <div className="p-5">
          <div className="relative">
            {/* Main Node (Customer) */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand/10 border-2 border-brand flex items-center justify-center text-brand font-bold text-lg z-10">
                {customer.name.charAt(0)}
              </div>
              <div className="flex-1 bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-zinc-900">{customer.name} (Primary)</h4>
                    <div className="text-sm text-zinc-500 mt-0.5">{hierarchy.influenceLevel}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-zinc-900">{formatRM(customer.aum)}</div>
                    <div className="text-xs text-zinc-500">Individual AUM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="absolute left-6 top-12 bottom-6 w-0.5 bg-zinc-200"></div>

            {/* Related Parties */}
            <div className="space-y-4 pl-12 relative">
              {hierarchy.members.map((member, idx) => {
                const isRestricted = member.confidential && !canViewSensitive(role);

                return (
                  <div key={idx} className="relative flex items-center gap-4">
                    {/* Branch Line */}
                    <div className="absolute -left-12 top-1/2 w-12 h-0.5 bg-zinc-200"></div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-sm border-2 ${
                      member.role === 'Corporate' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-white text-zinc-600 border-zinc-200'
                    }`}>
                      {member.role === 'Corporate' ? <Building2 className="w-4 h-4" /> : <UserIcon name={member.name} />}
                    </div>
                    
                    <div className="flex-1 bg-white p-4 rounded-xl border border-zinc-200 hover:border-brand/30 transition-colors group">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className={`font-bold ${isRestricted ? 'text-zinc-400' : 'text-zinc-900'} group-hover:text-brand transition-colors flex items-center gap-1.5`}>
                              {isRestricted ? 'Confidential Relation' : member.name}
                              {!isRestricted && <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand" />}
                            </h4>
                            {isRestricted && <Shield className="w-3.5 h-3.5 text-zinc-400" />}
                          </div>
                          <div className="text-sm text-zinc-500 mt-0.5 flex items-center gap-2">
                            <span className="font-medium text-zinc-700">{member.role}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Link2 className="w-3 h-3" /> {member.relation}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-bold text-zinc-900">{isRestricted ? '***' : formatRM(member.aum)}</div>
                          <div className="text-xs text-zinc-500">RM: {isRestricted ? '***' : member.pic}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const UserIcon = ({ name }) => {
  if (!name) return <Users className="w-4 h-4" />;
  return <>{name.charAt(0)}</>;
};
