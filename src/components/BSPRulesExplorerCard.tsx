import React from 'react';
import { BSP_ACTIVATION_AGES } from '../lib/bsp/bspActivationAges';

export const BSPRulesExplorerCard: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Bhrigu Saral Paddhati (BSP) Activation Ages</h4>
      <div className="grid grid-cols-3 gap-1.5 text-purple-200">
        {Object.entries(BSP_ACTIVATION_AGES).map(([p, ages]) => (
          <div key={p} className="p-1 bg-purple-950/40 rounded border border-purple-900 text-center">
            <strong className="text-amber-300">{p}:</strong> {ages.join(', ')}y
          </div>
        ))}
      </div>
    </div>
  );
};
