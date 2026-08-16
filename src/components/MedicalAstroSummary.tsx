import React from 'react';
import { TridoshaProfile } from '../lib/ayurjyotish/tridosha';

export const MedicalAstroSummary: React.FC<{ profile: TridoshaProfile }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Ayur-Jyotish Constitution</h4>
      <div className="text-xs text-purple-200">Dominant Bio-Energy: <strong className="text-amber-300">{profile.dominantDosha}</strong></div>
    </div>
  );
};
