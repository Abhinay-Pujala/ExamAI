import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileQuestion,
  Brain,
  History,
  Settings,
  LogOutIcon,
} from "lucide-react";

import useGoogleLogin from "../../../hooks/useGoogleLogin";

export default function Sidebar() {
  const { handleLogout } = useGoogleLogin();

  const navItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      title: "AI Notes",
      icon: BookOpen,
      path: "/dashboard/notes",
    },
    {
      id: 3,
      title: "Question Paper",
      icon: FileQuestion,
      path: "/dashboard/question-paper",
    },
    {
      id: 4,
      title: "Flashcards",
      icon: Brain,
      path: "/dashboard/flashcards",
    },
    {
      id: 5,
      title: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      id: 6,
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="sticky top-0 flex flex-col w-64 h-screen bg-slate-950 border-r border-slate-800">
      {/* Logo Container */}
      <div className="p-6 border-b border-slate-800">
        <Link
          to={"/dashboard"}
          className=" bg-linear-to-r from-indigo-500 to-cyan-400 text-3xl font-extrabold bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200"
        >
          ExamAI
        </Link>
      </div>

      {/* Navigations Container */}
      <div className="flex-1 flex flex-col gap-2 p-6 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                    : "text-slate-300 border-transparent hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} strokeWidth={2} />
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="p-6 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 cursor-pointer"
        >
          <LogOutIcon size={20} strokeWidth={2} />
          Logout
        </button>
      </div>
    </aside>
  );
}
