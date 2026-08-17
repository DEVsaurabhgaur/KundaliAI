import React from 'react';

export const SankrantiAlertBanner: React.FC<{ sankrantiName: string }> = ({ sankrantiName }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">Solar Ingress:</strong> {sankrantiName} is active.
    </div>
  );
};
