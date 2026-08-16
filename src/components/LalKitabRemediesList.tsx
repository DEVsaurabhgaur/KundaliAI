import React from 'react';

export const LalKitabRemediesList: React.FC<{ remedies: { planet: string; house: number; remedy: string }[] }> = ({
  remedies
}) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Lal Kitab Symbolic Upayas</h4>
      <div className="space-y-2">
        {remedies.map(r => (
          <div key={r.planet} className="p-2.5 bg-purple-950/40 rounded-xl border border-purple-900/50 text-xs">
            <div className="font-bold text-amber-300">{r.planet} in House {r.house}</div>
            <div className="text-purple-200">{r.remedy}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
