import { BookOpen, GitBranchIcon, LucideLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-2 text-violet-400">
                <BookOpen size={24} />
              </div>

              <h2 className="text-2xl font-bold text-white">ExamAI</h2>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              AI-powered exam preparation platform that transforms your syllabus
              into smart notes, quizzes and mock tests, helping students study
              faster and score better.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Abhinay-Pujala"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                <GitBranchIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhinaypujala/"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                <LucideLink size={20} />
              </a>

              <a
                href="mailto:abhinay200711@gmail.com?subject=Exam%20AI"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-violet-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-violet-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-violet-400">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#cta" className="hover:text-violet-400">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">Legal</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-violet-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} ExamAI. Built with ❤️ by Abhinay
            Pujala.
          </p>
        </div>
      </div>
    </footer>
  );
}
