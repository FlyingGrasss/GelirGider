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
}: {
  name: string;
  title: string | null;
  title2: string | null;
  phone: string | null;
  email: string | null;
  url: string;
  fullWidth: boolean;
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
    <button type="button" onClick={downloadContact} className={`profile-button ${fullWidth ? "profile-button-wide" : "profile-button-normal"}`}>
      <span className="profile-button-icon"><FaAddressBook /></span>
      <span>Kişilere Ekle</span>
    </button>
  );
}
