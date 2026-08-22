import React from 'react';

export const NagaDoshaRemedyCard: React.FC<{ remedy: string }> = ({ remedy }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Sarpa Shanti Protocol</h4>
      <div>{remedy}</div>
    </div>
  );
};
