import { calculateBhagyank } from './bhagyankCalculator';

export function calculatePersonalYear(birthDay: number, birthMonth: number, currentYear: number): number {
  return calculateBhagyank(birthDay, birthMonth, currentYear);
}
