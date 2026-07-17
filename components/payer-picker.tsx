"use client";

export type MemberOption = {
  id: string;
  name: string;
};

export type PayerPickerMode = "paid" | "received";

export function PayerPicker({
  members,
  value,
  onChange,
  mode,
}: {
  members: MemberOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  mode: PayerPickerMode;
}) {
  const action = mode === "received" ? "aldı" : "ödedi";

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      <button
        type="button"
        aria-pressed={value === null}
        onClick={() => onChange(null)}
        className={
          value === null
            ? "rounded-xl border-2 border-slate-700 bg-slate-100 px-3 py-2.5 text-left text-sm font-black text-slate-800"
            : "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-sm font-bold text-slate-500 transition hover:border-slate-400"
        }
      >
        Bölüşüldü
      </button>
      {members.map((member) => (
        <button
          key={member.id}
          type="button"
          aria-pressed={value === member.id}
          onClick={() => onChange(member.id)}
          className={
            value === member.id
              ? "rounded-xl border-2 border-amber-500 bg-amber-50 px-3 py-2.5 text-left text-sm font-black text-amber-800"
              : "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-sm font-bold text-slate-500 transition hover:border-amber-300 hover:text-amber-700"
          }
        >
          {member.name} {action}
        </button>
      ))}
    </div>
  );
}
