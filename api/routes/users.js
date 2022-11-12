import express from "express";
import User from "../models/User.js";
import { updateUser } from "../controllers/users.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.put("/:userId", verifyUser, updateUser);

export default router;
