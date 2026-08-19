import { describe, it, expect } from 'vitest';
import { calculate36GunaVerdict } from '../src/lib/synastry/ashtakootaGrandTotal';

describe('36-Guna Grand Total', () => {
  it('approves match with 28+ points as Uttama', () => {
    const res = calculate36GunaVerdict(30);
    expect(res.isApproved).toBe(true);
    expect(res.verdict).toContain('Uttama');
  });
});
