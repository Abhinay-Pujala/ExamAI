import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getDashboardStats,
  getRecentActivity,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/stats", authMiddleware, getDashboardStats);

router.get("/activity", authMiddleware, getRecentActivity);

export default router;
