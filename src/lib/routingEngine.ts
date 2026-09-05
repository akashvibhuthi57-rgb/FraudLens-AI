export function recommendGateway(failureRisk: number) {
  if (failureRisk > 70) return "PayGlocal";
  if (failureRisk > 50) return "PayPal";

  return "Razorpay";
}