import { History } from "lucide-react";

export default function HistoryHeader() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-3xl">Generation History</h1>
          <p className="text-slate-400 mt-2">
            View, manage, and revisit your AI-generated study materials.
          </p>
        </div>
        <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">
          <History className="text-indigo-400" size={28} />
        </div>
      </div>
    </div>
  );
}
