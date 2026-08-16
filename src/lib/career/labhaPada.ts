/**
 * Labha Pada (A11 / Arudha of the 11th House)
 */

import { calculateArudhaPada } from './arudhaPadas';

export function calculateLabhaPada(eleventhHouseSignIdx: number, eleventhLordSignIdx: number): number {
  return calculateArudhaPada(eleventhHouseSignIdx, eleventhLordSignIdx);
}
