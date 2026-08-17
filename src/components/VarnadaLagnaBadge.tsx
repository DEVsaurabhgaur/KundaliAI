import React from 'react';

export const VarnadaLagnaBadge: React.FC<{ signIdx: number }> = ({ signIdx }) => {
  return (
    <div className="px-3 py-1 bg-purple-950/60 rounded border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">VL:</strong> Sign #{signIdx + 1}
    </div>
  );
};
