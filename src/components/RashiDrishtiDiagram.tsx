import React from 'react';

export const RashiDrishtiDiagram: React.FC<{ aspectedSigns: number[] }> = ({ aspectedSigns }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Jaimini Rashi Drishti (Sign Aspects)</h4>
      <div className="flex gap-2">
        {aspectedSigns.map(s => (
          <span key={s} className="px-2 py-1 bg-purple-950/60 rounded border border-purple-800 text-amber-300 font-semibold">
            Sign #{s + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
