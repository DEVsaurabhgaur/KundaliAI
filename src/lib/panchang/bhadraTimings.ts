/**
 * Bhadra (Vishti Karana) Dwelling & Auspicious Tail (Puchha) Engine
 * Location of Bhadra (Bhadra Vas):
 * - Swarga Loka (Heaven): Moon in Aries, Taurus, Gemini, Scorpio -> Auspicious for Earth
 * - Patala Loka (Netherworld): Moon in Kanya, Tula, Dhanu, Makara -> Wealth/Gain on Earth
 * - Mrityu Loka (Earth): Moon in Cancer, Leo, Aquarius, Pisces -> Inauspicious for Earth undertakings
 */

export interface BhadraAnalysis {
  isBhadraActive: boolean;
  bhadraVas: 'Swarga Loka' | 'Patala Loka' | 'Mrityu Loka';
  isHarmfulOnEarth: boolean;
  bhadraPuchhaWindow: string;
}

export function evaluateBhadra(moonSignIndex: number, isVishtiKarana: boolean): BhadraAnalysis {
  let vas: BhadraAnalysis['bhadraVas'] = 'Swarga Loka';
  let harmful = false;

  // 0=Aries, 1=Taurus, 2=Gemini, 3=Cancer, 4=Leo, 5=Virgo, 6=Libra, 7=Scorpio, 8=Sag, 9=Cap, 10=Aqua, 11=Pisces
  if ([3, 4, 10, 11].includes(moonSignIndex)) {
    vas = 'Mrityu Loka';
    harmful = isVishtiKarana;
  } else if ([5, 6, 8, 9].includes(moonSignIndex)) {
    vas = 'Patala Loka';
    harmful = false;
  } else {
    vas = 'Swarga Loka';
    harmful = false;
  }

  return {
    isBhadraActive: isVishtiKarana,
    bhadraVas: vas,
    isHarmfulOnEarth: harmful,
    bhadraPuchhaWindow: 'Final 5 Ghatis (2 hours) of Bhadra period acts as auspicious Bhadra Puchha.'
  };
}
