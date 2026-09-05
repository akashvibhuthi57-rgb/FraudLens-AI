"use client";

import { supabase } from "@/src/lib/supabase";

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        background:
          "linear-gradient(135deg,#ef4444,#dc2626)",
        padding: "14px 24px",
        borderRadius: "14px",
        border: "none",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      🚪 Logout
    </button>
  );
}