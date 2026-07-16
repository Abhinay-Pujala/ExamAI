export default function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center w-48">
      <div className="text-5xl font-extrabold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent tracking-tight leading-none">
        {value}
      </div>
      <div className="mt-4 text-slate-400 text-sm font-medium">{label}</div>
    </div>
  );
}
