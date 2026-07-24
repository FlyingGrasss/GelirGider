import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaChartLine,
  FaCircleCheck,
  FaLink,
  FaMobileScreenButton,
  FaNfcSymbol,
  FaShieldHalved,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "NFC Solutions Turkey | Temassız deneyimler",
  description: "Kartvizit, dijital profil ve temassız iletişim çözümleri.",
};

export default function Home() {
  return (
    <main className="nfc-landing">
      <div className="nfc-landing-glow nfc-landing-glow-one" />
      <div className="nfc-landing-glow nfc-landing-glow-two" />

      <nav className="nfc-nav nfc-container" aria-label="Ana menü">
        <Link href="/" className="nfc-brand">
          <span className="nfc-brand-mark"><FaNfcSymbol /></span>
          <span>NFC Solutions <strong>Turkey</strong></span>
        </Link>
        <div className="nfc-nav-links">
          <a href="#urunler">Ürünler</a>
          <a href="#cozumler">Çözümler</a>
          <a href="#nasil-calisir">Nasıl çalışır?</a>
          <a href="#iletisim" className="nfc-nav-cta">İletişime geçin <FaArrowRight /></a>
        </div>
      </nav>

      <section className="nfc-hero nfc-container">
        <div className="nfc-hero-copy">
          <p className="nfc-kicker"><span /> Türkiye için temassız çözümler</p>
          <h1>Bir dokunuşla <em>daha fazlasını</em> anlatın.</h1>
          <p className="nfc-hero-lead">
            Kartvizitinizi, iletişim bilgilerinizi ve markanızın dijital dünyasını tek bir temassız deneyimde birleştirin.
          </p>
          <div className="nfc-hero-actions">
            <a href="#cozumler" className="nfc-button nfc-button-primary">Çözümleri keşfedin <FaArrowRight /></a>
            <a href="#nasil-calisir" className="nfc-button nfc-button-ghost">Nasıl çalışır?</a>
          </div>
          <div className="nfc-hero-note">
            <span className="nfc-note-icon"><FaCircleCheck /></span>
            <span>Hızlı kurulum · Kolay paylaşım · Her cihazda erişim</span>
          </div>
        </div>

        <div className="nfc-hero-visual" aria-label="Temassız dijital kart örneği">
          <div className="nfc-visual-ring nfc-visual-ring-one" />
          <div className="nfc-visual-ring nfc-visual-ring-two" />
          <div className="nfc-card-shadow" />
          <div className="nfc-digital-card">
            <div className="nfc-card-header">
              <span className="nfc-card-brand"><FaNfcSymbol /> NFC</span>
              <span className="nfc-card-index">01 / 01</span>
            </div>
            <div className="nfc-card-chip"><FaNfcSymbol /></div>
            <div className="nfc-card-person">
              <span className="nfc-card-line nfc-card-line-short" />
              <strong>Temassız iletişim</strong>
              <span>Tek dokunuşla bağlantı</span>
            </div>
            <div className="nfc-card-footer">
              <span>Dokun ve keşfet</span>
              <FaArrowUpRightFromSquare />
            </div>
          </div>
          <div className="nfc-float-card nfc-float-card-top">
            <span className="nfc-float-icon"><FaMobileScreenButton /></span>
            <span><strong>Dijital profil</strong><small>Her zaman güncel</small></span>
          </div>
          <div className="nfc-float-card nfc-float-card-bottom">
            <span className="nfc-float-icon nfc-float-icon-green"><FaLink /></span>
            <span><strong>Tek dokunuş</strong><small>Binlerce bağlantı</small></span>
          </div>
        </div>
      </section>

      <section id="urunler" className="nfc-products-section nfc-container">
        <div className="nfc-section-heading nfc-products-heading">
          <p className="nfc-kicker"><span /> Öne çıkan ürünler</p>
          <h2>İyi bir izlenim,<br /><em>tek dokunuşta.</em></h2>
          <p>Değerlendirmeleri kolaylaştıran, markanızın görünürlüğünü artıran hazır kart çözümleri.</p>
        </div>
        <div className="nfc-product-grid">
          <article className="nfc-product-card">
            <div className="nfc-product-image-wrap">
              <Image src="/NFC Google Review Card.png" alt="NFC Google değerlendirme kartı" width={660} height={1050} className="nfc-product-image" />
              <span className="nfc-product-badge">Google</span>
            </div>
            <div className="nfc-product-copy">
              <p className="nfc-product-category">Değerlendirme kartı</p>
              <h3>Google değerlendirme kartı</h3>
              <p>Misafirlerinizden hızlı ve zahmetsiz şekilde değerlendirme alın.</p>
              <a href="#iletisim" className="nfc-product-link">Bu ürün için iletişime geçin <FaArrowRight /></a>
            </div>
          </article>
          <article className="nfc-product-card">
            <div className="nfc-product-image-wrap">
              <Image src="/NFC Tripadvisor Review Card.png" alt="NFC Tripadvisor değerlendirme kartı" width={660} height={1050} className="nfc-product-image" />
              <span className="nfc-product-badge">Tripadvisor</span>
            </div>
            <div className="nfc-product-copy">
              <p className="nfc-product-category">Değerlendirme kartı</p>
              <h3>Tripadvisor değerlendirme kartı</h3>
              <p>Konuklarınızın deneyimini görünür kılın ve daha fazla kişiye ulaşın.</p>
              <a href="#iletisim" className="nfc-product-link">Bu ürün için iletişime geçin <FaArrowRight /></a>
            </div>
          </article>
          <article className="nfc-product-card">
            <div className="nfc-product-image-wrap">
              <Image src="/NFC Hotels.com Review Card.png" alt="NFC Hotels.com değerlendirme kartı" width={660} height={1050} className="nfc-product-image" />
              <span className="nfc-product-badge">Hotels.com</span>
            </div>
            <div className="nfc-product-copy">
              <p className="nfc-product-category">Değerlendirme kartı</p>
              <h3>Hotels.com değerlendirme kartı</h3>
              <p>Otel deneyimlerini doğru yerde, doğru anda değerlendirmeye dönüştürün.</p>
              <a href="#iletisim" className="nfc-product-link">Bu ürün için iletişime geçin <FaArrowRight /></a>
            </div>
          </article>
        </div>
        <div className="nfc-product-more">
          <span className="nfc-product-more-label">Bunlar sadece başlangıç</span>
          <p>Booking.com ve diğer platformlar için de çözümler üretiyor; ihtiyacınıza göre yeni bağlantılar ve ürünler tasarlıyoruz.</p>
        </div>
        <div className="nfc-custom-card">
          <div className="nfc-custom-copy">
            <p className="nfc-kicker"><span /> Size özel</p>
            <h3>Dijital Kartvizitiniz<br /><em>markanız kadar özgün.</em></h3>
            <p>Hazır şablonlarla sınırlı kalmayın. Renkleri, bağlantıları ve deneyimi markanıza göre tasarlayalım.</p>
            <Link href="/emre-bozkurt" className="nfc-product-link">Örnek dijital kartviziti inceleyin <FaArrowRight /></Link>
          </div>
          <div className="nfc-custom-preview" aria-hidden="true">
            <div className="nfc-custom-preview-glow" />
            <div className="nfc-custom-preview-card">
              <span className="nfc-custom-preview-mark"><FaNfcSymbol /></span>
              <span className="nfc-custom-preview-line" />
              <strong>Dijital<br />Kartvizit</strong>
              <small>Size özel tasarım</small>
            </div>
          </div>
        </div>
      </section>

      <section id="cozumler" className="nfc-section nfc-container">
        <div className="nfc-section-heading">
          <p className="nfc-kicker"><span /> Çözümler</p>
          <h2>İletişimin yeni<br /><em>temassız hali.</em></h2>
          <p>İnsanların markanızla bağlantı kurmasını kolaylaştıran sade, hızlı ve etkili çözümler.</p>
        </div>
        <div className="nfc-feature-grid">
          <article className="nfc-feature-card nfc-feature-card-accent">
            <span className="nfc-feature-icon"><FaNfcSymbol /></span>
            <span className="nfc-feature-number">01</span>
            <h3>NFC kartvizit</h3>
            <p>Bilgilerinizi basılı bir kartın sınırlarından çıkarın. Dokundurun, paylaşın, akılda kalın.</p>
            <a href="#nasil-calisir" className="nfc-feature-link">Detayları görün <FaArrowRight /></a>
          </article>
          <article className="nfc-feature-card">
            <span className="nfc-feature-icon"><FaMobileScreenButton /></span>
            <span className="nfc-feature-number">02</span>
            <h3>Dijital profil</h3>
            <p>Telefon, WhatsApp, e-posta, sosyal medya ve konum bilgilerinizi tek bir sayfada buluşturun.</p>
            <a href="#nasil-calisir" className="nfc-feature-link">Detayları görün <FaArrowRight /></a>
          </article>
          <article className="nfc-feature-card">
            <span className="nfc-feature-icon"><FaChartLine /></span>
            <span className="nfc-feature-number">03</span>
            <h3>İşletme deneyimi</h3>
            <p>Ekibiniz, şubeleriniz ve ürünleriniz için her temas noktasını ölçülebilir bir bağlantıya dönüştürün.</p>
            <a href="#nasil-calisir" className="nfc-feature-link">Detayları görün <FaArrowRight /></a>
          </article>
        </div>
      </section>

      <section id="nasil-calisir" className="nfc-process-section">
        <div className="nfc-container nfc-process-layout">
          <div className="nfc-process-copy">
            <p className="nfc-kicker"><span /> Nasıl çalışır?</p>
            <h2>Basit bir dokunuş,<br /><em>güçlü bir iz.</em></h2>
            <p>Teknik karmaşayı arka planda bırakın. Siz deneyime odaklanın; biz bağlantıyı kolaylaştıralım.</p>
            <a href="#iletisim" className="nfc-button nfc-button-primary">İletişime geçin <FaArrowRight /></a>
          </div>
          <div className="nfc-steps">
            <div className="nfc-step">
              <span className="nfc-step-number">01</span>
              <div><h3>Profilinizi oluşturun</h3><p>Bilgilerinizi ve bağlantılarınızı tek bir yerde düzenleyin.</p></div>
            </div>
            <div className="nfc-step">
              <span className="nfc-step-number">02</span>
              <div><h3>Temas noktanızı seçin</h3><p>NFC kartı, etiket veya QR kod ile paylaşım biçiminizi belirleyin.</p></div>
            </div>
            <div className="nfc-step">
              <span className="nfc-step-number">03</span>
              <div><h3>Bağlantınızı paylaşın</h3><p>Karşınızdaki kişi dokunduğu anda güncel profiliniz açılır.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="nfc-confidence-section nfc-container">
        <div className="nfc-confidence-card">
          <div className="nfc-confidence-icon"><FaShieldHalved /></div>
          <div><strong>İlgilendiğiniz ürünü birlikte şekillendirelim.</strong><p>Hazır kartlardan özel Dijital Kartvizit tasarımına kadar ihtiyacınızı anlatın, size uygun çözümü beraber oluşturalım.</p></div>
          <Link href="/emre-bozkurt" className="nfc-confidence-link">İletişim seçenekleri <FaArrowRight /></Link>
        </div>
      </section>

      <footer className="nfc-footer nfc-container">
        <div className="nfc-footer-brand">
          <span className="nfc-brand-mark"><FaNfcSymbol /></span>
          <span>NFC Solutions <strong>Turkey</strong></span>
        </div>
        <p>Temassız iletişimi daha anlamlı hale getiriyoruz.</p>
        <a href="#iletisim">İletişime geçin <FaArrowUpRightFromSquare /></a>
      </footer>
    </main>
  );
}
