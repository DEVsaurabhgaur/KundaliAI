import { describe, it, expect } from 'vitest';
import { checkKPHouseFulfillment, KP_HOUSE_GROUPS } from '../src/lib/kp/houseGrouping';

describe('KP House Grouping', () => {
  it('fulfills career when 2 or more career houses are signified', () => {
    expect(checkKPHouseFulfillment([2, 10], KP_HOUSE_GROUPS.CareerPromotion)).toBe(true);
    expect(checkKPHouseFulfillment([1, 4], KP_HOUSE_GROUPS.CareerPromotion)).toBe(false);
  });
});
