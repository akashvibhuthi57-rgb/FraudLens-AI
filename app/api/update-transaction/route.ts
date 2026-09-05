import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabase";

export async function PUT(req: Request) {
  try {
    const { id, country, amount } = await req.json();

    const { error } = await supabase
      .from("transactions")
      .update({
        country,
        amount,
      })
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: "Update failed",
      },
      { status: 500 }
    );
  }
}