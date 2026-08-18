import React from 'react';
import { NADI_DIRECTIONS } from '../lib/nadi/directionalTrines';

export const BhriguNandiMatrix: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Nadi 4-Directional Trines</h4>
      <div className="grid grid-cols-2 gap-2 text-purple-200">
        {Object.entries(NADI_DIRECTIONS).map(([dir, signs]) => (
          <div key={dir} className="p-2 bg-purple-950/40 rounded border border-purple-900">
            <strong className="text-amber-300">{dir}:</strong> Signs {signs.map(s => s + 1).join(', ')}
          </div>
        ))}
      </div>
    </div>
  );
};
