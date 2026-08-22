import React from 'react';

export const StambhanaStationCard: React.FC<{ isStationing: boolean }> = ({ isStationing }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs">
      <strong className={isStationing ? 'text-amber-400' : 'text-emerald-400'}>
        {isStationing ? '⚡ Stambhana Alert: Planetary Stationary Energy Crystallization' : '✨ Planetary Motion In Regular Motion'}
      </strong>
    </div>
  );
};
