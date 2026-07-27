import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getGeneration } from "../controllers/generation.controller.js";

const router = express.Router();

router.get("/:id", authMiddleware, getGeneration);

export default router;
