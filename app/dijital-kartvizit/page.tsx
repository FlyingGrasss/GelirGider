import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaLink,
  FaMobileScreenButton,
  FaNfcSymbol,
} from "react-icons/fa6";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl } from "@/lib/site";

const canonical = absoluteUrl("/dijital-kartvizit");

export const metadata: Metadata = {
  title: "Dijital Kartvizit | Markanıza Özel Dijital Profil",
  description: "Telefon, WhatsApp, Instagram, e-posta ve diğer bağlantılarınızı tek bir dijital kartvizitte birleştirin. NFC kartınızla kolayca paylaşın.",
  alternates: { canonical },
  openGraph: {
    title: "Dijital Kartvizit | Markanıza Özel Dijital Profil",
    description: "Bağlantılarınızı markanıza özel dijital kartvizitte birleştirin ve NFC kartınızla kolayca paylaşın.",
    url: canonical,
    type: "website",
    images: [{ url: absoluteUrl("/icon.png"), width: 512, height: 512, alt: "NFC Solutions Turkey" }],
  },
  twitter: {
    card: "summary",
    title: "Dijital Kartvizit | Markanıza Özel Dijital Profil",
    description: "Bağlantılarınızı markanıza özel dijital kartvizitte birleştirin ve NFC kartınızla kolayca paylaşın.",
    images: [absoluteUrl("/icon.png")],
  },
};

const container = "mx-auto w-[min(100%-3rem,75rem)]";
const kicker = "inline-flex items-center gap-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#80d89e]";
const heading = "mt-5 text-4xl font-extrabold leading-[1.04] tracking-[0.005em] text-[#f5faf4] sm:text-6xl";
const accent = "font-light tracking-[0.01em] text-[#8ce0ac]";

