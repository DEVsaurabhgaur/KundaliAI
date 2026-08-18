import React from 'react';

export const CharaDashaTreeWidget: React.FC<{ sequence: number[] }> = ({ sequence }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Jaimini Chara Dasha Sequence</h4>
      <div className="flex flex-wrap gap-1.5">
        {sequence.map((s, idx) => (
          <span key={idx} className="px-2.5 py-1 bg-purple-950/60 rounded border border-purple-800 text-purple-200">
            Sign #{s + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
