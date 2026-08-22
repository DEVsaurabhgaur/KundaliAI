import { describe, it, expect } from 'vitest';
import { predictStationDirection } from '../src/lib/speed/stationTurningRetrograde';

describe('Station Turnaround Direction', () => {
  it('predicts turn to retrograde from direct motion', () => {
    expect(predictStationDirection(true)).toContain('Vakri');
  });
});
