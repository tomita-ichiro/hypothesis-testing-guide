import { CheckCircle2, Lock, X } from "lucide-react";

export default function TopicNav({
  lessons,
  currentIndex,
  completedSet,
  unlockedIndex,
  onSelect,
  open,
  onClose,
}) {
  const list = (
    <nav className="space-y-2">
      {lessons.map((lesson, index) => {
        const isCompleted = completedSet.has(lesson.id);
        const isLocked = index > unlockedIndex && !isCompleted;
        const isCurrent = index === currentIndex;

        return (
          <button
            key={lesson.id}
            type="button"
            disabled={isLocked}
            onClick={() => {
              onSelect(index);
              onClose?.();
            }}
            className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition ${
              isCurrent
                ? "border-cyan-300 bg-cyan-50 text-cyan-950"
                : "border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50"
            } ${isLocked ? "cursor-not-allowed opacity-55" : ""}`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : isLocked
                    ? "bg-slate-100 text-slate-400"
                    : "bg-slate-900 text-white"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : isLocked ? (
                <Lock className="h-4 w-4" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                {lesson.eyebrow}
              </span>
              <span className="block text-sm font-semibold leading-snug">
                {lesson.title}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:block">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
          Topics
        </h2>
        {list}
      </aside>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 transition lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[min(88vw,360px)] overflow-y-auto border-l border-slate-200 bg-white p-4 shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Topics
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close topics menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {list}
      </aside>
    </>
  );
}
