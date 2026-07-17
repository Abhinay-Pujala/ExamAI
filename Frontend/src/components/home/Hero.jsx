import useGoogleLogin from "../../hooks/useGoogleLogin";
import { useNavigate } from "react-router-dom";
import HeroCard from "../HeroCard";

export default function Hero() {
  const { handleGoogleLogin } = useGoogleLogin();
  const navigate = useNavigate();

  async function onGetStarted() {
    const result = await handleGoogleLogin();
    if (result.success) {
      navigate("/dashboard");
      return;
    }
  }

  return (
    <section className="bg-slate-950 py-20 min-h-screen">
      {/* Main Conatiner */}
      <div className="grid grid-cols-2 items-center gap-12 max-w-7xl mx-auto px-6">
        {/* Left Side */}
        <div>
          <span className="inline-block px-4 py-2 mt-6 mb-6 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
            ✨ AI-Powered Exam Preparation
          </span>
          <h1 className="text-white text-5xl font-extrabold leading-tight">
            Ace Your Exams <br /> with{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            <br />
            Study Materials
          </h1>
          <p className="text-lg text-slate-300 leading-8 max-w-xl mt-6 mb-8">
            Generate exam-ready notes, flashcards, revision sheets, MCQs, mind
            maps, and PDF summaries tailored to your syllabus — all in seconds.
          </p>
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-500 px-10 py-3 text-white font-semibold shadow-lg cursor-pointer hover:from-indigo-500 hover:to-cyan-400 hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-300"
          >
            🚀 Get Started Free
          </button>
        </div>
        {/* Right Side */}
        <div className="relative flex items-center justify-center h-150 w-full">
          <div className="absolute w-75 h-75 rounded-full bg-indigo-600/20 blur-3xl z-10"></div>
          <div className="absolute w-65 h-65 rounded-full bg-cyan-300/15 blur-2xl right-15 bottom-2 z-10"></div>

          <HeroCard
            icon="📝"
            title="AI Notes"
            subtitle="Smart Chapter Notes"
            className="absolute top-2 left-32 w-46 animate-float-1"
          />

          <HeroCard
            icon="🧠"
            title="Mind Maps"
            subtitle="Visual Concept Maps"
            className="absolute top-40 left-0 w-48 animate-float-2"
          />

          <HeroCard
            icon="📄"
            title="PDF Export"
            subtitle="One-Click Download"
            className="absolute top-36 right-2 w-44 animate-float-3"
          />

          <HeroCard
            icon="🎴"
            title="Flashcards"
            subtitle="AI-Powered Revision"
            className="absolute bottom-12 left-8 w-46 animate-float-2"
          />

          <HeroCard
            icon="❓"
            title="Practice MCQs"
            subtitle="Exam-Level Questions"
            className="absolute bottom-4 right-6 w-48 animate-float-1"
          />
        </div>
      </div>
    </section>
  );
}
