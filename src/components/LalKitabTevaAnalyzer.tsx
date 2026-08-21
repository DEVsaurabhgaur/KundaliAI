import React from 'react';

export const LalKitabTevaAnalyzer: React.FC<{ classification: string }> = ({ classification }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Lal Kitab Horoscope Classification</h4>
      <div className="font-semibold text-emerald-400">{classification}</div>
    </div>
  );
};
