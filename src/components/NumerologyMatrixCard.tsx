import React from 'react';

export const NumerologyMatrixCard: React.FC<{ mulank: number; bhagyank: number; namank: number }> = ({ mulank, bhagyank, namank }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Vedic Numerology Core Triad</h4>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900">
          <div>Mulank (Root)</div>
          <strong className="text-amber-300 text-base">{mulank}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900">
          <div>Bhagyank (Destiny)</div>
          <strong className="text-emerald-400 text-base">{bhagyank}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900">
          <div>Namank (Name)</div>
          <strong className="text-amber-300 text-base">{namank}</strong>
        </div>
      </div>
    </div>
  );
};
