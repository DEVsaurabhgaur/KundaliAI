import React from 'react';
import { KotaStatus } from '../lib/kotaChakra';

export const KotaChakraVisualizer: React.FC<{ status: KotaStatus }> = ({ status }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kota Chakra Defense Meter</h4>
      <div className="text-xs text-purple-200 mb-2">Fortress Safety Index: <strong className="text-amber-300">{status.fortressSafetyIndex}%</strong></div>
      <div className="text-[11px] text-purple-300">Stambha Occupants: {status.stambhaOccupants.join(', ') || 'None (Safe)'}</div>
    </div>
  );
};
