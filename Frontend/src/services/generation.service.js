export const getGeneration = async (generationId, user) => {
  try {
    const idToken = await user.getIdToken();
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/generations/${generationId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch generation");
    }

    return data;
  } catch (err) {
    console.error("Fetching Generation failed: ", err);
    throw err;
  }
};
