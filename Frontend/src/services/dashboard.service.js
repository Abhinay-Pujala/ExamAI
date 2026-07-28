export const getDashboardStats = async (user) => {
  if (!user) {
    throw new Error("User not authenticated.");
  }
  const idToken = await user.getIdToken();

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/dashboard/stats`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch dashboard stats");
  }

  return data;
};

export const getRecentActivity = async (user) => {
  if (!user) {
    throw new Error("User not authenticated.");
  }
  const idToken = await user.getIdToken();

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/dashboard/activity`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch recent activity.");
  }

  return data;
};
