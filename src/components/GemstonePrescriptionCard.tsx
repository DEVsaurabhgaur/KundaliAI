import React from 'react';

export const GemstonePrescriptionCard: React.FC<{ gem: string; metal: string; finger: string }> = ({ gem, metal, finger }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Prescribed Gemstone (Ratna)</h4>
      <div>Primary Stone: <strong className="text-amber-300">{gem}</strong></div>
      <div>Metal: <strong>{metal}</strong> | Finger: <strong>{finger}</strong></div>
    </div>
  );
};
