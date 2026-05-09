import { useMemo, useState } from "react";
import EmptyState from "./components/EmptyState.jsx";
import FinalReview from "./components/FinalReview.jsx";
import Home from "./components/Home.jsx";
import LessonView from "./components/LessonView.jsx";
import TopicNav from "./components/TopicNav.jsx";
import { lessons } from "./data/lessons.js";
import { useProgress } from "./hooks/useProgress.js";

function getFirstIncompleteIndex(lessonList, completedSet) {
  const index = lessonList.findIndex((lesson) => !completedSet.has(lesson.id));
  return index === -1 ? Math.max(lessonList.length - 1, 0) : index;
}

export default function App() {
  const lessonList = Array.isArray(lessons) ? lessons : [];
  const [view, setView] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {
    progress,
    completedSet,
    completedCount,
    unlockedIndex,
    allComplete,
    completeLesson,
    goTo,
    restart,
    updateReflection,
  } = useProgress(lessonList);

  const currentIndex = useMemo(() => {
    if (lessonList.length === 0) return 0;
    return Math.max(
      0,
      Math.min(progress.currentIndex, unlockedIndex, lessonList.length - 1),
    );
  }, [lessonList.length, progress.currentIndex, unlockedIndex]);

  const lesson = lessonList[currentIndex];

  if (lessonList.length === 0 || !lesson) {
    return <EmptyState onRestart={restart} />;
  }

  function startLearning() {
    goTo(0);
    setView("learn");
  }

  function continueLearning() {
    const nextIndex = allComplete
      ? lessonList.length - 1
      : getFirstIncompleteIndex(lessonList, completedSet);
    goTo(nextIndex);
    setView("learn");
  }

  function goNext() {
    if (currentIndex === lessonList.length - 1) {
      setView("review");
      return;
    }
    goTo(currentIndex + 1);
  }

  function resetCourse() {
    restart();
    setView("home");
  }

  if (view === "review") {
    return (
      <FinalReview
        onRestart={resetCourse}
        onHome={() => {
          setView("home");
        }}
      />
    );
  }

  if (view === "home") {
    return (
      <Home
        lessons={lessonList}
        completedSet={completedSet}
        completedCount={completedCount}
        allComplete={allComplete}
        onStart={startLearning}
        onContinue={continueLearning}
        onReview={() => setView("review")}
        onRestart={resetCourse}
      />
    );
  }

  const isCompleted = completedSet.has(lesson.id);
  const canGoNext = isCompleted;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[320px_1fr]">
        <TopicNav
          lessons={lessonList}
          currentIndex={currentIndex}
          completedSet={completedSet}
          unlockedIndex={unlockedIndex}
          onSelect={(index) => goTo(index)}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <LessonView
          lesson={lesson}
          index={currentIndex}
          total={lessonList.length}
          completedCount={completedCount}
          isCompleted={isCompleted}
          canGoNext={canGoNext}
          onComplete={() => completeLesson(lesson.id, currentIndex)}
          onPrevious={() => goTo(currentIndex - 1)}
          onNext={goNext}
          onHome={() => setView("home")}
          onOpenTopics={() => setDrawerOpen(true)}
          reflection={progress.reflections?.[lesson.id] ?? ""}
          onReflectionChange={(value) => updateReflection(lesson.id, value)}
        />
      </div>
    </main>
  );
}
