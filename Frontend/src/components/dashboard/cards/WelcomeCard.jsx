import useAuth from "../../../hooks/useAuth";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WelcomeCard({ profile }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8 hover:border-indigo-500/30 transition-all duration-200">
      {/* Card Content */}
      <div className="space-y-6">
        {/* Greeting */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Welcome back,{" "}
            {profile?.displayName ?? user?.displayName?.split(" ")[0]}! 👋
          </h2>
          <p className="text-sm md:text-base text-slate-400">
            Ready to create notes, practice questions, and ace your exams today?
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate("/dashboard/ai-generator")}
            type="button"
            className="flex w-full sm:w-fit items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            <Sparkles size={18} /> Create Study Material
          </button>
        </div>
      </div>
    </div>
  );
}
