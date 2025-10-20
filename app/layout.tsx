import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PatternForge - Master Chart Patterns",
  description: "Master chart patterns with AI-powered training and real-time alerts",
  openGraph: {
    title: "PatternForge - Master Chart Patterns",
    description: "Learn chart pattern recognition through gamified drills and get real-time alerts on your watchlist.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
