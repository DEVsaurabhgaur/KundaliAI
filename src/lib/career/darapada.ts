/**
 * Darapada (A7 / Arudha of the 7th House)
 * Indicates business partners, public trade, and magnetic charisma.
 */

import { calculateArudhaPada } from './arudhaPadas';

export function calculateDarapada(seventhHouseSignIdx: number, seventhLordSignIdx: number): number {
  return calculateArudhaPada(seventhHouseSignIdx, seventhLordSignIdx);
}
