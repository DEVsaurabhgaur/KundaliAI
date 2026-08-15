/**
 * Sacred Geometric Yantras Repository
 */

export interface YantraSpec {
  name: string;
  associatedDeity: string;
  purpose: string;
  consecrationDirection: string;
  metalPlate: string;
}

export const YANTRA_CATALOG: Record<string, YantraSpec> = {
  ShriYantra: {
    name: 'Shri Yantra (Mahameru)',
    associatedDeity: 'Goddess Tripurasundari',
    purpose: 'Universal abundance, harmonic prosperity, spiritual and material synthesis',
    consecrationDirection: 'North-East / East altar',
    metalPlate: 'Gold-plated Copper'
  },
  MahamrityunjayaYantra: {
    name: 'Maha Mrityunjaya Yantra',
    associatedDeity: 'Lord Shiva',
    purpose: 'Protection against chronic illnesses, accidents, and sudden misfortunes',
    consecrationDirection: 'North facing',
    metalPlate: 'Silver / Copper'
  },
  KuberYantra: {
    name: 'Kuber Yantra',
    associatedDeity: 'Lord Kubera',
    purpose: 'Treasury protection, sudden financial inflows, debt clearance',
    consecrationDirection: 'North altar facing South',
    metalPlate: 'Brass'
  },
  SuryaYantra: {
    name: 'Surya Yantra',
    associatedDeity: 'Lord Surya',
    purpose: 'Fame, career elevation, fatherly blessings, immune vitality',
    consecrationDirection: 'East',
    metalPlate: 'Pure Copper'
  }
};
