import React from 'react';

export const NumerologyReportCard: React.FC<{ mulank: number; bhagyank: number; namank: number }> = ({
  mulank, bhagyank, namank
}) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 flex justify-around text-center">
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{mulank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Mulank (Root)</div>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{bhagyank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Bhagyank (Destiny)</div>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{namank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Namank (Name)</div>
      </div>
    </div>
  );
};
