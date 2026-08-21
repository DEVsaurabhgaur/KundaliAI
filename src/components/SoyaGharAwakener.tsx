import React from 'react';

export const SoyaGharAwakener: React.FC<{ house: number; isSleeping: boolean }> = ({ house, isSleeping }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs">
      <strong className="text-amber-300">House #{house}:</strong> {isSleeping ? 'Soya Ghar (Dormant)' : 'Active Ghar'}
    </div>
  );
};
