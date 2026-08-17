import React from 'react';

export const SaraswatiYogaCard: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;
  return (
    <div className="p-4 bg-purple-950/50 rounded-2xl border border-amber-500/40 text-xs">
      <h4 className="text-amber-300 font-bold text-sm mb-1">✨ Saraswati Yoga</h4>
      <p className="text-purple-200">Bestows supreme intellectual prowess, literary mastery, and oratory brilliance.</p>
    </div>
  );
};
