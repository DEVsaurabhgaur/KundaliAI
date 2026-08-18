import React from 'react';

export const NadiDirectionBadge: React.FC<{ dir: string }> = ({ dir }) => {
  return (
    <span className="px-2 py-0.5 bg-purple-950/60 rounded border border-purple-800 text-xs text-amber-300 font-bold">
      Direction: {dir}
    </span>
  );
};
