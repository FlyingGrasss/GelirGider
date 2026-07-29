export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nfcsolutions.com.tr").replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
