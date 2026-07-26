export const getHistory = async (user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/history`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch history");
    }

    return data;
  } catch (err) {
    console.error("Fetching History failed.", err);
    throw err;
  }
};

export const clearHistory = async (user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/history`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "History deletion failed");
    }

    return data;
  } catch (err) {
    console.error("Clearing History failed.", err);
    throw err;
  }
};

export const deleteHistoryItem = async (historyId, user) => {
  try {
    const idToken = await user.getIdToken();

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/history/${historyId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete history item.");
    }

    return data;
  } catch (err) {
    console.error("Deleting history item failed: ", err);
    throw err;
  }
};
