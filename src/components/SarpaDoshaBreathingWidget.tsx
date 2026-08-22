import React from 'react';

export const SarpaDoshaBreathingWidget: React.FC<{ pranayama: string; duration: number }> = ({ pranayama, duration }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Restorative Sarpa Shanti Pranayama</h4>
      <div>Technique: <strong className="text-amber-300">{pranayama}</strong> ({duration} mins)</div>
    </div>
  );
};
