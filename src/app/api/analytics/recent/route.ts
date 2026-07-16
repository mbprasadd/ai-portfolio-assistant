import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data, error } = await supabase
    .from("visitors")
    .select(`
      visitor_id,
      country,
      city,
      browser,
      os,
      device,
      current_page,
      total_visits,
      last_visit
    `)
    .order("last_visit", { ascending: false })
    .limit(20);

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    data,
  });
}