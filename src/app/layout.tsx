import { VisitorTracker } from "@/components/VisitorTracker";
import "./globals.css";
import type { Metadata } from "next";

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
        {children}
        </body>
    </html>
  );
}