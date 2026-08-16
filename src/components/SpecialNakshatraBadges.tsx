import React from 'react';

export const SpecialNakshatraBadges: React.FC<{ points: Record<string, number> }> = ({ points }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Sensitive Nakshatra Nodes</h4>
      <div className="flex flex-wrap gap-2">
        {Object.entries(points).map(([key, nakIdx]) => (
          <div key={key} className="px-2.5 py-1 bg-purple-950/60 rounded-lg border border-purple-800 text-purple-200">
            <strong className="text-amber-300 capitalize">{key}:</strong> Nak #{nakIdx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
