import React from 'react';

export const HoraLagnaBadge: React.FC<{ deg: number }> = ({ deg }) => {
  return (
    <div className="px-3 py-1 bg-purple-950/60 rounded border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">HL:</strong> {deg}°
    </div>
  );
};
