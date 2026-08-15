/**
 * Vedic Fasting (Vrat) and Sacred Charity (Daan) Recommendations
 */

export interface CharityGuide {
  planet: string;
  vratDay: string;
  recommendedDonations: string[];
  beneficiary: string;
}

export const CHARITY_RECOMMENDATIONS: Record<string, CharityGuide> = {
  Sun: {
    planet: 'Sun',
    vratDay: 'Ravivar (Sunday)',
    recommendedDonations: ['Wheat', 'Jaggery', 'Ruby/Copper vessels', 'Red sandalwood'],
    beneficiary: 'Needy elders, temple priests, father figures'
  },
  Moon: {
    planet: 'Moon',
    vratDay: 'Somvar (Monday)',
    recommendedDonations: ['Rice', 'Milk', 'Silver coins', 'White garments', 'Sugar'],
    beneficiary: 'Mothers, elderly women, orphanage sanctuaries'
  },
  Mars: {
    planet: 'Mars',
    vratDay: 'Mangalvar (Tuesday)',
    recommendedDonations: ['Masoor dal (Red lentils)', 'Red clothes', 'Copper', 'Jaggery'],
    beneficiary: 'Soldiers, sports personnel, brothers in distress'
  },
  Mercury: {
    planet: 'Mercury',
    vratDay: 'Budhavar (Wednesday)',
    recommendedDonations: ['Moong dal (Green gram)', 'Books', 'Green vegetables', 'Stationery'],
    beneficiary: 'Underprivileged students, orphan learners'
  },
  Jupiter: {
    planet: 'Jupiter',
    vratDay: 'Guruvar (Thursday)',
    recommendedDonations: ['Chana dal (Yellow split gram)', 'Turmeric', 'Yellow cloth', 'Religious books'],
    beneficiary: 'Spiritual teachers, hermits, Gurukuls'
  },
  Venus: {
    planet: 'Venus',
    vratDay: 'Shukravar (Friday)',
    recommendedDonations: ['White rice', 'Curd', 'Ghee', 'Perfumes', 'Silk clothes'],
    beneficiary: 'Destitute women, female shelters, marriage funds'
  },
  Saturn: {
    planet: 'Saturn',
    vratDay: 'Shanivar (Saturday)',
    recommendedDonations: ['Mustard oil', 'Black sesame seeds', 'Iron pan', 'Blankets', 'Urad dal'],
    beneficiary: 'Sanitation workers, disabled individuals, elderly laborers'
  }
};
