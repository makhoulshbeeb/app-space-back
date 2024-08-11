import express from "express";
import {
  registerUser,
  loginUser,
  getUserByName,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/:username", getUserByName);

export default router;
