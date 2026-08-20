import React from 'react';

export const PrashnaQueryCard: React.FC<{ siddhiResult: string }> = ({ siddhiResult }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Horary Prashna Assessment</h4>
      <div className="font-semibold text-emerald-400 mt-1">{siddhiResult}</div>
    </div>
  );
};
