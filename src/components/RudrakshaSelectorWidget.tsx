import React from 'react';

export const RudrakshaSelectorWidget: React.FC<{ mukhi: number; deity: string; mantra: string }> = ({ mukhi, deity, mantra }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{mukhi} Mukhi Sacred Rudraksha</h4>
      <div>Ruling Deity: <strong className="text-amber-300">{deity}</strong></div>
      <div className="text-[11px] text-purple-300 mt-1">Beej Mantra: <em>{mantra}</em></div>
    </div>
  );
};
