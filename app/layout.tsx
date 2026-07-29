import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteUrl } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NFC Solutions Turkey | Temassız deneyimler",
    template: "%s | NFC Solutions Turkey",
  },
  description: "NFC kartvizit, dijital kartvizit ve temassız iletişim çözümleri.",
  keywords: ["NFC kartvizit", "dijital kartvizit", "dijital profil", "NFC Solutions Turkey"],
  applicationName: "NFC Solutions Turkey",
  creator: "NFC Solutions Turkey",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "NFC Solutions Turkey",
    title: "NFC Solutions Turkey | Temassız deneyimler",
    description: "NFC kartvizit, dijital kartvizit ve temassız iletişim çözümleri.",
    images: [{ url: absoluteUrl("/icon.png"), width: 512, height: 512, alt: "NFC Solutions Turkey" }],
  },
  twitter: {
    card: "summary",
    title: "NFC Solutions Turkey | Temassız deneyimler",
    description: "NFC kartvizit, dijital kartvizit ve temassız iletişim çözümleri.",
    images: [absoluteUrl("/icon.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
