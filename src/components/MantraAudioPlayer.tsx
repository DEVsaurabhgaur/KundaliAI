import React, { useState } from 'react';
import { useSoundEffects } from '../hooks/useSoundEffects';

export interface MantraPlayerProps {
  planet: string;
  mantraText: string;
  recommendedCount: number;
}

export const MantraAudioPlayer: React.FC<MantraPlayerProps> = ({
  planet,
  mantraText,
  recommendedCount
}) => {
  const [chantCount, setChantCount] = useState(0);
  const { playCosmicChime } = useSoundEffects();

  const handleJapa = () => {
    setChantCount(prev => prev + 1);
    playCosmicChime();
  };

  return (
    <div className="p-4 bg-purple-950/50 rounded-xl border border-purple-800/40 text-center">
      <h5 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
        {planet} Beej Mantra Japa Ticker
      </h5>
      <blockquote className="italic text-sm text-purple-100 font-serif my-2 bg-slate-900/60 p-3 rounded-lg border border-purple-900/50">
        "{mantraText}"
      </blockquote>
      <div className="flex items-center justify-center gap-4 mt-3">
        <button
          type="button"
          onClick={handleJapa}
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-lg text-sm shadow hover:scale-105 transition-all"
        >
          Count Japa (+1)
        </button>
        <div className="text-xs text-purple-200">
          Chants: <strong className="text-amber-300 text-base">{chantCount}</strong> / {recommendedCount}
        </div>
      </div>
    </div>
  );
};
