export default function KPICard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}
