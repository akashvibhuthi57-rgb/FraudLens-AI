"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#9333ea", "#22c55e"];

export default function GatewayChart({
  data,
}: {
  data: any[];
}) {
  const gatewayData = Object.values(
    data.reduce((acc: any, t: any) => {
      if (!acc[t.recommended_gateway]) {
        acc[t.recommended_gateway] = {
          name: t.recommended_gateway,
          value: 0,
        };
      }

      acc[t.recommended_gateway].value++;
      return acc;
    }, {})
  );

  return (
    <div
      style={{
        background: "#080808",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2>💳 Gateway Distribution</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={gatewayData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {gatewayData.map((_: any, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}