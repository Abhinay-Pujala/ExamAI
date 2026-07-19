import { History } from "lucide-react";

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 min-h-80 hover:border-indigo-500/30 transition-all duration-200">
      {/* Heading */}
      <h2 className="text-lg text-white font-semibold mb-4">Recent Activity</h2>
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center py-12">
        <History size={42} strokeWidth={2} className="text-slate-500" />
        <p className="text-white font-medium text-lg mt-4">Nothing here yet</p>
        <p className="text-slate-400 text-sm text-center max-w-sm mt-2">
          Create your first AI Notes or Question Paper to start building your
          study history.
        </p>
      </div>
    </div>
  );
}
