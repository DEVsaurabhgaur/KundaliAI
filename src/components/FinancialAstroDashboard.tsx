import React from 'react';
import { useFinancialAstro } from '../hooks/useFinancialAstro';

export const FinancialAstroDashboard: React.FC = () => {
  const { commodityList } = useFinancialAstro();

  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Financial Astrological Rulers</h4>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {commodityList.map(([com, planets]) => (
          <div key={com} className="p-2 bg-purple-950/40 rounded-lg border border-purple-900/50">
            <div className="text-amber-300 font-semibold">{com}</div>
            <div className="text-purple-200">{planets.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
