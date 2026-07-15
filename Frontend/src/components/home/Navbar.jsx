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
    }
  }

  const navLinks = [
    { id: 1, name: "Features", href: "#features" },
    { id: 2, name: "How It Works", href: "#how-it-works" },
    { id: 3, name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="w-full border-b border-slate-800/80 bg-slate-950 h-16 sticky top-0 z-50 backdrop-blur-2xl">
      <div className="flex h-full items-center justify-between max-w-7xl mx-auto px-6 text-white">
        <div className="flex items-center gap-9">
          <Link
            to="/"
            className="text-2xl font-extrabold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200"
          >
            ExamAI
          </Link>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className="text-gray-300 font-medium hover:text-white hover:underline underline-offset-8 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={onSignIn}
          className="flex items-center gap-2 bg-blue-500 text-white shadow-lg px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/40 transition duration-200 cursor-pointer"
        >
          <FcGoogle />
          Sign in with Google
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
