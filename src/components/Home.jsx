import { ArrowRight, BookOpen, RotateCcw } from "lucide-react";
import ProgressBar from "./ProgressBar.jsx";

export default function Home({
  lessons,
  completedSet,
  completedCount,
  allComplete,
  onStart,
  onContinue,
  onReview,
  onRestart,
}) {
  const nextLessonIndex = lessons.findIndex(
    (lesson) => !completedSet.has(lesson.id),
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-800 ring-1 ring-cyan-100">
            <BookOpen className="h-4 w-4" />
            Interactive statistics note
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Hypothesis Testing Learning Guide
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Learn the note step by step: what hypothesis testing is, how the
            four-step decision process works, what errors can happen, and how
            directional tests, effect size, and power fit into the full picture.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onContinue}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              Continue Learning
            </button>
            {allComplete && (
              <button
                type="button"
                onClick={onReview}
                className="rounded-lg border border-emerald-300 bg-emerald-50 px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-100"
              >
                View Final Review
              </button>
            )}
            {completedCount > 0 && (
              <button
                type="button"
                onClick={onRestart}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-5 py-3 font-semibold text-violet-800 transition hover:bg-violet-100"
              >
                <RotateCcw className="h-5 w-5" />
                Restart Learning
              </button>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Progress Overview</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your completed topics are saved in this browser.
          </p>
          <div className="mt-6">
            <ProgressBar completed={completedCount} total={lessons.length} />
          </div>
          <div className="mt-6 grid gap-3">
            {lessons.map((lesson, index) => {
              const completed = completedSet.has(lesson.id);
              const label =
                completed || nextLessonIndex === -1
                  ? "Complete"
                  : index === nextLessonIndex
                    ? "Next"
                    : "Upcoming";
              return (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {index + 1}. {lesson.title}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      completed ? "text-emerald-700" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
