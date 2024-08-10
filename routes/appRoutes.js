import express from "express";
import { createApp, getApp, getAllApps } from "../controllers/appController.js";

const router = express.Router();

router.get("/app/:id", getApp);
router.get("/app", getAllApps);
router.post("/app", createApp);
export default router;
