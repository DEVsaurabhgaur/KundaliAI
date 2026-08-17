import React from 'react';
import { FourStepChain } from '../lib/kp/fourStepTheory';

export const KP4StepVisualizer: React.FC<{ chain: FourStepChain }> = ({ chain }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">KP 4-Step Significator Chain</h4>
      <div className="flex items-center gap-1.5 text-purple-200">
        <span className="font-bold text-amber-300">{chain.planet}</span> →
        <span>Star: {chain.starLord}</span> →
        <span>Sub: {chain.subLord}</span> →
        <span>Sub-Sub: {chain.subSubLord}</span>
      </div>
    </div>
  );
};
