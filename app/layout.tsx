import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Ambient glow orbs behind everything */}
        <div
          className="orb"
          style={{
            width: 480,
            height: 480,
            top: "-10%",
            left: "-10%",
            background: "rgba(99, 102, 241, 0.18)",
          }}
        />
        <div
          className="orb"
          style={{
            width: 420,
            height: 420,
            top: "30%",
            right: "-12%",
            background: "rgba(56, 189, 248, 0.12)",
          }}
        />
        <div
          className="orb"
          style={{
            width: 380,
            height: 380,
            bottom: "-8%",
            left: "20%",
            background: "rgba(139, 92, 246, 0.12)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
