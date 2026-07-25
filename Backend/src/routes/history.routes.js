import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  clearHistory,
  deleteHistoryById,
  getHistory,
  getHistoryById,
} from "../controllers/history.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getHistory);
router.get("/:id", authMiddleware, getHistoryById);

router.delete("/:id", authMiddleware, deleteHistoryById);
router.delete("/", authMiddleware, clearHistory);

export default router;
