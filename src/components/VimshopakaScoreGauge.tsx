import React from 'react';
import { VimshopakaScore } from '../lib/vargas/vimshopakaBala';

export const VimshopakaScoreGauge: React.FC<{ score: VimshopakaScore }> = ({ score }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-center">
      <h4 className="text-amber-400 font-bold text-xs uppercase mb-1">Vimshopaka Bala (Max 20)</h4>
      <div className="text-3xl font-extrabold text-amber-300">{score.totalVimshopakaPoints} / 20</div>
      <div className="text-xs text-purple-300">{score.percentage}% Strength Rating</div>
    </div>
  );
};
