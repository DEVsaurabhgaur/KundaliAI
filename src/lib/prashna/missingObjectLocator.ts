/**
 * Nashta Vashtu (Missing Object Recovery) Locator
 */

export function locateMissingObject(karyaSignIndex: number) {
  const DIRECTIONS = ['East (Near Fire/Light)', 'South (Low ground / Under heavy object)', 'West (Near water / Air passage)', 'North (Safely stored / High shelf)'];
  const direction = DIRECTIONS[karyaSignIndex % 4];
  const isRecoverable = [0, 4, 8, 1, 5, 9].includes(karyaSignIndex);

  return {
    suggestedLocation: direction,
    isRecoverable,
    advice: isRecoverable ? 'Search immediate perimeter in indicated direction.' : 'Item may have shifted outside primary perimeter.'
  };
}
