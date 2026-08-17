/**
 * Nakshatra Ingress and Egress Boundary Calculation Engine
 */

export interface NakshatraSpan {
  nakshatraIndex: number;
  startDegree: number;
  endDegree: number;
  remainingDegrees: number;
}

export function getNakshatraSpan(moonLongitude: number): NakshatraSpan {
  const norm = ((moonLongitude % 360) + 360) % 360;
  const span = 13 + 1 / 3;
  const idx = Math.floor(norm / span);
  const start = idx * span;
  const end = start + span;

  return {
    nakshatraIndex: idx,
    startDegree: Number(start.toFixed(4)),
    endDegree: Number(end.toFixed(4)),
    remainingDegrees: Number((end - norm).toFixed(4))
  };
}
