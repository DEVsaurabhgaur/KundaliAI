/**
 * Bhakoot Dosha (7 Points) Cancellation Exceptions
 * 1. Both signs have the same lord (e.g., Aries-Scorpio ruled by Mars, Taurus-Libra ruled by Venus).
 * 2. Lords of both signs are mutual friends.
 * 3. Navamsha lords are mutual friends.
 */

export function isBhakootDoshaCancelled(haveSameLord: boolean, areLordsMutualFriends: boolean): boolean {
  return haveSameLord || areLordsMutualFriends;
}
