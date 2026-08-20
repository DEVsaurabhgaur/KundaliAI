import React from 'react';

export const NameSpellingOptimizer: React.FC<{ original: string; recommendation: string }> = ({ original, recommendation }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Chaldean Name Vibration Optimizer</h4>
      <div>Analyzed Name: <strong className="text-amber-300">{original}</strong></div>
      <div className="text-purple-300 mt-1">{recommendation}</div>
    </div>
  );
};
