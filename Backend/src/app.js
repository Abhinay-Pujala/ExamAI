import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import generateRoutes from "./routes/generate.routes.js";
import historyRoutes from "./routes/history.routes.js";
import favoriteRoutes from "./routes/favorites.routes.js";
import generationsRoutes from "./routes/generations.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import settingsRoutes from "./routes/settings.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import {
  apiLimiter,
  authLimiter,
  generateLimiter,
} from "./middleware/rateLimit.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/auth", authLimiter, authRoutes);

app.use("/api/generate", generateLimiter, generateRoutes);

app.use("/api/history", apiLimiter, historyRoutes);

app.use("/api/favorites", apiLimiter, favoriteRoutes);

app.use("/api/generations", apiLimiter, generationsRoutes);

app.use("/api/profile", apiLimiter, profileRoutes);

app.use("/api/settings", apiLimiter, settingsRoutes);

app.use("/api/dashboard", apiLimiter, dashboardRoutes);

export default app;
