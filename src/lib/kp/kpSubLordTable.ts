/**
 * KP 249 Sub-Lord Table Generator
 */

export function generateKP249Table() {
  return Array.from({ length: 249 }, (_, i) => ({
    entryNumber: i + 1,
    subLordIndex: (i % 9) + 1
  }));
}
