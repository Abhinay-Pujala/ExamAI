import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../config/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);

  const idToken = await result.user.getIdToken();

  return {
    user: result.user,
    idToken,
  };
}

export async function logout() {
  await signOut(auth);
}
