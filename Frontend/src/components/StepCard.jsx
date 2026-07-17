export default function StepCard({ number, icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/20 cursor-pointer">
      {/* Step Number */}
      <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-slate-950 text-sm font-bold text-violet-400 shadow-lg shadow-violet-500/20">
        {String(number).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="mt-8">
        {/* Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="text-base leading-7 text-slate-400">{description}</p>
      </div>
    </div>
  );
}
