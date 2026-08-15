import React from 'react';
import { GemstoneRecommendation } from '../lib/gemstones';

export interface GemstoneCardProps {
  gem: GemstoneRecommendation;
}

export const GemstoneCard: React.FC<GemstoneCardProps> = ({ gem }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl border border-purple-700/40 shadow-md hover:border-amber-400/50 transition-all">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-amber-300 font-bold text-base">{gem.primaryGem} ({gem.sanskritName})</h4>
          <p className="text-xs text-purple-300">Ruling Planet: {gem.planet}</p>
        </div>
        <span className="text-[10px] bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded-full border border-purple-500/30">
          {gem.metal}
        </span>
      </div>
      <p className="text-xs text-slate-300 mb-3 line-clamp-2">{gem.benefits}</p>
      <div className="text-[11px] text-amber-200/80 bg-purple-950/40 p-2 rounded border border-purple-900/50">
        Wear on <strong>{gem.fingerToWear}</strong> on <strong>{gem.auspiciousDay}</strong>.
      </div>
    </div>
  );
};
