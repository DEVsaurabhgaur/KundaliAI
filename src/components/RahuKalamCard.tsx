import React from 'react';

export const RahuKalamCard: React.FC<{ segment: number }> = ({ segment }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-rose-400">Rahu Kalam:</strong> Active during segment #{segment} of daylight.
    </div>
  );
};
