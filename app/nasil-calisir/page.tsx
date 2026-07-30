import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaMobileScreenButton,
  FaNfcSymbol,
  FaPrint,
  FaShieldHalved,
} from "react-icons/fa6";
import { BrandLogo } from "@/components/brand-logo";
import { absoluteUrl } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "NFC Kartvizit Nasıl Çalışır? | Türkiye",
  description: "NFC kartvizitin nasıl çalıştığını, üretim sürecini ve dijital kartvizit deneyimini keşfedin.",
  alternates: { canonical: absoluteUrl("/nasil-calisir") },
  openGraph: {
    title: "NFC kartvizit nasıl çalışır?",
    description: "NFC kartvizitin nasıl çalıştığını, üretim sürecini ve dijital kartvizit deneyimini keşfedin.",
    url: absoluteUrl("/nasil-calisir"),
    type: "website",
    images: [{ url: absoluteUrl("/icon.png"), width: 512, height: 512, alt: "NFC Solutions Turkey" }],
  },
  twitter: {
    card: "summary",
    title: "NFC Kartvizit Nasıl Çalışır? | Türkiye",
    description: "NFC kartvizitin nasıl çalıştığını, üretim sürecini ve dijital kartvizit deneyimini keşfedin.",
    images: [absoluteUrl("/icon.png")],
  },
};

