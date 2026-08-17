/**
 * KP 4-Step Theory Engine
 * Step 1: Planet itself
 * Step 2: Planet's Star Lord
 * Step 3: Star Lord's Sub Lord
 * Step 4: Sub Lord's Star Lord
 */

export interface FourStepChain {
  planet: string;
  starLord: string;
  subLord: string;
  subSubLord: string;
  signifiedHouses: number[];
}

export function evaluateFourStepChain(
  planet: string,
  starLord: string,
  subLord: string,
  subSubLord: string,
  houses: number[]
): FourStepChain {
  return { planet, starLord, subLord, subSubLord, signifiedHouses: houses };
}
