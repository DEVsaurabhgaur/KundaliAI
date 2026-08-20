import React from 'react';
import { ASHTA_DIKPALAS } from '../lib/vastu/ashtaDikpalas';

export const VastuDirectionalCompass: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Ashta Dikpala Vastu Grid</h4>
      <div className="grid grid-cols-2 gap-2 text-purple-200">
        {Object.entries(ASHTA_DIKPALAS).map(([dir, info]) => (
          <div key={dir} className="p-1.5 bg-purple-950/40 rounded border border-purple-900">
            <strong className="text-amber-300">{dir}:</strong> {info.deity} ({info.planet})
          </div>
        ))}
      </div>
    </div>
  );
};
