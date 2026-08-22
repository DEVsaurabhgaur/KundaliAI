import React from 'react';
import { KURMA_SECTORS } from '../lib/medini/kurmaChakra';

export const KurmaChakraMundaneMap: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kurma Chakra Mundane Geography</h4>
      <div className="grid grid-cols-3 gap-1.5 text-purple-200">
        {Object.entries(KURMA_SECTORS).map(([sec, stars]) => (
          <div key={sec} className="p-1 bg-purple-950/40 rounded border border-purple-900 text-center">
            <strong className="text-amber-300">{sec}:</strong> <span className="text-[10px] text-purple-300">{stars[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
