/**
 * Rajya Pada (A10 / Arudha of the 10th House)
 * Reflects perceived status, professional reputation, and career glory.
 */

import { calculateArudhaPada } from './arudhaPadas';

export function calculateRajyaPada(tenthHouseSignIdx: number, tenthLordSignIdx: number): number {
  return calculateArudhaPada(tenthHouseSignIdx, tenthLordSignIdx);
}
