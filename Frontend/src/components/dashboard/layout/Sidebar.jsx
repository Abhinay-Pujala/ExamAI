import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Heart,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import useGoogleLogin from "../../../hooks/useGoogleLogin";

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
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
      title: "AI Generator",
      icon: BookOpen,
      path: "/dashboard/ai-generator",
    },
    {
      id: 3,
      title: "Favorites",
      icon: Heart,
      path: "/dashboard/favorites",
    },
    {
      id: 4,
      title: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      id: 5,
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside
      className={`fixed lg:sticky top-0 left-0 flex flex-col z-50 h-screen bg-slate-950 border-r border-slate-800 transition-all duration-300 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } ${collapsed ? "lg:w-20" : "lg:w-64"} w-64`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-800 flex items-center justify-center">
        <Link
          onClick={() => setMobileOpen(false)}
          to="/dashboard"
          className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent text-3xl font-extrabold"
        >
          {collapsed ? "EA" : "ExamAI"}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col gap-2 p-4 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              onClick={() => setMobileOpen(false)}
              key={item.id}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center rounded-xl border transition-all duration-200 ${
                  collapsed ? "justify-center px-3 py-3" : "gap-3 px-4 py-3"
                } ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                    : "text-slate-300 border-transparent hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className={`w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 cursor-pointer ${
            collapsed
              ? "flex justify-center p-3"
              : "flex items-center gap-3 px-4 py-3"
          }`}
        >
          <LogOut size={20} />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
