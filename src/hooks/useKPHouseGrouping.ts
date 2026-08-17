import { useMemo } from 'react';
import { KP_HOUSE_GROUPS, checkKPHouseFulfillment } from '../lib/kp/houseGrouping';

export function useKPHouseGrouping(signifiedHouses: number[]) {
  const career = useMemo(() => checkKPHouseFulfillment(signifiedHouses, KP_HOUSE_GROUPS.CareerPromotion), [signifiedHouses]);
  const marriage = useMemo(() => checkKPHouseFulfillment(signifiedHouses, KP_HOUSE_GROUPS.MarriageAlliance), [signifiedHouses]);

  return { careerFulfillment: career, marriageFulfillment: marriage };
}
