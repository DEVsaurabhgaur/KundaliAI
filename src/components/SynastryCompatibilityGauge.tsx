import React from 'react';

export const SynastryCompatibilityGauge: React.FC<{ score: number; maxScore: number }> = ({ score, maxScore }) => {
  const pct = Math.round((score / maxScore) * 100);
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Vedic Synastry Compatibility</h4>
      <div className="text-purple-200">Score: <strong className="text-amber-300">{score} / {maxScore}</strong> ({pct}%)</div>
      <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
        <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
