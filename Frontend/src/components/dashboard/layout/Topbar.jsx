import { Bell } from "lucide-react";
import ProfileDropdown from "../dropdown/ProfileDropdown";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur-lg transition-all duration-300">
      {/* Main Container */}
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Side */}
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Heading */}
          <button
            title="Notifications"
            className="p-2 rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Bell size={20} strokeWidth={2} />
          </button>

          {/* Profile Container */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
