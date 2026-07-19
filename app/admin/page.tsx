import type { Metadata } from "next";
import { signOutAction } from "@/app/actions";
import { AdminNav } from "@/components/admin-nav";
import { DeleteTransactionButton } from "@/components/delete-transaction-button";
import { EditTransactionModal } from "@/components/edit-transaction-modal";
import { TransactionForm } from "@/components/transaction-form";
import { requireMember, requireSession } from "@/lib/auth-helpers";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Özet | Gelir Gider",
};

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
});

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Europe/Istanbul",
});

export default async function AdminPage() {
  const session = await requireSession();
  const currentMember = await requireMember();
  const [transactions, members] = await Promise.all([
    prisma.transaction.findMany({
      where: { userId: session.user.id },
      include: { paidByMember: { select: { name: true } } },
      orderBy: [{ date: "desc" }, { createdAt: "desc" }],
      take: 100,
    }),
    prisma.member.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
  ]);

  const income = transactions
    .filter((transaction) => transaction.type === "INCOME")
    .reduce((sum, transaction) => sum + transaction.amountCents, 0);
  const expense = transactions
    .filter((transaction) => transaction.type === "EXPENSE")
    .reduce((sum, transaction) => sum + transaction.amountCents, 0);
  const balance = income - expense;
  const incomeCount = transactions.filter((item) => item.type === "INCOME").length;
  const expenseCount = transactions.filter((item) => item.type === "EXPENSE").length;

  return (
    <main className="admin-page min-h-screen px-4 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="brand-mark">₺</div>
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-950">Admin</p>
              <p className="text-xs text-slate-400">Gelir Gider ve profiller</p>
            </div>
          </div>
          <form action={signOutAction}>
            <button type="submit" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-white hover:text-slate-900">Çıkış yap</button>
          </form>
        </header>

        <AdminNav active="overview" />

        <section className="mb-8 mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Genel bakış</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Merhaba, {currentMember.name}</h1>
            <p className="mt-2 text-sm text-slate-500">Gelir, gider ve takiplerini tek yerde yönet.</p>
          </div>
          <p className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">{transactions.length} kayıt</p>
        </section>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="summary-card summary-card-dark">
            <p className="summary-label">Bakiye</p>
            <p className="summary-value">{currency.format(balance / 100)}</p>
            <p className="mt-4 text-xs text-white/60">Gelirlerden giderler çıkarıldı</p>
          </div>
          <div className="summary-card">
            <p className="summary-label">Toplam gelir</p>
            <p className="summary-value text-emerald-700">{currency.format(income / 100)}</p>
            <p className="mt-4 text-xs text-slate-400">{incomeCount} gelir kaydı</p>
          </div>
          <div className="summary-card">
            <p className="summary-label">Toplam gider</p>
            <p className="summary-value text-rose-600">{currency.format(expense / 100)}</p>
            <p className="mt-4 text-xs text-slate-400">{expenseCount} gider kaydı</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <section className="panel h-fit">
            <div className="mb-6">
              <p className="eyebrow">Yeni kayıt</p>
              <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">Hareket ekle</h2>
            </div>
            <TransactionForm defaultType={transactions[0]?.type ?? "EXPENSE"} members={members} defaultPaidByMemberId={transactions[0]?.paidByMemberId} />
          </section>

          <section className="panel">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Son hareketler</p>
                <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">Kayıtlar</h2>
              </div>
              <span className="text-xs font-medium text-slate-400">En yeni 100</span>
            </div>
            {transactions.length === 0 ? (
              <div className="empty-state"><p className="font-bold text-slate-700">Henüz kayıt yok</p><p className="mt-1 text-sm text-slate-400">İlk hareketini sol taraftan ekleyebilirsin.</p></div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {transactions.map((transaction) => {
                  const isIncome = transaction.type === "INCOME";
                  return (
                    <li key={transaction.id} className="transaction-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                      <div className={isIncome ? "transaction-icon transaction-icon-income" : "transaction-icon transaction-icon-expense"}>{isIncome ? "↑" : "↓"}</div>
                      <div className="min-w-0 flex-1">
                        <p className="transaction-description break-words text-sm font-bold text-slate-800" title={transaction.description}>{transaction.description}</p>
                        <div className="transaction-meta mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                          <time dateTime={transaction.date.toISOString()}>{dateFormatter.format(transaction.date)}</time>
                          <span aria-hidden="true">·</span>
                          <span>Ekleyen: {transaction.createdByName}</span>
                          <span aria-hidden="true">·</span>
                          <span>{transaction.paidByMember ? `${transaction.paidByMember.name} ${isIncome ? "aldı" : "ödedi"}` : "Bölüşüldü"}</span>
                        </div>
                      </div>
                      <div className="transaction-actions flex shrink-0 items-center gap-3">
                        <p className={isIncome ? "text-right text-sm font-black text-emerald-700" : "text-right text-sm font-black text-rose-600"}>{isIncome ? "+" : "−"}{currency.format(transaction.amountCents / 100)}</p>
                        <EditTransactionModal transaction={{ id: transaction.id, type: transaction.type, amountCents: transaction.amountCents, description: transaction.description, date: transaction.date.toISOString().slice(0, 10), paidByMemberId: transaction.paidByMemberId }} members={members} />
                        <DeleteTransactionButton id={transaction.id} description={transaction.description} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </section>

      </div>
    </main>
  );
}
