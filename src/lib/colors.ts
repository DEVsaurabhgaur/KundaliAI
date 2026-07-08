/** Planet color palette for KundaliAI visualizations */

export const PLANET_COLORS: Record<string, string> = {
  Sun:                  '#FFB347', // warm amber-orange
  Moon:                 '#C8D8E8', // silvery blue-white
  Mars:                 '#E85D4A', // fiery red
  Mercury:              '#7EC8A4', // mercury green
  Jupiter:              '#F0C060', // golden yellow
  Venus:                '#F4A7B9', // rose pink
  Saturn:               '#9B8EA0', // dusty purple-grey
  'Rahu (North Node)':  '#4A5568', // dark slate
  'Ketu (South Node)':  '#B57C6B', // earthy brown
};

export const PLANET_GLOWS: Record<string, string> = {
  Sun:                  'rgba(255,179,71,0.4)',
  Moon:                 'rgba(200,216,232,0.3)',
  Mars:                 'rgba(232,93,74,0.4)',
  Mercury:              'rgba(126,200,164,0.35)',
  Jupiter:              'rgba(240,192,96,0.4)',
  Venus:                'rgba(244,167,185,0.4)',
  Saturn:               'rgba(155,142,160,0.35)',
  'Rahu (North Node)':  'rgba(74,85,104,0.3)',
  'Ketu (South Node)':  'rgba(181,124,107,0.3)',
};

export const RASHI_COLORS: Record<string, string> = {
  Aries:       '#E85D4A',
  Taurus:      '#7EC8A4',
  Gemini:      '#F0C060',
  Cancer:      '#C8D8E8',
  Leo:         '#FFB347',
  Virgo:       '#98D4A3',
  Libra:       '#F4A7B9',
  Scorpio:     '#9B4A5A',
  Sagittarius: '#7EB8D4',
  Capricorn:   '#9B8EA0',
  Aquarius:    '#6ABFDB',
  Pisces:      '#A78BCA',
};

/**
 * Get the color for a planet by its abbreviated name.
 */
export function getPlanetColor(planetKey: string): string {
  const full: Record<string, string> = {
    Su: 'Sun', Mo: 'Moon', Ma: 'Mars', Me: 'Mercury',
    Ju: 'Jupiter', Ve: 'Venus', Sa: 'Saturn', Ra: 'Rahu (North Node)', Ke: 'Ketu (South Node)',
  };
  const planet = full[planetKey] ?? planetKey;
  return PLANET_COLORS[planet] ?? '#ffffff';
}
