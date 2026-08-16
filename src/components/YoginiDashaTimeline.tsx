import React from 'react';
import { YoginiPeriod } from '../lib/dasha/yoginiDasha';

export const YoginiDashaTimeline: React.FC<{ periods: YoginiPeriod[] }> = ({ periods }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h3 className="text-amber-400 font-bold text-sm mb-3">Yogini Dasha Timeline (36-Year Cycle)</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {periods.map(p => (
          <div key={p.name} className="p-3 bg-purple-950/40 rounded-xl border border-purple-900/50">
            <div className="text-xs font-bold text-amber-300">{p.name} ({p.rulingPlanet})</div>
            <div className="text-[11px] text-purple-200">{p.startYear} - {p.endYear}</div>
            <div className="text-[10px] text-purple-400">{p.durationYears} Years • {p.nature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
