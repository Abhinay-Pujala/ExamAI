import ProfileHeader from "../../components/dashboard/profile/ProfileHeader.jsx";
import ProfileStats from "../../components/dashboard/profile/ProfileStats.jsx";
import AccountInfo from "../../components/dashboard/profile/AccountInfo.jsx";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/profile.service.js";
import { getDashboardStats } from "../../services/dashboard.service.js";
import EditProfileModal from "../../components/dashboard/profile/EditProfileModal.jsx";
import useAuth from "../../hooks/useAuth.js";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const [profileData, statsData] = await Promise.all([
          getProfile(user),
          getDashboardStats(user),
        ]);

        setProfile(profileData.user);
        setStats(statsData.stats);
      } catch (err) {
        console.error("Failed to load profile", err);
        // TODO: Show toast message
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [user]);

  const handleSave = async (updates) => {
    try {
      const data = await updateProfile(user, updates);

      setProfile(data.user);
      setIsEditOpen(false);
    } catch (err) {
      console.error("Failed to update profile.", err);
      throw err;
      // TODO: Show toast message
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-slate-400">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="flex w-full sm:w-fit items-center gap-2 rounded-xl px-5 py-3 bg-indigo-600 font-medium transition hover:bg-indigo-500 cursor-pointer mb-6 md:mb-8"
      >
        <ArrowLeft />
        Back
      </button>
      {/* Profile Sections */}
      <div className=" space-y-6 px-0 md:px-8">
        <ProfileHeader profile={profile} onEdit={() => setIsEditOpen(true)} />

        <ProfileStats stats={stats} />

        <AccountInfo profile={profile} />

        <EditProfileModal
          isOpen={isEditOpen}
          profile={profile}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
