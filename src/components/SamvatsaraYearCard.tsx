import React from 'react';

export const SamvatsaraYearCard: React.FC<{ samvatsara: string }> = ({ samvatsara }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-400">Jovian Year:</strong> {samvatsara} Samvatsara
    </div>
  );
};
