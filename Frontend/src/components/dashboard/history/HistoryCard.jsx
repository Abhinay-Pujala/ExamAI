import { Clock3, Trash2 } from "lucide-react";
import {
  formatGenerationType,
  formatRelativeTime,
  getGenerationBadgeColor,
} from "../../../utils/history.utils";

export default function HistoryCard({ historyItem, onDeleteHistory }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1 bg-indigo-500/10 text-indigo-400 group-hover:shadow-md group-hover:shadow-indigo-500/10 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-200 ${getGenerationBadgeColor(historyItem.outputType)}`}
        >
          <span className="text-sm font-medium ">
            {formatGenerationType(historyItem.outputType)}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
          <Clock3 size={16} />
          {formatRelativeTime(historyItem.createdAt)}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDeleteHistory(historyItem._id);
          }}
          className="rounded-lg p-2 text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-indigo-300">
          {historyItem.subject}
        </h3>

        <p className="mt-1 text-slate-400 leading-6 line-clamp-2">
          {historyItem.topic}
        </p>
      </div>
    </div>
  );
}
