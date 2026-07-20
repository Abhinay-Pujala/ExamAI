import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AccountSettings from "../../components/dashboard/settings/AccountSettings.jsx";
import AppearanceSettings from "../../components/dashboard/settings/AppearanceSettings.jsx";
import AISettings from "../../components/dashboard/settings/AISettings.jsx";
import NotificationSettings from "../../components/dashboard/settings/NotificationSettings.jsx";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium transition hover:bg-indigo-500 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-3xl font-bold text-white">Settings</h1>
      </div>

      <div className="space-y-6">
        <AccountSettings />
        <AppearanceSettings />
        <AISettings />
        <NotificationSettings />
      </div>
    </div>
  );
}
