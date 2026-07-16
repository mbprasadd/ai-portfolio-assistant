import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { UAParser } from "ua-parser-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Get Visitor IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =forwarded?.split(",")[0] || req.headers.get("x-real-ip") ||"::1";

    // Get Location
    let geo: any = {};
    if (ip !== "::1" && ip !== "127.0.0.1") {
      try {
        const res = await fetch(`https://ipapi.co/${ip}/json/`);
        geo = await res.json();
      } catch {
        geo = {};
      }
    }

    // Parse Browser
    const parser = new UAParser(body.user_agent);
    const browser = parser.getBrowser();
    const os = parser.getOS();

    // Check Existing Visitor
    const { data, error: findError } = await supabase
      .from("visitors")
      .select("*")
      .eq("visitor_id", body.visitor_id)
      .limit(1);
    const existingVisitor = data?.[0] ?? null;

    
    if (existingVisitor) {
      // UPDATE EXISTING VISITOR
      const { error } = await supabase
        .from("visitors")
        .update({
          last_visit: new Date().toISOString(),
          total_visits: existingVisitor.total_visits + 1,
          ip,
          city: geo.city ?? null,
          region: geo.region ?? null,
          country: geo.country_name ?? null,
          browser: browser.name,
          browser_version: browser.version,
          os: `${os.name} ${os.version ?? ""}`,
          device: body.device,
          language: body.language,
          timezone: body.timezone,
          screen_width: body.screen_width,
          screen_height: body.screen_height,
          current_page: body.current_page,
          referrer: body.referrer,
          user_agent: body.user_agent,
        })
        .eq("visitor_id", body.visitor_id);

      if (error) {
        return NextResponse.json(
          {
            success: false,
            error: error.message,
          },
          { status: 500 }
        );
      }
    } else {

      // INSERT NEW VISITOR
      const visitor = {
        visitor_id: body.visitor_id,
        ip,
        city: geo.city ?? null,
        region: geo.region ?? null,
        country: geo.country_name ?? null,
        browser: browser.name,
        browser_version: browser.version,
        os: `${os.name} ${os.version ?? ""}`,
        device: body.device,
        language: body.language,
        timezone: body.timezone,
        screen_width: body.screen_width,
        screen_height: body.screen_height,
        current_page: body.current_page,
        referrer: body.referrer,
        user_agent: body.user_agent,
      };

      const { error } = await supabase
        .from("visitors")
        .insert(visitor);

      if (error) {
        return NextResponse.json(
          {
            success: false,
            error: error.message,
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}