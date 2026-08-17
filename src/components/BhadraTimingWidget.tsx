import React from 'react';
import { BhadraAnalysis } from '../lib/panchang/bhadraTimings';

export const BhadraTimingWidget: React.FC<{ bhadra: BhadraAnalysis }> = ({ bhadra }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Vishti Bhadra Real-Time Status</h4>
      <div className="text-purple-200">Bhadra Location (Vas): <strong className="text-amber-300">{bhadra.bhadraVas}</strong></div>
      <div className="text-[11px] text-purple-300 mt-1">{bhadra.bhadraPuchhaWindow}</div>
    </div>
  );
};
