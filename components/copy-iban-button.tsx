"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa6";

function formatIban(iban: string) {
  return iban.replace(/(.{4})/g, "$1 ").trim();
}

export function CopyIbanButton({ iban }: { iban: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function copyIban() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(iban);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = iban;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copiedWithFallback = document.execCommand("copy");
        textarea.remove();

        if (!copiedWithFallback) {
          throw new Error("Clipboard fallback failed");
        }
      }

      setFailed(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      setFailed(true);
    }
  }

  return (
    <button type="button" onClick={copyIban} className="profile-button profile-button-wide profile-iban-button">
      <span className="profile-button-icon" aria-hidden="true">
        {copied ? <FaCheck /> : <FaCopy />}
      </span>
      <span className="profile-iban-content">
        <span className="profile-iban-label">IBAN</span>
        <span className="profile-iban-value">{formatIban(iban)}</span>
        <span className={failed ? "profile-iban-status profile-iban-status-error" : "profile-iban-status"}>
          {copied ? "Kopyalandı" : failed ? "Kopyalanamadı, tekrar deneyin" : "Kopyalamak için dokun"}
        </span>
      </span>
    </button>
  );
}
