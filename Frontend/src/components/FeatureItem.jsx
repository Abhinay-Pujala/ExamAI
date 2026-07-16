export default function FeatureItem({
  icon,
  title,
  description,
  tag,
  tagClassName = "...default styles...",
}) {
  return (
    <div
      className="flex flex-col group rounded-3xl p-8 bg-white/10 backdrop-blur-2xl border border-white/10
     min-h-56 cursor-pointer hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 text-2xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-all duration-300">
        {title}
      </div>
      <div className="text-slate-300 leading-7 text-base mb-4">
        {description}
      </div>
      <div
        className={`inline-flex items-center px-4 py-2 mt-6 rounded-full text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-500/15 group-hover:border-indigo-400/30 ${tagClassName}`}
      >
        {tag}
      </div>
    </div>
  );
}
