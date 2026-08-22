/**
 * 36 Drekkana Faces (Decanates):
 * Ayudha (Armed with weapons), Pakshi (Bird/Agility), Sarpa (Serpent/Wisdom),
 * Chatushpada (Quadruped/Stamina), Varaha (Boar/Grounding).
 */

export function getDrekkanaNature(signIndex: number, decanate1to3: number): string {
  const archetypes = ['Ayudha (Valor & Defense)', 'Sarpa (Deep Intuition)', 'Pakshi (Intellectual Flight & Vision)'];
  return archetypes[(signIndex + decanate1to3) % 3];
}
