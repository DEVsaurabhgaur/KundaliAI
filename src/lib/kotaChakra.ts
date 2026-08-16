/**
 * Kota Chakra (Fortress Diagram)
 * Concentric zones: Stambha (Central Pillar), Madhya (Inner Wall), Prakara (Outer Rampart), Bahya (Outside)
 */

export interface KotaStatus {
  stambhaOccupants: string[];
  prakaraOccupants: string[];
  fortressSafetyIndex: number;
}

export function evaluateKotaChakra(transits: { planet: string; houseFromMoon: number }[]): KotaStatus {
  const malefics = ['Saturn', 'Mars', 'Rahu', 'Ketu'];
  const stambha: string[] = [];
  const prakara: string[] = [];

  transits.forEach(t => {
    if ([1, 4, 7, 10].includes(t.houseFromMoon)) stambha.push(t.planet);
    else prakara.push(t.planet);
  });

  const maleficInStambha = stambha.filter(p => malefics.includes(p)).length;
  const safety = Math.max(10, 100 - maleficInStambha * 30);

  return {
    stambhaOccupants: stambha,
    prakaraOccupants: prakara,
    fortressSafetyIndex: safety
  };
}
