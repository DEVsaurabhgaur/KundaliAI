import React from 'react';
import { BHAVA_ORGANS } from '../lib/medical/bhavaOrganMapping';

export const MedicalOrganPathologyMap: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">12 Bhava Anatomical Topology</h4>
      <div className="grid grid-cols-2 gap-2 text-purple-200">
        {Object.entries(BHAVA_ORGANS).slice(0, 6).map(([h, desc]) => (
          <div key={h} className="p-1.5 bg-purple-950/40 rounded border border-purple-900">
            <strong className="text-amber-300">House #{h}:</strong> {desc}
          </div>
        ))}
      </div>
    </div>
  );
};
