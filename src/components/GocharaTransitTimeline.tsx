import React from 'react';

export const GocharaTransitTimeline: React.FC<{ transits: { planet: string; house: number; isBenefic: boolean }[] }> = ({ transits }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Gochara Transit Status (from Moon)</h4>
      <div className="grid grid-cols-3 gap-2">
        {transits.map(t => (
          <div key={t.planet} className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
            <div className="font-bold text-amber-300">{t.planet} in House {t.house}</div>
            <div className={`text-[10px] font-semibold ${t.isBenefic ? 'text-emerald-400' : 'text-amber-400'}`}>{t.isBenefic ? 'Benefic' : 'Neutral/Vedha'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
