import { useCallback } from 'react';

export function useSoundEffects() {
  const playCosmicChime = useCallback(() => {
    if (typeof window === 'undefined' || !window.AudioContext) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime); // 528Hz Solfeggio frequency
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio playback silent fallback
    }
  }, []);

  return { playCosmicChime };
}
