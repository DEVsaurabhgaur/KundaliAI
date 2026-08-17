import React from 'react';
import { ShaniTransitStatus } from '../lib/gochara/sadeSatiPhases';

export const SadeSatiPhaseMeter: React.FC<{ status: ShaniTransitStatus }> = ({ status }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Saturn Sade Sati & Dhaiya Barometer</h4>
      <div className="text-purple-200">Current Phase: <strong className="text-amber-300">{status.phase}</strong></div>
      <div className="text-[11px] text-purple-400 mt-1">Ashtama Shani: {status.isAshtamaShani ? 'Active' : 'Inactive'}</div>
    </div>
  );
};
