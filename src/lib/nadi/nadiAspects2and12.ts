/**
 * Nadi 2nd & 12th Dynamics
 * 2nd House: Front support / Incoming event
 * 12th House: Rear push / Past karma backing
 */

export function evaluateNadiSupport(targetSign: number, occupantsIn2nd: string[], occupantsIn12th: string[]) {
  return {
    incomingForce: occupantsIn2nd,
    pastKarmaSupport: occupantsIn12th,
    hasStrongFrontSupport: occupantsIn2nd.length > 0
  };
}
