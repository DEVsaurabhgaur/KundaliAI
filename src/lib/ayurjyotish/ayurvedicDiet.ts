/**
 * Ayurvedic Nutritional & Herbal Guide based on Ascendant Element
 */

export function getAyurvedicDietPlan(ascendant: string) {
  const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
  const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
  const airSigns = ['Gemini', 'Libra', 'Aquarius'];

  if (fireSigns.includes(ascendant)) {
    return {
      element: 'Fire',
      dietTips: 'Cooling foods: sweet fruits, cucumbers, mint, coconut water.',
      herbs: ['Brahmi', 'Shatavari', 'Fennel'],
      avoid: 'Excessively spicy, fermented, or deep-fried foods.'
    };
  }
  if (earthSigns.includes(ascendant)) {
    return {
      element: 'Earth',
      dietTips: 'Light, warm, easily digestible cooked meals.',
      herbs: ['Ginger', 'Triphala', 'Guggulu'],
      avoid: 'Heavy dairy and excessive unctuous snacks.'
    };
  }
  if (airSigns.includes(ascendant)) {
    return {
      element: 'Air',
      dietTips: 'Warm grounding soups, sesame oil, root vegetables.',
      herbs: ['Ashwagandha', 'Jatamansi', 'Licorice'],
      avoid: 'Raw cold salads and dry beans.'
    };
  }
  return {
    element: 'Water',
    dietTips: 'Pungent, bitter, and astringent foods with warming spices.',
    herbs: ['Tulsi', 'Turmeric', 'Cinnamon'],
    avoid: 'Cold icy beverages and excessive salt.'
  };
}
