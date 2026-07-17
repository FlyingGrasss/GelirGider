import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gelir Gider",
  description: "Kişisel gelir ve gider takip alanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
