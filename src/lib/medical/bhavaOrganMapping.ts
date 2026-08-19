/**
 * 12 Houses to Anatomical Organ Mapping (Medical Astrology)
 */

export const BHAVA_ORGANS: Record<number, string> = {
  1: 'Head, cranium, brain, facial symmetry, vital stamina.',
  2: 'Eyes, throat, vocal cords, teeth, tongue, tonsils.',
  3: 'Shoulders, arms, hands, clavicles, respiratory lungs.',
  4: 'Chest, breast tissue, ribs, heart chambers, diaphragm.',
  5: 'Upper stomach, liver, pancreas, spleen, solar plexus.',
  6: 'Lower abdomen, intestines, appendix, kidney filtration.',
  7: 'Urogenital tract, lumbar spine, pelvic cavity.',
  8: 'Excretory organs, chronic resilience, reproductive tissue.',
  9: 'Hips, thighs, sciatic nerve, arterial system.',
  10: 'Knees, skeleton, patella bones, joints.',
  11: 'Calf muscles, ankles, circulation, lymphatic flow.',
  12: 'Feet, toes, left eye, lymphatic drainage, immune rest.'
};

export function getOrganForHouse(houseNum: number): string {
  return BHAVA_ORGANS[houseNum] || 'General bodily vitality.';
}
