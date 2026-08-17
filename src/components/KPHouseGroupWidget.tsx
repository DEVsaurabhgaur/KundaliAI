import React from 'react';

export const KPHouseGroupWidget: React.FC<{ career: boolean; marriage: boolean }> = ({ career, marriage }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-3">KP Event Fulfillment Groupings</h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900">
          <div className="font-semibold text-purple-200">Career (2, 6, 10, 11)</div>
          <div className={`font-bold ${career ? 'text-emerald-400' : 'text-amber-400'}`}>{career ? 'High Fulfillment' : 'Moderate'}</div>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900">
          <div className="font-semibold text-purple-200">Marriage (2, 7, 11)</div>
          <div className={`font-bold ${marriage ? 'text-emerald-400' : 'text-amber-400'}`}>{marriage ? 'High Fulfillment' : 'Moderate'}</div>
        </div>
      </div>
    </div>
  );
};
