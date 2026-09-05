import { supabase } from "@/src/lib/supabase";
import EditForm from "@/src/lib/components/EditForm";

async function getTransaction(id: string) {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const transaction = await getTransaction(id);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1>Edit Transaction</h1>

      <EditForm transaction={transaction} />
    </main>
  );
}