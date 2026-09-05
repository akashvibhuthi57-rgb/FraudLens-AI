"use client";

import { useState } from "react";

export default function EditForm({
  transaction,
}: {
  transaction: any;
}) {
  const [country, setCountry] = useState(
    transaction.country || ""
  );

  const [amount, setAmount] = useState(
    transaction.amount || 0
  );

  const saveChanges = async () => {
    const res = await fetch(
      "/api/update-transaction",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: transaction.id,
          country,
          amount,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("✅ Updated Successfully");
      window.location.href = "/dashboard";
    } else {
      alert(data.error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        marginTop: "30px",
      }}
    >
      <label>Country</label>

      <input
        value={country}
        onChange={(e) =>
          setCountry(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
        }}
      />

      <label>Amount</label>

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(Number(e.target.value))
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
        }}
      />

      <button
        onClick={saveChanges}
        style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        💾 Save Changes
      </button>
    </div>
  );
}