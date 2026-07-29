import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";

const container = "mx-auto w-[min(100%-3rem,75rem)]";
const kicker = "inline-flex items-center gap-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#80d89e]";
const heading = "mt-5 text-4xl font-extrabold leading-[1.04] tracking-[0.005em] text-[#f5faf4] sm:text-6xl";
const accent = "font-light tracking-[0.01em] text-[#8ce0ac]";

export function SiteFooter() {
  return (
    <footer id="iletisim" className="border-t border-[#d6f6e2]/10">
      <div className={`${container} grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start`}>
        <div className="max-w-md">
          <p className={kicker}><span className="block h-px w-7 bg-[#75d49a]" /> İletişim</p>
          <h2 className={heading}>İhtiyacınızı<br /><em className={accent}>konuşalım.</em></h2>
          <p className="mt-5 text-sm leading-7 text-[#d5efd9]/55">Hazır kartlardan özel dijital kartvizit tasarımına kadar ihtiyacınızı anlatın, size uygun çözümü beraber oluşturalım.</p>
        </div>
        <ContactForm />
      </div>

      <div className={`${container} flex flex-col gap-5 border-t border-[#d6f6e2]/10 py-8 text-sm text-[#d5efd9]/50 sm:flex-row sm:items-center sm:justify-between`}>
        <Link href="/" aria-label="NFC Solutions Turkey ana sayfa" className="transition-opacity hover:opacity-80">
          <BrandLogo className="h-11 max-w-[17rem]" />
        </Link>
        <p>Temassız iletişimi daha anlamlı hale getiriyoruz.</p>
        <a href="#iletisim" className="inline-flex items-center gap-2 font-bold text-[#9aebb0] hover:text-white">İletişime geçin <FaArrowRight /></a>
      </div>
    </footer>
  );
}
