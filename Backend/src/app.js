import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import generateRoutes from "./routes/generate.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/generate", generateRoutes);

export default app;
