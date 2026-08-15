/**
 * 7th House (Kalatra Bhava) Synastry Placement Engine
 */

export function evaluateSeventhHouseSynastry(
  lordPlacementHouseA: number,
  lordPlacementHouseB: number
) {
  const isKendraOrTrikonaA = [1, 4, 7, 10, 5, 9].includes(lordPlacementHouseA);
  const isKendraOrTrikonaB = [1, 4, 7, 10, 5, 9].includes(lordPlacementHouseB);

  return {
    isFavorable: isKendraOrTrikonaA && isKendraOrTrikonaB,
    score: (isKendraOrTrikonaA ? 50 : 25) + (isKendraOrTrikonaB ? 50 : 25),
    notes: '7th lords placed in auspicious houses guarantee durable mutual affection.'
  };
}
