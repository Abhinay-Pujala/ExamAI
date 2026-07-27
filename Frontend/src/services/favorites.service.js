export const getFavorites = async (user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/favorites`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Fetching favorites failed.");
    }

    return data;
  } catch (err) {
    console.error("Fetching favorites failed: ", err);
    throw err;
  }
};

export const toggleFavorite = async (generationId, user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/favorites/${generationId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update favorite");
    }

    return data;
  } catch (err) {
    console.error("Favorite update failed: ", err);
    throw err;
  }
};
