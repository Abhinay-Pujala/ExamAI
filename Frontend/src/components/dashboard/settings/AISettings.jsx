import { Bot } from "lucide-react";

export default function AISettings({ settings, setSettings }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">AI Preferences</h2>
      </div>

      <div className="space-y-6">
        {/* Language */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Default Output Language
          </label>

          <select
            value={settings.outputLanguage}
            onChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                outputLanguage: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>
        </div>

        {/* Note Style */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Default Note Style
          </label>

          <select
            value={settings.noteStyle}
            onChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                noteStyle: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          >
            <option>Detailed</option>
            <option>Concise</option>
            <option>Bullet Points</option>
            <option>Revision Notes</option>
          </select>
        </div>

        {/* AI Model */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            AI Model
          </label>

          <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-3">
            <div className="flex items-center gap-3">
              <Bot size={18} className="text-indigo-400" />
              <span className="text-white">ExamAI Default</span>
            </div>

            <span className="text-sm text-slate-500">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
