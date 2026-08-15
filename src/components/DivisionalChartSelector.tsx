import React from 'react';

export interface DivisionalSelectorProps {
  activeVarga: string;
  onChangeVarga: (varga: string) => void;
}

const VARGAS = [
  { id: 'D1', label: 'Rashi (D1)', desc: 'General Life' },
  { id: 'D2', label: 'Hora (D2)', desc: 'Wealth' },
  { id: 'D3', label: 'Drekkana (D3)', desc: 'Siblings & Courage' },
  { id: 'D7', label: 'Saptamsha (D7)', desc: 'Children & Lineage' },
  { id: 'D9', label: 'Navamsha (D9)', desc: 'Soul & Marriage' },
  { id: 'D10', label: 'Dashamsha (D10)', desc: 'Career & Fame' },
  { id: 'D60', label: 'Shashtiamsha (D60)', desc: 'Past Karma' }
];

export const DivisionalChartSelector: React.FC<DivisionalSelectorProps> = ({
  activeVarga,
  onChangeVarga
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-3 bg-purple-950/40 rounded-xl border border-purple-800/40">
      {VARGAS.map(v => {
        const isActive = activeVarga === v.id;
        return (
          <button
            key={v.id}
            type="button"
            onClick={() => onChangeVarga(v.id)}
            className={`px-3 py-1.5 text-xs md:text-sm rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-purple-900/40 text-purple-200 hover:bg-purple-800/50 hover:text-white'
            }`}
          >
            <div>{v.label}</div>
            <div className="text-[10px] opacity-75 font-normal">{v.desc}</div>
          </button>
        );
      })}
    </div>
  );
};
