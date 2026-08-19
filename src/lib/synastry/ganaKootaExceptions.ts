/**
 * Gana Koota Cancellation Rules
 * Rakshasa-Deva incompatibility is cancelled if Moon lords are the same or mutual friends.
 */

export function isGanaDoshaCancelled(areMoonLordsFriends: boolean, areNavamshaLordsFriends: boolean): boolean {
  return areMoonLordsFriends || areNavamshaLordsFriends;
}
