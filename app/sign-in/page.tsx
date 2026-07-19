import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { getCurrentMember, getCurrentSession } from "@/lib/auth-helpers";

export const metadata: Metadata = {
  title: "Giriş | Gelir Gider",
};

export default async function SignInPage() {
  const [session, member] = await Promise.all([
    getCurrentSession(),
    getCurrentMember(),
  ]);

  if (session && member) {
    redirect("/admin");
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="mb-7 flex items-center gap-3">
          <div className="brand-mark">₺</div>
          <div>
            <p className="text-sm font-bold tracking-tight text-slate-900">Gelir Gider</p>
            <p className="text-xs text-slate-400">İki kişi, tek düzen</p>
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-slate-950">
          Hoş geldiniz
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Adınızı ve ortak şifrenizi girin; kayıtların yanında adınız görünsün.
        </p>

        <LoginForm defaultName={member?.name} />
      </div>
    </main>
  );
}
