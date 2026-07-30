import FeatureItem from "../FeatureItem";

export default function Features() {
  return (
    <section className="w-full py-18 bg-slate-950" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center font-extrabold text-3xl md:text-4xl text-white mb-6 max-w-2xl mx-auto">
          Everything You Need <br />
          to Ace Every Exam
        </div>
        <div className="text-center max-w-3xl mx-auto text-slate-300 mb-8">
          Powerful AI tools designed to help you study faster, revise smarter,
          and score higher.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem
            icon="📝"
            title="AI Notes"
            description="Generate chapter-wise notes tailored to your syllabus in seconds with AI-powered summaries."
            tag="✨ AI Powered"
            tagClassName="text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
          />

          <FeatureItem
            icon="🎴"
            title="Smart Flashcards"
            description="Revise efficiently with AI-generated flashcards designed for active recall and long-term memory."
            tag="🧠 Active Recall"
            tagClassName="text-violet-300 bg-violet-500/10 border border-violet-500/20"
          />

          <FeatureItem
            icon="🧠"
            title="Mind Maps"
            description="Visualize complex topics using AI-generated mind maps that connect concepts clearly."
            tag="🎯 Visual Learning"
            tagClassName="text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
          />

          <FeatureItem
            icon="❓"
            title="Practice MCQs"
            description="Practice exam-level multiple-choice questions with instant explanations and feedback."
            tag="📚 Exam Ready"
            tagClassName="text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
          />

          <FeatureItem
            icon="📄"
            title="PDF Export"
            description="Download your notes, flashcards, and study materials as beautifully formatted PDF files."
            tag="⚡ One Click"
            tagClassName="text-amber-300 bg-amber-500/10 border border-amber-500/20"
          />

          <FeatureItem
            icon="📅"
            title="Study Planner"
            description="Create personalized study schedules based on your exam date, syllabus, and available time."
            tag="🚀 Personalized"
            tagClassName="text-pink-300 bg-pink-500/10 border border-pink-500/20"
          />
        </div>
      </div>
    </section>
  );
}
