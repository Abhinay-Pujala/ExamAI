import express from "express";
import verifyFirebaseToken from "../middleware/verify.middleware.js";
import { syncUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sync", verifyFirebaseToken, syncUser);

export default router;
