import React from 'react';

export const SthiraDashaTimeline: React.FC<{ timeline: { signIndex: number; durationYears: number }[] }> = ({ timeline }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Jaimini Sthira Dasha (96-Yr Cycle)</h4>
      <div className="flex flex-wrap gap-1.5 text-purple-200">
        {timeline.map((item, idx) => (
          <span key={idx} className="px-2 py-0.5 bg-purple-950/60 rounded border border-purple-800">
            Sign #{item.signIndex + 1} ({item.durationYears}y)
          </span>
        ))}
      </div>
    </div>
  );
};
