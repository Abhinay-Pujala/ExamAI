import { ArrowLeft, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  formatGenerationType,
  formatRelativeTime,
  getGenerationBadgeColor,
} from "../../utils/history.utils.js";

export default function GenerationHeader({ generation }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-6">
      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getGenerationBadgeColor(generation.outputType)}`}
        >
          {formatGenerationType(generation.outputType)}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          {generation.subject}
        </h1>

        <p className="text-base md:text-lg text-slate-400">
          {generation.topic}
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-5 pt-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {formatRelativeTime(generation.createdAt)}
          </div>

          <span className="hidden sm:inline">•</span>

          <span>{generation.educationLevel}</span>
        </div>
      </div>
    </div>
  );
}
