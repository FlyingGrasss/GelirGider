"use client";

import Script from "next/script";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactAction, type ContactFormState } from "@/app/contact-actions";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(submitContactAction, {});
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!verificationVisible || !siteKey || !widgetRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: siteKey,
      action: "contact",
      theme: "dark",
      callback: (nextToken: string) => {
        setToken(nextToken);
        setVerificationError("");
      },
      "expired-callback": () => {
        setToken("");
        setVerificationError("Güvenlik doğrulamasının süresi doldu. Lütfen tekrar deneyin.");
      },
      "error-callback": () => {
        setToken("");
        setVerificationError("Güvenlik doğrulaması yüklenemedi. Lütfen tekrar deneyin.");
      },
    });
  }, [siteKey, turnstileLoaded, verificationVisible]);

  useEffect(() => {
    if (!state.success) {
      return;
    }

    formRef.current?.reset();
    const resetTimer = window.setTimeout(() => {
      setVerificationVisible(false);
      setToken("");
      setVerificationError("");
      widgetIdRef.current = undefined;
      widgetRef.current?.replaceChildren();
    }, 0);

    return () => window.clearTimeout(resetTimer);
  }, [state.success]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!verificationVisible) {
      event.preventDefault();
      setVerificationVisible(true);
      setVerificationError(siteKey ? "Güvenlik doğrulamasını tamamladıktan sonra tekrar gönderin." : "Güvenlik doğrulaması henüz yapılandırılmadı.");
      return;
    }

    if (!token) {
      event.preventDefault();
      setVerificationError(siteKey ? "Lütfen güvenlik doğrulamasını tamamlayın." : "Güvenlik doğrulaması henüz yapılandırılmadı.");
    }
  }

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} className="rounded-[1.5rem] border border-[#d6f6e2]/15 bg-[#0d2b20]/65 p-5 shadow-[0_20px_60px_rgb(0_0_0_/_0.16)] sm:p-8">
      {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={() => setTurnstileLoaded(true)} /> : null}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <input type="hidden" name="turnstileToken" value={token} />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-extrabold text-[#d7eedb]/75">
          <span>Adınız</span>
          <input name="name" required maxLength={100} placeholder="Adınız Soyadınız" className="h-12 rounded-xl border border-[#d6f6e2]/15 bg-[#071a12]/60 px-4 text-sm text-white outline-none transition placeholder:text-[#d7eedb]/35 focus:border-[#8ce0ac]/70 focus:ring-4 focus:ring-[#8ce0ac]/10" />
        </label>
        <label className="grid gap-2 text-xs font-extrabold text-[#d7eedb]/75">
          <span>İletişim bilginiz</span>
          <input name="contact" required maxLength={160} placeholder="Telefon veya e-posta" className="h-12 rounded-xl border border-[#d6f6e2]/15 bg-[#071a12]/60 px-4 text-sm text-white outline-none transition placeholder:text-[#d7eedb]/35 focus:border-[#8ce0ac]/70 focus:ring-4 focus:ring-[#8ce0ac]/10" />
        </label>
        <label className="grid gap-2 text-xs font-extrabold text-[#d7eedb]/75 sm:col-span-2">
          <span>Mesajınız</span>
          <textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Hangi ürün veya çözümle ilgileniyorsunuz?" className="min-h-32 resize-y rounded-xl border border-[#d6f6e2]/15 bg-[#071a12]/60 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-[#d7eedb]/35 focus:border-[#8ce0ac]/70 focus:ring-4 focus:ring-[#8ce0ac]/10" />
        </label>
      </div>
      {verificationVisible ? (
        <div className="mt-5 rounded-xl border border-[#d6f6e2]/15 bg-[#071a12]/60 p-4 text-xs text-[#d7eedb]/65">
          <p className="mb-3">Mesajı göndermek için güvenlik doğrulamasını tamamlayın.</p>
          <div ref={widgetRef} />
        </div>
      ) : null}
      {verificationError ? <p role="alert" className="mt-4 text-sm font-semibold text-rose-200">{verificationError}</p> : null}
      {state.error ? <p role="alert" className="mt-4 text-sm font-semibold text-rose-200">{state.error}</p> : null}
      {state.success ? <p role="status" className="mt-4 text-sm font-semibold text-[#a5efbd]">{state.success}</p> : null}
      <button type="submit" disabled={pending} className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#a5efbd] px-5 py-3 text-sm font-extrabold text-[#0b2718] transition hover:bg-[#c2f8d1] disabled:opacity-60">
        {pending ? "Gönderiliyor…" : verificationVisible ? "Mesajı gönder" : "Mesajı gönder"}
      </button>
    </form>
  );
}
