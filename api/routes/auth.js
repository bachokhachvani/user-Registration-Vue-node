import express from "express";
import { signin, signup, getUser } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.get("/me", verifyToken, getUser);

export default router;
