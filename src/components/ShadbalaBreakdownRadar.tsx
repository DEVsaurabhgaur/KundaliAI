import React from 'react';
import { TotalShadbala } from '../lib/shadbala/shadbalaSummary';

export const ShadbalaBreakdownRadar: React.FC<{ data: TotalShadbala }> = ({ data }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">{data.planet} Shadbala Profile</h4>
      <div className="text-purple-200">Total: <strong className="text-amber-300">{data.totalRupas} Rupas</strong> ({data.totalVirupas} Virupas)</div>
      <div className={`font-bold mt-1 ${data.isStrong ? 'text-emerald-400' : 'text-amber-400'}`}>
        {data.isStrong ? 'Powerful / Fulfills Threshold' : 'Requires Remedial Uplift'}
      </div>
    </div>
  );
};
