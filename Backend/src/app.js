import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import generateRoutes from "./routes/generate.routes.js";
import historyRoutes from "./routes/history.routes.js";
import favoriteRoutes from "./routes/favorites.routes.js";
import generationsRoutes from "./routes/generations.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/generate", generateRoutes);

app.use("/api/history", historyRoutes);

app.use("/api/favorites", favoriteRoutes);

app.use("/api/generations", generationsRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/dashboard", dashboardRoutes);

export default app;
