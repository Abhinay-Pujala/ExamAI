import { Search } from "lucide-react";

const OUTPUT_TYPES = [
  { value: "all", label: "All Types" },
  { value: "notes", label: "Notes" },
  { value: "summary", label: "Summary" },
  { value: "question-paper", label: "Question Paper" },
  { value: "flashcards", label: "Flashcards" },
  { value: "mcqs", label: "MCQs" },
  { value: "mind-map", label: "Mind Map" },
];

export default function FavoritesToolbar({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="w-full sm:w-auto flex flex-col gap-4 rounded-2xl bg-slate-900 border border-slate-800 p-5 md:p-6 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <input
          type="text"
          placeholder="Search favorites..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 pl-11 pr-4 py-3 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Filter */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
      >
        {OUTPUT_TYPES.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
}
