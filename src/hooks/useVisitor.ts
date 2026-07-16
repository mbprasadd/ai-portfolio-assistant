"use client";

import { useEffect } from "react";

export default function useVisitor() {

  useEffect(() => {
    
    async function saveVisitor() {

      let visitorId = localStorage.getItem("portfolio_visitor_id");

      if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem("portfolio_visitor_id", visitorId);
      }

      const data = {
        visitor_id: visitorId,
        device: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
        browser: navigator.userAgent,
        os: navigator.platform,
        current_page: window.location.pathname,
        referrer: document.referrer,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        user_agent: navigator.userAgent,
      };

      await fetch("/api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    saveVisitor();
  }, []);
}