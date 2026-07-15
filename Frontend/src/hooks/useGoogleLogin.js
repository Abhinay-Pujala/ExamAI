import { loginWithGoogle, logout } from "../services/auth.service";
import { syncUser } from "../services/syncUser";

export default function useGoogleLogin() {
  async function handleGoogleLogin() {
    try {
      const { idToken } = await loginWithGoogle();
      const data = await syncUser(idToken);
      return {
        success: true,
        user: data,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.log("Error during logout", err);
    }
  }
  return { handleGoogleLogin, handleLogout };
}
