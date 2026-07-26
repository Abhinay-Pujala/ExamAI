import { Skull } from "lucide-react";

export default function NoResults() {
  return (
    <div className="flex items-center justify-center rounded-2xl p-10 bg-slate-900 border border-slate-800 min-h-112.5">
      <div className="flex flex-col items-center max-w-md">
        <div className="flex items-center justify-center w-20 h-20 bg-indigo-500/10 rounded-full">
          <Skull size={38} className="text-indigo-400" />
        </div>

        <h1 className="text-white font-bold text-2xl mt-6">
          No Matching Results
        </h1>
        <p className="text-slate-400 mt-3 leading-7 text-center">
          Try another search or change the filter.
        </p>
      </div>
    </div>
  );
}
