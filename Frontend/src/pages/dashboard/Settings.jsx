import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AccountSettings from "../../components/dashboard/settings/AccountSettings.jsx";
import AppearanceSettings from "../../components/dashboard/settings/AppearanceSettings.jsx";
import AISettings from "../../components/dashboard/settings/AISettings.jsx";
import NotificationSettings from "../../components/dashboard/settings/NotificationSettings.jsx";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import {
  getSettings,
  updateSettings,
} from "../../services/settings.service.js";

export default function Settings() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    outputLanguage: "English",
    noteStyle: "Detailed",
    emailNotifications: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    async function loadSettings() {
      try {
        const data = await getSettings(user);
        setSettings(data.settings);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, [user]);

  const handleSave = async () => {
    try {
      setSaving(true);

      const data = await updateSettings(settings, user);

      setSettings(data.settings);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading settings...
      </div>
    );
  }

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
        <AISettings settings={settings} setSettings={setSettings} />
        <NotificationSettings settings={settings} setSettings={setSettings} />

        {/* Save changes button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="cursor-pointer rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
