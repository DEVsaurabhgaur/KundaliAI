/** KundaliAI design token colors matching CSS custom properties */
export const COLORS = {
  primary: '#7c3aed',
  primaryLight: '#8b5cf6',
  primaryDark: '#6d28d9',
  accent: '#f59e0b',
  accentLight: '#fbbf24',
  background: '#0f0a1e',
  surface: '#1a1035',
  surfaceLight: '#231548',
  text: '#f3f0ff',
  textMuted: '#a78bfa',
  textDim: '#6d5fa0',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  border: '#2d1f6b',
} as const;
export type ColorKey = keyof typeof COLORS;

