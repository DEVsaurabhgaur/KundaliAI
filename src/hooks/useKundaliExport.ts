import { useCallback } from 'react';

export function useKundaliExport() {
  const exportAsSvg = useCallback((svgElementId: string, filename = 'kundali-chart.svg') => {
    const el = document.getElementById(svgElementId);
    if (!el) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(el);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return { exportAsSvg };
}
