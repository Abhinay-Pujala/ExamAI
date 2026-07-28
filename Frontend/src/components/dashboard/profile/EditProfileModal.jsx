import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function EditProfileModal({ isOpen, profile, onClose, onSave }) {
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || "");
      setBio(profile.bio || "");
    }
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!displayName.trim()) {
        return;
      }
      setSaving(true);
      const updates = {
        displayName: displayName.trim(),
        bio: bio.trim(),
      };

      if (
        updates.displayName === profile.displayName &&
        updates.bio === (profile.bio || "")
      ) {
        onClose();
        return;
      }

      await onSave(updates);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Edit Profile</h2>

          <button
            onClick={onClose}
            disabled={saving}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Display Name */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Display Name
            </label>

            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              maxLength={50}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
              placeholder="Enter your display name"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Bio</label>

            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={300}
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
              placeholder="Tell us something about yourself..."
            />

            <p className="mt-2 text-right text-xs text-slate-500">
              {bio.length}/300
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="rounded-xl border border-slate-700 px-5 py-2.5 text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
