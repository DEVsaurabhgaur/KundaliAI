import React from 'react';

export const Muhurta21MahadoshaChecker: React.FC<{ activeDoshas: string[] }> = ({ activeDoshas }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">21 Mahadoshas Filter</h4>
      {activeDoshas.length === 0 ? (
        <div className="text-emerald-400 font-semibold">✨ Pure Muhurta: 0 Mahadoshas Detected</div>
      ) : (
        <div className="text-rose-400">
          <strong>Caution:</strong> {activeDoshas.join(', ')}
        </div>
      )}
    </div>
  );
};
