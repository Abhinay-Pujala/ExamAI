export async function syncUser(idToken) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/sync`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error("Failed to sync user");
  }
  return await response.json();
}
