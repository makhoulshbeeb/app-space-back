import express from "express";
import {
  registerUser,
  loginUser,
  getUserByUsername,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users/:username", getUserByUsername);

export default router;
