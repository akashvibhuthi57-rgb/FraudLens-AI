export function calculateFraudScore(
  amount: number,
  country: string,
  device: string
) {
  let score = 0;

  if (amount > 50000) score += 30;
  if (country !== "India") score += 20;
  if (device === "Unknown") score += 25;

  return Math.min(score, 100);
}