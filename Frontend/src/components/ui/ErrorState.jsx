import { AlertTriangle } from "lucide-react";

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load your data. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-slate-900 p-8 text-center">
      <div className="mb-4 rounded-full bg-red-500/10 p-4">
        <AlertTriangle className="h-10 w-10 text-red-400" />
      </div>

      <h2 className="text-xl font-semibold text-white">{title}</h2>

      <p className="mt-2 max-w-md text-slate-400">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-500"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
