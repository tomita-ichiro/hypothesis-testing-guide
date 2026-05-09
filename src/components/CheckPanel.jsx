import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

function normalizeQuiz(lesson) {
  if (Array.isArray(lesson.quiz)) return lesson.quiz;
  if (!lesson.check) return [];
  return [lesson.check];
}

export default function CheckPanel({ lesson, isCompleted, onComplete }) {
  const questions = useMemo(() => normalizeQuiz(lesson), [lesson]);
  const [selected, setSelected] = useState({});
  const [wrongIndexes, setWrongIndexes] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setSelected({});
    setWrongIndexes([]);
    setStatus(isCompleted ? "correct" : "idle");
  }, [lesson.id, isCompleted]);

  function chooseAnswer(questionIndex, optionIndex) {
    setSelected((current) => ({ ...current, [questionIndex]: optionIndex }));
    if (status === "wrong") {
      setStatus("idle");
      setWrongIndexes((current) =>
        current.filter((index) => index !== questionIndex),
      );
    }
  }

  function submitAnswers() {
    const missed = questions.reduce((indexes, question, index) => {
      const choice = selected[index];
      const answer = question.type === "truefalse" ? choice === 0 : choice;
      return answer === question.answer ? indexes : [...indexes, index];
    }, []);

    if (missed.length === 0) {
      setStatus("correct");
      setWrongIndexes([]);
      onComplete();
    } else {
      setStatus("wrong");
      setWrongIndexes(missed);
    }
  }

  const allAnswered = questions.every((_, index) => selected[index] !== undefined);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
            Mini quiz
          </p>
          <h3 className="mt-1 text-lg font-bold text-slate-950">
            Answer correctly to unlock the next module
          </h3>
        </div>
        {status === "correct" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <CheckCircle2 className="h-4 w-4" />
            Passed
          </span>
        )}
      </div>

      <div className="mt-5 grid gap-5">
        {questions.map((question, questionIndex) => {
          const options =
            question.type === "truefalse" ? ["True", "False"] : question.options;
          const isWrong = wrongIndexes.includes(questionIndex);

          return (
            <div
              key={question.question}
              className={`rounded-lg border p-4 ${
                isWrong ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-slate-50"
              }`}
            >
              <p className="font-semibold text-slate-900">
                {questionIndex + 1}. {question.question}
              </p>
              <div className="mt-3 grid gap-2">
                {options.map((option, optionIndex) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => chooseAnswer(questionIndex, optionIndex)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
                      selected[questionIndex] === optionIndex
                        ? "border-blue-500 bg-blue-50 text-blue-950"
                        : "border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:bg-violet-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {isWrong && (
                <p className="mt-3 text-sm leading-6 text-amber-900">
                  Not quite. {question.feedback} Try this question again.
                </p>
              )}
            </div>
          );
        })}
      </div>

      {status === "correct" && (
        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Nice work. You can move to the next module.
        </div>
      )}

      <button
        type="button"
        onClick={submitAnswers}
        disabled={!allAnswered || status === "correct"}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        <RotateCcw className="h-4 w-4" />
        Check answers
      </button>
    </section>
  );
}
