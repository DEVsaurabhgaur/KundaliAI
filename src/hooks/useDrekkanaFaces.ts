import { useMemo } from 'react';
import { getDrekkanaNature } from '../lib/drekkana/drekkana36Faces';

export function useDrekkanaFaces(signIndex: number, decanate: number) {
  const nature = useMemo(() => getDrekkanaNature(signIndex, decanate), [signIndex, decanate]);
  return { drekkanaNature: nature };
}
