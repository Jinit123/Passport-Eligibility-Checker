export function calculateScore(
  nameMatch: boolean,
  dobMatch: boolean,
  addressProof: boolean,
  dobProof: boolean
) {
  let score = 0;

  if (nameMatch) score += 25;
  if (dobMatch) score += 25;
  if (addressProof) score += 25;
  if (dobProof) score += 25;

  return score;
}