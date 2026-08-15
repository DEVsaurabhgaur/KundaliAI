import React from 'react';
import { useChoghadiyaClock } from '../hooks/useChoghadiyaClock';

export const ChoghadiyaClockWidget: React.FC = () => {
  const { slots, currentSlotIndex } = useChoghadiyaClock();

  return (
    <div className="p-4 bg-gradient-to-br from-purple-950/60 to-slate-950/80 rounded-2xl border border-amber-500/30 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-amber-400 font-bold text-sm">Live Choghadiya Dial</h4>
        <span className="text-xs text-purple-300">Auto-refreshing</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {slots.map((s, idx) => {
          const isCurrent = idx === currentSlotIndex;
          return (
            <div
              key={idx}
              className={`p-2.5 rounded-lg text-center transition-all ${
                isCurrent
                  ? 'bg-amber-500 text-slate-950 font-bold ring-2 ring-amber-300 shadow-md scale-105'
                  : s.isAuspicious
                  ? 'bg-emerald-950/40 text-emerald-200 border border-emerald-700/40'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800'
              }`}
            >
              <div className="text-xs font-semibold">{s.name}</div>
              <div className="text-[10px] opacity-80">{s.type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
