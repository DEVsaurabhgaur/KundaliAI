import React from 'react';

export const PersonalYearBadge: React.FC<{ yearNumber: number }> = ({ yearNumber }) => {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-950 rounded-full border border-purple-800 text-xs">
      <span className="text-purple-300">Personal Year:</span>
      <strong className="text-amber-300">#{yearNumber}</strong>
    </div>
  );
};
