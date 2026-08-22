import React from 'react';

export const KalachakraDashaTree: React.FC<{ dehaSign: number; jeevaSign: number; isSavya: boolean }> = ({ dehaSign, jeevaSign, isSavya }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kalachakra Dasha (KCD) Core Anchor</h4>
      <div className="flex gap-4">
        <div>Cycle Type: <strong className="text-amber-300">{isSavya ? 'Savya (Direct)' : 'Apasavya (Indirect)'}</strong></div>
        <div>Deha (Body): <strong className="text-emerald-400">Sign #{dehaSign + 1}</strong></div>
        <div>Jeeva (Soul): <strong className="text-amber-300">Sign #{jeevaSign + 1}</strong></div>
      </div>
    </div>
  );
};
