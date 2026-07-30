import { Heart } from "lucide-react";

export default function FavoritesHeader() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-6 hover:border-indigo-500/30 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3">
            <Heart className="h-7 w-7 md:h-8 md:w-8 fill-red-500 text-red-500 shrink-0" />

            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Favorites
            </h1>
          </div>

          <p className="mt-2 text-slate-400">
            Quickly access your bookmarked AI-generated study materials.
          </p>
        </div>

        <div className="hidden lg:flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
          <Heart className="fill-red-400 text-red-400" size={28} />
        </div>
      </div>
    </div>
  );
}
