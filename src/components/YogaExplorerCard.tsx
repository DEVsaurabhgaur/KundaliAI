import React from 'react';

export const YogaExplorerCard: React.FC<{ yogaName: string; description: string; isFormed: boolean }> = ({ yogaName, description, isFormed }) => {
  if (!isFormed) return null;
  return (
    <div className="p-3 bg-purple-950/50 rounded-xl border border-amber-500/30 text-xs">
      <h5 className="font-bold text-amber-300 mb-1">{yogaName}</h5>
      <p className="text-purple-200">{description}</p>
    </div>
  );
};
