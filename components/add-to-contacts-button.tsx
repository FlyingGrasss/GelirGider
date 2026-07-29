"use client";

import { FaAddressBook } from "react-icons/fa6";
import { escapeVCard } from "@/lib/profile";

export function AddToContactsButton({
  name,
  title,
  title2,
  phone,
  email,
  url,
  fullWidth,
  theme,
}: {
  name: string;
  title: string | null;
  title2: string | null;
  phone: string | null;
  email: string | null;
  url: string;
  fullWidth: boolean;
  theme: { surface: string; wideSurface: string; border: string };
}) {
  function downloadContact() {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCard(name)}`,
      `TITLE:${escapeVCard([title, title2].filter(Boolean).join(" / "))}`,
      phone ? `TEL;TYPE=CELL:${escapeVCard(phone)}` : "",
      email ? `EMAIL:${escapeVCard(email)}` : "",
      `URL:${escapeVCard(url)}`,
      "END:VCARD",
    ].filter(Boolean);
    const blob = new Blob([`${lines.join("\r\n")}\r\n`], { type: "text/vcard;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    const safeFileName = name
      .trim()
      .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "")
      .replace(/\.+$/, "") || "Kişi";
    link.download = `${safeFileName}.vcf`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
  }

  return (
    <button
      type="button"
      onClick={downloadContact}
      className={`flex min-h-24 items-center justify-center gap-3 rounded-2xl border px-4 text-base font-medium text-slate-50 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2),0_14px_30px_rgb(0_0_0_/_0.16)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 sm:text-lg ${fullWidth ? "col-span-2" : ""}`}
      style={{ background: fullWidth ? theme.wideSurface : theme.surface, borderColor: theme.border }}
    >
      <span className="grid min-h-10 min-w-12 place-items-center border-r border-white/25 pr-4 text-2xl" aria-hidden="true"><FaAddressBook /></span>
      <span>Kişilere Ekle</span>
    </button>
  );
}
