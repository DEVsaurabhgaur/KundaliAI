import React from 'react';

export const DigBalaCompass: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200 text-center">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Dig Bala (Directional Compass)</h4>
      <p>East (1st: Jupiter/Mercury) | South (10th: Sun/Mars) | West (7th: Saturn) | North (4th: Moon/Venus)</p>
    </div>
  );
};
