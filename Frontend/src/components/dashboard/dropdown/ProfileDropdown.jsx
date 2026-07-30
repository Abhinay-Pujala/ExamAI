import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const { user } = useAuth();
  const { handleLogout } = useGoogleLogin();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Button Containing whole profile */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 px-2 lg:px-3 py-2 rounded-xl hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
      >
        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="w-9 h-9 rounded-full object-cover border border-slate-700"
        />

        <span className="hidden lg:block text-sm font-medium text-white">
          {user?.displayName?.split(" ")[0]}
        </span>

        <ChevronDown
          size={18}
          className={`hidden lg:block text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 top-14 w-56 lg:w-64 rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-xl z-50 ">
          {/* User Details */}
          <div className="px-3 py-3 border-b border-slate-800">
            <p className="font-medium text-white">{user?.displayName}</p>

            <p className="text-sm text-slate-400 truncate">{user?.email}</p>
          </div>

          {/* Profile and Settings Buttons */}
          <div className="mt-2 space-y-1">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/dashboard/profile");
              }}
              title="Account"
              className="flex items-center justify-start gap-3 w-full px-3 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <User size={18} />
              My Profile
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/dashboard/settings");
              }}
              title="settings"
              className="flex items-center justify-start gap-3 w-full px-3 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Settings size={18} />
              Settings
            </button>
          </div>

          <div className="my-2 border-t border-slate-800"></div>

          {/* Logout Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors duration-200 cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
