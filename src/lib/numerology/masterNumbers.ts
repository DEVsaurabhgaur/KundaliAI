/**
 * Master Numbers (11, 22, 33)
 */

export function checkMasterNumber(compoundNumber: number): { isMaster: boolean; title: string } {
  const MASTERS: Record<number, string> = {
    11: 'Master Number 11: The Visionary / Illuminator (High intuition and spiritual insight).',
    22: 'Master Number 22: The Master Builder (Materializing grand architectural visions).',
    33: 'Master Number 33: The Master Teacher (Universal compassion and healing energy).'
  };

  return {
    isMaster: compoundNumber in MASTERS,
    title: MASTERS[compoundNumber] || 'Standard single-octave vibration.'
  };
}
