import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCircleCheck,
  FaMobileScreenButton,
  FaNfcSymbol,
  FaPrint,
  FaShieldHalved,
} from "react-icons/fa6";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl } from "@/lib/site";

const canonical = absoluteUrl("/nfc-kartvizit");

export const metadata: Metadata = {
  title: "NFC Kartvizit | Özel Tasarım ve UV Baskı",
  description: "Markanıza özel NFC kartvizit: özel çip, tasarım, üretim ve UV baskı. Kartınızı yaklaştırın, dijital bağlantınız tek dokunuşla açılsın.",
  alternates: { canonical },
  openGraph: {
    title: "NFC Kartvizit | Özel Tasarım ve UV Baskı",
    description: "Markanıza özel NFC kartvizit: özel çip, tasarım, üretim ve UV baskı.",
    url: canonical,
    type: "website",
    images: [{ url: absoluteUrl("/icon.png"), width: 512, height: 512, alt: "NFC Solutions Turkey" }],
  },
  twitter: {
    card: "summary",
    title: "NFC Kartvizit | Özel Tasarım ve UV Baskı",
    description: "Markanıza özel NFC kartvizit: özel çip, tasarım, üretim ve UV baskı.",
    images: [absoluteUrl("/icon.png")],
  },
};

const container = "mx-auto w-[min(100%-3rem,75rem)]";
const kicker = "inline-flex items-center gap-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#80d89e]";
const heading = "mt-5 text-4xl font-extrabold leading-[1.04] tracking-[0.005em] text-[#f5faf4] sm:text-6xl";
const accent = "font-light tracking-[0.01em] text-[#8ce0ac]";

