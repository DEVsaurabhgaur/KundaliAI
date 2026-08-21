import React from 'react';

export const NimittaShastraOmenViewer: React.FC<{ interpretation: string; isAuspicious: boolean }> = ({ interpretation, isAuspicious }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Nimitta Shastra Omen Prognostication</h4>
      <div className={isAuspicious ? 'text-emerald-400' : 'text-amber-400'}>{interpretation}</div>
    </div>
  );
};
