import React from 'react';

export const LoShuMagicSquare: React.FC<{ counts: Record<number, number> }> = ({ counts }) => {
  const grid = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-center">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Lo Shu Magic Square</h4>
      <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
        {grid.flat().map(num => (
          <div key={num} className="p-2 bg-purple-950 rounded border border-purple-800 text-amber-300 font-bold">
            {counts[num] > 0 ? num : '-'}
          </div>
        ))}
      </div>
    </div>
  );
};
