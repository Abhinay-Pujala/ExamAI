import { Heart, Copy, Download } from "lucide-react";

export default function GenerationActions({
  isFavorite,
  onToggleFavorite,
  onCopy,
  onDownload,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3">
        {/* Favorite */}
        <button
          onClick={onToggleFavorite}
          className={`flex w-full sm:w-auto cursor-pointer items-center gap-2 rounded-xl px-4 py-2 transition-colors ${
            isFavorite
              ? "bg-red-500/10 text-red-400 hover:bg-red-500/20"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          <Heart size={18} className={isFavorite ? "fill-current" : ""} />
          {isFavorite ? "Favorited" : "Add to Favorites"}
        </button>

        {/* Copy */}
        <button
          onClick={onCopy}
          className="flex w-full sm:w-auto cursor-pointer items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-slate-300 transition-colors hover:bg-slate-700"
        >
          <Copy size={18} />
          Copy
        </button>

        {/* Download */}
        <button
          onClick={onDownload}
          className="flex w-full sm:w-auto cursor-pointer items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-slate-300 transition-colors hover:bg-slate-700"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>
    </div>
  );
}
