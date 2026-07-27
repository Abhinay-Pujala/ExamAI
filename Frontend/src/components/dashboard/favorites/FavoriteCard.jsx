import { Clock3, Heart } from "lucide-react";

import {
  formatGenerationType,
  formatRelativeTime,
  getGenerationBadgeColor,
} from "../../../utils/history.utils";

export default function FavoriteCard({ favorite, onToggleFavorite }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1 transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md ${getGenerationBadgeColor(
            favorite.outputType,
          )}`}
        >
          <span className="text-sm font-medium">
            {formatGenerationType(favorite.outputType)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <Clock3 size={16} />
            {formatRelativeTime(favorite.createdAt)}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(favorite._id);
            }}
            className="rounded-lg p-2 text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300 cursor-pointer"
          >
            <Heart size={18} className="fill-current" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-indigo-300">
          {favorite.subject}
        </h3>

        <p className="mt-1 line-clamp-2 leading-6 text-slate-400">
          {favorite.topic}
        </p>
      </div>
    </div>
  );
}
