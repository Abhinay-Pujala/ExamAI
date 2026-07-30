import StatItem from "../StatItem";

export default function Stats() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-3xl md:text-4xl text-white font-semibold text-center pb-3">
          Trusted by Students
        </div>
        <div className=" text-slate-300 text-center pb-2">
          Thousands of learners use ExamAI to study smarter and faster.
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-8">
          <StatItem value="5" label="Study Formats" />
          <StatItem value="AI" label="Powered" />
          <StatItem value="PDF" label="Export Ready" />
          <StatItem value="24/7" label="Available" />
        </div>
      </div>
    </section>
  );
}
