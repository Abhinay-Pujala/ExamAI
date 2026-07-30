import { History, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmptyHistory() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center rounded-2xl p-6 md:p-10 bg-slate-900 border border-slate-800 min-h-112.5">
      <div className="flex flex-col items-center max-w-md">
        <div className="flex items-center justify-center w-20 h-20 bg-indigo-500/10 rounded-full">
          <History size={38} className="text-indigo-400" />
        </div>

        <h1 className="text-white font-bold text-xl md:text-2xl mt-6">
          No History Yet
        </h1>
        <p className="text-slate-400 mt-3 leading-7 text-center">
          Your AI-generated notes, flashcards, summaries, and question papers
          will appear here after generation.
        </p>
        <button
          onClick={() => navigate("/dashboard/ai-generator")}
          className="flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium mt-5 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20  transition-all duration-200 cursor-pointer"
        >
          <Sparkles size={18} />
          Generate with AI
        </button>
      </div>
    </div>
  );
}
