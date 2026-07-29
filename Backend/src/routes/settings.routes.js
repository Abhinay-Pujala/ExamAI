import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getSettings,
  updateSettings,
} from "../controllers/settings.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getSettings);

router.patch("/", authMiddleware, updateSettings);

export default router;
