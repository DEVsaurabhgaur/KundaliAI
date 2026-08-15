/**
 * Jaimini Chara Karakas (7-Karaka or 8-Karaka scheme)
 * Karakas represent specific life areas based on descending degree within their signs:
 * AK (Atmakaraka - Soul), AmK (Amatyakaraka - Career/Mind), BK (Bhratrikaraka - Siblings/Guru),
 * MK (Matrikaraka - Mother), PK (Putrakaraka - Children), GK (Gnatikaraka - Obstacles), DK (Darakaraka - Spouse)
 */

export interface KarakaPlanet {
  name: string;
  longitude: number;
  degreeInSign: number;
  karakaRole: string;
  significance: string;
}

const KARAKA_ROLES = [
  { role: 'Atmakaraka (AK)', desc: 'Soul, self-realization, primary life purpose' },
  { role: 'Amatyakaraka (AmK)', desc: 'Intellect, career advisor, executive capability' },
  { role: 'Bhratrikaraka (BK)', desc: 'Guru, mentor, spiritual teacher, siblings' },
  { role: 'Matrikaraka (MK)', desc: 'Mother, emotional peace, ancestral lineage' },
  { role: 'Putrakaraka (PK)', desc: 'Children, wisdom, creativity, intuition' },
  { role: 'Gnatikaraka (GK)', desc: 'Obstacles, health battles, competitors, cousins' },
  { role: 'Darakaraka (DK)', desc: 'Spouse, partnerships, intimate relationships' }
];

export function calculateJaiminiKarakas(
  planets: { name: string; longitude: number }[]
): KarakaPlanet[] {
  // Exclude Rahu and Ketu in classical 7-karaka scheme
  const eligible = planets
    .filter(p => !p.name.includes('Rahu') && !p.name.includes('Ketu'))
    .map(p => ({
      name: p.name,
      longitude: p.longitude,
      degreeInSign: ((p.longitude % 30) + 30) % 30
    }))
    .sort((a, b) => b.degreeInSign - a.degreeInSign);

  return eligible.slice(0, 7).map((p, idx) => ({
    ...p,
    karakaRole: KARAKA_ROLES[idx].role,
    significance: KARAKA_ROLES[idx].desc
  }));
}
