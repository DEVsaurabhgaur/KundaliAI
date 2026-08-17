import React from 'react';

export const PanchangCalendarGrid: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Vedic Panchang 5-Limb Calendar</h4>
      <p>Synchronizes Tithi (Lunar Day), Vara (Weekday), Nakshatra (Constellation), Yoga (Solar-Lunar Sum), and Karana (Half-Tithi).</p>
    </div>
  );
};
