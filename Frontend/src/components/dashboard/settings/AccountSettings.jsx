import { LogOut, Mail, ShieldCheck, User } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useGoogleLogin from "../../../hooks/useGoogleLogin";

export default function AccountSettings() {
  const { user } = useAuth();
  const { handleLogout } = useGoogleLogin();

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Account
        </h2>
      </div>

      {/* Profile */}
      <div className="mb-8 flex flex-col items-center text-center gap-6 md:flex-row md:items-center md:text-left">
        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-slate-700 object-cover"
        />

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {user?.displayName}
          </h3>

          <p className="mt-1 text-slate-400">{user?.email}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 p-5">
          <div className="mb-3 flex items-center gap-2 text-slate-400">
            <User size={18} />
            <span>Display Name</span>
          </div>

          <p className="font-medium text-white">{user?.displayName}</p>
        </div>

        <div className="rounded-xl border border-slate-800 p-5">
          <div className="mb-3 flex items-center gap-2 text-slate-400">
            <Mail size={18} />
            <span>Email</span>
          </div>

          <p className="font-medium text-white">{user?.email}</p>
        </div>

        <div className="rounded-xl border border-slate-800 p-5 md:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-slate-400">
            <ShieldCheck size={18} />
            <span>Authentication Provider</span>
          </div>

          <p className="font-medium text-white">
            {user.providerData[0].providerId === "google.com" ? "Google" : ""}
          </p>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-8 border-t border-slate-800 pt-6">
        <button
          onClick={handleLogout}
          className="flex w-full sm:w-fit items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500 cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </section>
  );
}
