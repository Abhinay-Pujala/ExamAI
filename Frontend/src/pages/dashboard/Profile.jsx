import ProfileHeader from "../../components/dashboard/profile/ProfileHeader.jsx";
import ProfileStats from "../../components/dashboard/profile/ProfileStats.jsx";
import AccountInfo from "../../components/dashboard/profile/AccountInfo.jsx";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 rounded-xl px-5 py-3 bg-indigo-600 font-medium transition hover:bg-indigo-500 cursor-pointer mb-8"
      >
        <ArrowLeft />
        Back
      </button>
      {/* Profile Sections */}
      <div className=" space-y-6 px-8">
        <ProfileHeader />

        <ProfileStats />

        <AccountInfo />
      </div>
    </div>
  );
}
