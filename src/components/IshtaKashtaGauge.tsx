import React from 'react';

export const IshtaKashtaGauge: React.FC<{ ishta: number; kashta: number }> = ({ ishta, kashta }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Planetary Fruit Balance</h4>
      <div className="flex justify-between text-purple-200">
        <div>Ishta Phala: <strong className="text-emerald-400">{ishta}</strong></div>
        <div>Kashta Phala: <strong className="text-amber-400">{kashta}</strong></div>
      </div>
    </div>
  );
};
