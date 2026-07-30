import useGoogleLogin from "../../hooks/useGoogleLogin.js";
// import useAuth from "../../hooks/useAuth.js";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

function Navbar() {
  // const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { handleGoogleLogin } = useGoogleLogin();

  async function onSignIn() {
    const result = await handleGoogleLogin();
    if (result.success) {
      navigate("/dashboard");
      return;
    }
  }

  const navLinks = [
    { id: 1, name: "Features", href: "#features" },
    { id: 2, name: "How It Works", href: "#how-it-works" },
    { id: 3, name: "About", href: "#footer" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-16 w-full border-b border-slate-800/80 bg-slate-950 backdrop-blur-2xl">
      <div className="flex h-full items-center justify-between max-w-7xl mx-auto px-6 text-white">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200"
          >
            ExamAI
          </Link>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-300 font-medium hover:text-white hover:underline underline-offset-8 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
        <button
          onClick={onSignIn}
          className="flex items-center gap-2 bg-blue-500 text-white shadow-lg px-4 md:px-6 py-2 text-sm md:text-base rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/40 transition duration-200 cursor-pointer"
        >
          <FcGoogle />
          <span className="hidden sm:inline">Sign in with Google</span>
          <span className="sm:hidden">Sign In</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