export default function DigitalCardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Dijital kartvizit",
        serviceType: "Dijital kartvizit tasarımı",
        url: canonical,
        description: "Markaya özel dijital kartvizit ve NFC kartla paylaşılabilen dijital profil çözümü.",
        areaServed: { "@type": "Country", name: "Türkiye" },
        provider: { "@id": `${absoluteUrl("/")}#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana sayfa", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Dijital kartvizit", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="page-digital relative isolate min-h-svh overflow-hidden text-[#f4f8f2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#51d48d]/15 blur-[90px]" />

      <nav className={`${container} flex min-h-[5.5rem] items-center justify-between gap-8 border-b border-[#d6f6e2]/10`} aria-label="Ana menü">
        <Link href="/" aria-label="NFC Solutions Turkey ana sayfa" className="shrink-0 transition-opacity hover:opacity-80"><BrandLogo className="h-12 max-w-[18rem]" /></Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#urunler" className="text-xs font-bold text-[#8ce0ac]">Ürünler</Link>
          <Link href="/#cozumler" className="text-xs font-bold text-[#e1f1e4]/65 transition hover:text-[#f4f8f2]">Çözümler</Link>
          <Link href="/nasil-calisir" className="text-xs font-bold text-[#e1f1e4]/65 transition hover:text-[#f4f8f2]">Nasıl çalışır?</Link>
          <Link href="/#iletisim" className="inline-flex items-center gap-2 rounded-full border border-[#b4efc6]/20 px-4 py-2.5 text-xs font-bold text-[#c8f5d6] transition hover:border-[#b4efc6]/45 hover:bg-[#92e5ab]/10">İletişime geçin <FaArrowRight /></Link>
        </div>
      </nav>

      <section className={`${container} grid gap-12 pb-24 pt-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:pb-32 lg:pt-28`}>
        <div className="max-w-2xl">
          <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Markanız için dijital profil</p>
          <h1 className={heading}>Dijital kartvizitiniz<br /><em className={accent}>markanız kadar özgün.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#d5efd9]/65">Telefon, WhatsApp, Instagram, e-posta, konum ve diğer bağlantılarınızı tek bir sayfada birleştirin. Tasarımı markanıza göre hazırlayalım; NFC kartınızla tek dokunuşta paylaşın.</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/emre-bozkurt" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#a5efbd] px-5 py-3 text-xs font-extrabold text-[#0b2718] transition hover:-translate-y-0.5 hover:bg-[#c2f8d1]">Örneği inceleyin <FaArrowRight /></Link>
            <Link href="/#iletisim" className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#ceefd7]/16 px-5 py-3 text-xs font-extrabold text-[#e7f6e8]/75 transition hover:border-[#ceefd7]/35 hover:bg-[#aeebbf]/10">İletişime geçin</Link>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-80 w-full max-w-md items-center justify-center">
          <div aria-hidden="true" className="absolute h-72 w-72 rounded-full bg-[#65d792]/15 blur-3xl" />
          <div className="relative flex h-80 w-56 flex-col rounded-[2rem] border border-[#dcffe5]/25 bg-[linear-gradient(145deg,#2d7950,#0a2d1e)] p-7 shadow-[0_30px_70px_rgb(0_0_0_/_0.3)]">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-white/10 text-[#a5efbd]"><FaNfcSymbol /></span>
            <span className="mt-8 h-px w-9 bg-[#a5efbd]" />
            <strong className="mt-5 text-2xl leading-tight text-white">NFC<br />Solutions</strong>
            <div className="mt-auto space-y-2 text-xs text-[#e0f5e3]/65"><span className="flex items-center gap-2"><FaLink /> Bağlantılar</span><span className="flex items-center gap-2"><FaMobileScreenButton /> Dijital profil</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-24"><div className={container}><div className="max-w-2xl"><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Dijital deneyim</p><h2 className={heading}>Tek bir bağlantı,<br /><em className={accent}>tüm iletişiminiz.</em></h2><p className="mt-5 text-sm leading-7 text-[#d5efd9]/60">Kartvizit bilgilerinizi güncel tutmak, farklı kanalları paylaşmak ve markanızın ilk izlenimini kontrol etmek için size özel bir dijital profil oluşturuyoruz.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          [<FaLink key="links" />, "Tüm bağlantılarınız", "Telefon, WhatsApp, Instagram, e-posta ve konum bilgilerinizi tek bir deneyimde toplayın."],
          [<FaCode key="design" />, "Size özel tasarım", "Hazır bir şablonla sınırlı kalmadan renkleri, tipografiyi ve içerik düzenini markanıza göre tasarlayalım."],
          [<FaCircleCheck key="update" />, "Güncel kalır", "Bağlantılarınızı dijital profil üzerinden güncelleyin; her yeni kart bastırmak zorunda kalmayın."],
        ].map(([icon, title, description]) => <article key={title as string} className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#a5efbd]/10 text-xl text-[#9aebb0]">{icon}</span><h3 className="mt-7 text-xl font-bold tracking-[0.005em] text-[#effff1]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">{description}</p></article>)}
      </div></div></section>

      <section className={`${container} py-24`}><div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="rounded-[1.75rem] border border-[#b1efc3]/15 bg-[linear-gradient(110deg,#123b29,#0c2419_55%,#0a1913)] p-8 sm:p-10"><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Canlı örnek</p><h2 className={heading}>Dijital profilinizi<br /><em className={accent}>yakından görün.</em></h2><p className="mt-5 max-w-md text-sm leading-7 text-[#d5efd9]/60">Bağlantıların nasıl göründüğünü ve NFC kartla nasıl paylaşıldığını örnek profilimiz üzerinden inceleyin.</p><Link href="/emre-bozkurt" className="mt-7 inline-flex items-center gap-2 font-bold text-[#9aebb0] hover:text-white">emre-bozkurt örneğini açın <FaArrowRight /></Link></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7"><FaNfcSymbol className="text-2xl text-[#9aebb0]" /><h3 className="mt-6 text-xl font-bold tracking-[0.005em] text-[#effff1]">NFC kartınızla</h3><p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">Dijital profilinizi kartınızın tek dokunuşluk deneyimiyle paylaşın.</p></div><div className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7"><FaMobileScreenButton className="text-2xl text-[#9aebb0]" /><h3 className="mt-6 text-xl font-bold tracking-[0.005em] text-[#effff1]">Her zaman erişilebilir</h3><p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">Karşınızdaki kişi telefonundan bağlantılarınızı tek sayfada görür.</p></div></div></div></section>

      <section className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-20"><div className={`${container} flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between`}><div><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Donanım ve deneyim</p><h2 className="mt-4 text-2xl font-bold tracking-[0.005em] text-[#effff1]">NFC kartvizit üretimini de sizin için yapıyoruz.</h2></div><Link href="/nfc-kartvizit" className="inline-flex items-center gap-2 font-bold text-[#9aebb0] hover:text-white">NFC kartviziti keşfedin <FaArrowRight /></Link></div></section>

      <SiteFooter />
    </main>
  );
}
