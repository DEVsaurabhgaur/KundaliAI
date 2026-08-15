/**
 * Navagraha Beej Mantras and Vedic Chants Repository
 */

export interface MantraRecord {
  planet: string;
  beejMantra: string;
  vedicGayatri: string;
  recommendedCount: number;
  bestTime: string;
}

export const NAVAGRAHA_MANTRAS: Record<string, MantraRecord> = {
  Sun: {
    planet: 'Sun',
    beejMantra: 'Om Hraam Hreem Hroum Sah Suryaya Namah',
    vedicGayatri: 'Om Bhaskarraya Vidmahe Diva Karaya Dheemahi Tanno Suryah Prachodayat',
    recommendedCount: 7000,
    bestTime: 'Sunrise'
  },
  Moon: {
    planet: 'Moon',
    beejMantra: 'Om Shraam Shreem Shroum Sah Chandraya Namah',
    vedicGayatri: 'Om Padmadhwajaya Vidmahe Hema Roopaya Dheemahi Tanno Somah Prachodayat',
    recommendedCount: 11000,
    bestTime: 'Evening twilight'
  },
  Mars: {
    planet: 'Mars',
    beejMantra: 'Om Kraam Kreem Kroum Sah Bhaumaya Namah',
    vedicGayatri: 'Om Angarkaya Vidmahe Bhoomipalaya Dheemahi Tanno Kujah Prachodayat',
    recommendedCount: 10000,
    bestTime: 'Morning after sunrise'
  },
  Mercury: {
    planet: 'Mercury',
    beejMantra: 'Om Braam Breem Broum Sah Budhaya Namah',
    vedicGayatri: 'Om Saumya Roopaya Vidmahe Vana Rajaya Dheemahi Tanno Budhah Prachodayat',
    recommendedCount: 9000,
    bestTime: 'Sunrise or Mercury Hora'
  },
  Jupiter: {
    planet: 'Jupiter',
    beejMantra: 'Om Graam Greem Groum Sah Gurave Namah',
    vedicGayatri: 'Om Guru Devaya Vidmahe Parabrahmaya Dheemahi Tanno Guruh Prachodayat',
    recommendedCount: 19000,
    bestTime: 'Early morning'
  },
  Venus: {
    planet: 'Venus',
    beejMantra: 'Om Draam Dreem Droum Sah Shukraya Namah',
    vedicGayatri: 'Om Rajadabaaya Vidmahe Bhrigu Suthaya Dheemahi Tanno Shukrah Prachodayat',
    recommendedCount: 16000,
    bestTime: 'Morning twilight'
  },
  Saturn: {
    planet: 'Saturn',
    beejMantra: 'Om Praam Preem Proum Sah Shanaischaraya Namah',
    vedicGayatri: 'Om Shanaishcharaya Vidmahe Suryaputraya Dheemahi Tanno Mandah Prachodayat',
    recommendedCount: 23000,
    bestTime: 'Sunset or late evening'
  },
  Rahu: {
    planet: 'Rahu',
    beejMantra: 'Om Bhraam Bhreem Bhroum Sah Rahave Namah',
    vedicGayatri: 'Om Sookh Dantaaya Vidmahe Ugra Roopaya Dheemahi Tanno Rahuh Prachodayat',
    recommendedCount: 18000,
    bestTime: 'Night after 8 PM'
  },
  Ketu: {
    planet: 'Ketu',
    beejMantra: 'Om Sraam Sreem Sroum Sah Ketave Namah',
    vedicGayatri: 'Om Chitra Varnaya Vidmahe Sarpa Roopaya Dheemahi Tanno Ketuh Prachodayat',
    recommendedCount: 17000,
    bestTime: 'Early morning before dawn'
  }
};
