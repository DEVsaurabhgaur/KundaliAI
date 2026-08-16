import React from 'react';
import { KalachakraInfo } from '../lib/dasha/kalachakraDasha';

export const KalachakraWheel: React.FC<{ info: KalachakraInfo }> = ({ info }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Kalachakra Time Wheel</h4>
      <div className="text-purple-200">Deha Rashi: <strong className="text-amber-300">{info.dehaRashi}</strong></div>
      <div className="text-purple-200">Jeeva Rashi: <strong className="text-amber-300">{info.jeevaRashi}</strong></div>
    </div>
  );
};
