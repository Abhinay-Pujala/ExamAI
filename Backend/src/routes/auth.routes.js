import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { syncUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sync", authMiddleware, syncUser);

export default router;
