import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {
  try {
    // Fetch visitors
    const { data, error } = await supabase.from("visitors").select("*");

    // Handle error
    if (error) {
        return NextResponse.json(
            {
            success: false,
            error: error.message,
            },
            { status: 500 }
        );
    }

    // Calculate statistics
    const totalVisitors = data.length;
    const totalVisits = data.reduce((sum, visitor) => sum + visitor.total_visits, 0);
    const mobileVisitors = data.filter( visitor => visitor.device === "Mobile").length;
    const desktopVisitors = data.filter(visitor => visitor.device === "Desktop").length;
    // Today's visitors
    const today = new Date().toISOString().split("T")[0];
    const todayVisitors = data.filter(visitor => visitor.created_at.startsWith(today)).length;

    // Return JSON
    return NextResponse.json({
        success: true,
        stats: {
            totalVisitors,
            totalVisits,
            todayVisitors,
            mobileVisitors,
            desktopVisitors,
        },
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}