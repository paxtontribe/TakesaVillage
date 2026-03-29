import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takes a Village — Verified Substance Abuse Treatment Transparency",
  description:
    "A nonprofit platform making substance abuse treatment radically transparent. No pay-to-rank. No hidden agendas. Real reviews from real people.",
  openGraph: {
    title: "Takes a Village — Verified Substance Abuse Treatment Transparency",
    description:
      "A nonprofit platform making substance abuse treatment radically transparent. No pay-to-rank. No hidden agendas. Real reviews from real people.",
    url: "https://takesavillage.health",
    siteName: "Takes a Village",
    images: [
      {
        url: "https://takesavillage.health/og-image.png",
        width: 1200,
        height: 630,
        alt: "Takes a Village — Verified Substance Abuse Treatment Transparency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takes a Village — Verified Substance Abuse Treatment Transparency",
    description:
      "A nonprofit platform making substance abuse treatment radically transparent. No pay-to-rank. No hidden agendas. Real reviews from real people.",
    images: ["https://takesavillage.health/og-image.png"],
  },
  metadataBase: new URL("https://takesavillage.health"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
