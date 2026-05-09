import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FlaskConical,
  Users,
  XCircle,
} from "lucide-react";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}

function Curve({ rightTail = true, label = "Critical region" }) {
  const shadePath = rightTail
    ? "M250 158 C270 139 284 103 304 67 C322 34 341 21 360 20 L360 170 L250 170 Z"
    : "M0 170 L0 20 C19 21 38 34 56 67 C76 103 90 139 110 158 L0 170 Z";

  return (
    <svg viewBox="0 0 360 190" className="h-44 w-full" role="img" aria-label={label}>
      <path d="M0 170 H360" stroke="#94a3b8" strokeWidth="2" />
      <path d={shadePath} fill="#c4b5fd" opacity="0.72" />
      <path
        d="M0 170 C45 170 55 35 100 35 C145 35 150 170 180 170 C210 170 215 35 260 35 C305 35 315 170 360 170"
        fill="none"
        opacity="0"
      />
      <path
        d="M0 170 C58 170 74 20 180 20 C286 20 302 170 360 170"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x={rightTail ? "248" : "18"} y="44" fill="#5b21b6" fontSize="14" fontWeight="700">
        {label}
      </text>
    </svg>
  );
}

export default function LessonVisual({ type, formula }) {
  if (type === "process") {
    const steps = [
      ["Population", Users],
      ["Treatment", FlaskConical],
      ["Measured sample", BarChart3],
    ];

    return (
      <Card className="bg-gradient-to-r from-blue-50 to-violet-50">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          {steps.map(([label, Icon], index) => (
            <div key={label} className="contents">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-blue-100">
                <Icon className="mx-auto h-8 w-8 text-blue-700" />
                <p className="mt-2 font-bold text-slate-950">{label}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="mx-auto hidden h-6 w-6 text-violet-500 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (type === "critical-region") {
    return (
      <Card className="bg-blue-50">
        <Curve label="p < alpha" />
        <p className="text-center text-sm font-semibold text-slate-700">
          Results in the shaded tail are unlikely if H0 is true.
        </p>
      </Card>
    );
  }

  if (type === "z-score") {
    return (
      <Card className="bg-violet-50">
        <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
          Formula card
        </p>
        <div className="mt-3 rounded-lg bg-white p-5 text-center font-mono text-2xl font-bold text-slate-950 shadow-sm">
          {formula}
        </div>
        <p className="mt-3 text-sm text-slate-700">
          Difference observed divided by difference expected from sampling error.
        </p>
      </Card>
    );
  }

  if (type === "decision-flow") {
    return (
      <Card className="bg-gradient-to-r from-blue-50 to-violet-50">
        <div className="grid gap-3 md:grid-cols-3 md:items-stretch">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Ask</p>
            <p className="mt-2 font-bold text-slate-950">
              Is the result in the critical region?
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-700" />
            <p className="mt-2 font-bold text-emerald-950">Yes: reject H0</p>
            <p className="text-sm text-emerald-900">Significant effect</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <XCircle className="h-6 w-6 text-slate-500" />
            <p className="mt-2 font-bold text-slate-950">No: fail to reject H0</p>
            <p className="text-sm text-slate-700">Not enough evidence</p>
          </div>
        </div>
      </Card>
    );
  }

  if (type === "error-table") {
    return (
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-blue-50 text-slate-950">
                <th className="border border-slate-200 p-3">Error</th>
                <th className="border border-slate-200 p-3">Decision</th>
                <th className="border border-slate-200 p-3">Reality</th>
                <th className="border border-slate-200 p-3">Simple name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Type I</td>
                <td className="border border-slate-200 p-3">Reject H0</td>
                <td className="border border-slate-200 p-3">No real effect</td>
                <td className="border border-slate-200 p-3">False positive</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Type II</td>
                <td className="border border-slate-200 p-3">Fail to reject H0</td>
                <td className="border border-slate-200 p-3">Real effect exists</td>
                <td className="border border-slate-200 p-3">False negative</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  if (type === "one-tailed") {
    return (
      <Card className="bg-violet-50">
        <Curve rightTail label="Right-tail critical region" />
        <p className="text-center text-sm font-semibold text-slate-700">
          Predicted increase: large sample means support the prediction.
        </p>
      </Card>
    );
  }

  if (type === "two-conclusions" || type === "comparison") {
    return (
      <Card className="bg-gradient-to-r from-blue-50 to-violet-50">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Explanation A
            </p>
            <p className="mt-2 text-lg font-bold text-slate-950">Sampling error</p>
            <p className="mt-1 text-sm text-slate-700">
              The sample looks different by chance.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              Explanation B
            </p>
            <p className="mt-2 text-lg font-bold text-slate-950">Treatment effect</p>
            <p className="mt-1 text-sm text-slate-700">
              The treatment likely caused a real change.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  if (type === "alpha" || type === "type-one" || type === "effect-size" || type === "power") {
    const labels = {
      alpha: ["H0", "No effect", "Alpha", "Cut-off and Type I risk"],
      "type-one": ["Decision", "Reject H0", "Reality", "No effect"],
      "effect-size": ["Significant?", "Likely real", "Effect size?", "How large"],
      power: ["Real effect", "Exists", "Power", "Test detects it"],
    }[type];

    return (
      <Card className="bg-blue-50">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              {labels[0]}
            </p>
            <p className="mt-2 text-xl font-bold text-slate-950">{labels[1]}</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              {labels[2]}
            </p>
            <p className="mt-2 text-xl font-bold text-slate-950">{labels[3]}</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-violet-50">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-8 w-8 text-blue-700" />
        <p className="font-semibold text-slate-800">
          Compare the sample result with what would be expected from chance.
        </p>
      </div>
    </Card>
  );
}
