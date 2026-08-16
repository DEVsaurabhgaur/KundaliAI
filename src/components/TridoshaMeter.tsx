import React from 'react';
import { TridoshaProfile } from '../lib/ayurjyotish/tridosha';

export const TridoshaMeter: React.FC<{ profile: TridoshaProfile }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 space-y-2 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Tridosha Proportions</h4>
      <div>
        <div className="flex justify-between text-purple-200"><span>Vata (Air/Ether)</span><span>{profile.vata}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-sky-400 h-1.5 rounded-full" style={{ width: `${profile.vata}%` }} /></div>
      </div>
      <div>
        <div className="flex justify-between text-purple-200"><span>Pitta (Fire)</span><span>{profile.pitta}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${profile.pitta}%` }} /></div>
      </div>
      <div>
        <div className="flex justify-between text-purple-200"><span>Kapha (Earth/Water)</span><span>{profile.kapha}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `${profile.kapha}%` }} /></div>
      </div>
    </div>
  );
};
