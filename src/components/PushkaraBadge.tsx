import React from 'react';

export const PushkaraBadge: React.FC<{ isPushkara: boolean }> = ({ isPushkara }) => {
  if (!isPushkara) return null;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
      ✨ Pushkara Navamsha
    </span>
  );
};
