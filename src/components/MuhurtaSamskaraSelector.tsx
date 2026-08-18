import React from 'react';
import { VEDIC_SAMSKARAS } from '../lib/muhurta/samskaraMuhurtas';

export const MuhurtaSamskaraSelector: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">16 Vedic Samskaras Muhurta Selector</h4>
      <div className="flex flex-wrap gap-1.5">
        {VEDIC_SAMSKARAS.map(s => (
          <span key={s} className="px-2 py-0.5 bg-purple-950/60 rounded border border-purple-800 text-[11px] text-purple-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};
