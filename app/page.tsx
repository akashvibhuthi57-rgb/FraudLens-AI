export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#030712 0%,#111827 50%,#0f172a 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "12px",
          }}
        >
          <a href="/login">
            <button
              style={{
                padding: "10px 18px",
                borderRadius: "10px",
                border: "none",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </a>

          <a href="/signup">
            <button
              style={{
                padding: "10px 18px",
                borderRadius: "10px",
                border: "none",
                background: "#16a34a",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </a>
        </div>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        🛡️ FraudLens AI
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#94a3b8",
          maxWidth: "700px",
          marginBottom: "50px",
        }}
      >
        AI-Powered Fraud Detection, Payment Routing &
        Revenue Recovery Platform
      </p>

      {/* Features */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          maxWidth: "900px",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        {[
          "🛡 Fraud Detection Agent",
          "📉 Failure Prediction Agent",
          "🔀 Smart Gateway Routing",
          "💰 Revenue Recovery AI",
          "🤖 Risk Manager Agent",
          "⚡ Real-Time Intelligence",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              padding: "20px",
              borderRadius: "18px",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a href="/login">
          <button
            style={{
              padding: "15px 28px",
              borderRadius: "14px",
              border: "none",
              background:
                "linear-gradient(135deg,#2563eb,#1d4ed8)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🚀 Analyze Transaction
          </button>
        </a>

        <a href="/dashboard">
          <button
            style={{
              padding: "15px 28px",
              borderRadius: "14px",
              border: "none",
              background:
                "linear-gradient(135deg,#9333ea,#7e22ce)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📊 Dashboard
          </button>
        </a>

        <a href="/architecture">
          <button
            style={{
              padding: "15px 28px",
              borderRadius: "14px",
              border: "none",
              background:
                "linear-gradient(135deg,#059669,#047857)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🏗 Architecture
          </button>
        </a>
      </div>
    </main>
  );
}