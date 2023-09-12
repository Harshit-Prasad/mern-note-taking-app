import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/authentication.middleware.js";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/profile", protect, updateUserProfile);

export default router;
