import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { generateStudyMaterial } from "../controllers/generate.controller.js";

const router = express.Router();

router.post("/", authMiddleware, generateStudyMaterial);

export default router;
