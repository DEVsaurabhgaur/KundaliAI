import React from 'react';

export const AngaSphuranaIndicator: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-400">Anga Sphurana:</strong> {message}
    </div>
  );
};
