"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa6";

function formatIban(iban: string) {
  return iban.replace(/(.{4})/g, "$1 ").trim();
}

export function CopyIbanButton({ iban, theme }: { iban: string; theme: { wideSurface: string; border: string } }) {
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
    <button
      type="button"
      onClick={copyIban}
      className="col-span-2 flex min-h-24 items-center justify-start gap-3 rounded-2xl border px-4 text-left text-base font-medium text-slate-50 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2),0_14px_30px_rgb(0_0_0_/_0.16)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 sm:text-lg"
      style={{ background: theme.wideSurface, borderColor: theme.border }}
    >
      <span className="grid min-h-10 min-w-12 place-items-center border-r border-white/25 pr-4 text-2xl" aria-hidden="true">
        {copied ? <FaCheck /> : <FaCopy />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-200/65">IBAN</span>
        <span className="mt-1 block break-all text-[clamp(0.8rem,2.4vw,1.05rem)] font-bold tracking-[0.08em]">{formatIban(iban)}</span>
        <span className={failed ? "mt-1 block text-[0.68rem] text-rose-200" : "mt-1 block text-[0.68rem] text-slate-200/60"}>
          {copied ? "Kopyalandı" : failed ? "Kopyalanamadı, tekrar deneyin" : "Kopyalamak için dokun"}
        </span>
      </span>
    </button>
  );
}
