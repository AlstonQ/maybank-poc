import React from 'react';

export default function DashboardGrid({ kpiCards = [], charts = [], dataTables = [] }) {
  return (
    <div className="space-y-6">
      {/* KPIs Row */}
      {kpiCards.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((card, index) => (
            <div key={index}>
              {card}
            </div>
          ))}
        </div>
      )}

      {/* Main Charts Area */}
      {charts.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {charts.map((chart, index) => {
            const isFullWidth = chart.props?.fullWidth;
            return (
              <div key={index} className={isFullWidth ? 'lg:col-span-2' : ''}>
                {chart}
              </div>
            );
          })}
        </div>
      )}

      {/* Data Tables Area */}
      {dataTables.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {dataTables.map((table, index) => (
            <div key={index}>
              {table}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
