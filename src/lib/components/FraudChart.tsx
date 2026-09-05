"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function FraudChart({
  data,
}: {
  data: any[];
}) {
  const countryMap: Record<string, any> = {};

  data.forEach((item) => {
    const country = item.country?.toUpperCase();

    if (!countryMap[country]) {
      countryMap[country] = {
        country,
        totalFraud: 0,
        count: 0,
      };
    }

    countryMap[country].totalFraud += item.fraud_score;
    countryMap[country].count += 1;
  });

  const chartData = Object.values(countryMap).map(
    (c: any) => ({
      country: c.country,
      fraudScore: Math.round(
        c.totalFraud / c.count
      ),
    })
  );

  return (
    <div
      style={{
        background: "#080808",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "2rem",
        }}
      >
        📈 Fraud Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#222"
          />

          <XAxis
            dataKey="country"
            stroke="#888"
          />

          <YAxis stroke="#888" />

          <Tooltip
            contentStyle={{
              background: "#111",
              border: "1px solid #333",
            }}
          />

          <Bar
            dataKey="fraudScore"
            fill="#ef4444"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
