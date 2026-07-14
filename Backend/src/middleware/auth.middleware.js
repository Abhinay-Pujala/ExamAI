import adminAuth from "../config/firebaseAdmin.js";

async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await adminAuth.verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
}

export default authMiddleware;
