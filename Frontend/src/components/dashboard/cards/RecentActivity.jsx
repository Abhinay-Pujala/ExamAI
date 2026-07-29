import {
  History,
  BookOpen,
  Brain,
  FileQuestion,
  LoaderCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentActivity({ activity, isLoading }) {
  const getActivityIcon = (type) => {
    switch (type) {
      case "notes":
        return BookOpen;
      case "flashcards":
        return Brain;
      case "question-paper":
        return FileQuestion;
      default:
        return History;
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <LoaderCircle
          size={42}
          strokeWidth={2}
          className="text-slate-500 animate-spin"
        />
        <p className="text-white font-medium text-lg mt-4">
          Loading Activity...
        </p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 min-h-80 hover:border-indigo-500/30 transition-all duration-200">
      {/* Heading */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>

        {activity.length > 0 && (
          <Link
            to="/dashboard/history"
            className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:border-indigo-500 hover:text-white"
          >
            View All
          </Link>
        )}
      </div>
      {/* Content Container */}
      {activity.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <History size={42} strokeWidth={2} className="text-slate-500" />
          <p className="text-white font-medium text-lg mt-4">
            Nothing here yet
          </p>
          <p className="text-slate-400 text-sm text-center max-w-sm mt-2">
            Create your first AI Notes or Question Paper to start building your
            study history.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {activity.map((item) => {
            const Icon = getActivityIcon(item.outputType);

            return (
              <div
                key={item._id}
                className="flex items-center justify-between rounded-xl border border-slate-800 p-4 transition hover:border-indigo-500/30"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-800 p-3">
                    <Icon size={22} className="text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="font-medium text-white">{item.subject}</h3>
                    <p className="text-slate-400 text-sm">{item.topic}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm capitalize text-slate-300">
                    {item.outputType.replace("-", " ")}
                  </p>

                  <p className="text-xs text-slate-500">
                    {new Date(item.createdAt).toLocaleDateString("en-In", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
