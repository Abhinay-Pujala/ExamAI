export const getProfile = async (user) => {
  if (!user) {
    throw new Error("User not authenticated.");
  }
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to Fetch profile.");
    }

    return data;
  } catch (err) {
    console.error("Get profile error:", err);
    throw err;
  }
};

export const updateProfile = async (user, updates) => {
  if (!user) {
    throw new Error("User not authenticated.");
  }
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(updates),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update profile.");
    }

    return data;
  } catch (err) {
    console.error("Update profile error:", err);
    throw err;
  }
};
