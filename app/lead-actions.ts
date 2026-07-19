"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireSession } from "@/lib/auth-helpers";

export type LeadFormState = {
  error?: string;
  success?: string;
};

const leadTypes = ["MESSAGE", "CALL", "MAIL", "ORDER"] as const;

function parseLeadFields(formData: FormData) {
  const type = formData.get("leadType");
  const personName = formData.get("personName");
  const contactInfo = formData.get("contactInfo");
  const followUpValue = formData.get("followUpAt");
  const details = formData.get("details");

  if (typeof type !== "string" || !leadTypes.includes(type as (typeof leadTypes)[number])) {
    return { error: "Lead türünü seçin." } as const;
  }

  if (typeof personName !== "string" || !personName.trim()) {
    return { error: "Kişi adı zorunludur." } as const;
  }

  let followUpAt: Date | null = null;

  if (typeof followUpValue === "string" && followUpValue) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(followUpValue)) {
      return { error: "Geçerli bir tarih seçin." } as const;
    }

    followUpAt = new Date(`${followUpValue}T12:00:00.000Z`);

    if (Number.isNaN(followUpAt.getTime())) {
      return { error: "Geçerli bir tarih seçin." } as const;
    }
  }

  return {
    value: {
      type: type as (typeof leadTypes)[number],
      personName: personName.trim().slice(0, 120),
      contactInfo:
        typeof contactInfo === "string" && contactInfo.trim()
          ? contactInfo.trim().slice(0, 240)
          : null,
      followUpAt,
      details:
        typeof details === "string" && details.trim()
          ? details.trim().slice(0, 1000)
          : null,
    },
  } as const;
}

export async function addLeadAction(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const session = await requireSession();
  const parsed = parseLeadFields(formData);

  if ("error" in parsed) {
    return { error: parsed.error };
  }

  await prisma.lead.create({
    data: {
      ...parsed.value,
      userId: session.user.id,
    },
  });

  revalidatePath("/admin");
  return { success: "Lead eklendi." };
}

export async function updateLeadAction(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const session = await requireSession();
  const id = formData.get("id");
  const parsed = parseLeadFields(formData);

  if (typeof id !== "string" || !id) {
    return { error: "Lead bulunamadı." };
  }

  if ("error" in parsed) {
    return { error: parsed.error };
  }

  const existingLead = await prisma.lead.findFirst({
    where: { id, userId: session.user.id },
    select: { id: true },
  });

  if (!existingLead) {
    return { error: "Lead bulunamadı." };
  }

  await prisma.lead.update({
    where: { id: existingLead.id },
    data: parsed.value,
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteLeadAction(formData: FormData) {
  const session = await requireSession();
  const id = formData.get("id");

  if (typeof id !== "string" || !id) {
    return;
  }

  await prisma.lead.deleteMany({
    where: { id, userId: session.user.id },
  });
  revalidatePath("/admin");
}
