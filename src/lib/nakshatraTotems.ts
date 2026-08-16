/**
 * Sacred Nakshatra Flora & Fauna Totems for Eco-Jyotish Remediation
 */

export interface NakshatraTotem {
  nakshatra: string;
  sacredTree: string;
  bird: string;
  presidingDeity: string;
}

export const NAKSHATRA_TOTEMS: Record<string, NakshatraTotem> = {
  Ashwini: { nakshatra: 'Ashwini', sacredTree: 'Kuchila (Strychnos)', bird: 'Wild Eagle', presidingDeity: 'Ashwini Kumaras' },
  Bharani: { nakshatra: 'Bharani', sacredTree: 'Amla (Emblica officinalis)', bird: 'Crow', presidingDeity: 'Lord Yama' },
  Krittika: { nakshatra: 'Krittika', sacredTree: 'Gular (Cluster Fig)', bird: 'Peacock', presidingDeity: 'Lord Agni' },
  Rohini: { nakshatra: 'Rohini', sacredTree: 'Jamun (Black Plum)', bird: 'Owl', presidingDeity: 'Lord Brahma' }
};
