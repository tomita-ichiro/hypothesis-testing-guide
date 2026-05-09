import { CheckCircle2 } from "lucide-react";

export default function CompletionBadge({ small = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-emerald-50 font-semibold text-emerald-700 ring-1 ring-emerald-200 ${
        small ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
      }`}
    >
      <CheckCircle2 className={small ? "h-3.5 w-3.5" : "h-4 w-4"} />
      Completed
    </span>
  );
}
