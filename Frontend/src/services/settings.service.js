const BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/settings`;

export const getSettings = async (user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch settings");
    }

    return data;
  } catch (err) {
    console.error("Get settings error ", err);
    throw err;
  }
};

export const updateSettings = async (updates, user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(`${BASE_URL}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(updates),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update settings");
    }

    return data;
  } catch (err) {
    console.error("Update settings error ", err);
    throw err;
  }
};
