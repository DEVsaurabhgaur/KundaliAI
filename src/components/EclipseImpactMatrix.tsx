import React from 'react';

export const EclipseImpactMatrix: React.FC<{ impact: string }> = ({ impact }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">Mundane Eclipse Echo:</strong> {impact}
    </div>
  );
};
