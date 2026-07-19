"use client";

import { useActionState, useState } from "react";
import type { LeadFormState } from "@/app/lead-actions";

type LeadType = "MESSAGE" | "CALL" | "MAIL" | "ORDER";

export type EditableLead = {
  id: string;
  type: LeadType;
  personName: string;
  contactInfo: string | null;
  followUpAt: string;
  details: string | null;
};

type LeadAction = (
  state: LeadFormState,
  formData: FormData,
) => Promise<LeadFormState>;

const options: Array<{ value: LeadType; label: string }> = [
  { value: "MESSAGE", label: "Mesaj" },
  { value: "CALL", label: "Arama" },
  { value: "MAIL", label: "Mail" },
  { value: "ORDER", label: "Sipariş" },
];

export function LeadForm({
  action,
  lead,
  onCancel,
}: {
  action: LeadAction;
  lead?: EditableLead;
  onCancel?: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, {});
  const [type, setType] = useState<LeadType>(lead?.type ?? "MESSAGE");

  return (
    <form action={formAction} className="space-y-4">
      {lead ? <input type="hidden" name="id" value={lead.id} /> : null}
      <input type="hidden" name="leadType" value={type} />
      <div>
        <span className="field-label">Tür</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={type === option.value}
              onClick={() => setType(option.value)}
              className={type === option.value ? "rounded-xl border-2 border-slate-700 bg-slate-100 px-3 py-2.5 text-sm font-black text-slate-800" : "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold text-slate-500 transition hover:border-slate-400"}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor={`${lead?.id ?? "new"}-personName`} className="field-label">Kişi</label>
        <input id={`${lead?.id ?? "new"}-personName`} name="personName" required defaultValue={lead?.personName ?? ""} placeholder="Ahmet H. Yazıcı" className="field-input" />
      </div>
      <div>
        <label htmlFor={`${lead?.id ?? "new"}-contactInfo`} className="field-label">İletişim bilgisi</label>
        <input id={`${lead?.id ?? "new"}-contactInfo`} name="contactInfo" defaultValue={lead?.contactInfo ?? ""} placeholder="Telefon, e-posta veya başka bir bilgi" className="field-input" />
      </div>
      <div>
        <label htmlFor={`${lead?.id ?? "new"}-followUpAt`} className="field-label">Takip / teslim tarihi</label>
        <input id={`${lead?.id ?? "new"}-followUpAt`} name="followUpAt" type="date" defaultValue={lead?.followUpAt ?? ""} className="field-input" />
      </div>
      <div>
        <label htmlFor={`${lead?.id ?? "new"}-details`} className="field-label">Detaylar</label>
        <textarea id={`${lead?.id ?? "new"}-details`} name="details" defaultValue={lead?.details ?? ""} rows={4} placeholder="Notlar, istekler, teslim detayları..." className="field-input h-auto py-3" />
      </div>
      {state.error ? <p role="alert" className="text-sm font-semibold text-rose-600">{state.error}</p> : null}
      {state.success ? <p role="status" className="text-sm font-semibold text-emerald-700">{state.success}</p> : null}
      <div className="flex gap-3">
        {onCancel ? <button type="button" onClick={onCancel} className="flex-1 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50">Vazgeç</button> : null}
        <button type="submit" disabled={pending} className="flex-1 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 disabled:opacity-60">
          {pending ? "Kaydediliyor…" : lead ? "Değişiklikleri kaydet" : "Lead ekle"}
        </button>
      </div>
    </form>
  );
}
