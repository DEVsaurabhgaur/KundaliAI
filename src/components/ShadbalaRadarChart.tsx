import React from 'react';
import { ShadbalaScore } from '../lib/shadbala';

export interface ShadbalaRadarProps {
  scores: ShadbalaScore[];
}

export const ShadbalaRadarChart: React.FC<ShadbalaRadarProps> = ({ scores }) => {
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const count = scores.length || 7;

  // Generate SVG polygon points
  const points = scores.map((s, idx) => {
    const angle = (idx / count) * 2 * Math.PI - Math.PI / 2;
    const r = (Math.min(120, s.strengthPercent) / 120) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
      <h3 className="text-amber-300 font-semibold mb-2 text-sm tracking-wide uppercase">
        Shadbala Strength Radar
      </h3>
      <svg width={size} height={size} className="overflow-visible">
        {/* Background concentric rings */}
        {[0.25, 0.5, 0.75, 1.0].map((ratio, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius * ratio}
            fill="none"
            stroke="#7c3aed"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.3"
          />
        ))}

        {/* Dynamic polygon */}
        {scores.length > 0 && (
          <polygon
            points={points}
            fill="rgba(245, 158, 11, 0.25)"
            stroke="#f59e0b"
            strokeWidth="2"
          />
        )}

        {/* Vertex markers & labels */}
        {scores.map((s, idx) => {
          const angle = (idx / count) * 2 * Math.PI - Math.PI / 2;
          const r = (Math.min(120, s.strengthPercent) / 120) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          const labelX = center + (radius + 20) * Math.cos(angle);
          const labelY = center + (radius + 20) * Math.sin(angle);

          return (
            <g key={s.planet}>
              <circle cx={x} cy={y} r="4" fill="#fbbf24" stroke="#7c3aed" strokeWidth="1.5" />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#e9d5ff"
                fontSize="11"
                className="font-medium"
              >
                {s.planet}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
