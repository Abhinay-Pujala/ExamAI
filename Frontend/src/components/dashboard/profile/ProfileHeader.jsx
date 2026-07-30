import { Calendar, Pencil } from "lucide-react";

export default function ProfileHeader({ profile, onEdit }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-5">
          <img
            src={profile?.photoURL || "https://ui-avatars.com/api/?name=User"}
            alt={profile?.displayName}
            className="h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-slate-700"
          />

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {profile?.displayName}
            </h1>

            <p className="text-slate-400">{profile?.email}</p>

            <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
              <Calendar size={16} />
              <span>
                Joined{" "}
                {new Date(profile.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onEdit}
          className="flex w-full md:w-auto items-center gap-2 rounded-xl px-5 py-3 bg-indigo-600 font-medium transition hover:bg-indigo-500 cursor-pointer"
        >
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>
    </div>
  );
}
