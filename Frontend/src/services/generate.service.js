export const generateContent = async (payload, user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Generation Failed.");
    }

    return data;
  } catch (err) {
    console.log("Content generation failed.", err);
    throw err;
  }
};
