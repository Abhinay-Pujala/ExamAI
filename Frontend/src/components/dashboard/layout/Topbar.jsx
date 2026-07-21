import { Bell, PanelLeftClose, PanelLeftOpen } from "lucide-react";

import ProfileDropdown from "../dropdown/ProfileDropdown";

export default function Topbar({ title, collapsed, setCollapsed }) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur-lg">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>

          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            title="Notifications"
            className="p-2 rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Bell size={20} />
          </button>

          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
