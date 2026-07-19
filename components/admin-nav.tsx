import Link from "next/link";

export function AdminNav({ active }: { active: "overview" | "leads" | "profiles" }) {
  return (
    <nav className="admin-nav" aria-label="Admin bölümleri">
      <Link href="/admin" className={active === "overview" ? "admin-nav-active" : ""}>
        Gelir Gider
      </Link>
      <Link href="/admin/profiles" className={active === "profiles" ? "admin-nav-active" : ""}>
        Profil kartları
      </Link>
      <Link href="/admin/leads" className={active === "leads" ? "admin-nav-active" : ""}>
        Leads
      </Link>
    </nav>
  );
}
