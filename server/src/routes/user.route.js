import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export default router;
