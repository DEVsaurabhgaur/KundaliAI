import React from 'react';
import { CareerPath } from '../lib/career/careerProfiler';

export const CareerPathRadar: React.FC<{ profile: CareerPath }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{profile.domain}</h4>
      <p className="text-xs text-purple-200 mb-2">Growth Pace: <strong className="text-amber-300">{profile.growthPace}</strong></p>
      <div className="flex flex-wrap gap-1.5">
        {profile.recommendedFields.map(f => (
          <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-800">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
};
