import React from 'react';

export const VishaGhatiAlert: React.FC<{ isVisha: boolean }> = ({ isVisha }) => {
  if (!isVisha) return null;
  return (
    <div className="p-3 bg-rose-950/60 rounded-xl border border-rose-800 text-xs text-rose-300">
      ⚠️ Visha Ghati Toxic Window Active: Postpone major contract signings.
    </div>
  );
};
