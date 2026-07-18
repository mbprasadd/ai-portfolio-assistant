import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


// GET 
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required." },
        { status: 400 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      null;

    const userAgent = req.headers.get("user-agent");

    const referer = req.headers.get("referer");

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
        ip_address: ip,
        user_agent: userAgent,
        referrer: referer,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Database error." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}