import { BookOpen, RotateCcw, Trophy } from "lucide-react";
import { finalReview } from "../data/lessons.js";

export default function FinalReview({ onRestart, onHome }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
          <Trophy className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-wide text-emerald-700">
          Final completion message
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          {finalReview.title}
        </h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          {finalReview.message}
        </p>

        <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
          <h2 className="text-xl font-bold">Completion Message</h2>
          <p className="mt-2 leading-7">
            Great work. You completed every topic and passed each understanding
            check.
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-950">Key Points</h2>
        <div className="mt-4 grid gap-3">
          {finalReview.keyPoints.map((point, index) => (
            <div
              key={point}
              className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="leading-7 text-slate-700">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            <RotateCcw className="h-5 w-5" />
            Restart Learning
          </button>
          <button
            type="button"
            onClick={onHome}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            <BookOpen className="h-5 w-5" />
            Back to Home
          </button>
        </div>
      </section>
    </main>
  );
}
