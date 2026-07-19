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
  title: string;
  title2: string | null;
  phone: string | null;
  email: string | null;
  url: string;
  fullWidth: boolean;
}) {
  const contactTitle = [title, title2].filter(Boolean).join(" / ");

  function downloadContact() {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCard(name)}`,
      `TITLE:${escapeVCard(contactTitle)}`,
      phone ? `TEL;TYPE=CELL:${escapeVCard(phone)}` : "",
      email ? `EMAIL:${escapeVCard(email)}` : "",
      `URL:${escapeVCard(url)}`,
      "END:VCARD",
    ].filter(Boolean);
    const blob = new Blob([`${lines.join("\r\n")}\r\n`], { type: "text/vcard;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase() || "kontakt"}.vcf`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
  }

  function addToContacts() {
    if (!/Android/i.test(window.navigator.userAgent)) {
      downloadContact();
      return;
    }

    const extras = [
      `S.name=${encodeURIComponent(name)}`,
      phone ? `S.phone=${encodeURIComponent(phone)}` : "",
      email ? `S.email=${encodeURIComponent(email)}` : "",
      contactTitle ? `S.job_title=${encodeURIComponent(contactTitle)}` : "",
    ].filter(Boolean).join(";");

    // Chrome on Android can hand this user-initiated intent to the Contacts app.
    // The form opens pre-filled, so the user can review and save the contact.
    window.location.href = `intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/contact;${extras};end`;
  }

  return (
    <button type="button" onClick={addToContacts} className={`profile-button ${fullWidth ? "profile-button-wide" : "profile-button-normal"}`}>
      <span className="profile-button-icon"><FaAddressBook /></span>
      <span>Kişilere Ekle</span>
    </button>
  );
}
