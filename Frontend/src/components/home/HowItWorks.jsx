import StepCard from "../StepCard";
import { BookOpen, Sparkles, ClipboardCheck, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <BookOpen size={28} strokeWidth={2.2} />,
      title: "Choose Your Subject",
      description:
        "Select your subject, class, syllabus and exam pattern to personalize your learning experience.",
    },
    {
      number: 2,
      icon: <Sparkles size={28} strokeWidth={2.2} />,
      title: "Generate Smart Notes",
      description:
        "AI instantly creates concise notes, key concepts, revision points and important questions.",
    },
    {
      number: 3,
      icon: <ClipboardCheck size={28} strokeWidth={2.2} />,
      title: "Practice & Revise",
      description:
        "Generate quizzes, mock tests and flashcards to strengthen your understanding before exams.",
    },
    {
      number: 4,
      icon: <Trophy size={28} strokeWidth={2.2} />,
      title: "Ace Your Exam",
      description:
        "Track your progress, identify weak areas and walk into your exam with confidence.",
    },
  ];

  return (
    <section className="bg-slate-950 py-20" id="how-it-works">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-semibold text-violet-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From Syllabus to Exam Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            ExamAI transforms your syllabus into smart notes, quizzes and mock
            tests, helping you prepare faster and score better.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
