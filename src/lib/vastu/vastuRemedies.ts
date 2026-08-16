/**
 * Non-Demolition Vastu Remedies
 */

export function getVastuRemedy(zoneCode: string, defectType: string): string {
  if (defectType === 'ToiletInNorthEast') {
    return 'Neutralize with brass pyramids and yellow strip border around base.';
  }
  if (defectType === 'KitchenInNorth') {
    return 'Place green Baroda marble slab beneath the gas stove.';
  }
  return 'Install reflective copper wire or color therapy tape to balance energy flows.';
}
