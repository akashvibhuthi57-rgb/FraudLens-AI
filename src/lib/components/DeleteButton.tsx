"use client";

export default function DeleteButton({
  id,
}: {
  id: string;
}) {
  const deleteTransaction = async () => {
    const confirmed = confirm(
      "Delete this transaction permanently?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(
        "/api/delete-transaction",
        {
          method: "DELETE",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        alert(
          data.error ||
            "Failed to delete transaction"
        );
        return;
      }

      alert("Transaction deleted");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while deleting"
      );
    }
  };

  return (
    <button
      onClick={deleteTransaction}
      style={{
        background: "#dc2626",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      🗑 Delete
    </button>
  );
}