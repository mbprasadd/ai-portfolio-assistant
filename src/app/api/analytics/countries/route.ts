import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data, error } = await supabase
    .from("visitors")
    .select("country");

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  const grouped: Record<string, number> = {};

  data.forEach((item) => {
    const country = item.country || "Unknown";

    grouped[country] = (grouped[country] || 0) + 1;
  });

  const result = Object.entries(grouped)
    .map(([country, visitors]) => ({
      country,
      visitors,
    }))
    .sort((a, b) => b.visitors - a.visitors);

  return NextResponse.json({
    success: true,
    data: result,
  });
}