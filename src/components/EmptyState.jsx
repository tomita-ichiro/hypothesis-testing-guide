import { AlertCircle } from "lucide-react";

export default function EmptyState({ onRestart }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-lg rounded-lg border border-amber-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-950">Content unavailable</h1>
        <p className="mt-3 text-slate-600">
          The lesson content could not be loaded. Restarting progress may help if
          saved data points to a missing section.
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700"
        >
          Restart progress
        </button>
      </section>
    </main>
  );
}
