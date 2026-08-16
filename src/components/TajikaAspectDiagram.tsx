import React from 'react';
import { TajikaAspectResult } from '../lib/prashna/tajikaAspects';

export const TajikaAspectDiagram: React.FC<{ aspect: TajikaAspectResult }> = ({ aspect }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Tajika Aspect Geometry</h4>
      <div className="text-purple-200">Aspect Form: <strong className="text-amber-300">{aspect.type}</strong> ({aspect.orbDegrees}° orb)</div>
    </div>
  );
};
