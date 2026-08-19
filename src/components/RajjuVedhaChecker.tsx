import React from 'react';

export const RajjuVedhaChecker: React.FC<{ isCompatible: boolean; verdict: string }> = ({ isCompatible, verdict }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Rajju & Vedha Koota Status</h4>
      <div className={`font-semibold ${isCompatible ? 'text-emerald-400' : 'text-amber-400'}`}>{verdict}</div>
    </div>
  );
};
