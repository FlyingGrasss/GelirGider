import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { getCurrentMember, getCurrentSession } from "@/lib/auth-helpers";

export const metadata: Metadata = {
  title: "Giriş | Gelir Gider",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ switch?: string | string[] }>;
}) {
  const params = await searchParams;
  const switching = params.switch === "1" || params.switch?.includes("1");
  const [session, member] = await Promise.all([
    getCurrentSession(),
    getCurrentMember(),
  ]);

  if (session && member && !switching) {
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
          {switching ? "Kişi değiştir" : "Hoş geldiniz"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {switching
            ? "Bu cihazda işlem yapan kişiyi değiştirmek için adınızı girin."
            : "Adınızı ve ortak şifrenizi girin; kayıtların yanında adınız görünsün."}
        </p>

        <LoginForm defaultName={switching ? "" : member?.name} />
      </div>
    </main>
  );
}
