export default function AgentTimeline({
  fraudScore,
  failureRisk,
  gateway,
}: {
  fraudScore: number;
  failureRisk: number;
  gateway: string;
}) {
    const recoveredRevenue =
    failureRisk >= 50 ? 70000 : 0;

  const action =
    fraudScore >= 70
      ? "REVIEW"
      : fraudScore >= 50
      ? "MONITOR"
      : "APPROVE";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #444",
        borderRadius: "10px",
      }}
    >
      <h2>Agent Timeline</h2>

      <p>🛡 Fraud Agent → Score {fraudScore}</p>

      <p>📉 Failure Agent → Risk {failureRisk}%</p>

      <p>🔀 Routing Agent → Selected {gateway}</p>
      
      <p>💰 Revenue Recovery Agent →Potential Recovery ${recoveredRevenue}</p>

      <p>🤖 Risk Manager Agent → {action}</p>
    </div>
  );
}
