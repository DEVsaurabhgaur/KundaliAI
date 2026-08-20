/**
 * 16 Swaras (Vowels) in Sarvatobhadra Chakra
 */

export const SBC_SWARAS = ['A', 'Aa', 'I', 'Ee', 'U', 'Oo', 'Ri', 'Ree', 'Lri', 'Lree', 'E', 'Ai', 'O', 'Au', 'Am', 'Ah'];

export function checkSwaraVedha(vowelA: string, vowelB: string): boolean {
  return vowelA.toUpperCase() === vowelB.toUpperCase();
}
