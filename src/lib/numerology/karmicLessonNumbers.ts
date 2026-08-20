import { CHALDEAN_VALUES } from './namankChaldean';

export function findMissingKarmicNumbers(name: string): number[] {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  const present = new Set<number>();
  for (const c of clean) {
    if (CHALDEAN_VALUES[c]) present.add(CHALDEAN_VALUES[c]);
  }
  const missing: number[] = [];
  for (let i = 1; i <= 8; i++) {
    if (!present.has(i)) missing.push(i);
  }
  return missing;
}
