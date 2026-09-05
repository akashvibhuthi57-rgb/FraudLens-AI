import { NextResponse } from "next/server";
import { model } from "@/src/lib/gemini";

export async function POST(req: Request) {
  try {
    console.log("AI route called");

    const { text } = await req.json();

    const result = await model.generateContent(
      `Explain this payment transaction:\n${text}`
    );

    console.log("Gemini response received");
    

    return NextResponse.json({
      success: true,
      response: result.response.text(),
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Gemini failed",
      },
      { status: 500 }
    );
  }
}