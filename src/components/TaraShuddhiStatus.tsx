import React from 'react';

export const TaraShuddhiStatus: React.FC<{ isPure: boolean }> = ({ isPure }) => {
  return (
    <div className="p-3 bg-slate-950/70 rounded-xl border border-purple-800 text-xs">
      <div className={`font-bold ${isPure ? 'text-emerald-400' : 'text-rose-400'}`}>
        {isPure ? '✨ Tara Shuddhi Confirmed (Guru & Shukra Visible)' : '⚠️ Tara Combustion Active'}
      </div>
    </div>
  );
};
