import { Heart } from "lucide-react";

export default function FavoritesHeader() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-indigo-500/30 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 fill-red-500 text-red-500" />

            <h1 className="text-3xl font-bold text-white">Favorites</h1>
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
