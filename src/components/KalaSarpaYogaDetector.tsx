import React from 'react';

export const KalaSarpaYogaDetector: React.FC<{ yogaType: string; isCancelled: boolean }> = ({ yogaType, isCancelled }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{yogaType}</h4>
      <div className={isCancelled ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
        {isCancelled ? '✨ Kala Sarpa Yoga Cancelled (Mitigated by Classical Bhanga Exception)' : '⚠️ Full Unbroken Kala Sarpa Axis'}
      </div>
    </div>
  );
};
