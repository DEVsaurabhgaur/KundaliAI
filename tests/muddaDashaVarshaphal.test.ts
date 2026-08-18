import { describe, it, expect } from 'vitest';
import { getMuddaDuration } from '../src/lib/tajika/muddaDashaVarshaphal';

describe('Mudda Dasha Durations', () => {
  it('allocates 18.25 days to Sun and 60.83 days to Venus', () => {
    expect(getMuddaDuration('Sun')).toBe(18.25);
    expect(getMuddaDuration('Venus')).toBe(60.83);
  });
});
