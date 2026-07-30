import useAuth from "../../../hooks/useAuth";

export default function AccountInfo({ profile }) {
  const { user } = useAuth();
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
      <h2 className="mb-6 text-lg md:text-xl font-semibold text-white">
        Account Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Full Name</p>
          <p className="mt-2 font-medium text-white">
            {user?.displayName || "Not set"}
          </p>
        </div>

        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-2 font-medium text-white">{profile?.email}</p>
        </div>

        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Bio</p>
          <p className="mt-2 font-medium text-white">
            {profile?.bio || "No bio added yet."}
          </p>
        </div>

        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Authentication</p>
          <p className="mt-2 font-medium text-white">Google</p>
        </div>

        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Status</p>
          <p className="mt-2 font-medium text-green-400">Active</p>
        </div>

        <div className="max-w-xl rounded-xl border border-slate-800 px-6 py-4">
          <p className="text-sm text-slate-400">Joined</p>
          <p className="mt-2 font-medium text-white">
            {profile?.createdAt
              ? new Date(profile.createdAt).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
