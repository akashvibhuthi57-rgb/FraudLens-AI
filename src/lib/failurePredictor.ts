export function calculateFailureRisk(
  country: string,
  currency: string,
  cardBin: string
) {
  let score = 0;

  if (country !== "India") score += 30;
  if (currency !== "INR") score += 25;
  if (cardBin.startsWith("4")) score += 15;

  return Math.min(score, 100);
}