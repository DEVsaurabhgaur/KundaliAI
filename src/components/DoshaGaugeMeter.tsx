import React from 'react';

export interface DoshaGaugeProps {
  label: string;
  percentage: number;
  severity: 'None' | 'Mild' | 'Moderate' | 'Severe';
}

export const DoshaGaugeMeter: React.FC<DoshaGaugeProps> = ({ label, percentage, severity }) => {
  const colorMap = {
    None: 'bg-emerald-500',
    Mild: 'bg-amber-400',
    Moderate: 'bg-orange-500',
    Severe: 'bg-rose-600'
  };

  return (
    <div className="p-3 bg-slate-900/70 rounded-xl border border-purple-900/40">
      <div className="flex justify-between items-center mb-1 text-xs">
        <span className="font-semibold text-purple-200">{label}</span>
        <span className="text-amber-300 font-bold">{severity} ({percentage}%)</span>
      </div>
      <div className="w-full bg-purple-950/80 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${colorMap[severity] || 'bg-amber-400'}`}
          style={{ width: `${Math.min(100, Math.max(5, percentage))}%` }}
        />
      </div>
    </div>
  );
};
