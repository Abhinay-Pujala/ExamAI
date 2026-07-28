import { BookOpen, FileText, Layers } from "lucide-react";

export default function ProfileStats({ stats }) {
  const cards = [
    {
      title: "Notes Generated",
      value: stats?.notes ?? 0,
      icon: BookOpen,
    },
    {
      title: "Question Papers",
      value: stats?.questionPapers ?? 0,
      icon: FileText,
    },
    {
      title: "Flashcards",
      value: stats?.flashcards ?? 0,
      icon: Layers,
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-indigo-500/30 transition duration-300"
        >
          <div className="mb-4 flex justify-between">
            <stat.icon className="text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
          <p className="mt-2 text-slate-400">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
