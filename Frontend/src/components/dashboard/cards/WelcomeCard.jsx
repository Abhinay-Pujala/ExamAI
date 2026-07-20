import useAuth from "../../../hooks/useAuth";
import { Sparkles } from "lucide-react";

export default function WelcomeCard() {
  const { user } = useAuth();
  return (
    <div className="max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-indigo-500/30 transition-all duration-200S">
      {/* Card Content */}
      <div className="space-y-6">
        {/* Greeting */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">
            Welcome back, {user?.displayName?.split(" ")[0]}! 👋
          </h2>
          <p className="text-slate-400">
            Ready to create notes, practice questions, and ace your exams today?
          </p>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            <Sparkles size={18} /> Create Study Material
          </button>
        </div>
      </div>
    </div>
  );
}
