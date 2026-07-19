import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { AddToContactsButton } from "@/components/add-to-contacts-button";
import { prisma } from "@/lib/db";
import {
  mailHref,
  phoneHref,
  whatsappHref,
} from "@/lib/profile";

type ProfilePageProps = {
  params: Promise<{ slug: string }>;
};

async function getProfile(slug: string) {
  return prisma.profile.findUnique({
    where: { slug },
    include: {
      facilities: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = await getProfile(slug);

  if (!profile) {
    return { title: "Profil bulunamadı" };
  }

  return {
    title: `${profile.name} | ${profile.title}`,
    description: [profile.title, profile.title2].filter(Boolean).join(" — "),
  };
}

function ProfileLinkButton({
  href,
  label,
  icon,
  fullWidth,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  fullWidth: boolean;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`profile-button ${fullWidth ? "profile-button-wide" : "profile-button-normal"}`}
    >
      <span className="profile-button-icon">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = await getProfile(slug);

  if (!profile) {
    notFound();
  }

  const callHref = profile.callEnabled ? phoneHref(profile.callNumber) : null;
  const whatsappLink = profile.whatsappEnabled
    ? whatsappHref(profile.whatsappNumber)
    : null;
  const emailHref = profile.emailEnabled ? mailHref(profile.email) : null;
  const baseUrl = (process.env.BETTER_AUTH_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const profileUrl = `${baseUrl}/${profile.slug}`;

  return (
    <main className="profile-page">
      <div className="profile-shell">
        <header className="profile-header">
          {profile.showImage && profile.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.imageUrl} alt="" className="profile-image" />
          ) : null}
          <h1 className="profile-name">{profile.name}</h1>
          <div className="profile-divider" />
          <p className="profile-title">{profile.title}</p>
          {profile.title2 ? <p className="profile-title">{profile.title2}</p> : null}
        </header>

        <section className="profile-button-grid" aria-label="İletişim seçenekleri">
          {callHref ? (
            <ProfileLinkButton href={callHref} label="Ara" icon={<FaPhone />} fullWidth={profile.callFullWidth} />
          ) : null}
          {whatsappLink ? (
            <ProfileLinkButton href={whatsappLink} label="WhatsApp" icon={<FaWhatsapp />} fullWidth={profile.whatsappFullWidth} />
          ) : null}
          {emailHref ? (
            <ProfileLinkButton href={emailHref} label="Mail" icon={<FaEnvelope />} fullWidth={profile.emailFullWidth} />
          ) : null}
          {profile.linkedinEnabled && profile.linkedinUrl ? (
            <ProfileLinkButton href={profile.linkedinUrl} label="LinkedIn" icon={<FaLinkedinIn />} fullWidth={profile.linkedinFullWidth} />
          ) : null}
          {profile.contactEnabled ? (
            <AddToContactsButton name={profile.name} title={profile.title} title2={profile.title2} phone={profile.callNumber} email={profile.email} url={profileUrl} fullWidth={profile.contactFullWidth} />
          ) : null}
          {profile.locationEnabled && profile.locationUrl ? (
            <ProfileLinkButton href={profile.locationUrl} label="Konum" icon={<FaLocationDot />} fullWidth={profile.locationFullWidth} />
          ) : null}
          {profile.instagramEnabled && profile.instagramUrl ? (
            <ProfileLinkButton href={profile.instagramUrl} label="Instagram" icon={<FaInstagram />} fullWidth={profile.instagramFullWidth} />
          ) : null}
        </section>

        {profile.facilities.length > 0 ? (
          <section className="profile-facilities">
            <h2>{profile.facilitiesHeading}</h2>
            <div className="profile-facility-list">
              {profile.facilities.map((facility) => (
                <a key={facility.id} href={facility.url} target="_blank" rel="noreferrer" className="profile-facility-link">
                  <span>{facility.name}</span>
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        ) : null}

      </div>
    </main>
  );
}