const container = "mx-auto w-[min(100%-3rem,75rem)]";
const kicker = "inline-flex items-center gap-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#80d89e]";
const heading = "mt-5 text-4xl font-extrabold leading-[1.04] tracking-[0.005em] text-[#f5faf4] sm:text-6xl";
const accent = "font-light tracking-[0.01em] text-[#8ce0ac]";

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NFC kartvizit nasıl çalışır?",
    url: absoluteUrl("/nasil-calisir"),
    description: "NFC kartvizitin nasıl çalıştığını, üretim sürecini ve dijital kartvizit deneyimini keşfedin.",
  };

  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-[#071512] text-[#f4f8f2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#51d48d]/15 blur-[90px]" />

      <nav className={`${container} flex min-h-[5.5rem] items-center justify-between gap-8 border-b border-[#d6f6e2]/10`} aria-label="Ana menü">
        <Link href="/" aria-label="NFC Solutions Turkey ana sayfa" className="shrink-0 transition-opacity hover:opacity-80">
          <BrandLogo className="h-12 max-w-[18rem]" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#urunler" className="text-xs font-bold text-[#e1f1e4]/65 transition hover:text-[#f4f8f2]">Ürünler</Link>
          <Link href="/#cozumler" className="text-xs font-bold text-[#e1f1e4]/65 transition hover:text-[#f4f8f2]">Çözümler</Link>
          <Link href="/nasil-calisir" className="text-xs font-bold text-[#8ce0ac]">Nasıl çalışır?</Link>
          <Link href="/#iletisim" className="inline-flex items-center gap-2 rounded-full border border-[#b4efc6]/20 px-4 py-2.5 text-xs font-bold text-[#c8f5d6] transition hover:border-[#b4efc6]/45 hover:bg-[#92e5ab]/10">
            İletişime geçin <FaArrowRight />
          </Link>
        </div>
      </nav>

      <section className={`${container} grid gap-12 pb-24 pt-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:pb-32 lg:pt-28`}>
        <div className="max-w-2xl">
          <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Temassız teknoloji</p>
          <h1 className={heading}>Bir dokunuşla<br /><em className={accent}>bağlantı kurun.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#d5efd9]/65">
            NFC kartvizit, telefonunuzun zaten bildiği bir teknolojiyi günlük iletişimin en kolay hâline dönüştürür. Kartı telefonunuza yaklaştırın; bağlantınız açılsın.
          </p>
          <Link href="/#iletisim" className="mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#a5efbd] px-5 py-3 text-xs font-extrabold text-[#0b2718] transition hover:-translate-y-0.5 hover:bg-[#c2f8d1]">
            Kartınızı tasarlayalım <FaArrowRight />
          </Link>
        </div>
        <div className="relative mx-auto flex min-h-80 w-full max-w-md items-center justify-center">
          <div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-[#8ce0ac]/15 shadow-[0_0_100px_rgb(64_174_118_/_0.12)]" />
          <div className="relative flex aspect-[1.58/1] w-full max-w-sm -rotate-6 flex-col justify-between rounded-[1.75rem] border border-[#dcffe5]/25 bg-[linear-gradient(135deg,#2c7950_0%,#0b3020_47%,#061810_100%)] p-6 shadow-[0_30px_70px_rgb(0_0_0_/_0.3)] transition hover:rotate-0">
            <div className="flex items-center justify-between text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#d9fbe1]/75"><span className="inline-flex items-center gap-2"><FaNfcSymbol /> NFC</span><span>01 / 01</span></div>
            <div className="grid h-12 w-16 place-items-center rounded-xl border border-white/25 bg-white/10 text-2xl text-[#a5efbd]"><FaNfcSymbol /></div>
            <div><span className="mb-2 block h-px w-10 bg-[#a5efbd]" /><strong className="block text-xl tracking-[-0.01em] text-white">Temassız iletişim</strong><span className="mt-1 block text-xs text-[#e0f5e3]/60">Tek dokunuşla bağlantı</span></div>
          </div>
        </div>
      </section>

      <section id="teknoloji" className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-24">
        <div className={container}>
          <div className="max-w-2xl">
            <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Telefonunuz hazır</p>
            <h2 className={heading}>Kamera yok.<br /><em className={accent}>Sadece yaklaştırın.</em></h2>
            <p className="mt-5 text-sm leading-7 text-[#d5efd9]/60">NFC, bugün akıllı telefonların büyük çoğunluğunda bulunan, yıllardır kullanılan ve güvenilir bir yakın alan iletişim teknolojisidir. iPhone 7 ve sonraki modellerde okuyucu modu bulunur; Android telefonlarda da NFC desteği yaygın olarak sunulur.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [<FaMobileScreenButton key="phone" />, "Telefonla uyumlu", "Avrupa ve Amerika'da ödeme, ulaşım, erişim ve ürün deneyimlerinde yaygın olarak kullanılan bir teknoloji."],
              [<FaNfcSymbol key="nfc" />, "Yakın alan iletişimi", "Kartın içindeki çip, telefonun NFC antenine birkaç santimetre yaklaştığında okunur. En iyi deneyim için kartı yaklaşık 5 cm'den daha yakın tutun."],
              [<FaCircleCheck key="check" />, "Anında bağlantı", "Kamera uygulamasını açıp odaklamanız gerekmez. Telefon kartı algılar ve bağlantıyı açmanız için sistem bildirimini gösterir."],
            ].map(([icon, title, description]) => (
              <article key={title as string} className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7 transition hover:-translate-y-1 hover:border-[#a6edb7]/35">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#a5efbd]/10 text-xl text-[#9aebb0]">{icon}</span>
                <h3 className="mt-7 text-xl font-bold tracking-[0.005em] text-[#effff1]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="uretim" className={`${container} py-24`}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Türkiye için</p>
            <h2 className={heading}>Teknolojiyi<br /><em className={accent}>yerelleştiriyoruz.</em></h2>
            <p className="mt-5 text-sm leading-7 text-[#d5efd9]/60">NFC Avrupa ve Amerika&apos;da uzun süredir günlük hayatın bir parçası. Türkiye&apos;de ise bu deneyimi uçtan uca sunan seçenekler hâlâ sınırlı. Biz bu teknolojiyi Türkiye&apos;deki markalar için erişilebilir, tasarlanabilir ve kullanışlı hâle getiriyoruz.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [<FaNfcSymbol key="chip" />, "Özel NFC çip", "Kartın içine yerleştirdiğimiz özel NFC çip, bağlantınızı telefonların kolayca okuyabileceği şekilde taşır."],
              [<FaPrint key="print" />, "Üretim ve UV baskı", "Kart üretimi, özel tasarım, baskı ve UV (ultraviyole) baskı süreçlerinin tamamını sizin için yapıyoruz."],
              [<FaCode key="code" />, "Çip yazılımı", "Kartın içindeki bağlantıyı programlar, gerektiğinde dijital hedeflerinizi ve yönlendirmelerinizi güncelleriz."],
              [<FaMobileScreenButton key="profile" />, "Dijital kartvizit", "İsterseniz kartınızı, markanıza özel dijital kartvizit sitenizle birlikte uçtan uca tasarlarız."],
            ].map(([icon, title, description]) => (
              <article key={title as string} className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#a5efbd]/10 text-lg text-[#9aebb0]">{icon}</span>
                <h3 className="mt-6 text-xl font-bold tracking-[0.005em] text-[#effff1]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d5efd9]/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6f6e2]/10 bg-[#0a2019]/60 py-24">
        <div className={`${container} grid gap-6 md:grid-cols-2`}>
          <article className="rounded-[1.75rem] border border-[#8ce0ac]/25 bg-[#123b29]/65 p-8">
            <FaShieldHalved className="text-2xl text-[#9aebb0]" />
            <h2 className="mt-6 text-2xl font-bold tracking-[0.005em] text-[#effff1]">Bir kez alırsınız, sizin olur.</h2>
            <p className="mt-3 text-sm leading-7 text-[#d5efd9]/60">Kartınızı bir kez satın alırsınız; aylık abonelik yoktur. NFC kart fiziksel olarak sizindir ve doğru kullanıldığında uzun süre sizinle çalışır.</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#d2f4d8]/13 bg-[#0c271a]/55 p-8">
            <FaCircleCheck className="text-2xl text-[#9aebb0]" />
            <h2 className="mt-6 text-2xl font-bold tracking-[0.005em] text-[#effff1]">Suya dayanıklı, pratik ve kalıcı.</h2>
            <p className="mt-3 text-sm leading-7 text-[#d5efd9]/60">Dayanıklı kart yapısı, kağıttaki bir QR kod gibi silinip kaybolmaz. Telefonunuzun kamerayı odaklamaya çalışmasını beklemeden kartı yaklaştırmanız yeterlidir.</p>
          </article>
        </div>
      </section>

      <section className={`${container} py-24 text-center`}>
        <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> Hazır mısınız?</p>
        <h2 className={`${heading} mx-auto max-w-3xl`}>Teması<br /><em className={accent}>bağlantıya dönüştürelim.</em></h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d5efd9]/60">Kartınızın tasarımını, üretimini ve dijital deneyimini birlikte planlayalım.</p>
        <Link href="/#iletisim" className="mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#a5efbd] px-5 py-3 text-xs font-extrabold text-[#0b2718] transition hover:-translate-y-0.5 hover:bg-[#c2f8d1]">İletişime geçin <FaArrowRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
