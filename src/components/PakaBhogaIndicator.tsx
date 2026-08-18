import React from 'react';

export const PakaBhogaIndicator: React.FC<{ paka: number; bhoga: number }> = ({ paka, bhoga }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <div>Paka Rashi (Action Energy): <strong className="text-amber-300">Sign #{paka + 1}</strong></div>
      <div>Bhoga Rashi (Material Fruition): <strong className="text-purple-300">Sign #{bhoga + 1}</strong></div>
    </div>
  );
};
