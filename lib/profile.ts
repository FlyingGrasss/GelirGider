export type ProfileFacilityInput = {
  name: string;
  url: string;
};

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
