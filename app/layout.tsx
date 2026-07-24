import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFC Solutions Turkey",
  description: "Temassız iletişim ve dijital profil çözümleri",
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
