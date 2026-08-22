import { describe, it, expect } from 'vitest';
import { formatStationEpoch } from '../src/lib/speed/planetaryStationEpoch';

describe('Planetary Station Epoch', () => {
  it('formats station degree and date', () => {
    const epoch = formatStationEpoch(15.421, Date.now());
    expect(epoch.stationDegree).toBe(15.42);
    expect(epoch.status).toContain('Stambhana');
  });
});
