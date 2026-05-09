import { NotebookPen } from "lucide-react";

export default function ReflectionBox({ lesson, value, onChange }) {
  return (
    <section className="rounded-lg border border-violet-200 bg-violet-50 p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <NotebookPen className="h-5 w-5 text-violet-700" />
        <h3 className="text-lg font-bold text-violet-950">Student Reflection</h3>
      </div>
      <p className="mt-2 text-sm text-violet-900">{lesson.reflectionPrompt}</p>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className="mt-4 w-full resize-y rounded-lg border border-violet-200 bg-white p-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
        placeholder="Write a short note to your future self..."
      />
      <p className="mt-2 text-xs font-medium text-violet-700">
        Saved automatically in this browser.
      </p>
    </section>
  );
}
