import { Bell, ChevronDown } from "lucide-react";
import useAuth from "../../../hooks/useAuth";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950">
      {/* Main Container */}
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Side */}
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Heading */}
          <button className="p-2 rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer">
            <Bell size={20} strokeWidth={2} />
          </button>

          {/* Profile Container */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
            <img
              src={user?.photoURL}
              alt={user.displayName}
              className="w-9 h-9 rounded-full object-cover border border-slate-700"
            />
            <span className="text-sm font-medium text-white">
              {user?.displayName}
            </span>
            <ChevronDown size={18} className="text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
