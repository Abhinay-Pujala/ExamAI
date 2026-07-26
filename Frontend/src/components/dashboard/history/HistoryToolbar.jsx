import { Search, Filter, Trash2 } from "lucide-react";

export default function HistoryToolbar({
  history,
  onClearHistory,
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-200">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          {/* Search Container */}
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by subject or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 pr-4 py-3 pl-11 text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-indigo-500"
            />
          </div>
          {/* Filter Container */}
          <div className="relative">
            <Filter
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"
            />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              name="filter-select"
              id="filters"
              className="min-w-48 rounded-xl border border-slate-700 bg-slate-800 pr-4 py-3 pl-11 text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="notes">Notes</option>
              <option value="summary">Summary</option>
              <option value="flashcards">Flash Cards</option>
              <option value="mcqs">MCQs</option>
              <option value="question-paper">Question Paper</option>
              <option value="mind-map">Mind Map</option>
            </select>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <button
            onClick={onClearHistory}
            disabled={history.length === 0}
            className={`flex items-center gap-2 px-4 py-3 w-full rounded-xl text-slate-500  transition-all duration-200 ${
              history.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-500/10 hover:text-red-300 cursor-pointer"
            }`}
          >
            <Trash2 /> Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
