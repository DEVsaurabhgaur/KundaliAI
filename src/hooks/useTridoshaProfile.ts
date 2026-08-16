import { useMemo } from 'react';
import { calculateTridoshaProfile } from '../lib/ayurjyotish/tridosha';

export function useTridoshaProfile() {
  const profile = useMemo(() => calculateTridoshaProfile({}), []);
  return { profile };
}
