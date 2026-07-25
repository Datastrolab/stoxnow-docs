import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "stoxnow — Financial data for developers",
  description: "Python client for financial market data. Valuation metrics, revenue growth, and market cap time-series for 700+ tickers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
