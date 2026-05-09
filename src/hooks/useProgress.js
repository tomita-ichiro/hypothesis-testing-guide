import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "hypothesis-testing-progress-v2";

const initialProgress = {
  completedIds: [],
  currentIndex: 0,
  reflections: {},
};

function readProgress() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialProgress;
    const parsed = JSON.parse(saved);
    return {
      completedIds: Array.isArray(parsed.completedIds) ? parsed.completedIds : [],
      currentIndex: Number.isInteger(parsed.currentIndex) ? parsed.currentIndex : 0,
      reflections:
        parsed.reflections && typeof parsed.reflections === "object"
          ? parsed.reflections
          : {},
    };
  } catch {
    return initialProgress;
  }
}

export function useProgress(lessons) {
  const [progress, setProgress] = useState(() => readProgress());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completedSet = useMemo(
    () => new Set(progress.completedIds),
    [progress.completedIds],
  );

  const completedCount = lessons.filter((lesson) =>
    completedSet.has(lesson.id),
  ).length;

  const unlockedIndex = Math.min(completedCount, Math.max(lessons.length - 1, 0));
  const allComplete = lessons.length > 0 && completedCount === lessons.length;

  function completeLesson(lessonId, index) {
    setProgress((current) => {
      const nextCompleted = current.completedIds.includes(lessonId)
        ? current.completedIds
        : [...current.completedIds, lessonId];

      return {
        completedIds: nextCompleted,
        currentIndex: Math.min(index + 1, Math.max(lessons.length - 1, 0)),
        reflections: current.reflections ?? {},
      };
    });
  }

  function goTo(index) {
    const nextIndex = Math.max(0, Math.min(index, lessons.length - 1));
    setProgress((current) => ({ ...current, currentIndex: nextIndex }));
  }

  function restart() {
    setProgress(initialProgress);
  }

  function updateReflection(lessonId, value) {
    setProgress((current) => ({
      ...current,
      reflections: {
        ...(current.reflections ?? {}),
        [lessonId]: value,
      },
    }));
  }

  return {
    progress,
    completedSet,
    completedCount,
    unlockedIndex,
    allComplete,
    completeLesson,
    goTo,
    restart,
    updateReflection,
  };
}
