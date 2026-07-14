import findOrCreateUser from "../services/user.service.js";

export async function syncUser(req, res) {
  try {
    const decoded = req.user;
    const user = await findOrCreateUser(decoded);
    return res
      .status(200)
      .json({ message: "User logged in successfully", user });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Failed to login user" });
  }
}
