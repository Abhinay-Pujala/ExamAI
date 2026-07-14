import { loginWithGoogle, logout } from "../services/auth.service.js";
import useAuth from "../hooks/useAuth.js";
import { syncUser } from "../services/syncUser.js";

export default function Home() {
  async function handleGoogleLogin() {
    try {
      const { idToken } = await loginWithGoogle();

      const data = await syncUser(idToken);
      console.log("Backend response:", data);
    } catch (err) {
      console.error("Error during Google login:", err);
    }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.error("Error during logout:", err);
    }
  }

  const { user, loading } = useAuth(); // This will ensure the AuthContext is used and the user state is updated
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700">
        This is the home page of our application.
      </p>
      {!user && (
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Google
        </button>
      )}

      {user ? (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">User Info:</h2>
          <p className="text-lg">Name: {user.displayName}</p>
          <p className="text-lg">Email: {user.email}</p>
        </div>
      ) : (
        <p className="mt-4 text-lg text-gray-700">No user is logged in.</p>
      )}
      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Logout
        </button>
      )}
    </div>
  );
}
