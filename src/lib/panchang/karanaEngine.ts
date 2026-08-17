/**
 * 11 Karanas (Half of a Tithi = 6 degrees)
 * 7 Movable (Chara): Bava, Balava, Kaulava, Taitila, Gara, Vanija, Vishti (Bhadra)
 * 4 Fixed (Sthira): Shakuni, Chatushpada, Naga, Kinstughna
 */

export interface KaranaResult {
  karanaNumber: number; // 1 to 60
  karanaName: string;
  type: 'Movable' | 'Fixed';
  isAuspicious: boolean;
}

const MOVABLE_KARANAS = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti'];

export function calculateKarana(sunLongDeg: number, moonLongDeg: number): KaranaResult {
  const diff = ((moonLongDeg - sunLongDeg + 360) % 360);
  const karanaIndex = Math.floor(diff / 6); // 0 to 59

  let karanaName = '';
  let type: KaranaResult['type'] = 'Movable';

  if (karanaIndex === 0) {
    karanaName = 'Kinstughna';
    type = 'Fixed';
  } else if (karanaIndex >= 57) {
    const fixed = ['Shakuni', 'Chatushpada', 'Naga'];
    karanaName = fixed[karanaIndex - 57];
    type = 'Fixed';
  } else {
    karanaName = MOVABLE_KARANAS[(karanaIndex - 1) % 7];
    type = 'Movable';
  }

  const isAuspicious = karanaName !== 'Vishti' && karanaName !== 'Shakuni' && karanaName !== 'Chatushpada' && karanaName !== 'Naga';

  return {
    karanaNumber: karanaIndex + 1,
    karanaName,
    type,
    isAuspicious
  };
}
