/**
 * Upapada Lagna (UL / Arudha of the 12th House)
 * Signifies marriage partner, family background, and domestic bliss.
 */

import { calculateArudhaPada } from './arudhaPadas';

export function calculateUpapadaLagna(twelfthHouseSignIdx: number, twelfthLordSignIdx: number): number {
  return calculateArudhaPada(twelfthHouseSignIdx, twelfthLordSignIdx);
}
