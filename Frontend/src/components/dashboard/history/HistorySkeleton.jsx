export default function HistorySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5 animate-pulse"
        >
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-5 w-24 rounded bg-slate-800" />
              <div className="h-4 w-48 rounded bg-slate-800" />
              <div className="h-3 w-12 rounded bg-slate-800" />
            </div>

            <div className="flex gap-2">
              <div className="h-9 w-9 rounded-lg bg-slate-800" />
              <div className="h-9 w-9 rounded-lg bg-slate-800" />
              <div className="h-9 w-9 rounded-lg bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
