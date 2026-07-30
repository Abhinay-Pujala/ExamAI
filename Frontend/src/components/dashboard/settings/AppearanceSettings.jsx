import { MoonStar } from "lucide-react";

export default function AppearanceSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Appearance
        </h2>
      </div>

      {/* Theme Card */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-slate-800 p-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-slate-800 p-3">
            <MoonStar className="text-indigo-400" size={22} />
          </div>

          <div>
            <h3 className="font-medium text-white">Dark Theme</h3>

            <p className="text-sm text-slate-400">
              The default appearance of ExamAI.
            </p>
          </div>
        </div>

        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-400">
          Active
        </span>
      </div>
    </section>
  );
}
