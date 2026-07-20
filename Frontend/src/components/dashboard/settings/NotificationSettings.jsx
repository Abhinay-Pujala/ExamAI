import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationSettings() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Notifications</h2>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-slate-800 p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-slate-800 p-3">
            <Bell className="text-indigo-400" size={22} />
          </div>

          <div>
            <h3 className="font-medium text-white">Email Notifications</h3>

            <p className="mt-1 text-sm text-slate-400">
              Receive updates about new features, announcements and
              improvements.
            </p>
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative h-7 w-12 rounded-full transition cursor-pointer ${
            enabled ? "bg-indigo-600" : "bg-slate-700"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              enabled ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
