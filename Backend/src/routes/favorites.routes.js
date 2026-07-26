import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getFavorites,
  toggleFavorite,
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getFavorites);

router.patch("/:generationId", authMiddleware, toggleFavorite);

export default router;
