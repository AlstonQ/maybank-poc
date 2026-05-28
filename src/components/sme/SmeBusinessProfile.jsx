import React from 'react';
import { Building2, MapPin, Globe, Users, FileText, ShoppingCart, Truck } from 'lucide-react';

const SmeBusinessProfile = ({ customer }) => {
  if (!customer) return null;

  return (
    <div className="space-y-6">
      {/* Top Row: Key Info & Address */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Corporate Details */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            Corporate Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-zinc-500 mb-1">Legal Name</div>
              <div className="text-sm font-medium text-zinc-900">{customer.name}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Trading Name</div>
              <div className="text-sm font-medium text-zinc-900">{customer.tradingName || '-'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Registration No. (BRN)</div>
              <div className="text-sm font-medium text-zinc-900">{customer.brn}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">SST Registration</div>
              <div className="text-sm font-medium text-zinc-900">{customer.sstRegistration || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Date of Incorporation</div>
              <div className="text-sm font-medium text-zinc-900">{customer.incorporationDate}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Business Type</div>
              <div className="text-sm font-medium text-zinc-900">{customer.businessType || '-'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">MCC Code</div>
              <div className="text-sm font-medium text-zinc-900">{customer.mccCode || '-'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Lifecycle Stage</div>
              <div className="text-sm font-medium text-zinc-900">{customer.lifecycleStage || '-'}</div>
            </div>
          </div>
        </div>

        {/* Operational Footprint */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Operational Footprint
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Registered Address
              </div>
              <div className="text-sm text-zinc-900">{customer.registeredAddress}</div>
            </div>
            <div className="pt-2 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Operating Address
              </div>
              <div className="text-sm text-zinc-900">{customer.operatingAddress || customer.registeredAddress}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-100">
              <div>
                <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Total Employees
                </div>
                <div className="text-sm font-medium text-zinc-900">{customer.employeesCount || 0}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> No. of Outlets
                </div>
                <div className="text-sm font-medium text-zinc-900">{customer.outletsCount || 0}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supply Chain & Digital */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Digital & E-commerce */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            Digital Presence
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-zinc-500 mb-1">Company Website</div>
              <div className="text-sm text-blue-600 hover:underline cursor-pointer">{customer.website || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-2">E-Commerce Channels</div>
              <div className="flex flex-wrap gap-2">
                {customer.ecommerceChannels?.length > 0 && customer.ecommerceChannels[0] !== 'None' ? (
                  customer.ecommerceChannels.map((channel, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                      {channel}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-zinc-500">No major e-commerce presence</span>
                )}
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-2">Maybank Source Systems</div>
              <div className="flex flex-wrap gap-2">
                {customer.sourceSystems?.map((sys, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Suppliers */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-600" />
            Key Suppliers & Imports
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-zinc-500 mb-2">Major Domestic Suppliers</div>
              <ul className="space-y-2">
                {customer.keySuppliers?.length > 0 ? (
                  customer.keySuppliers.map((supplier, i) => (
                    <li key={i} className="text-sm text-zinc-900 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-1.5"></div>
                      {supplier}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-zinc-500">Not disclosed</li>
                )}
              </ul>
            </div>
            <div className="pt-2 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-2">Import/Export Countries</div>
              <div className="flex flex-wrap gap-2">
                {customer.importExportCountries?.length > 0 && customer.importExportCountries[0] !== 'None' ? (
                  customer.importExportCountries.map((country, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                      {country}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-zinc-500">Domestic Only</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key Buyers */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-blue-600" />
            Key Buyers & Demographics
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-zinc-500 mb-2">Major Customer Segments</div>
              <ul className="space-y-2">
                {customer.keyBuyers?.length > 0 ? (
                  customer.keyBuyers.map((buyer, i) => (
                    <li key={i} className="text-sm text-zinc-900 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-1.5"></div>
                      {buyer}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-zinc-500">Not disclosed</li>
                )}
              </ul>
            </div>
            <div className="pt-2 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 mb-2">Primary States of Operation</div>
              <div className="flex flex-wrap gap-2">
                {customer.primaryStates?.map((state, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmeBusinessProfile;
