"use client";

import { useRouter } from "next/navigation";

export default function EditButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/edit/${id}`)}
      style={{
        background: "#2563eb",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      ✏️ Edit
    </button>
  );
}