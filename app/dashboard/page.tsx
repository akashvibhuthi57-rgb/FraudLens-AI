import { supabase } from "@/src/lib/supabase";
import FraudChart from "@/src/lib/components/FraudChart";
import GatewayChart from "@/src/lib/components/GatewayChart";
import DeleteButton from "@/src/lib/components/DeleteButton";
import EditButton from "@/src/lib/components/EditButton";
import { redirect } from "next/navigation";
import LogoutButton from "@/src/lib/components/LogoutButton";

export const revalidate = 5;

async function getTransactions() {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function Dashboard() {
  const transactions = await getTransactions();

  const total = transactions.length;

  const highRisk = transactions.filter(
    (t: any) => t.fraud_score >= 70
  ).length;

  const revenueRecovered = transactions
    .filter((t: any) => t.failure_score >= 50)
    .reduce(
      (sum: number, t: any) => sum + Number(t.amount || 0),
      0
    );

  const gatewayStats = transactions.reduce(
    (acc: any, t: any) => {
      acc[t.recommended_gateway] =
        (acc[t.recommended_gateway] || 0) + 1;
      return acc;
    },
    {}
  );

  const topGateway =
    Object.keys(gatewayStats).sort(
      (a, b) => gatewayStats[b] - gatewayStats[a]
    )[0] || "N/A";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:"linear-gradient(135deg,#030712 0%,#111827 50%,#0f172a 100%)",
        maxWidth: "1600px",
        margin: "0 auto",
        color: "#fff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            🛡️ FraudLens AI
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.2rem",
            }}
          >
            Real-time fraud intelligence & payment optimization
          </p>
        </div>

  <div
  style={{
    display: "flex",
    gap: "12px",
  }}
>
  <a
    href="/"
    style={{
      background:
        "linear-gradient(135deg,#2563eb,#1d4ed8)",
      padding: "14px 24px",
      borderRadius: "14px",
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    ➕ Analyze Transaction
  </a>

  <LogoutButton />
</div>
</div>
        {/* KPI CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
            marginBottom: "40px",
          }}
        >
          <div style={cardStyle}>
            <h2 style={cardNumber}>{total}</h2>
            <p style={cardText}>📊 Total Transactions</p>
          </div>

          <div style={cardStyle}>
            <h2 style={cardNumber}>{highRisk}</h2>
            <p style={cardText}>🚨 High Risk Payments</p>
          </div>

          <div style={cardStyle}>
            <h2 style={cardNumber}>
              ₹{revenueRecovered.toLocaleString()}
            </h2>
            <p style={cardText}>
              💰 Revenue Recovery Potential
            </p>
          </div>
        </div>

<div
  style={{
    background:
      "linear-gradient(135deg,#111827,#1e293b)",
    padding: "35px",
    borderRadius: "24px",
    marginTop: "30px",
    marginBottom: "30px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  }}
>
  <h2
    style={{
      marginBottom: "20px",
      fontSize: "2rem",
    }}
  >
    🧠 AI Intelligence Center
  </h2>

  <p>
    🚨 High-risk transactions:{" "}
    <strong>{highRisk}</strong>
  </p>

  <p>
    💰 Recovery opportunity:{" "}
    <strong>
      ₹{revenueRecovered.toLocaleString()}
    </strong>
  </p>

  <p>
    💳 Top gateway:{" "}
    <strong>{topGateway}</strong>
  </p>
</div>
<div style={{ height: "30px" }} />
      {/* TABLE */}
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "2rem",
        }}
      >
        Recent Transactions
      </h2>

      <div
        style={{
          overflowX: "auto",
          borderRadius: "16px",
          border: "1px solid #222",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "#0d0d0d",
            }}
          >
            <tr>
              <th style={headerStyle}>Country</th>
              <th style={headerStyle}>Amount</th>
              <th style={headerStyle}>Fraud Score</th>
              <th style={headerStyle}>Failure Risk</th>
              <th style={headerStyle}>Gateway</th>
              <th style={headerStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t: any) => (
                <tr
                key={t.id}
                style={{
                    borderBottom: "1px solid #222",
                }}
                >
                {/* Country */}
                <td style={cellStyle}>
                    {t.country || "N/A"}
                </td>

                {/* Amount */}
                <td style={cellStyle}>
                    ₹{Number(t.amount).toLocaleString()}
                </td>

                {/* Fraud Score */}
                <td style={cellStyle}>
                    <span
                    style={{
                        background:
                        t.fraud_score >= 70
                            ? "#ef4444"
                            : t.fraud_score >= 40
                            ? "#f59e0b"
                            : "#22c55e",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "999px",
                        fontWeight: "bold",
                    }}
                    >
                    {t.fraud_score}
                    </span>
                </td>

                {/* Failure Risk */}
                <td style={cellStyle}>
                    <span
                    style={{
                        background:
                        t.failure_score >= 70
                            ? "#ef4444"
                            : t.failure_score >= 40
                            ? "#f59e0b"
                            : "#22c55e",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "999px",
                        fontWeight: "bold",
                    }}
                    >
                    {t.failure_score}%
                    </span>
                </td>

                {/* Gateway */}
                <td style={cellStyle}>
                    <span
                    style={{
                        background:
                        t.recommended_gateway === "PayPal"
                            ? "#2563eb"
                            : "#9333ea",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "999px",
                        fontWeight: "bold",
                    }}
                    >
                    {t.recommended_gateway}
                    </span>
                </td>

                <td style={cellStyle}>
                <div
                    style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    }}
                >
                    <EditButton id={t.id} />
                    <DeleteButton id={t.id} />
                </div>
                </td>
                
                </tr>
            ))}
            </tbody>
        </table>
      </div>

      {/* CHARTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <FraudChart data={transactions} />
        <GatewayChart data={transactions} />
      </div>
    </main>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "35px",
  borderRadius: "24px",
  textAlign: "center" as const,
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const cardNumber = {
  fontSize: "3.2rem",
  fontWeight: "bold",
  color: "#60a5fa",
};

const cardText = {
  fontSize: "1.1rem",
  color: "#cbd5e1",
};

const headerStyle = {
  padding: "20px",
  textAlign: "left" as const,
  fontSize: "1rem",
  color: "#60a5fa",
  fontWeight: "bold",
  letterSpacing: "0.5px",
};

const cellStyle = {
  padding: "18px",
  fontSize: "1rem",
  color: "#e5e7eb",
};