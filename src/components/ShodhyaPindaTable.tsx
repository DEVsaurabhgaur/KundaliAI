import React from 'react';

export const ShodhyaPindaTable: React.FC<{ rashi: number; graha: number; total: number }> = ({ rashi, graha, total }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Ashtakavarga Shodhya Pinda</h4>
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Rashi Pinda</div>
          <strong className="text-amber-300">{rashi}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Graha Pinda</div>
          <strong className="text-amber-300">{graha}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Total Pinda</div>
          <strong className="text-emerald-400">{total}</strong>
        </div>
      </div>
    </div>
  );
};
