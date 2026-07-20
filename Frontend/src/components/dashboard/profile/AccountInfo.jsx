import useAuth from "../../../hooks/useAuth";

export default function AccountInfo() {
  const { user } = useAuth();
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-xl font-semibold text-white mb-6">
        Account Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-slate-800 px-6 py-4 rounded-xl max-w-xl">
          <p className="text-sm text-slate-400">Full Name</p>
          <p className="mt-2 font-medium text-white">{user?.displayName}</p>
        </div>

        <div className="border border-slate-800 px-6 py-4 rounded-xl max-w-xl">
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-2 font-medium text-white">{user?.email}</p>
        </div>

        <div className="border border-slate-800 px-6 py-4 rounded-xl max-w-xl">
          <p className="text-sm text-slate-400">Authentication</p>
          <p className="mt-2 font-medium text-white">Google</p>
        </div>

        <div className="border border-slate-800 px-6 py-4 rounded-xl max-w-xl">
          <p className="text-sm text-slate-400">Status</p>
          <p className="mt-2 font-medium text-green-400">Active</p>
        </div>
      </div>
    </div>
  );
}
