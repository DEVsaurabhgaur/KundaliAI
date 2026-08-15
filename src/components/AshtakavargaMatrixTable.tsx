import React from 'react';
import { SavResult } from '../lib/ashtakavargaSav';

export interface AshtakavargaTableProps {
  savData: SavResult[];
  onSelectSign?: (signIdx: number) => void;
}

export const AshtakavargaMatrixTable: React.FC<AshtakavargaTableProps> = ({
  savData,
  onSelectSign
}) => {
  return (
    <div className="w-full overflow-x-auto p-4 bg-slate-900/60 rounded-xl border border-purple-800/30">
      <h3 className="text-amber-400 font-semibold mb-3 text-sm">
        Sarvashtakavarga (SAV) Bindu Distribution (337 Total)
      </h3>
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="border-b border-purple-800/60 text-purple-300">
            <th className="py-2 px-3">Rashi Sign</th>
            <th className="py-2 px-3">Bindus</th>
            <th className="py-2 px-3">Potency Grade</th>
          </tr>
        </thead>
        <tbody>
          {savData.map(row => (
            <tr
              key={row.signIndex}
              onClick={() => onSelectSign?.(row.signIndex)}
              className="border-b border-purple-900/30 hover:bg-purple-900/20 cursor-pointer transition-colors"
            >
              <td className="py-2 px-3 font-medium text-white">{row.signName}</td>
              <td className="py-2 px-3">
                <span className="font-bold text-amber-300">{row.totalBindus}</span>
              </td>
              <td className="py-2 px-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  row.strengthGrade === 'High'
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                    : row.strengthGrade === 'Moderate'
                    ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                    : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                }`}>
                  {row.strengthGrade}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