export default function NfcCardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "NFC kartvizit",
        serviceType: "NFC kartvizit üretimi",
        url: canonical,
        description: "Özel tasarım, üretim, UV baskı ve programlanabilir NFC çip ile markaya özel NFC kartvizit.",
        areaServed: { "@type": "Country", name: "Türkiye" },
        provider: { "@id": `${absoluteUrl("/")}#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana sayfa", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "NFC kartvizit", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="page-nfc relative isolate min-h-svh overflow-hidden text-[#f4f8f2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#51d48d]/15 blur-[90px]" />

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
          <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Türkiye için temassız çözümler</p>
          <h1 className={heading}>NFC kartvizit<br /><em className={accent}>tek dokunuşla daha fazla bağlantı.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#d5efd9]/65">Kartınızı telefonun yakınına getirin; dijital profiliniz, iletişim bilgileriniz veya seçtiğiniz bağlantı anında açılsın. Markanıza uygun kartı sizin için tasarlıyor ve üretiyoruz.</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/#iletisim" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#a5efbd] px-5 py-3 text-xs font-extrabold text-[#0b2718] transition hover:-translate-y-0.5 hover:bg-[#c2f8d1]">Kartınızı tasarlayalım <FaArrowRight /></Link>
            <Link href="/nasil-calisir" className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#ceefd7]/16 px-5 py-3 text-xs font-extrabold text-[#e7f6e8]/75 transition hover:border-[#ceefd7]/35 hover:bg-[#aeebbf]/10">Nasıl çalışır?</Link>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-80 w-full max-w-md items-center justify-center">
          <div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-[#8ce0ac]/15 shadow-[0_0_100px_rgb(64_174_118_/_0.12)]" />
          <div className="relative flex aspect-[1.58/1] w-full max-w-sm -rotate-6 flex-col justify-between rounded-[1.75rem] border border-[#dcffe5]/25 bg-[linear-gradient(135deg,#2c7950_0%,#0b3020_47%,#061810_100%)] p-6 shadow-[0_30px_70px_rgb(0_0_0_/_0.3)] transition hover:rotate-0">
            <div className="flex items-center justify-between text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#d9fbe1]/75"><span className="inline-flex items-center gap-2"><FaNfcSymbol /> NFC</span><span>01 / 01</span></div>
            <div className="grid h-12 w-16 place-items-center rounded-xl border border-white/25 bg-white/10 text-2xl text-[#a5efbd]"><FaNfcSymbol /></div>
            <div><span className="mb-2 block h-px w-10 bg-[#a5efbd]" /><strong className="block text-xl tracking-[0.005em] text-white">Tek dokunuş</strong><span className="mt-1 block text-xs text-[#e0f5e3]/60">Bağlantınız hemen açılsın</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-24">
        <div className={container}>
          <div className="max-w-2xl"><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> NFC kartvizit nedir?</p><h2 className={heading}>Fiziksel kartınız,<br /><em className={accent}>dijital bağlantınız.</em></h2><p className="mt-5 text-sm leading-7 text-[#d5efd9]/60">Kartın içine yerleştirilen özel NFC çip, uyumlu telefonlar tarafından yaklaştırıldığında okunur. Kamera açmanız veya bağlantıyı elle yazmanız gerekmez; kartınız doğru dijital hedefe yönlendirir.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [<FaNfcSymbol key="chip" />, "Özel NFC çip", "Bağlantınızı taşıyan çipi kartın içine yerleştiriyor ve sizin için programlıyoruz."],
              [<FaMobileScreenButton key="phone" />, "Kolay paylaşım", "Telefonu karta yaklaştırmak, iletişim bilgilerinizi veya profilinizi açmak için yeterlidir."],
              [<FaCircleCheck key="check" />, "Abonelik yok", "Kartınızı bir kez alırsınız; fiziksel kartınız size ait olur ve aylık abonelik gerekmez."],
            ].map(([icon, title, description]) => <article key={title as string} className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#a5efbd]/10 text-xl text-[#9aebb0]">{icon}</span><h3 className="mt-7 text-xl font-bold tracking-[0.005em] text-[#effff1]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${container} py-24`}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md"><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Sizin için üretim</p><h2 className={heading}>Tasarımından<br /><em className={accent}>baskısına kadar.</em></h2><p className="mt-5 text-sm leading-7 text-[#d5efd9]/60">Kart üretimi, özel tasarım, baskı ve UV (ultraviyole) baskı süreçlerinin tamamını sizin için yapıyoruz. İhtiyacınıza göre çip yazılımını ve dijital hedefinizi de kuruyoruz.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [<FaPrint key="print" />, "Özel tasarım ve UV baskı", "Renkleri, yüzey detaylarını ve kartın görünümünü markanızın diline göre hazırlıyoruz."],
              [<FaShieldHalved key="durable" />, "Dayanıklı kart", "Suya dayanıklı kart yapısıyla günlük kullanım için uzun ömürlü bir paylaşım deneyimi sunuyoruz."],
              [<FaNfcSymbol key="software" />, "Çip yazılımı", "Kartınızın bağlantısını programlıyor, dijital hedeflerinizi ihtiyacınıza göre düzenliyoruz."],
              [<FaMobileScreenButton key="profile" />, "Dijital profil seçeneği", "İsterseniz NFC kartınızı size özel bir dijital kartvizit sayfasıyla birlikte sunuyoruz."],
            ].map(([icon, title, description]) => <article key={title as string} className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#a5efbd]/10 text-lg text-[#9aebb0]">{icon}</span><h3 className="mt-6 text-xl font-bold tracking-[0.005em] text-[#effff1]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-20"><div className={`${container} flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between`}><div><p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Bir sonraki adım</p><h2 className="mt-4 text-2xl font-bold tracking-[0.005em] text-[#effff1]">Dijital kartvizit deneyimini inceleyin.</h2></div><Link href="/dijital-kartvizit" className="inline-flex items-center gap-2 font-bold text-[#9aebb0] hover:text-white">Dijital kartvizit <FaArrowRight /></Link></div></section>

      <SiteFooter />
    </main>
  );
}
