import React from 'react';

export const KujaDoshaCancellationCard: React.FC<{ isCancelled: boolean }> = ({ isCancelled }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Kuja Dosha (Manglik) Assessment</h4>
      <div className={`font-bold ${isCancelled ? 'text-emerald-400' : 'text-amber-400'}`}>
        {isCancelled ? '✨ Kuja Dosha Cancelled (Mitigated by Classical Exception)' : '⚠️ Active Manglik Placement'}
      </div>
    </div>
  );
};
