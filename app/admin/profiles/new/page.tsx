import type { Metadata } from "next";
import { AdminNav } from "@/components/admin-nav";
import { ProfileEditorForm } from "@/components/profile-editor-form";
import { createProfileAction } from "@/app/profile-actions";
import { requireSession } from "@/lib/auth-helpers";

export const metadata: Metadata = {
  title: "Yeni profil | Admin",
};

export default async function NewProfilePage() {
  await requireSession();

  return (
    <main className="admin-page min-h-screen px-4 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-4xl">
        <AdminNav active="profiles" />
        <header className="my-8">
          <p className="eyebrow">Profil kartları</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Yeni profil oluştur</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">Profil sahibi daha sonra /slug/admin adresinden bu bilgileri düzenleyebilir.</p>
        </header>
        <section className="panel">
          <ProfileEditorForm action={createProfileAction} mode="create" />
        </section>
      </div>
    </main>
  );
}
