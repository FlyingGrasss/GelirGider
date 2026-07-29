"use client";

import { useActionState } from "react";
import {
  signInProfileAction,
  type ProfileFormState,
} from "@/app/profile-actions";

const initialState: ProfileFormState = {};

export function ProfileLoginForm({ slug }: { slug: string }) {
  const [state, formAction, pending] = useActionState(
    signInProfileAction,
    initialState,
  );

  return (
    <form action={formAction} className="w-full max-w-md rounded-3xl border border-slate-300/25 bg-[#0f2d43]/75 p-8 text-white shadow-[0_24px_80px_rgb(0_0_0_/_0.25)]">
      <input type="hidden" name="slug" value={slug} />
      <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#8bd5aa]">Yönetim</p>
      <h1 className="mt-2 text-2xl font-black text-white">Profilini düzenle</h1>
      <p className="mt-2 text-sm leading-6 text-white/60">
        Bu profilin şifresini girerek kart bilgilerini güncelleyebilirsin.
      </p>
      <label htmlFor="profile-admin-password" className="mt-6 mb-2 block text-xs font-extrabold text-slate-200/75">Şifre</label>
      <input
        id="profile-admin-password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        autoFocus
        className="h-12 w-full rounded-xl border border-slate-200/25 bg-[#02121e]/55 px-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#8bd5aa] focus:ring-4 focus:ring-[#8bd5aa]/10"
      />
      {state.error ? <p role="alert" className="mt-3 text-sm font-semibold text-rose-200">{state.error}</p> : null}
      <button type="submit" disabled={pending} className="mt-5 w-full rounded-xl bg-[#d8f5e1] px-4 py-3.5 text-sm font-extrabold text-[#0f3c24] transition hover:bg-white disabled:opacity-60">
        {pending ? "Kontrol ediliyor…" : "Düzenlemeye gir"}
      </button>
    </form>
  );
}
