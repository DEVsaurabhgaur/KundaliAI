import React from 'react';

export const TajikaYogaBadge: React.FC<{ yogaName: string }> = ({ yogaName }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
      ⚡ {yogaName}
    </span>
  );
};
