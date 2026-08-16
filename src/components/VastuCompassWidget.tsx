import React from 'react';
import { useVastuCompass } from '../hooks/useVastuCompass';

export const VastuCompassWidget: React.FC = () => {
  const { selectedDirection, setSelectedDirection, activeZone, allZones } = useVastuCompass();

  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Vastu Directional Compass</h4>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {allZones.map(z => (
          <button
            key={z.direction}
            type="button"
            onClick={() => setSelectedDirection(z.direction)}
            className={`px-2.5 py-1 text-xs rounded-lg transition-all ${selectedDirection === z.direction ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-purple-950/60 text-purple-200'}`}
          >
            {z.direction}
          </button>
        ))}
      </div>
      <div className="text-xs text-purple-100 bg-purple-950/40 p-2.5 rounded-lg border border-purple-900/50">
        <div><strong>Guardian:</strong> {activeZone.guardian} (Planet: {activeZone.rulingPlanet})</div>
        <div><strong>Ideal Utilization:</strong> {activeZone.idealRoom}</div>
      </div>
    </div>
  );
};
