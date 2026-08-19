import React from 'react';

export const KharaNavamshaAlert: React.FC<{ kharaSign: number }> = ({ kharaSign }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">64th Navamsha:</strong> Sign #{kharaSign + 1}. Monitor malefic transits for health care.
    </div>
  );
};
