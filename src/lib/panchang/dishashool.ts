/**
 * Dishashool (Directional Taboo for Travel by Weekday)
 * Sunday: West | Monday: East | Tuesday: North | Wednesday: North | Thursday: South | Friday: West | Saturday: East
 */

export const DISHASHOOL_DIRECTIONS: Record<number, { direction: string; remedy: string }> = {
  0: { direction: 'West', remedy: 'Eat ghee or betel leaf before journey.' },
  1: { direction: 'East', remedy: 'Look in mirror and eat milk porridge.' },
  2: { direction: 'North', remedy: 'Eat jaggery before embarking.' },
  3: { direction: 'North', remedy: 'Eat sesame or mustard preparation.' },
  4: { direction: 'South', remedy: 'Eat yellow curd or mustard seeds.' },
  5: { direction: 'West', remedy: 'Eat barley or yogurt.' },
  6: { direction: 'East', remedy: 'Eat ginger or mustard seeds.' }
};

export function getDishashool(dayOfWeek: number) {
  return DISHASHOOL_DIRECTIONS[dayOfWeek % 7];
}
