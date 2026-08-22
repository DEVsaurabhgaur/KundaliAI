import { describe, it, expect } from 'vitest';
import { evaluateMeshaSankranti } from '../src/lib/medini/meshaSankranti';

describe('Mesha Sankranti', () => {
  it('returns Sun for Sunday and Jupiter for Thursday', () => {
    expect(evaluateMeshaSankranti(0)).toContain('Sun');
    expect(evaluateMeshaSankranti(4)).toContain('Jupiter');
  });
});
