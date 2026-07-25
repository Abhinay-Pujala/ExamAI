import adminAuth from "../config/firebaseAdmin.js";
import User from "../models/user.model.js";

async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await adminAuth.verifyIdToken(token);

    const user = await User.findOne({
      firebaseUid: decoded.uid,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default authMiddleware;
