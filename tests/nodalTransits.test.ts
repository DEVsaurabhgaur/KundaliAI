import { describe, it, expect } from 'vitest';
import { checkNodalTransitAxis } from '../src/lib/gochara/nodalTransits';

describe('Nodal Transits', () => {
  it('identifies nodal return when signs match', () => {
    const axis = checkNodalTransitAxis(2, 2);
    expect(axis.isNodalReturn).toBe(true);
  });
});
