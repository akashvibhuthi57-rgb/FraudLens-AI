export default function ArchitecturePage() {
  const agents = [
    "Customer Checkout",
    "Fraud Agent",
    "Failure Prediction Agent",
    "Gateway Routing Agent",
    "Revenue Recovery Agent",
    "Risk Manager Agent",
    "Gemini AI Layer",
    "Supabase Analytics",
    "Merchant Dashboard",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "10px",
        }}
      >
        🏗 FraudLens AI Architecture
      </h1>

      <p
        style={{
          color: "#888",
          marginBottom: "50px",
        }}
      >
        Multi-Agent Payment Intelligence Pipeline
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        {agents.map((agent, index) => (
          <div key={agent}>
            <div
              style={{
                background: "#080808",
                border: "1px solid #222",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
                boxShadow:
                  "0 0 20px rgba(255,255,255,0.05)",
              }}
            >
              {agent}
            </div>

            {index < agents.length - 1 && (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  margin: "10px 0",
                  color: "#60a5fa",
                }}
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}