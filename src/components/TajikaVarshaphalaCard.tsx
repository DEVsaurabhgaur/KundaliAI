import React from 'react';

export const TajikaVarshaphalaCard: React.FC<{ munthaSign: number; munthesha: string }> = ({ munthaSign, munthesha }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Annual Varshaphala Overview</h4>
      <div>Muntha Sign: <strong className="text-amber-300">Sign #{munthaSign + 1}</strong></div>
      <div>Munthesha Lord: <strong className="text-purple-300">{munthesha}</strong></div>
    </div>
  );
};
