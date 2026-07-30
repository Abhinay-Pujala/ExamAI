import { ArrowRight, Sparkles } from "lucide-react";
import useGoogleLogin from "../../hooks/useGoogleLogin.js";
import { useNavigate } from "react-router-dom";

export default function CTA() {
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
    <section className="bg-slate-950 py-20" id="cta">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-16 text-center shadow-2xl shadow-violet-500/20 lg:px-16">
          {/* Background Blur */}
          <div className="absolute -top-16 -left-16 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles size={16} />
              Start Learning Smarter
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Ace Your Next Exam?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Generate AI-powered notes, quizzes and mock tests in seconds.
              Spend less time preparing and more time scoring better.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                aria-label="Sign In with Google"
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                Get Started Free
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
