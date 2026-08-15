import React from 'react';

export interface SynastryChartProps {
  partnerAName: string;
  partnerBName: string;
  score: number;
}

export const SynastryOverlayChart: React.FC<SynastryChartProps> = ({
  partnerAName,
  partnerBName,
  score
}) => {
  return (
    <div className="p-5 bg-slate-950/80 rounded-2xl border border-amber-500/30 text-center shadow-xl">
      <h3 className="text-lg font-bold text-amber-300 mb-1">
        Cosmic Synastry Overlay
      </h3>
      <p className="text-xs text-purple-300 mb-4">
        {partnerAName} & {partnerBName}
      </p>
      <div className="relative inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-dashed border-amber-400/40 bg-purple-950/40">
        <div className="text-center">
          <div className="text-3xl font-extrabold text-amber-400">{score}%</div>
          <div className="text-[10px] uppercase text-purple-300 tracking-wider">Harmony</div>
        </div>
      </div>
    </div>
  );
};
