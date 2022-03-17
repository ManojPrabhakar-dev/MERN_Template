import express from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "../middleware/authMiddleware.js";
import {
  getDoc,
  createDoc,
  updateDoc,
  deleteDoc,
} from "../controllers/templateController.js";

const router = express.Router();

router.get("/", verifyToken, getDoc);
router.post("/", verifyToken, createDoc);
router.put("/:id", verifyTokenAndAuthorization, updateDoc);
router.delete("/:id", verifyTokenAndAuthorization, deleteDoc);

export default router;
