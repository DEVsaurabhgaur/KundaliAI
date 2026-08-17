/**
 * Saturn Transit Cycles: Sade Sati (7.5 yrs) & Dhaiya (2.5 yrs)
 * Phase 1: 12th from Moon (Rising)
 * Phase 2: 1st from Moon (Peak)
 * Phase 3: 2nd from Moon (Setting)
 * Kantaka Shani: 4th or 8th from Moon (Ashtama Shani)
 */

export interface ShaniTransitStatus {
  isSadeSatiActive: boolean;
  phase: 'None' | 'Phase 1 (Rising)' | 'Phase 2 (Peak)' | 'Phase 3 (Setting)';
  isAshtamaShani: boolean;
  isKantakaShani: boolean;
}

export function evaluateSaturnTransit(natalMoonSign: number, transitSaturnSign: number): ShaniTransitStatus {
  const diff = ((transitSaturnSign - natalMoonSign + 12) % 12) + 1; // 1 to 12

  let phase: ShaniTransitStatus['phase'] = 'None';
  if (diff === 12) phase = 'Phase 1 (Rising)';
  else if (diff === 1) phase = 'Phase 2 (Peak)';
  else if (diff === 2) phase = 'Phase 3 (Setting)';

  return {
    isSadeSatiActive: phase !== 'None',
    phase,
    isAshtamaShani: diff === 8,
    isKantakaShani: diff === 4 || diff === 10
  };
}
