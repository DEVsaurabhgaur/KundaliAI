import React from 'react';

export const KCDGatiJumpAlert: React.FC<{ jumpInfo: string }> = ({ jumpInfo }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">KCD Gati:</strong> {jumpInfo}
    </div>
  );
};
