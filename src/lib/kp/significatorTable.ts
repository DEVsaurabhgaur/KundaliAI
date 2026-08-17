/**
 * KP 4-Level Significator Hierarchy
 * Level A: Planet in the Star of an Occupant of the House (Strongest)
 * Level B: Occupant of the House
 * Level C: Planet in the Star of the House Lord
 * Level D: House Lord
 */

export interface SignificatorLevel {
  houseNumber: number;
  levelA: string[];
  levelB: string[];
  levelC: string[];
  levelD: string[];
}

export function generateSignificatorRow(house: number, a: string[], b: string[], c: string[], d: string[]): SignificatorLevel {
  return { houseNumber: house, levelA: a, levelB: b, levelC: c, levelD: d };
}
