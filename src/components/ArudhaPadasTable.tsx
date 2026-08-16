import React from 'react';

export const ArudhaPadasTable: React.FC<{ padas: number[] }> = ({ padas }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Arudha Padas (A1 - A12)</h4>
      <div className="grid grid-cols-4 gap-2">
        {padas.map((signIdx, idx) => (
          <div key={idx} className="p-2 bg-purple-950/40 rounded border border-purple-900/50 text-center">
            <div className="font-bold text-amber-300">A{idx + 1}</div>
            <div className="text-[10px] text-purple-200">Sign #{signIdx + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
