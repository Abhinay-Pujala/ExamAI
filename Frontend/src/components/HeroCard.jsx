export default function FeatureCard({ icon, title, subtitle, className = "" }) {
  return (
    <div
      className={`w-42 min-h-28 p-4 z-10 rounded-2xl bg-white/5 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 text-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/20 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden group ${className}`}
    >
      <div className="flex items-center justify-center text-xl w-9 h-9 rounded-xl bg-white/5 border border-white/10 font-semibold group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-400/30 transition-all duration-300">
        {icon}
      </div>
      <div className="mt-2 text-base font-semibold tracking-tight">{title}</div>
      <div className="mt-1 text-sm text-slate-300">{subtitle}</div>
    </div>
  );
}
