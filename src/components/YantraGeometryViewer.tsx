import React from 'react';
import { SURYA_YANTRA_GRID } from '../lib/remedies/navagrahaYantras';

export const YantraGeometryViewer: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-center">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Surya Navagraha Yantra Grid</h4>
      <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
        {SURYA_YANTRA_GRID.flat().map((num, i) => (
          <div key={i} className="p-2 bg-purple-950 rounded border border-purple-800 text-amber-300 font-bold">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
