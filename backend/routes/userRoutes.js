import express from "express";
import { getUsers } from "../controllers/userController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getUsers);

export default router;
