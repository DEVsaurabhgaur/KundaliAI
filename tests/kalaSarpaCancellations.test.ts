import { describe, it, expect } from 'vitest';
import { isKalaSarpaCancelled } from '../src/lib/kalasarpa/kalaSarpaCancellations';

describe('Kala Sarpa Cancellations', () => {
  it('cancels yoga when Jupiter is in Kendra', () => {
    expect(isKalaSarpaCancelled(false, true, false)).toBe(true);
  });
});
