export type ProfileFacilityInput = {
  name: string;
  url: string;
};

export const profileColorSchemes = [
  { value: "forest", label: "Orman", description: "Yeşil ve doğal" },
  { value: "midnight", label: "Gece", description: "Lacivert ve sakin" },
  { value: "ocean", label: "Okyanus", description: "Mavi ve ferah" },
  { value: "sand", label: "Kum", description: "Sıcak ve yumuşak" },
  { value: "plum", label: "Erik", description: "Mor ve karakterli" },
] as const;

export type ProfileColorScheme = (typeof profileColorSchemes)[number]["value"];

export function isProfileColorScheme(value: string): value is ProfileColorScheme {
  return profileColorSchemes.some((scheme) => scheme.value === value);
}

export function normalizeProfileColorScheme(value: string | null | undefined): ProfileColorScheme {
  return value && isProfileColorScheme(value) ? value : "forest";
}

export function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function normalizeHttpUrl(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

export function normalizeEmail(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : null;
}

export function normalizeIban(value: string) {
  const normalized = value.replace(/\s+/g, "").toUpperCase();
  return normalized || null;
}

export function isValidIban(value: string) {
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(value)) {
    return false;
  }

  const rearranged = `${value.slice(4)}${value.slice(0, 4)}`;
  let remainder = 0;

  for (const character of rearranged) {
    const digits = character >= "A" && character <= "Z"
      ? String(character.charCodeAt(0) - 55)
      : character;

    for (const digit of digits) {
      remainder = (remainder * 10 + Number(digit)) % 97;
    }
  }

  return remainder === 1;
}

export function phoneHref(value: string | null) {
  if (!value?.trim()) {
    return null;
  }

  const phone = value.trim();
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(value: string | null) {
  if (!value?.trim()) {
    return null;
  }

  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export function mailHref(value: string | null) {
  return value ? `mailto:${value}` : null;
}

export function escapeVCard(value: string) {
  return value.replace(/[\\,;\n]/g, (character) => {
    if (character === "\n") {
      return "\\n";
    }

    return `\\${character}`;
  });
}
