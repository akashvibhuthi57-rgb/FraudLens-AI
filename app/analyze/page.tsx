"use client";

import { useState } from "react";
import { calculateFraudScore } from "@/src/lib/fraudEngine";
import { calculateFailureRisk } from "@/src/lib/failurePredictor";
import { recommendGateway } from "@/src/lib/routingEngine";
import { supabase } from "@/src/lib/supabase";
import AgentTimeline from "@/app/components/AgentTimeline";

export default function AnalyzePage() {
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [cardBin, setCardBin] = useState("");
  const [device, setDevice] = useState("");

  const [result, setResult] = useState<any>(null);
  const [aiExplanation, setAiExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeTransaction = async () => {
    setLoading(true);
    setAiExplanation("");

    const fraudScore = calculateFraudScore(
      Number(amount),
      country,
      device
    );

    const failureRisk = calculateFailureRisk(
      country,
      currency,
      cardBin
    );

    const gateway = recommendGateway(failureRisk);

    setResult({
      fraudScore,
      failureRisk,
      gateway,
    });

    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `
        Amount: ${amount}
        Country: ${country}
        Currency: ${currency}
        Card BIN: ${cardBin}
        Device: ${device}

        Fraud Score: ${fraudScore}
        Failure Risk: ${failureRisk}
        Recommended Gateway: ${gateway}
          `,
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);

      const explanation =
        data.response ||
        data.error ||
        "No explanation returned";

      const { error } = await supabase
        .from("transactions")
        .insert([
          {
            amount: Number(amount),
            country,
            currency,
            card_bin: cardBin,
            device,
            fraud_score: fraudScore,
            failure_score: failureRisk,
            recommended_gateway: gateway,
            ai_explanation: explanation,
          },
        ]);

      console.log("Supabase Error:", error);

      setAiExplanation(explanation);
    } catch (err) {
      console.error(err);
      setAiExplanation(
        "AI explanation unavailable."
      );
    }

    setLoading(false);
  };

  return (
  <main
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#030712 0%,#111827 50%,#0f172a 100%)",
      color: "#fff",
      padding: "40px",
    }}
  >
      <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          🛡️ FraudLens AI
        </h1>
      <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          AI-powered fraud detection & payment routing
        </p>

      <br />

      <a
        href="/dashboard"
        style={{
        display: "inline-block",
        background:
          "linear-gradient(135deg,#7c3aed,#4f46e5)",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
      >
        Open Dashboard →
      </a>

      <h2
        style={{
          marginTop: "30px",
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#60a5fa",
        }}
      >
        🚀 Transaction Analyzer
      </h2>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "1rem",
        }}
      />

      

      <input
        placeholder="Country"
        value={country}
        onChange={(e) =>
          setCountry(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "1rem",
        }}
      />

      

      <input
        placeholder="Currency"
        value={currency}
        onChange={(e) =>
          setCurrency(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "1rem",
        }}
      />

     

      <input
        placeholder="Card BIN"
        value={cardBin}
        onChange={(e) =>
          setCardBin(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "1rem",
        }}
      />

      

      <input
        placeholder="Device"
        value={device}
        onChange={(e) =>
          setDevice(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "1rem",
        }}
      />

      
      <button
        onClick={analyzeTransaction}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "16px",
          border: "none",
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow:
            "0 10px 30px rgba(37,99,235,0.35)",
        }}
      >
        🚀 Analyze Transaction
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
            }}
          >
            📊 Analysis Results
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div style={resultCard}>
              <h2>{result.fraudScore}</h2>
              <p>Fraud Score</p>
            </div>

            <div style={resultCard}>
              <h2>{result.failureRisk}%</h2>
              <p>Failure Risk</p>
            </div>

            <div style={resultCard}>
              <h2>{result.gateway}</h2>
              <p>Gateway</p>
            </div>
          </div>

          <AgentTimeline
            fraudScore={result.fraudScore}
            failureRisk={result.failureRisk}
            gateway={result.gateway}
          />

          <div
  style={{
    marginTop: "30px",
    background:
      "linear-gradient(135deg,#111827,#1e293b)",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
  }}
>
        <h3
          style={{
            marginBottom: "15px",
            color: "#60a5fa",
          }}
        >
          🤖 AI Decision Engine
        </h3>

        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          {loading
            ? "Generating AI analysis..."
            : aiExplanation}
        </div>
      </div>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#111",
              color: "#fff",
            }}
          >
            {loading
              ? "Generating AI analysis..."
              : aiExplanation}
          </pre>
        </div>
      )}
      </div>
    </main>
  );
}
const resultCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center" as const,
};