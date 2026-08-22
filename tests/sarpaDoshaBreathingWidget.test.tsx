import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { SarpaDoshaBreathingWidget } from '../src/components/SarpaDoshaBreathingWidget';

describe('SarpaDoshaBreathingWidget', () => {
  it('renders pranayama technique', () => {
    const html = renderToString(<SarpaDoshaBreathingWidget pranayama="Nadi Shodhana" duration={20} />);
    expect(html).toContain('Nadi Shodhana');
  });
});
