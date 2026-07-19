import { BookOpen, FileQuestion, Brain, Flame } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      id: 1,
      title: "Notes Generated",
      value: 0,
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Question Papers",
      value: 0,
      icon: FileQuestion,
    },
    {
      id: 3,
      title: "Flashcards",
      value: 0,
      icon: Brain,
    },
    {
      id: 4,
      title: "Study Streak",
      value: "0 days",
      icon: Flame,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex flex-col gap-2">
              <div className="text-indigo-400 mb-2">
                <Icon size={24} strokeWidth={2} />
              </div>
              <p className="text-sm text-slate-400">{stat.title}</p>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
