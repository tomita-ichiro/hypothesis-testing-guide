import { ArrowLeft, ArrowRight, Home, Menu } from "lucide-react";
import CheckPanel from "./CheckPanel.jsx";
import CompletionBadge from "./CompletionBadge.jsx";
import LessonVisual from "./LessonVisual.jsx";
import ProgressBar from "./ProgressBar.jsx";
import ReflectionBox from "./ReflectionBox.jsx";

export default function LessonView({
  lesson,
  index,
  total,
  completedCount,
  isCompleted,
  canGoNext,
  onComplete,
  onPrevious,
  onNext,
  onHome,
  onOpenTopics,
  reflection,
  onReflectionChange,
}) {
  return (
    <article key={lesson.id} className="topic-enter space-y-5">
      <header className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onHome}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
          <button
            type="button"
            onClick={onOpenTopics}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-4 w-4" />
            Topics
          </button>
        </div>
        <ProgressBar completed={completedCount} total={total} />
        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
              Module {index + 1} of {total} - {lesson.eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              {lesson.title}
            </h1>
          </div>
          {isCompleted && <CompletionBadge />}
        </div>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-slate-950">Explanation</h2>
        <p className="mt-3 leading-8 text-slate-700">{lesson.explanation}</p>

        <div className="mt-6">
          <LessonVisual type={lesson.visual} formula={lesson.formula} />
        </div>

        <h2 className="mt-7 text-xl font-bold text-slate-950">
          Key Points
        </h2>
        <ul className="mt-3 grid gap-3">
          {lesson.importantPoints.map((point) => (
            <li
              key={point}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 leading-7 text-slate-700"
            >
              {point}
            </li>
          ))}
        </ul>

        {lesson.example && (
          <div className="mt-7 rounded-lg border border-cyan-200 bg-cyan-50 p-4">
            <h2 className="font-bold text-cyan-950">Example</h2>
            <p className="mt-2 leading-7 text-cyan-950">{lesson.example}</p>
          </div>
        )}

        <div className="mt-7 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <h2 className="font-bold text-emerald-950">Explain Simply</h2>
          <p className="mt-2 leading-7 text-emerald-950">
            {lesson.explainSimply}
          </p>
        </div>
      </section>

      <ReflectionBox
        lesson={lesson}
        value={reflection}
        onChange={onReflectionChange}
      />

      <CheckPanel
        lesson={lesson}
        isCompleted={isCompleted}
        onComplete={onComplete}
      />

      <footer className="flex flex-col-reverse gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onPrevious}
          disabled={index === 0}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {index === total - 1 ? "Final Review" : "Next"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </article>
  );
}
