/**
 * Banapanchaka (5 Toxic Arrows in Muhurta)
 * Rog, Agni, Nripa, Chora, Mrityu Arrows
 */

export function calculateBanapanchaka(tithiNum: number, nakshatraNum: number, lagnaNum: number): string {
  const sum = tithiNum + nakshatraNum + lagnaNum;
  const rem = sum % 9;
  const ARROWS: Record<number, string> = {
    1: 'Mrityu Bana (Lethal Affliction)',
    2: 'Agni Bana (Fire Hazard)',
    4: 'Raja Bana (Governmental Dispute)',
    6: 'Chora Bana (Theft/Loss)',
    8: 'Roga Bana (Disease)'
  };
  return ARROWS[rem] || 'Clean (No Bana Affliction)';
}
