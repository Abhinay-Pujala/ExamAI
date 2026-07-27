import { Heart } from "lucide-react";

export default function EmptyFavorites() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
        <Heart className="h-10 w-10 fill-red-400 text-red-400" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">No favorites yet</h2>

      <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
        Bookmark your favorite AI-generated notes, summaries, flashcards, and
        other study materials to access them quickly anytime.
      </p>
    </div>
  );
}
