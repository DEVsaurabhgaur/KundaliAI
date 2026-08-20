import React from 'react';

export const SarvatobhadraChakraViewer: React.FC<{ janmaStar: string }> = ({ janmaStar }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Sarvatobhadra Chakra (81-Grid)</h4>
      <div>Janma Nakshatra: <strong className="text-amber-300">{janmaStar}</strong></div>
      <div className="mt-2 text-[11px] text-purple-300">Frontal, Left, and Right Vedha rays mapped across 28 stars.</div>
    </div>
  );
};
