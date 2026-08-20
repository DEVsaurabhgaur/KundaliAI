import React from 'react';

export const SBCVedhaAlert: React.FC<{ isAfflicted: boolean }> = ({ isAfflicted }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs">
      <strong className={isAfflicted ? 'text-amber-400' : 'text-emerald-400'}>
        {isAfflicted ? '⚠️ Active Malefic Transit Vedha on Natal Star' : '✨ All SBC Sensitive Stars Free of Malefic Vedha'}
      </strong>
    </div>
  );
};
