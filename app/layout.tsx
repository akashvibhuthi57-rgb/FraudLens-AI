import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FraudLens AI",
  description: "AI-Powered Fraud Detection & Payment Routing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #222",
            background: "#080808",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.5rem",
            }}
          >
            🛡 FraudLens AI
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link
              href="/analyze"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Analyze
            </Link>

            <Link
              href="/dashboard"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Link>

            <Link
              href="/architecture"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Architecture
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}