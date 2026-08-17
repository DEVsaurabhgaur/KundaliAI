/**
 * KP House Grouping Combinations
 */

export const KP_HOUSE_GROUPS = {
  CareerPromotion: [2, 6, 10, 11],
  MarriageAlliance: [2, 7, 11],
  ChildBirth: [2, 5, 11],
  ForeignTravel: [3, 9, 12],
  PropertyPurchase: [4, 11, 12],
  LitigationSuccess: [6, 11]
};

export function checkKPHouseFulfillment(signifiedHouses: number[], targetGroup: number[]): boolean {
  const matches = targetGroup.filter(h => signifiedHouses.includes(h));
  return matches.length >= 2;
}
