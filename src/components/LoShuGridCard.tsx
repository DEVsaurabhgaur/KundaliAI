import React from 'react';

export const LoShuGridCard: React.FC<{ grid: number[][] }> = ({ grid }) => {
  return (
    <div className="p-4 bg-slate-950/80 rounded-2xl border border-amber-500/30 text-center">
      <h4 className="text-amber-300 font-bold text-sm mb-3">Lo Shu Magic Square</h4>
      <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
        {grid.flat().map((val, idx) => (
          <div key={idx} className="h-14 flex items-center justify-center rounded-lg bg-purple-950/60 border border-purple-700/50 text-amber-300 font-bold text-base">
            {val > 0 ? Array(val).fill(idx + 1).join('') : '-'}
          </div>
        ))}
      </div>
    </div>
  );
};
