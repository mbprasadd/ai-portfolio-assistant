import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { VisitorTracker } from "@/components/VisitorTracker";

import "./globals.css";
import type { Metadata } from "next";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Bhanu Prasad Portfolio.Ai",
  description: "AI Portfolio Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <VisitorTracker />

          {/* NAVBAR */}
          <Navbar />

          <div className="min-h-[100vh] m-auto">
            {children}
          </div>
          
          {/* FOOTER & FLOATING WHATSAPP + EMAIL */}
          <Footer />

          {/* Floating Chat Widget */}
          <ChatWidget />
        </body>
    </html>
  );
}