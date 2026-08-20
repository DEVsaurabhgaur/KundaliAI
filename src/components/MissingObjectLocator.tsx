import React from 'react';

export const MissingObjectLocator: React.FC<{ location: string; advice: string }> = ({ location, advice }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Lost Article (Nashta Vashtu) Locator</h4>
      <div>Direction: <strong className="text-amber-300">{location}</strong></div>
      <div className="text-purple-300 text-[11px] mt-1">{advice}</div>
    </div>
  );
};
