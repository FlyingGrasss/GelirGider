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
    <form action={formAction} className="profile-login-card">
      <input type="hidden" name="slug" value={slug} />
      <p className="profile-kicker">Yönetim</p>
      <h1 className="mt-2 text-2xl font-black text-white">Profilini düzenle</h1>
      <p className="mt-2 text-sm leading-6 text-white/60">
        Bu profilin şifresini girerek kart bilgilerini güncelleyebilirsin.
      </p>
      <label htmlFor="profile-admin-password" className="profile-label">Şifre</label>
      <input
        id="profile-admin-password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        autoFocus
        className="profile-input"
      />
      {state.error ? <p role="alert" className="mt-3 text-sm font-semibold text-rose-200">{state.error}</p> : null}
      <button type="submit" disabled={pending} className="profile-submit mt-5">
        {pending ? "Kontrol ediliyor…" : "Düzenlemeye gir"}
      </button>
    </form>
  );
}
