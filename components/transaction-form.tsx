"use client";

import { useActionState, useState } from "react";
import { addTransactionAction, type FormState } from "@/app/actions";
import {
  PayerPicker,
  type MemberOption,
} from "@/components/payer-picker";

type TransactionType = "INCOME" | "EXPENSE";

const initialState: FormState = {};

export function TransactionForm({
  defaultType,
  members,
  defaultPaidByMemberId = null,
}: {
  defaultType: TransactionType;
  members: MemberOption[];
  defaultPaidByMemberId?: string | null;
}) {
  const [state, formAction, pending] = useActionState(
    addTransactionAction,
    initialState,
  );
  const [type, setType] = useState<TransactionType>(defaultType);
  const [paidByMemberId, setPaidByMemberId] = useState<string | null>(
    defaultPaidByMemberId,
  );

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="type" value={type} />
      <input
        type="hidden"
        name="paidByMemberId"
        value={paidByMemberId ?? "SPLIT"}
      />

      <div>
        <span className="field-label">Tür</span>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            aria-pressed={type === "INCOME"}
            onClick={() => setType("INCOME")}
            className={
              type === "INCOME"
                ? "rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-700"
                : "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-400 transition hover:border-emerald-300 hover:text-emerald-600"
            }
          >
            <span className="mb-1 block text-lg">↑</span>
            Gelir
          </button>
          <button
            type="button"
            aria-pressed={type === "EXPENSE"}
            onClick={() => setType("EXPENSE")}
            className={
              type === "EXPENSE"
                ? "rounded-2xl border-2 border-rose-500 bg-rose-50 px-4 py-3 text-sm font-black text-rose-700"
                : "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-400 transition hover:border-rose-300 hover:text-rose-600"
            }
          >
            <span className="mb-1 block text-lg">↓</span>
            Gider
          </button>
        </div>
      </div>

      <div>
        <span className="field-label">
          {type === "INCOME" ? "Geliri kim aldı?" : "Gideri kim ödedi?"}
        </span>
        <PayerPicker
          members={members}
          value={paidByMemberId}
          onChange={setPaidByMemberId}
          mode={type === "INCOME" ? "received" : "paid"}
        />
      </div>

      <div>
        <label htmlFor="amount" className="field-label">
          Tutar
        </label>
        <div className="relative">
          <input
            id="amount"
            name="amount"
            type="text"
            inputMode="decimal"
            required
            placeholder="0,00"
            className="field-input pr-12"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-400">
            ₺
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="field-label">
          Açıklama
        </label>
        <input
          id="description"
          name="description"
          type="text"
          maxLength={120}
          placeholder="Örn. market alışverişi"
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="date" className="field-label">
          Tarih
        </label>
        <input id="date" name="date" type="date" required className="field-input" />
      </div>

      {state.error ? (
        <p role="alert" className="text-sm font-medium text-rose-600">
          {state.error}
        </p>
      ) : null}
      {state.success ? (
        <p role="status" className="text-sm font-medium text-emerald-700">
          {state.success}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Ekleniyor…" : "Kaydı ekle"}
      </button>
    </form>
  );
}
