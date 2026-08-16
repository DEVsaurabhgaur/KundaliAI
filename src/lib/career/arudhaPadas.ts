/**
 * Arudha Padas (A1 to A12) Engine
 * Reflects how the world perceives the native's houses.
 */

export function calculateArudhaPada(houseIndex: number, lordSignIndex: number): number {
  const dist = (lordSignIndex - houseIndex + 12) % 12;
  let arudha = (lordSignIndex + dist) % 12;
  // Exceptions: If Arudha lands in the same house or 7th from it, add 10 signs
  if (arudha === houseIndex || arudha === (houseIndex + 6) % 12) {
    arudha = (arudha + 9) % 12;
  }
  return arudha;
}
