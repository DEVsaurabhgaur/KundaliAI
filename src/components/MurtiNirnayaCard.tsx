import React from 'react';

export const MurtiNirnayaCard: React.FC<{ murti: string; quality: string }> = ({ murti, quality }) => {
  return (
    <div className="p-3 bg-slate-950/70 rounded-xl border border-purple-800 text-xs">
      <div className="text-amber-300 font-bold">Transit Vessel: {murti}</div>
      <div className="text-purple-200">{quality}</div>
    </div>
  );
};
