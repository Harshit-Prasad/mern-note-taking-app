import { Router } from "express";
import {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
import { protect } from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", protect, getNotes);
router.post("/create", protect, createNote);
router
  .route("/:id")
  .get(getNote)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

export default router;
