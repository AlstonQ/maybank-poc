import React from 'react';
import { Users, UserPlus, Network, Building, ShieldCheck, HelpCircle, Activity } from 'lucide-react';

const SmeRelationshipMap = ({ customer }) => {
  if (!customer) return null;

  const { hierarchy } = customer;

  const getStrengthColor = (score) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 50) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  const getStrengthLabel = (score) => {
    if (score >= 80) return 'Strong';
    if (score >= 50) return 'Developing';
    return 'Weak / At Risk';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Group Info & Strength */}
      <div className="lg:col-span-1 space-y-6">
        
        {/* Intapp-style Relationship Intelligence */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Network className="w-24 h-24" />
          </div>
          
          <h3 className="text-sm font-semibold text-zinc-900 mb-6 flex items-center gap-2 relative z-10">
            <Activity className="w-4 h-4 text-blue-600" />
            Relationship Intelligence
          </h3>
          
          <div className="relative z-10 space-y-6">
            <div>
              <div className="text-xs text-zinc-500 mb-2">Relationship Strength Score</div>
              <div className="flex items-end gap-3">
                <div className="text-4xl font-bold text-zinc-900 leading-none">
                  {hierarchy?.relationshipStrengthScore || 0}
                </div>
                <div className={`inline-flex px-2 py-1 rounded text-xs font-semibold border ${getStrengthColor(hierarchy?.relationshipStrengthScore)} mb-1`}>
                  {getStrengthLabel(hierarchy?.relationshipStrengthScore)}
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-2">Coverage Momentum</div>
              <div className="text-sm font-medium text-zinc-900">{hierarchy?.momentum || 'N/A'}</div>
            </div>
            
            <div className="pt-4 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-2">Last Meaningful Contact</div>
              <div className="text-sm font-medium text-zinc-900">{hierarchy?.lastContactDate || 'No record'}</div>
            </div>
            
            <div className="pt-4 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-2">Coverage Team</div>
              <div className="space-y-3">
                {hierarchy?.coverageTeam?.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-zinc-900">{member.name}</div>
                      <div className="text-xs text-zinc-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Structure & Individuals */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-zinc-200 flex justify-between items-center bg-zinc-50/50">
          <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            Ownership & Key Individuals
          </h3>
          <span className="text-xs font-medium bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200">
            Group: {hierarchy?.groupName}
          </span>
        </div>
        
        <div className="flex-1 p-6">
          {hierarchy?.members?.length > 0 ? (
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent">
              {hierarchy.members.map((member, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900">{member.name}</h4>
                        <div className="text-xs font-medium text-blue-600">{member.role}</div>
                      </div>
                      {member.pepStatus !== 'None' && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700">
                          PEP
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-3 grid grid-cols-2 gap-2 gap-y-3">
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Relation</div>
                        <div className="text-xs font-medium text-zinc-900">{member.relation}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">CIF</div>
                        <div className="text-xs font-medium text-zinc-900">{member.cif}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">System Access</div>
                        <div className="text-xs font-medium text-zinc-900">{member.accessLevel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Mandate</div>
                        <div className="text-xs font-medium text-zinc-900">{member.mandate}</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-zinc-100 flex gap-2">
                      <button className="flex-1 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded-md transition-colors text-center">
                        View 360
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Building className="w-12 h-12 text-zinc-300 mb-4" />
              <div className="text-sm font-medium text-zinc-900">No ownership hierarchy defined</div>
              <div className="text-xs text-zinc-500 mt-1 max-w-sm">
                This profile does not have connected individuals, directors, or guarantors mapped in the system.
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SmeRelationshipMap;
