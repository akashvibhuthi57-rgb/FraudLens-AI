export function getGatewaySuccessRate(gateway: string) {
  const stats: Record<string, number> = {
    Razorpay: 68,
    PayPal: 87,
    Stripe: 91,
    PayGlocal: 84,
  };

  return stats[gateway] || 75;
}