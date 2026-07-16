import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("visitors")
    .select("browser");

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  const grouped: Record<string, number> = {};

  data.forEach((item) => {
    const browser = item.browser || "Unknown";
    grouped[browser] = (grouped[browser] || 0) + 1;
  });

  const result = Object.entries(grouped)
    .map(([browser, visitors]) => ({
      browser,
      visitors,
    }))
    .sort((a, b) => b.visitors - a.visitors);

  return NextResponse.json({
    success: true,
    data: result,
  });
}